'use client'

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ReactTyped } from "react-typed";



export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 min-h-screen flex justify-center items-center flex-col">

      <div className="relative">
            {/* Scrolling Logos */}
            <div className="logos-scroller">
              <div className="logos-track">
                {siteConfig.logos.map((logo) => (
                  <img
                    key={logo}
                    src={logo}
                    alt="Logo"
                    className="h-12 w-12 mx-4 opacity-60 hover:opacity-100 transition"
                  />
                ))}
              </div>
            </div>
          </div>

        <div className="container flex flex-col gap-4 text-center">
          
       

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            DAVID AGBANIYAKA
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            I&apos;M A 
          </p>
          <div className="react-typed-wrapper">
  <ReactTyped
    strings={[
      "SOFTWARE ENGINEER",
      "FULLSTACK DEVELOPER",
      "BLOCKCHAIN ENGINEER",
    ]}
    typeSpeed={40}
    backSpeed={50}
    loop
    showCursor={true}
    cursorChar="|"
  />
</div>
          <div className="flex flex-col gap-4 justify-center md:flex-row">
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "lg" }), "w-full md:w-fit")}
            >
              View my projects
            </Link>
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full md:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full md:w-fit"
              )}
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full md:w-fit"
              )}
            >
              LinkedIn
            </Link>
            <Link
              href="/DAVID_AGBANIYAKA_CV_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full md:w-fit"
              )}
            >
              CV
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-[7rem]">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}