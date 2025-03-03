import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About David",
  description: "David Agbaniyaka is a Software Engineer",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2 items-center">
          <Avatar className="h-24 w-20">
            <AvatarImage src="/david.jpg" alt={siteConfig.author} />
            <AvatarFallback>DA</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          Hi, I&apos;m David, a Full-Stack Developer with over 4 years of
          experience building robust, scalable, and visually stunning websites
          and applications. My expertise spans both the front-end and back-end,
          enabling me to create seamless user experiences and efficient,
          functional systems, whether I&apos;m working solo or as part of a
          team. When I&apos;m not immersed in code, you&apos;ll likely find me
          exploring the pages of a great book or pushing limits at the gym—both
          fueling the creativity and discipline I bring to every project.
          Looking for a dedicated developer to turn your ideas into reality?
          Let&apos;s collaborate and create something extraordinary together.
        </p>
      </div>

      {/* <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm mx-auto"
    >
      <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Image src="/chess.png" alt="David Agbaniyaka" height={300} width={400}/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
            <Image src="/water.png" alt="David Agbaniyaka" height={500} width={400}/>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
            <Image src="/gym.png" alt="David Agbaniyaka" height={400} width={400}/>
            </div>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}
    </div>
  );
}
