// Tracking utilities for analytics and lead attribution

export interface TrackingData {
  source: string;
  medium: string;
  campaign: string;
  referer: string;
  landingPage: string;
  pagesVisited: string[];
  deviceType: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  timeOnSite: number; // seconds
  utmParams: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };
}

export function getTrackingData(): TrackingData {
  if (typeof window === 'undefined') {
    return getDefaultTrackingData();
  }

  const sessionStart = getSessionStartTime();
  const timeOnSite = Math.floor((Date.now() - sessionStart) / 1000);

  return {
    source: getSource(),
    medium: getMedium(),
    campaign: getCampaign(),
    referer: getReferer(),
    landingPage: getLandingPage(),
    pagesVisited: getPagesVisited(),
    deviceType: getDeviceType(),
    browser: getBrowser(),
    os: getOS(),
    timeOnSite,
    utmParams: getUTMParams(),
  };
}

function getDefaultTrackingData(): TrackingData {
  return {
    source: 'direct',
    medium: 'none',
    campaign: 'none',
    referer: '',
    landingPage: '/',
    pagesVisited: [],
    deviceType: 'desktop',
    browser: 'unknown',
    os: 'unknown',
    timeOnSite: 0,
    utmParams: {},
  };
}

function getSource(): string {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  if (utmSource) return utmSource;

  const referer = document.referrer;
  if (!referer) return 'direct';

  // Parse referer domain
  try {
    const refererUrl = new URL(referer);
    const domain = refererUrl.hostname.toLowerCase();

    // Social media
    if (domain.includes('facebook.com') || domain.includes('fb.com')) return 'facebook';
    if (domain.includes('instagram.com')) return 'instagram';
    if (domain.includes('linkedin.com')) return 'linkedin';
    if (domain.includes('twitter.com') || domain.includes('t.co')) return 'twitter';
    if (domain.includes('tiktok.com')) return 'tiktok';
    if (domain.includes('youtube.com')) return 'youtube';

    // Search engines
    if (domain.includes('google.')) return 'google';
    if (domain.includes('bing.com')) return 'bing';
    if (domain.includes('yahoo.com')) return 'yahoo';
    if (domain.includes('duckduckgo.com')) return 'duckduckgo';

    // Other
    return refererUrl.hostname;
  } catch {
    return 'unknown';
  }
}

function getMedium(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get('utm_medium') || 'organic';
}

function getCampaign(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get('utm_campaign') || 'none';
}

function getReferer(): string {
  return document.referrer || 'direct';
}

function getLandingPage(): string {
  // Get from sessionStorage or current page
  if (typeof sessionStorage !== 'undefined') {
    const stored = sessionStorage.getItem('landing_page');
    if (stored) return stored;
  }
  return window.location.pathname;
}

function getPagesVisited(): string[] {
  if (typeof sessionStorage !== 'undefined') {
    const stored = sessionStorage.getItem('pages_visited');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [window.location.pathname];
      }
    }
  }
  return [window.location.pathname];
}

function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

function getBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Other';
}

function getOS(): string {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'Windows';
  if (ua.includes('Mac')) return 'macOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Other';
}

function getUTMParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  };
}

function getSessionStartTime(): number {
  if (typeof sessionStorage !== 'undefined') {
    const stored = sessionStorage.getItem('session_start');
    if (stored) return parseInt(stored, 10);
  }
  const now = Date.now();
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem('session_start', now.toString());
  }
  return now;
}

// Track page view
export function trackPageView(page: string) {
  if (typeof sessionStorage === 'undefined') return;

  // Store landing page
  if (!sessionStorage.getItem('landing_page')) {
    sessionStorage.setItem('landing_page', page);
  }

  // Add to pages visited
  const visited = getPagesVisited();
  if (!visited.includes(page)) {
    visited.push(page);
    sessionStorage.setItem('pages_visited', JSON.stringify(visited));
  }
}

// Initialize tracking on page load
export function initTracking() {
  if (typeof window === 'undefined') return;

  // Track initial page
  trackPageView(window.location.pathname);

  // Track page changes (for SPA)
  if (typeof window.history.pushState !== 'undefined') {
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      trackPageView(window.location.pathname);
    };
  }
}
