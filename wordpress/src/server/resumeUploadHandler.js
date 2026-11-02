import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const RESUME_MAX_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx'];

const MIME_MAP = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};

function sanitizeName(value, fallback = 'applicant') {
  return (
    String(value || '')
      .normalize('NFKD')
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || fallback
  );
}

export async function handleResumeUpload(body = {}) {
  const { fileName, fileData, applicantName, roleTitle } = body;

  if (!fileData) {
    return { status: 400, json: { ok: false, error: 'File data is required' } };
  }

  // Parse base64 string
  let base64String = fileData;
  if (base64String.includes(',')) {
    base64String = base64String.split(',')[1];
  }

  const buffer = Buffer.from(base64String, 'base64');
  if (buffer.length === 0) {
    return { status: 400, json: { ok: false, error: 'Invalid or empty file data' } };
  }

  if (buffer.length > RESUME_MAX_BYTES) {
    return { status: 400, json: { ok: false, error: 'Resume must be 10 MB or smaller' } };
  }

  const rawExt = String(fileName || '').split('.').pop()?.toLowerCase() || 'pdf';
  const extension = ALLOWED_EXTENSIONS.includes(rawExt) ? rawExt : 'pdf';
  const contentType = MIME_MAP[extension] || 'application/pdf';

  const safeApplicant = sanitizeName(applicantName, 'candidate');
  const safeRole = sanitizeName(roleTitle, 'role');
  const timestamp = Date.now();
  const sanitizedFilename = `${safeApplicant}-${safeRole}-${timestamp}-resume.${extension}`;

  const bucket = process.env.AWS_S3_BUCKET || 'ibridge';
  const region = process.env.AWS_REGION || 'us-east-2';
  const folderPrefix = process.env.AWS_S3_RESUME_FOLDER || 'New_Programs/CarrierPageResumes/';
  const normalizedPrefix = folderPrefix.endsWith('/') ? folderPrefix : `${folderPrefix}/`;
  const s3Key = `${normalizedPrefix}${sanitizedFilename}`;

  const accessKeyId = process.env.AWS_ACCESS_KEY_ID || process.env.Access_KeyId;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || process.env.Secret_Access_Key;

  if (!accessKeyId || !secretAccessKey) {
    console.error('[resume-upload] AWS credentials missing in environment variables');
    return { status: 500, json: { ok: false, error: 'AWS S3 is not configured' } };
  }

  const s3Client = new S3Client({
    region,
    credentials: { accessKeyId, secretAccessKey },
  });

  try {
    const putCommand = new PutObjectCommand({
      Bucket: bucket,
      Key: s3Key,
      Body: buffer,
      ContentType: contentType,
      ACL: 'public-read',
    });

    await s3Client.send(putCommand);

    const publicUrl = `https://${bucket}.s3.${region}.amazonaws.com/${s3Key}`;
    return {
      status: 200,
      json: {
        ok: true,
        url: publicUrl,
        key: s3Key,
        fileName: sanitizedFilename,
      },
    };
  } catch (err) {
    console.error('[resume-upload] S3 upload error:', err);
    return {
      status: 500,
      json: { ok: false, error: err.message || 'Failed to upload resume to S3' },
    };
  }
}
