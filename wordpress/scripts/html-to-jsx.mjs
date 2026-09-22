import fs from 'fs';
import path from 'path';

const LINK_MAP = {
  'index.html': '/',
  'about-us/index.html': '/about-us',
  'programs/index.html': '/programs',
  'corporate/index.html': '/corporate',
  'corporate-elp/index.html': '/corporate-elp',
  'corporate-corporate-training-programs/index.html': '/corporate-corporate-training-programs',
  'corporate-content-creation/index.html': '/corporate-content-creation',
  'individual-learner/index.html': '/individual-learner',
  'institution/index.html': '/institution',
  'blogs/index.html': '/blogs',
  'testimonials/index.html': '/testimonials',
  'contact-us/index.html': '/contact-us',
  'terms-conditions/index.html': '/terms-conditions',
  'privacy-policy/index.html': '/privacy-policy',
  'data-engineering-program/index.html': '/courses/data-engineering',
  'institution-expert-talks/index.html': '/institution-expert-talks',
  'institution-epbl/index.html': '/institution-epbl',
  'institution-faculty-development-program/index.html': '/institution-faculty-development-program',
  'institution-soft-skills-for-college-students/index.html': '/institution-soft-skills-for-college-students',
  'institution-content-creation/index.html': '/institution-content-creation',
  'institution-online-offline-programs/index.html': '/institution-online-offline-programs',
  'institution-it-and-non-it-programs-for-institutions/index.html': '/institution-it-and-non-it-programs-for-institutions',
  'institution-self-transformation-sessions-for-students-and-faculty/index.html': '/institution-self-transformation-sessions-for-students-and-faculty',
  'institution-weekly-and-monthly-programs/index.html': '/institution-weekly-and-monthly-programs',
  'institution-experiential-learning-platform/index.html': '/institution-experiential-learning-platform',
  'turning-pharma-reports-into-real-time-insights/index.html': '/turning-pharma-reports-into-real-time-insights',
  'the-power-of-communication-why-college-students-must-master-it/index.html': '/the-power-of-communication-why-college-students-must-master-it',
  'from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan/index.html': '/from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan',
  'sql-queries-on-pandas-dataframe/index.html': '/sql-queries-on-pandas-dataframe',
  'advantages-of-data-visualization-tools/index.html': '/advantages-of-data-visualization-tools',
  'when-you-offer-visualization-analysis/index.html': '/when-you-offer-visualization-analysis',
  'making-every-graduate-employable/index.html': '/making-every-graduate-employable',
  'why-is-data-engineering-a-promising-career-choice/index.html': '/why-is-data-engineering-a-promising-career-choice',
  'ways-of-calculating-roi-from-bidw-implementations/index.html': '/ways-of-calculating-roi-from-bidw-implementations',
  'implementation-of-analytics-in-stages/index.html': '/implementation-of-analytics-in-stages',
};

const VOID_ELEMENTS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

function convertLazyImages(html) {
  let output = html
    .replace(
      /data-src="https?:\/\/ibridge360\.com\/wp-content\/uploads\/([^"]+)"/gi,
      'src="/wp-content/uploads/$1" loading="lazy"',
    )
    .replace(
      /data-src="wp-content\/uploads\/([^"]+)"/gi,
      'src="/wp-content/uploads/$1" loading="lazy"',
    );

  // Swiper lazy-load expects data-src; with src set directly, drop lazy classes.
  output = output.replace(/<div class="swiper-lazy-preloader"><\/div>/gi, '');
  output = output.replace(/\bswiper-lazy\b/g, 'swiper-lazy-loaded');

  return output;
}

