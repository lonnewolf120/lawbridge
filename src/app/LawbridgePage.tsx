import * as React from "react";
import { NavItem } from "./components/NavItem";
import { Statistic } from "./components/Statistic";
import { LawyerCard } from "./components/LawyerCard";
import { BlogPost } from "./components/BlogPost";
import { SocialLink } from "./components/SocialLink";

const navItems = [
  { text: "Home", isActive: false },
  { text: "About", isActive: true },
  { text: "Progress Tracker", isActive: false },
  { text: "Education Hub", isActive: false },
];

const statistics = [
  { value: "96%", label: "Cases Solved" },
  { value: "54+", label: "Happy Clients" },
  { value: "200", label: "Lawyers" },
  { value: "1500", label: "Working Hours" },
];

const lawyers = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c84a4e9062cb97c06876c9f53596204cd8237fd5353c9322ea305071b22472e5?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    name: "Barrister Md. Atiqul Islam",
    title: "Advocate, Bangladesh Supreme Court",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/41dc056166872692e473c21a0a94872a1a2322aa1247838374197b78ac46e899?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    name: "Barrister Ms. Farzana Begum",
    title: "Advocate, Harvard Law School",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c351399642e351910b759915f77f4247d48834550fffc9df24da023405a49990?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    name: "Barrister Shahrukh Sadek",
    title: "Advocate, Bangladesh Supreme Court",
  },
];

const blogPosts = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a9e15fbd467e31ac901ad38ec25044cc071f2e04837cf53fa6939c8d39a0723?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    title: "How to file for a lawsuit against a company",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6339b96844bcec9e62db621664e4674689c292ba1a15717ba9bbcdf932a0e1ae?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    title: "Legal Systems related to businesses",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7552bc10e57aca7cbfc3f5b222ae4f45f83968530476511e6fb1e0e8ea9a89b4?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    title: "How to become a lawyer",
    width: "27%",
  },
];

const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09e2320321b9061126061da8ef190a498e89c289bfc3e0ceeb9364f6bd502ce8?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    href: "#",
    ariaLabel: "Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/469b2da7e1ad749b05f68079660da96e2d25d6eea937d75106e15c4884dd9225?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    href: "#",
    ariaLabel: "Twitter",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2775fcecd16d9b5659e0e8c92e29217e4e2c23755ee497852cd64dd0a505fc75?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f",
    href: "#",
    ariaLabel: "LinkedIn",
  },
];

export function LawbridgePage() {
  return (
    <div className="flex flex-col bg-zinc-100">
      <header className="flex overflow-hidden flex-col pb-7 w-full bg-white max-md:mr-1.5 max-md:max-w-full">
        <nav className="flex gap-5 justify-between items-center w-full text-2xl font-medium leading-none text-zinc-900 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/88a2a0b0b878e1a4b0436c47bf03850359d069f91512cfa9b117a2e1f34071f9?placeholderIfAbsent=true&apiKey=9070609be2e14fc0ba6567b32c3d383f"
            alt="Lawbridge Logo"
            className="object-contain shrink-0 self-stretch max-w-full aspect-[1.59] w-[245px]"
          />
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
          <button className="gap-2.5 self-start px-12 py-1.5 mt-6 text-lg font-bold leading-10 text-center text-white bg-black min-h-[57px] rounded-[200px] shadow-[0px_4px_8px_rgba(114,114,114,0.25)] max-md:px-5">
            Log in
          </button>
        </nav>

        {/* Rest of the component implementation follows the same pattern */}
        {/* Main content section */}
        <section className="self-end mt-10 mr-9 w-full max-w-[1149px] max-md:mr-2.5 max-md:max-w-full">
          {/* Content implementation */}
        </section>

        {/* Statistics section */}
        <section className="flex gap-5 justify-between mt-20">
          {statistics.map((stat, index) => (
            <Statistic key={index} {...stat} />
          ))}
        </section>

        {/* Lawyers section */}
        <section className="mt-20 w-full max-w-[1080px]">
          <div className="flex gap-5 max-md:flex-col">
            {lawyers.map((lawyer, index) => (
              <LawyerCard key={index} {...lawyer} />
            ))}
          </div>
        </section>

        {/* Blog posts section */}
        <section className="flex gap-5 max-md:flex-col">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </section>

        {/* Footer section */}
        <footer className="flex flex-col w-full">
          <div className="flex gap-5 justify-between px-10 pt-7 pb-2.5">
            <div className="flex gap-3.5 items-start">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </footer>
      </header>
    </div>
  );
}
