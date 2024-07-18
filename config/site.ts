export const siteConfig = {
  name: "David Agbaniyaka",
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

  projectsArray: [
    {
      title: "Maze Game",
      description:
        "A challenging UI for a space exploration website. I was the FrontEnd Developer",
      tags: ["SDL2", "Ray Casting", "C"],
      imageUrl: "/space-tourism.png",
      githubUrl: "https://github.com/agbaniongithub/space-tourism-website",
      siteUrl: "/mazegame"
    },
    {
      title: "Space Tourism Website",
      description:
        "A challenging UI for a space exploration website. I was the FrontEnd Developer",
      tags: ["HTML", "Tailwind CSS", "Next.JS"],
      imageUrl: "/space-tourism.png",
      githubUrl: "https://github.com/agbaniongithub/space-tourism-website",
      siteUrl: "space-tourism-website.vercel.app"
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["HTML", "CSS", "Javascript"],
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
    },
    {
      title: "CorpComment",
      description:
        "Users can give public feedback to companies.",
      tags: ["HMTL", "CSS", "Javascript", "Node.JS"],
      imageUrl: "/corpcomment.png",
      githubUrl: "https://github.com/agbaniongithub/corpcomment",
      siteUrl: "https://corpcommentbyagbani.netlify.app"
    },
  ]
};
export type SiteConfig = typeof siteConfig;