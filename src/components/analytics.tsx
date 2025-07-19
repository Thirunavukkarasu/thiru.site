'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { track } from '@vercel/analytics';

// Custom tracking functions
export const trackPageView = (page: string) => {
  track('page_view', { page });
};

export const trackBlogView = (post: string) => {
  track('blog_post_view', { post });
};

export const trackDomainView = (domain: string) => {
  track('domain_page_view', { domain });
};

export const trackExternalLink = (url: string, source: string) => {
  track('external_link_click', { url, source });
};

export const trackContactClick = (method: string) => {
  track('contact_click', { method });
};

// Enhanced Analytics Component
export function EnhancedAnalytics() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

// Hook for tracking custom events
export const useAnalytics = () => {
  return {
    trackPageView,
    trackBlogView,
    trackDomainView,
    trackExternalLink,
    trackContactClick,
  };
}; 