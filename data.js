/* ============================================================================
   VISIT LOUDOUN — PARTNER PORTAL DATA
   ----------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU EDIT EACH QUARTER.

   Every number shown on the site lives here. To refresh the portal:
     1. Open this file.
     2. Update the values in each section below (they are labeled).
     3. Update `meta.reportWindowLabel`, `meta.dataThrough` and `meta.nextUpdate`.
     4. Save, commit and push to GitHub. The site updates automatically.

   You never touch the HTML, CSS or JavaScript. Just the numbers here.

   Current data window: Meta = last 90 days (Mar 26 – Jun 23, 2026),
   TikTok = last 60 days (Apr 25 – Jun 23, 2026), Website = Mar–May 2026 (GA4).
   ============================================================================ */

window.PORTAL_DATA = {

  /* -------------------------------------------------------------------------
     1. REPORTING WINDOW  (update every quarter)
     ------------------------------------------------------------------------- */
  meta: {
    fiscalYear: "FY2026",
    quarterLabel: "Q4 · FY2026",
    reportWindowLabel: "March 26 – June 23, 2026",
    dataThrough: "June 23, 2026",
    nextUpdate: "July 1, 2026",          // first day of the new fiscal year
    nextUpdateNote: "Refreshes every quarter, starting with the new fiscal year on July 1.",
    socialWindowDays: 90,
    tiktokWindowDays: 60,
    websiteWindowLabel: "March – May 2026"
  },

  /* -------------------------------------------------------------------------
     2. HEADLINE STAT CARDS  (the big numbers on the Dashboard hero)
     value = number used for the count-up animation
     ------------------------------------------------------------------------- */
  reach: [
    {
      group: "Social Reach",
      icon: "megaphone",
      tip: "Tag @visitloudoun in your posts and collab with us — we reshare it to our audience.",
      cards: [
        { value: 107498,  display: "107K+", label: "Followers" },
        { value: 1200000, display: "1.2M",  label: "Facebook views" },
        { value: 609258,  display: "609K",  label: "Instagram views" }
      ]
    },
    {
      group: "Website Reach",
      icon: "search",
      tip: "Send us your photos and business updates so we can feature you on VisitLoudoun.org.",
      cards: [
        { value: 194600,  display: "194.6K", label: "Website sessions" },
        { value: 2636528, display: "2.6M",   label: "Search impressions" },
        { value: 795,     display: "795",    label: "Google AI Overviews" }
      ]
    }
  ],

  /* -------------------------------------------------------------------------
     3. PLATFORMS — follower growth over the reporting window
     start = followers at start of window, current = followers now
     ------------------------------------------------------------------------- */
  platforms: [
    { key: "facebook",  name: "Facebook",        handle: "@visitloudoun",   start: 52320, current: 52878, growthPct: 1.07,  color: "#3E495B" },
    { key: "instagram", name: "Instagram",       handle: "@visitloudoun",   start: 44820, current: 45125, growthPct: 0.68,  color: "#77092E" },
    { key: "tiktok",    name: "TikTok",          handle: "@visitloudoun",   start: 1354,  current: 2201,  growthPct: 62.56, color: "#9D5950" },
    { key: "threads",   name: "Threads",         handle: "@visitloudoun",   start: 6831,  current: 6888,  growthPct: 0.83,  color: "#7B8F86" },
    { key: "youtube",   name: "YouTube Shorts",  handle: "@visitloudounHD", start: 403,   current: 406,   growthPct: 0.74,  color: "#D5BC5F" }
  ],

  /* -------------------------------------------------------------------------
     4. PLATFORM PERFORMANCE SNAPSHOTS
     ------------------------------------------------------------------------- */
  performance: {
    facebook: {
      views: "1.2M",
      engagement: "31K",
      followerGain: 603,
      followerGainPct: 257,
      bestFormat: "Reels (+83%), then photos",
      windowLabel: "Mar 26 – Jun 23, 2026"
    },
    instagram: {
      // headline collab post drives the case study on the "Why It Matters" tab
      windowLabel: "Mar 26 – Jun 23, 2026"
    },
    tiktok: {
      growthPct: 62.56,
      note: "Reviving the account brought in a brand-new audience. People are searching TikTok for things to do, and these videos are landing on the For You page.",
      windowLabel: "Apr 25 – Jun 23, 2026"
    }
  },

  /* -------------------------------------------------------------------------
     5. TOP POSTS  (shown in the platform switcher)
     ------------------------------------------------------------------------- */
  topPosts: {
    instagram: [
      {
        title: "VA Is For Grubbers x Salamander — Champions Pool Opening",
        tag: "Partner collab",
        url: "https://www.instagram.com/p/DXRhd6pjS6H/",
        stats: [
          { label: "Views", value: "179,995" },
          { label: "Accounts reached", value: "134,655" },
          { label: "Shares", value: "8,400" },
          { label: "Saves", value: "2,000" },
          { label: "New followers", value: "201" },
          { label: "Avg. watch time", value: "16s" }
        ]
      },
      {
        title: "Loudoun Hidden Gems Carousel",
        tag: "Carousel",
        url: "https://www.instagram.com/p/DY2WltqjgCP/",
        stats: [
          { label: "Views", value: "16,318" },
          { label: "Accounts reached", value: "7,680" },
          { label: "Shares", value: "143" },
          { label: "Saves", value: "116" },
          { label: "Profile visits", value: "47" },
          { label: "New followers", value: "13" }
        ]
      }
    ],
    facebook: [
      {
        title: "Things To Do This Weekend — March 29 (Easter)",
        tag: "Weekend roundup",
        url: "https://www.facebook.com/reel/1306059901630716",
        stats: [
          { label: "Views", value: "90,725" },
          { label: "Clicks", value: "1,900" },
          { label: "Engagement", value: "2,000" },
          { label: "Net followers", value: "95" },
          { label: "Reactions", value: "136" },
          { label: "Saves", value: "24" }
        ]
      },
      {
        title: "Things To Do This Weekend — May 23–25 (Memorial Day)",
        tag: "Weekend roundup",
        url: "https://www.facebook.com/reel/1488320496121074",
        stats: [
          { label: "Views", value: "52,587" },
          { label: "Clicks", value: "1,200" },
          { label: "Engagement", value: "1,300" },
          { label: "Net followers", value: "46" },
          { label: "Reactions", value: "100" },
          { label: "Saves", value: "15" }
        ]
      }
    ],
    tiktok: [
      {
        title: "Things To Do This Weekend — May 2–3",
        tag: "For You page",
        url: "https://www.tiktok.com/t/ZTBomaXDY/",
        stats: [
          { label: "Views", value: "5,600" },
          { label: "Net followers", value: "105" },
          { label: "Engagement", value: "73" },
          { label: "Saves", value: "17" },
          { label: "Shares", value: "4" },
          { label: "Watch time", value: "4.3s" }
        ]
      },
      {
        title: "Things To Do This Weekend — May 16–17",
        tag: "For You page",
        url: "https://www.tiktok.com/t/ZTBomHfrC/",
        stats: [
          { label: "Views", value: "4,300" },
          { label: "Net followers", value: "74" },
          { label: "Engagement", value: "68" },
          { label: "Saves", value: "9" },
          { label: "Shares", value: "3" },
          { label: "Watch time", value: "4.7s" }
        ]
      }
    ]
  },

  /* -------------------------------------------------------------------------
     6. THE PARTNER COLLAB CASE STUDY  (proof that tagging works)
     ------------------------------------------------------------------------- */
  caseStudy: {
    title: "What one tagged post can do",
    post: "VA Is For Grubbers x Salamander — Champions Pool Opening",
    url: "https://www.instagram.com/p/DXRhd6pjS6H/",
    blurb: "A partner collaboration posted to Instagram. No extra ad spend — just a tag and a shared moment.",
    stats: [
      { value: "179,995", label: "Views" },
      { value: "134,655", label: "Accounts reached" },
      { value: "8,400",   label: "Shares" },
      { value: "201",     label: "New followers gained" }
    ]
  },

  /* -------------------------------------------------------------------------
     6b. NEW-AUDIENCE REACH  (the core argument — most viewers are NOT followers)
     Pulled from the in-app overview graphs in the social doc.
     ------------------------------------------------------------------------- */
  newAudience: {
    intro: "Here is the part that matters most for your business: most of the people who see Loudoun's content do not already follow us. When you tag us, your moment lands in front of a brand-new audience you would not otherwise reach.",
    cards: [
      { platform: "Instagram", stat: "50.4%", label: "of 609,258 views came from non-followers", sub: "Those views also drove 4,031 profile visits and 230 taps to external links.", url: "https://www.instagram.com/visitloudoun" },
      { platform: "Facebook",  stat: "89%",   label: "of viewers do not already follow us",       sub: "Out of 1.2 million video views in 90 days — almost entirely new reach.",           url: "https://www.facebook.com/visitloudoun" },
      { platform: "TikTok",    stat: "15.7K",  label: "new viewers in 60 days, up 34.2 percent",   sub: "Out of 21,800 total viewers — a fast-growing audience discovering Loudoun.",        url: "https://www.tiktok.com/@visitloudoun" }
    ],
    formatNote: "Short video drives the most new reach. On Instagram, Reels make up 54.3 percent of reach and land mostly with people who do not follow us yet — so a tagged Reel is your best shot at new eyes."
  },

  /* -------------------------------------------------------------------------
     7. AUDIENCE  (who sees your content — from Instagram insights)
     ------------------------------------------------------------------------- */
  audience: {
    ageBuckets: [
      { range: "18–24", pct: 3.9 },
      { range: "25–34", pct: 24.9 },
      { range: "35–44", pct: 39.9 },
      { range: "45–54", pct: 20.9 },
      { range: "55–64", pct: 7.6 },
      { range: "65+",   pct: 2.7 }
    ],
    gender: { female: 68.3, male: 31.7 },
    country: { label: "United States", pct: 99.2 },
    coreNote: "The core audience is 25 to 54 — the people most likely to plan a weekend, book a table or buy a ticket."
  },

  /* -------------------------------------------------------------------------
     7b. THE LOUDOUN VISITOR  (who partners reach — from the 2026 Visitor Profile study)
     ------------------------------------------------------------------------- */
  visitorProfile: {
    intro: "This is who travels to Loudoun — the audience your tagged content helps us reach. They are affluent, loyal and ready to spend.",
    cards: [
      { value: "$123,793", label: "Average household income",   sub: "A financially attractive visitor" },
      { value: "89.2%",    label: "Are repeat visitors",         sub: "Averaging 10.8 lifetime trips — loyal and familiar" },
      { value: "$3,949",   label: "Spent per overnight party",   sub: "Vs. $225 for a day trip — overnight is the prize" },
      { value: "5.2",      label: "Trips planned next year",     sub: "Vs. 3.8 for the average American traveler" },
      { value: "86.8%",    label: "Leave satisfied",             sub: "And 79.8 percent would recommend Loudoun" },
      { value: "53.4%",    label: "Come from the DC metro",      sub: "A close-to-home, drive-market audience" }
    ],
    sourceNote: "Source: Visit Loudoun 2026 Visitor Profile study by Future Partners — 846 visitors surveyed February–March 2026."
  },

  /* -------------------------------------------------------------------------
     7c. PARTNER TOOLKIT PDF  (the official downloadable guide)
     ------------------------------------------------------------------------- */
  toolkitPdf: {
    title: "The 2026 Partner Toolkit",
    blurb: "Your complete guide to marketing with Visit Loudoun — brand assets, logos, submission steps and campaign details, all in one PDF.",
    url: "https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/loudoun/2026_Partner_Toolkit_441ad3d7-2282-4a4a-9563-a7640a09fbae.pdf"
  },

  /* -------------------------------------------------------------------------
     8. WEBSITE PERFORMANCE  (GA4, Mar–May 2026)
     ------------------------------------------------------------------------- */
  website: {
    cards: [
      { label: "Sessions",          value: "194.6K",   change: "+24.1% YoY" },
      { label: "Users",             value: "159.8K",   change: "+30.3% YoY" },
      { label: "Page views",        value: "340.6K",   change: "+14.1% vs. prior period" },
      { label: "Avg. session",      value: "2m 23s",   change: "+15s vs. prior period" }
    ],
    // Where website traffic comes from (GA4 channels)
    channels: [
      { label: "Organic Search", pct: 50.6 },
      { label: "Direct",         pct: 20.1 },
      { label: "Referral",       pct: 9.5 },
      { label: "Paid Social",    pct: 8.7 },
      { label: "Unassigned",     pct: 5.5 },
      { label: "Paid Search",    pct: 2.5 },
      { label: "Organic Social", pct: 1.5 },
      { label: "Display",        pct: 1.1 }
    ],
    devices: [
      { label: "Mobile",  pct: 56.8 },
      { label: "Desktop", pct: 41.5 },
      { label: "Tablet",  pct: 1.6 }
    ],
    topStates: [
      { label: "Virginia",       pct: 35.9 },
      { label: "New York",       pct: 7.9 },
      { label: "Maryland",       pct: 7.0 },
      { label: "Pennsylvania",   pct: 5.6 },
      { label: "Florida",        pct: 3.6 },
      { label: "Washington, DC", pct: 2.9 }
    ],
    socialReferralNote: "Social already sends real traffic to VisitLoudoun.org — Facebook is the third-largest source of website visits. Organic social is just 1.5 percent of traffic today, which is exactly the room to grow when more partners tag and share."
  },

  /* -------------------------------------------------------------------------
     9. SEARCH FOOTPRINT  (the megaphone partners tap into — from SEO reports)
     ------------------------------------------------------------------------- */
  search: {
    cards: [
      { label: "Monthly search impressions", value: "2.6M",  note: "How often Loudoun appears in Google (April 2026)" },
      { label: "Google AI Overviews",        value: "795",   note: "Up from 42 a year earlier" },
      { label: "Ranked keywords",            value: "32.7K", note: "Terms Loudoun shows up for" },
      { label: "Avg. search position",       value: "8.0",   note: "Improved from 11.6 a year earlier" }
    ]
  },

  /* -------------------------------------------------------------------------
     10. WHY IT MATTERS — the partner benefits (reasons to tag)
     ------------------------------------------------------------------------- */
  benefits: [
    { icon: "megaphone", title: "Reach far beyond your own following", text: "Tagging amplifies your content to our established audience of more than 107,000 followers across five platforms." },
    { icon: "users",     title: "Tap a big, growing audience",          text: "Our channels keep climbing — TikTok alone grew nearly 63 percent in 90 days — and your content rides that momentum." },
    { icon: "camera",    title: "Become the real story",                text: "Your posts give us genuine, ground-level content that makes destination marketing feel real — food, events, stays and experiences." },
    { icon: "heart",     title: "More engagement, no extra work",       text: "When we reshare your moment, it boosts engagement across our channels without you creating anything new." },
    { icon: "calendar",  title: "Get seen during the moments that matter", text: "Events, seasonal pushes and campaigns get more visibility when partner content feeds them." },
    { icon: "handshake", title: "Build a two-way relationship",         text: "Tagging opens the door to ongoing collaboration and reciprocal promotion — we lift each other up." },
    { icon: "search",    title: "Be easier to find and reshare",        text: "Tagged content is simple for us to discover, track and reshare in real time, the moment it lands." },
    { icon: "badge",     title: "Earn credibility",                     text: "Showcasing real local businesses and visitor experiences builds trust for your brand and for Loudoun as a whole." }
  ],

  /* -------------------------------------------------------------------------
     11. TOOLKIT — handles, hashtags, do/don't, content ideas
     ------------------------------------------------------------------------- */
  toolkit: {
    handles: [
      { platform: "Instagram", handle: "@visitloudoun",   url: "https://www.instagram.com/visitloudoun" },
      { platform: "Facebook",  handle: "@visitloudoun",   url: "https://www.facebook.com/visitloudoun" },
      { platform: "TikTok",    handle: "@visitloudoun",   url: "https://www.tiktok.com/@visitloudoun" },
      { platform: "Threads",   handle: "@visitloudoun",   url: "https://www.threads.net/@visitloudoun" },
      { platform: "YouTube",   handle: "@visitloudounHD", url: "https://www.youtube.com/@visitloudounHD" }
    ],
    industry: [
      // FB group is members-only — no public link. LinkedIn URL below: VERIFY it points to the right company page.
      { platform: "Facebook group", handle: "Loudoun Tourism Industry", note: "CTA members only" },
      { platform: "LinkedIn",       handle: "Visit Loudoun", url: "https://www.linkedin.com/company/visit-loudoun" }
    ],
    dos: [
      "Tag @visitloudoun inside the post itself, not only in the caption",
      "Add your location so the post is searchable",
      "Post Reels and short video — they reach the most new people",
      "Share real moments: new menu items, events, behind-the-scenes, seasonal updates",
      "Give us a heads-up on big news so we can plan to amplify it"
    ],
    donts: [
      "Don't tag us only in the caption text — it limits what we can reshare",
      "Don't post low-resolution or heavily filtered images",
      "Don't forget to tag the location",
      "Don't sit on time-sensitive news — tell us early"
    ],
    contentIdeas: [
      { title: "New on the menu",      text: "A dish, a seasonal drink, a new release — close-up and well lit." },
      { title: "Behind the scenes",    text: "The people and the craft behind your business. Real faces, real work." },
      { title: "Events & happenings",  text: "Live music, tastings, markets, tournaments — tag us before and during." },
      { title: "Seasonal moments",     text: "How your place looks and feels in spring, summer, fall and winter." },
      { title: "Visitor experiences",  text: "Guests enjoying your space (with their okay) — the best kind of proof." }
    ]
  },

  /* -------------------------------------------------------------------------
     12. CONTACTS  (update if the right person changes)
     ------------------------------------------------------------------------- */
  contacts: [
    { name: "AJ Mirabal", role: "Marketing Coordinator", email: "mirabal@visitloudoun.org" },
    { name: "Social Marketing Coordinator", role: "Social media & content", email: "grooms@visitloudoun.org" }
  ]
};
