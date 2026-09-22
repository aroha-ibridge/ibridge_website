/** Practical email check: local@domain.tld */
const EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

/**
 * Normalize phone to digits only, then accept:
 * - Indian mobile: 10 digits starting 6–9
 * - With country code: 91 + 10-digit mobile
 * - With trunk 0: 0 + 10-digit mobile
 * - Other international: 10–15 digits when value includes a leading +
 */
export function validateEmail(email) {
  const value = String(email ?? '').trim();
  if (!value) return 'Please enter your email address.';
  if (value.length > 254 || !EMAIL_PATTERN.test(value)) {
    return 'Please enter a valid email address (e.g. name@example.com).';
  }
  return '';
}

export function validatePhone(phone) {
  const value = String(phone ?? '').trim();
  if (!value) return 'Please enter your phone number.';

  if (!/^[+\d][\d\s().-]*$/.test(value)) {
    return 'Phone number can only include digits and + ( ) - .';
  }

  const digits = value.replace(/\D/g, '');
  const hasPlus = value.trim().startsWith('+');

  if (/^[6-9]\d{9}$/.test(digits)) return '';
  if (/^91[6-9]\d{9}$/.test(digits)) return '';
  if (/^0[6-9]\d{9}$/.test(digits)) return '';

  if (hasPlus && digits.length >= 10 && digits.length <= 15) return '';

  return 'Please enter a valid 10-digit mobile number (e.g. 9876543210 or +91 9876543210).';
}

export function isValidEmail(email) {
  return validateEmail(email) === '';
}

export function isValidPhone(phone) {
  return validatePhone(phone) === '';
}
