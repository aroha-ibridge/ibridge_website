import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const headerPath = path.resolve(__dirname, '../src/components/layout/Header.jsx');

let content = fs.readFileSync(headerPath, 'utf8');

const blogsDesktopLink =
  '<li id="menu-item-22459" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22459 nav-item elementskit-mobile-builder-content" data-vertical-menu="750px"><Link to="/blogs" className="ekit-menu-nav-link">Blogs</Link></li>';

const blogsMobileLink =
  '<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22464"><Link to="/blogs" className="elementor-item">Blogs</Link></li>';

const blogsMobileDropdownLink =
  '<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22464"><Link to="/blogs" className="elementor-item" tabIndex="-1">Blogs</Link></li>';

// Replace Resources megamenu with direct Blogs link (desktop).
content = content.replace(
  /<li id="menu-item-21078"[\s\S]*?<\/div><\/li>\s*(?=<li id="menu-item-21075")/,
  `${blogsDesktopLink}\n      `,
);

// Replace Resources dropdown in mobile nav menus.
content = content.replace(
  /<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16258"><a className="elementor-item">Resources<\/a>\s*<ul className="sub-menu elementor-nav-menu--dropdown">[\s\S]*?<\/ul>\s*<\/li>/g,
  blogsMobileLink,
);

content = content.replace(
  /<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16258"><a className="elementor-item" tabIndex="-1">Resources<\/a>\s*<ul className="sub-menu elementor-nav-menu--dropdown">[\s\S]*?<\/ul>\s*<\/li>/g,
  blogsMobileDropdownLink,
);

// Match live site casing for iBridge for label.
content = content.replace(/IBridge for/g, 'iBridge for');

const LOGIN_URL =
  'https://learner.ibridge360.com/sign-in?_gl=1*ruyh92*_ga*MTg3Nzc4NTUwNC4xNzgyNzA4NjQy*_ga_K7ZTSXL9K5*czE3ODM0MDIwMzEkbzkkZzEkdDE3ODM0MDMyOTckajYwJGwwJGgw';

const EXPLORE_URL =
  'https://learner.ibridge360.com/explore?_gl=1*16efc2a*_ga*MTg3Nzc4NTUwNC4xNzgyNzA4NjQy*_ga_K7ZTSXL9K5*czE3ODM0MDIwMzEkbzkkZzEkdDE3ODM0MDM3MjEkajYwJGwwJGgw';

// Login goes to learner portal sign-in (not the old popup).
content = content.replace(
  /<a className="elementor-button elementor-button-link elementor-size-sm login" href="#">/g,
  `<a className="elementor-button elementor-button-link elementor-size-sm" href="${LOGIN_URL}">`,
);

content = content.replace(
  /href="https:\/\/learner\.ibridge360\.com\/sign-in[^"]*"/g,
  `href="${LOGIN_URL}"`,
);

// Ensure Find Your Job opens learner explore in a new tab.
content = content.replace(
  /href="https:\/\/learner\.ibridge360\.com\/explore[^"]*"(?!\s+target)/g,
  `href="${EXPLORE_URL}"`,
);

content = content.replace(
  /<a className="elementor-button elementor-button-link elementor-size-sm" href="https:\/\/learner\.ibridge360\.com\/explore[^"]*"(?!\s+target)/g,
  `<a className="elementor-button elementor-button-link elementor-size-sm" href="${EXPLORE_URL}" target="_blank"`,
);

fs.writeFileSync(headerPath, content);
console.log('Patched Header.jsx navbar to match live site.');
