/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://thiru.site",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://thiru.site/server-sitemap.xml"],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Home page gets highest priority
    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    }

    // Migrated blog posts get lower priority (archived content) - check this first
    if (path.includes("/migrated/")) {
      priority = 0.6;
      changefreq = "yearly";
    }
    // Blog pages get high priority (but not migrated ones)
    else if (path.startsWith("/blog")) {
      priority = 0.9;
      changefreq = "weekly";
    }

    // Domain pages get medium-high priority
    else if (path.startsWith("/domains")) {
      priority = 0.8;
      changefreq = "monthly";
    }

    // Other pages get default priority
    else {
      priority = 0.7;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
