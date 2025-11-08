// CDN Configuration for GitHub + jsDelivr

// GitHub repository configuration
const GITHUB_USER = 'izibux'; // Replace with your GitHub username
const GITHUB_REPO = 'website-images'; // Replace with your repository name
const GITHUB_BRANCH = 'main'; // or 'master' depending on your default branch

// Base URL for jsDelivr CDN
const CDN_BASE_URL = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}@${GITHUB_BRANCH}`;

// Image paths
export const CDN_PATHS = {
  // Logo and branding
  logo: `${CDN_BASE_URL}/public/images/logo.png`,
  logoIcon: `${CDN_BASE_URL}/public/images/logo-icon.png`,
  
  // Hero section
  heroBackground: `${CDN_BASE_URL}/public/images/hero-bg.jpg`,
  heroIllustration: `${CDN_BASE_URL}/public/images/hero-illustration.png`,
  
  // Icons and graphics
  robuxIcon: `${CDN_BASE_URL}/public/images/robux-icon.png`,
  securityBadge: `${CDN_BASE_URL}/public/images/security-badge.png`,
  
  // Placeholder for other images
  placeholder: `${CDN_BASE_URL}/public/images/placeholder.png`,
};

/**
 * Get CDN URL for a specific image
 * @param imagePath - Path relative to /public/images/
 * @returns Full CDN URL
 */
export const getCDNUrl = (imagePath: string): string => {
  return `${CDN_BASE_URL}/public/images/${imagePath}`;
};

/**
 * Get local development URL for images
 * @param imagePath - Path relative to /public/images/
 * @returns Local URL
 */
export const getLocalUrl = (imagePath: string): string => {
  return `/images/${imagePath}`;
};

/**
 * Get image URL based on environment
 * In development: uses local files
 * In production: uses CDN
 */
export const getImageUrl = (imagePath: string): string => {
  const isDevelopment = import.meta.env.DEV;
  return isDevelopment ? getLocalUrl(imagePath) : getCDNUrl(imagePath);
};

export default CDN_PATHS;