function fixAssetPaths(html) {
  return html
    .replace(/src="\.\.\/wp-content\//g, 'src="/wp-content/')
    .replace(/href="\.\.\/wp-content\//g, 'href="/wp-content/')
    .replace(/src="wp-content\//g, 'src="/wp-content/')
    .replace(/href='wp-content\//g, "href='/wp-content/")
    .replace(/href="wp-content\//g, 'href="/wp-content/')
    .replace(/url\("wp-content\//g, 'url("/wp-content/')
    .replace(/url\('wp-content\//g, "url('/wp-content/")
    .replace(/url\(wp-content\//g, 'url(/wp-content/')
    .replace(
      /https?:\/\/ibridge360\.com\/wp-content\/uploads\//g,
      '/wp-content/uploads/',
    );
}

function convertAttributes(tag) {
  let result = tag
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\btabindex=/g, 'tabIndex=')
    .replace(/\breadonly\b/g, 'readOnly')
    .replace(/\bautocomplete=/g, 'autoComplete=')
    .replace(/\bcrossorigin=/g, 'crossOrigin=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(/\bclip-path=/g, 'clipPath=')
    .replace(/\bfill-opacity=/g, 'fillOpacity=')
    .replace(/\bstop-color=/g, 'stopColor=')
    .replace(/\bstop-opacity=/g, 'stopOpacity=')
    .replace(/\bfont-family=/g, 'fontFamily=')
    .replace(/\bfont-size=/g, 'fontSize=')
    .replace(/\bfont-weight=/g, 'fontWeight=')
    .replace(/\btext-anchor=/g, 'textAnchor=')
    .replace(/\bxml:lang=/g, 'xmlLang=')
    .replace(/\bviewbox=/gi, 'viewBox=')
    .replace(/\bpreserveaspectratio=/gi, 'preserveAspectRatio=')
    .replace(/\bxmlns:xlink=/g, 'xmlnsXlink=')
    .replace(/\bxlink:href=/g, 'xlinkHref=')
    .replace(/\ballowfullscreen/g, 'allowFullScreen')
    .replace(/\bframeborder=/g, 'frameBorder=')
    .replace(/\bmarginwidth=/g, 'marginWidth=')
    .replace(/\bmarginheight=/g, 'marginHeight=')
    .replace(/\bcolspan=/g, 'colSpan=')
    .replace(/\browspan=/g, 'rowSpan=')
    .replace(/\bmaxlength=/g, 'maxLength=')
    .replace(/\bminlength=/g, 'minLength=')
    .replace(/\bcontenteditable=/g, 'contentEditable=')
    .replace(/\bspellcheck=/g, 'spellCheck=')
    .replace(/\benctype=/g, 'encType=')
    .replace(/\baccept-charset=/g, 'acceptCharset=');

  result = result.replace(/\sselected(=["'][^"']*["'])?/g, ' defaultValue');

  return result;
}

function selfCloseTags(html) {
  return html.replace(/<([a-zA-Z0-9:-]+)([^>]*?)>/g, (match, tagName, attrs) => {
    if (VOID_ELEMENTS.has(tagName.toLowerCase()) && !match.endsWith('/>')) {
      return `<${tagName}${attrs} />`;
    }
    return match;
  });
}

function convertComments(html) {
  return html.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
}

function convertInlineStyles(html) {
  return html.replace(/\sstyle="([^"]*)"/g, (_, styleContent) => {
    const rules = styleContent
      .split(';')
      .map((rule) => rule.trim())
      .filter(Boolean)
      .map((rule) => {
        const colonIndex = rule.indexOf(':');
        if (colonIndex === -1) return null;
        const key = rule.slice(0, colonIndex).trim();
        const value = rule.slice(colonIndex + 1).trim().replace(/'/g, "\\'");
        const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `${camelKey}: '${value}'`;
      })
      .filter(Boolean);

    if (!rules.length) return '';
    return ` style={{ ${rules.join(', ')} }}`;
  });
}

function markInternalLinks(html) {
  let result = html;
  Object.entries(LINK_MAP).forEach(([from, to]) => {
    const patterns = [
      new RegExp(`href="${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
      new RegExp(`href='${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
    ];
    patterns.forEach((pattern) => {
      result = result.replace(pattern, `data-router-link="${to}"`);
    });
  });

  result = result.replace(/href="\.\.\/([^"#]+?)index\.html"/g, (match, prefix) => {
    const slug = prefix.replace(/\/$/, '');
    return slug ? `data-router-link="/${slug}"` : 'data-router-link="/"';
  });

  result = result.replace(/href="([^"#]+?)index\.html"/g, (match, prefix) => {
    const slug = prefix.replace(/\/$/, '');
    if (!slug) return 'data-router-link="/"';
    return `data-router-link="/${slug}"`;
  });

  return result;
}

function decodeEntitiesInAttributes(html) {
  return html.replace(/(\sdata-[a-z-]+=)"([^"]*)"/g, (match, attr, value) => {
    if (!value.includes('&quot;') && !value.includes('&amp;')) return match;
    const decoded = value.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
    const escaped = decoded.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `${attr}{'${escaped}'}`;
  });
}

function fixUnquotedAttributes(html) {
  return html
    .replace(/\bdata-vertical-menu=(\d+)/g, 'data-vertical-menu="$1"')
    .replace(/\bfetchpriority=/g, 'fetchPriority=');
}

function convertStyleTags(html) {
  return html.replace(/<style>([\s\S]*?)<\/style>/g, (_, cssContent) => {
    const escaped = cssContent
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\$\{/g, '\\${');
    return `<style dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;
  });
}

function convertLinksToJsx(jsx) {
  return jsx.replace(
    /<a([^>]*?)data-router-link="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g,
    '<Link to="$2"$1$3>$4</Link>',
  );
}

function convertScriptTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/g, '');
}

function fixInternalLinksInHtml(html) {
  let result = html;
  Object.entries(LINK_MAP).forEach(([from, to]) => {
    const patterns = [
      new RegExp(`href="${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
      new RegExp(`href='${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`, 'g'),
    ];
    patterns.forEach((pattern) => {
      result = result.replace(pattern, `href="${to}"`);
    });
  });

  result = result.replace(/href="\.\.\/([^"#]+?)index\.html"/g, (match, prefix) => {
    const slug = prefix.replace(/\/$/, '');
    return slug ? `href="/${slug}"` : 'href="/"';
  });

  result = result.replace(/href="([^"#]+?)index\.html"/g, (match, prefix) => {
    const slug = prefix.replace(/\/$/, '');
    if (!slug) return 'href="/"';
    return `href="/${slug}"`;
  });

  return result;
}

function convertPostContentToInnerHTML(html) {
  const regex =
    /(data-widget_type="theme-post-content\.default">[\s\S]*?<div class="elementor-widget-container">)([\s\S]*?)(<\/div>\s*<\/div>)/;
  const match = html.match(regex);
  if (!match) {
    return { html, postContentInner: null };
  }

  const [, before, content, after] = match;
  let processed = content.trim();
  processed = fixAssetPaths(processed);
  processed = fixInternalLinksInHtml(processed);
  const escaped = processed
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  const postContentInner = `<div dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;

  return {
    html: html.replace(regex, `${before}%%POST_CONTENT%%${after}`),
    postContentInner,
  };
}

function sanitizeEmbeddedDocuments(html) {
  return html.replace(/<!DOCTYPE html>[\s\S]*?<\/html>/gi, '{/* embedded document omitted */}');
}

function decodeHtmlEntities(html) {
  const decodeChunk = (text) => {
    const named = {
      '&nbsp;': ' ',
      '&hellip;': '…',
      '&mdash;': '—',
      '&ndash;': '–',
      '&lsquo;': '\u2018',
      '&rsquo;': '\u2019',
      '&ldquo;': '\u201C',
      '&rdquo;': '\u201D',
      '&quot;': '"',
      '&apos;': "'",
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
    };

    let output = text.replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(parseInt(code, 16)),
    );
    output = output.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));

    Object.entries(named).forEach(([entity, char]) => {
      output = output.split(entity).join(char);
    });

    return output;
  };

  return html.replace(/>([^<]+)</g, (match, text) => `>${decodeChunk(text)}<`);
}

function escapeJsxTextDelimiters(html) {
  const protectedBlocks = [];

  const withPlaceholders = html.replace(
    /dangerouslySetInnerHTML=\{\{ __html: `[\s\S]*?` \}\}/g,
    (match) => {
      const token = `__JSX_STYLE_BLOCK_${protectedBlocks.length}__`;
      protectedBlocks.push(match);
      return token;
    },
  );

  const escaped = withPlaceholders.replace(/>([^<]+)</g, (match, text) => {
    if (text.includes('__JSX_STYLE_BLOCK_')) return match;

    let next = text;

    if (/[{}]/.test(next)) {
      next = next
        .replace(/\{/g, '\u0000LB\u0000')
        .replace(/\}/g, '\u0000RB\u0000')
        .replace(/\u0000LB\u0000/g, "{'{'}" )
        .replace(/\u0000RB\u0000/g, "{'}'}");
    }

    if (/<(?=[\s\d='"(])/.test(next)) {
      next = next.replace(/<(?=[\s\d='"(])/g, "{'<'}" );
    }

    if (next === text) return match;
    return `>${next}<`;
  });

  return protectedBlocks.reduce(
    (output, block, index) => output.replace(`__JSX_STYLE_BLOCK_${index}__`, block),
    escaped,
  );
}

export function htmlToJsx(html) {
  const { html: htmlWithoutPost, postContentInner } = convertPostContentToInnerHTML(html);
  let output = htmlWithoutPost;
  output = convertComments(output);
  output = sanitizeEmbeddedDocuments(output);
  output = convertScriptTags(output);
  output = convertLazyImages(output);
  output = fixAssetPaths(output);
  output = convertStyleTags(output);
  output = decodeHtmlEntities(output);
  output = markInternalLinks(output);
  output = convertInlineStyles(output);
  output = convertAttributes(output);
  output = fixUnquotedAttributes(output);
  output = decodeEntitiesInAttributes(output);
  output = selfCloseTags(output);
  output = convertLinksToJsx(output);
  output = escapeJsxTextDelimiters(output);
  if (postContentInner) {
    output = output.replace('%%POST_CONTENT%%', postContentInner);
  }
  return output;
}

export function extractBetween(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  if (start === -1) return '';
  const end = endMarker ? html.indexOf(endMarker, start + startMarker.length) : html.length;
  if (end === -1) return html.slice(start);
  return html.slice(start, end);
}

export function writeComponent(filePath, componentName, jsxBody, imports = []) {
  const importBlock = imports.length
    ? `${imports.join('\n')}\n\n`
    : "import { Link } from 'react-router-dom';\n\n";

  const content = `${importBlock}function ${componentName}() {
  return (
    <>
${jsxBody}
    </>
  );
}

export default ${componentName};
`;

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

if (process.argv[1].includes('html-to-jsx')) {
  const [,, inputFile, outputFile, startMarker, endMarker, componentName] = process.argv;
  const html = fs.readFileSync(inputFile, 'utf8');
  const chunk = extractBetween(html, startMarker, endMarker || null);
  const jsx = htmlToJsx(chunk);
  writeComponent(outputFile, componentName, jsx.split('\n').map((l) => `      ${l}`).join('\n'));
  console.log(`Wrote ${outputFile}`);
}
