export const siteConfig = {
  name: "agbani.dev",
  url: "https://davidagba.com",
  description: "Project and Blog",
  author: "David Agbaniyaka",
  links: {
    twitter: "https://twitter.com/davidagba",
    github: "https://github.com/agbaniongithub",
    personalSite: "https://davidagba.com",
    linkedin: "https://linkedin.com/in/davidagba"
  },
  projects: {
    imageUrl: "/",
    title: "Fancy Counter",
    description: "Fancy Counter is a simple yet powerful and beautiful counter application for the web.",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/agbaniongithub/fancy-counter",
    siteUrl: "https://fancycounterbyagbani.netlify.app"
  },

  projectsArray:  [{
    title: "Word Analytics",
    description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/wordanalytics.png",
    githubUrl: "https://github.com/agbaniongithub/Word-Analytics",
    siteUrl: "https://wordanalyticsbyagbani.netlify.app"
  },
  {
    imageUrl: "/fancy-counter.png",
    title: "Fancy Counter",
    description: "Fancy Counter is a simple yet powerful and beautiful counter application for the web.",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/agbaniongithub/fancy-counter",
    siteUrl: "https://fancycounterbyagbani.netlify.app"
  }
  ]
};
export type SiteConfig = typeof siteConfig;