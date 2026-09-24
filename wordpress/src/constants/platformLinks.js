/** Platform links used across the marketing site. */
export const PLATFORM_LOGIN_PATH = 'https://lms.ibridge360.com/sign-in';

/** Find Your Job / Explore — learner platform (external). */
export const PLATFORM_EXPLORE_PATH = 'https://learner.ibridge360.com/explore';

export const PLATFORM_CUSTOMIZE_PROGRAMS_PATH = '/customizePrograms';

export function isExternalPlatformUrl(url = '') {
  return /^https?:\/\//i.test(url);
}
