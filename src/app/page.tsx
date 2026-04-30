"use client";

import { useState } from "react";

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/728a7bbd-68d3-43ce-8202-844e2cae2c92";

const ABOUT_PORTRAIT =
  "https://www.figma.com/api/mcp/asset/33faebad-1625-4c60-9e41-d51e9ea527af";

const PHOTOGRAPHER_IMAGE =
  "https://www.figma.com/api/mcp/asset/44786c56-0e9f-4d2d-b810-d0b2b1bb9c1e";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

const NEWS_ITEMS = [
  {
    image: "https://www.figma.com/api/mcp/asset/c483d205-03e0-47b7-9d6e-6da72a7ea6ea",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
  {
    image: "https://www.figma.com/api/mcp/asset/d3fe6b1f-a803-4f2d-bbab-406db8d20240",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: true,
  },
  {
    image: "https://www.figma.com/api/mcp/asset/001a4a63-8e27-49f0-a2f9-ea1cad85809d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Marko Stojković",
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    logo: "https://www.figma.com/api/mcp/asset/445813f5-d3bc-4773-a0fa-0cfd75d53eda",
    rotation: -6.85,
    left: 102,
    top: 142,
  },
  {
    name: "Lukas Weber",
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    logo: "https://www.figma.com/api/mcp/asset/aaa7a564-57da-43ff-bbac-35d2e3408d96",
    rotation: 2.9,
    left: 676,
    top: 272,
    behindText: true,
  },
  {
    name: "Sarah Jenkins",
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: "https://www.figma.com/api/mcp/asset/5ac63b1a-8ef6-4552-b6a8-feea0197365a",
    rotation: 2.23,
    left: 305,
    top: 553,
  },
  {
    name: "Sofia Martínez",
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    logo: "https://www.figma.com/api/mcp/asset/11c57967-fc7b-4ebd-8b94-6aae4070f8eb",
    rotation: -4.15,
    left: 987,
    top: 546,
  },
];

const PROJECTS = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/b6222634-b84e-44f5-b76c-3b9937a08eff",
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/4a47cf70-c1cd-4f4a-889d-98e0e13d661f",
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/4709f1d9-20a4-4741-aecb-be45cd3813af",
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/3ced8920-19a8-48dc-954c-00dc44af3a26",
  },
];

const SERVICES = [
  {
    index: "[ 1 ]",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/16204442-3215-4fa9-9692-96deb6d14cde",
  },
  {
    index: "[ 2 ]",
    title: "Web Design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/955f70a7-ffbc-47da-8bb5-dfd453ab4593",
  },
  {
    index: "[ 3 ]",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/fd6cd344-f813-4d2e-8775-86f4b4fb7b97",
  },
  {
    index: "[ 4 ]",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/aa960652-d168-4df3-abc6-1dd84cdeb217",
  },
];

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 7H21M3 12H21M3 17H21"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TestimonialCard({ logo, quote, name, width = 353 }: {
  logo: string; quote: string; name: string; width?: number;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 shrink-0"
      style={{ width }}
    >
      <img src={logo} alt="" className="object-contain object-left" style={{ height: "32px", maxWidth: "150px" }} />
      <p className="font-normal text-[#1f1f1f]" style={{ fontSize: "18px", lineHeight: 1.3, letterSpacing: "-0.72px" }}>
        {quote}
      </p>
      <p className="font-black text-black uppercase" style={{ fontSize: "16px", lineHeight: 1.1, letterSpacing: "-0.64px" }}>
        {name}
      </p>
    </div>
  );
}

function ArrowIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 22L22 10M22 10H12M22 10V20" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({
  title, tags, image, height, titleSize = 36, aspectRatio,
}: {
  title: string; tags: string[]; image: string; height: number; titleSize?: number; aspectRatio?: string;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative overflow-hidden w-full" style={aspectRatio ? { aspectRatio } : { height }}>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full font-medium text-[#111] text-sm whitespace-nowrap"
              style={{ background: "rgba(255,255,255,0.3)", backdropFilter: "blur(10px)", letterSpacing: "-0.56px" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className="font-black text-black uppercase whitespace-nowrap"
          style={{ fontSize: `${titleSize}px`, lineHeight: 1.1, letterSpacing: `${-(titleSize * 0.04)}px` }}
        >
          {title}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
}

function ProjectsCTA() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col self-stretch justify-between shrink-0 w-6">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>
      <div className="flex-1 flex flex-col gap-[10px] py-3">
        <p className="italic text-[#1f1f1f]" style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px" }}>
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start bg-black text-white px-4 py-3 rounded-3xl font-medium text-sm tracking-[-0.04em]">
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col self-stretch justify-between shrink-0 w-6">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

function CornerBracket({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 0.5H0.5V15" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#fafafa]">
      {/* ─── Hero ─── */}
      <section className="relative h-screen overflow-hidden flex flex-col px-4 md:px-8">

        {/* Background photo — desktop: extends 34.79% beyond both sides, sized to image aspect ratio */}
        <div
          className="hidden md:block absolute pointer-events-none -translate-y-1/2"
          style={{
            left: "-34.79%",
            right: "-34.79%",
            top: "calc(50% + 89px)",
            aspectRatio: "2291 / 1346",
          }}
        >
          <img
            src={HERO_IMAGE}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              maxWidth: "none",
            }}
          />
        </div>

        {/* Background photo — mobile: fills height, extends 39.47% beyond right */}
        <div
          className="md:hidden absolute pointer-events-none -translate-y-1/2"
          style={{ left: 0, right: "-39.47%", top: "50%", height: "100%" }}
        >
          <img
            src={HERO_IMAGE}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              maxWidth: "none",
            }}
          />
        </div>

        {/* Blur overlay — fades in gradually over the bottom ~40% of the hero */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "42%",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(217,217,217,0.01)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 55%)",
          }}
        />

        {/* Content — comes after image/blur in DOM so it renders on top */}
        <div className="relative flex flex-col h-full justify-between md:justify-start md:gap-60">

          {/* ── Navbar ── */}
          <nav className="flex items-center justify-between py-6 shrink-0">
            {/* Logo */}
            <span className="font-semibold text-base text-black capitalize tracking-[-0.04em]">
              H.Studio
            </span>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-14">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-semibold text-base text-black capitalize tracking-[-0.04em] transition-opacity hover:opacity-60"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <button className="hidden md:flex items-center justify-center bg-black text-white px-4 py-3 rounded-3xl font-medium text-sm tracking-[-0.04em]">
              Let&apos;s talk
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </nav>

          {/* ── Hero text ── */}
          <div className="flex flex-col w-full h-[341px] justify-between md:h-auto md:justify-start">

            {/* Label + name */}
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-center md:justify-start px-[18px] -mb-[15px]">
                <p
                  className="font-mono font-normal text-white uppercase mix-blend-overlay"
                  style={{ fontSize: "14px", lineHeight: 1.1 }}
                >
                  [ Hello i&apos;m ]
                </p>
              </div>
              <h1
                className="font-medium capitalize text-white text-center mix-blend-overlay w-full text-[96px] leading-[0.8] whitespace-pre-wrap md:text-[13.75vw] md:leading-[1.1] md:-mb-[15px] md:whitespace-nowrap"
                style={{ letterSpacing: "-0.07em" }}
              >
                Harvey{"   "}Specter
              </h1>
            </div>

            {/* Description + CTA */}
            <div className="flex justify-start md:justify-end w-full">
              <div className="flex flex-col gap-[17px]" style={{ width: "294px" }}>
                <p
                  className="font-bold italic text-[#1f1f1f] uppercase"
                  style={{ fontSize: "14px", lineHeight: 1.1, letterSpacing: "-0.04em" }}
                >
                  H.Studio is a{" "}
                  <span className="font-normal">full-service</span>
                  {" "}creative studio creating beautiful digital experiences
                  and products. We are an{" "}
                  <span className="font-normal">award winning</span>
                  {" "}design and art group specializing in branding, web
                  design and engineering.
                </p>
                <button className="self-start bg-black text-white px-4 py-3 rounded-3xl font-medium text-sm tracking-[-0.04em]">
                  Let&apos;s talk
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile full-screen menu ── */}
        {menuOpen && (
          <div className="md:hidden absolute inset-0 bg-[#fafafa] z-50 flex flex-col px-4 py-6">
            <div className="flex items-center justify-between mb-10">
              <span className="font-semibold text-base text-black capitalize tracking-[-0.04em]">
                H.Studio
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-semibold text-3xl text-black capitalize tracking-[-0.04em]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>

            <button className="self-start bg-black text-white px-4 py-3 rounded-3xl font-medium text-sm tracking-[-0.04em]">
              Let&apos;s talk
            </button>
          </div>
        )}
      </section>

      {/* ─── About Headline Section ─── */}
      <section className="overflow-hidden px-4 py-12 md:px-8 md:py-[120px]">
        <div className="flex flex-col gap-6 w-full">

          {/* Label + divider */}
          <div className="flex flex-col gap-3 items-end w-full">
            <p
              className="font-mono font-normal text-[#1f1f1f] uppercase text-right text-sm"
              style={{ lineHeight: 1.1 }}
            >
              [ 8+ years in industry ]
            </p>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* ── Desktop: staggered cascade layout — all values in vw (÷1440) so it scales with viewport ── */}
          <div className="hidden md:flex flex-col" style={{ gap: "0.56vw" }}>

            {/* Line 1 — A creative director   / */}
            <div className="flex items-start uppercase" style={{ gap: "0.83vw" }}>
              <p
                className="font-light text-black whitespace-pre"
                style={{ fontSize: "6.667vw", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                A creative director   /
              </p>
              <span
                className="font-mono font-normal text-[#1f1f1f]"
                style={{ fontSize: "14px", lineHeight: 1.1, marginTop: "0.07vw" }}
              >
                001
              </span>
            </div>

            {/* Line 2 — Photographer */}
            <div className="uppercase" style={{ paddingLeft: "14.86vw" }}>
              <p
                className="font-light text-black whitespace-nowrap"
                style={{ fontSize: "6.667vw", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                Photographer
              </p>
            </div>

            {/* Line 3 — Born & raised */}
            <div className="uppercase" style={{ paddingLeft: "42.36vw" }}>
              <p
                className="font-light text-black whitespace-nowrap"
                style={{ fontSize: "6.667vw", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                Born{" "}
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  &amp;
                </span>
                {" "}raised
              </p>
            </div>

            {/* Line 4 — on the south side */}
            <div className="uppercase">
              <p
                className="font-light text-black whitespace-nowrap"
                style={{ fontSize: "6.667vw", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                on the south side
              </p>
            </div>

            {/* Line 5 — of chicago. + [ creative freelancer ] */}
            <div className="relative uppercase" style={{ paddingLeft: "42.08vw" }}>
              <p
                className="font-light text-black whitespace-nowrap"
                style={{ fontSize: "6.667vw", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                of chicago.
              </p>
              <p
                className="absolute font-mono font-normal text-[#1f1f1f] whitespace-nowrap"
                style={{ left: "74.93vw", top: "1.81vw", fontSize: "14px", lineHeight: 1.1 }}
              >
                [ creative freelancer ]
              </p>
            </div>
          </div>

          {/* ── Mobile: centered, smaller font ── */}
          <div
            className="md:hidden flex flex-col items-center text-center uppercase"
            style={{ gap: "8px" }}
          >
            <div className="flex flex-col items-center gap-3">
              <span
                className="font-mono font-normal text-sm text-[#1f1f1f]"
                style={{ lineHeight: 1.1 }}
              >
                001
              </span>
              <p
                className="font-light text-black whitespace-pre"
                style={{ fontSize: "32px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                A creative director   /
              </p>
            </div>

            <p
              className="font-light text-black whitespace-nowrap"
              style={{ fontSize: "32px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              Photographer
            </p>

            <p
              className="font-light text-black whitespace-nowrap"
              style={{ fontSize: "32px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              Born{" "}
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                &amp;
              </span>
              {" "}raised
            </p>

            <p
              className="font-light text-black whitespace-nowrap"
              style={{ fontSize: "32px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
            >
              on the south side
            </p>

            <div className="flex flex-col items-center gap-3">
              <p
                className="font-light text-black"
                style={{ fontSize: "32px", lineHeight: 0.84, letterSpacing: "-0.08em" }}
              >
                of chicago.
              </p>
              <span
                className="font-mono font-normal text-sm text-[#1f1f1f]"
                style={{ lineHeight: 1.1 }}
              >
                [ creative freelancer ]
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── About Portrait (002) ─── */}
      <section id="about" className="bg-[#fafafa] px-4 py-12 md:px-8 md:py-20">

        {/* ── Mobile ── */}
        <div className="flex flex-col gap-5 md:hidden">
          <p className="font-mono font-normal text-[#1f1f1f] text-sm uppercase" style={{ lineHeight: 1.1 }}>
            002
          </p>
          <p className="font-mono font-normal text-[#1f1f1f] text-sm uppercase" style={{ lineHeight: 1.1 }}>
            [ About ]
          </p>
          <div className="flex items-center gap-3">
            <div className="flex flex-col self-stretch justify-between shrink-0 w-6">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <div className="flex-1 py-3">
              <p className="font-normal text-[#1f1f1f]" style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px" }}>
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
            </div>
            <div className="flex flex-col self-stretch justify-between shrink-0 w-6">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "422 / 594" }}>
            <img
              src={ABOUT_PORTRAIT}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* ── Desktop ── */}
        <div className="hidden md:flex items-start justify-between">
          {/* [ About ] label — top-left */}
          <p className="font-mono font-normal text-[#1f1f1f] text-sm uppercase shrink-0" style={{ lineHeight: 1.1 }}>
            [ About ]
          </p>

          {/* Right column — text box + 002 + portrait */}
          <div className="flex items-end gap-8 flex-1 ml-8">

            {/* Text box with corner brackets */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex flex-col self-stretch justify-between shrink-0 w-6">
                <CornerBracket />
                <CornerBracket className="-rotate-90" />
              </div>
              <div className="flex-1 py-3">
                <p className="font-normal text-[#1f1f1f]" style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px" }}>
                  Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
                </p>
              </div>
              <div className="flex flex-col self-stretch justify-between shrink-0 w-6">
                <CornerBracket className="rotate-90" />
                <CornerBracket className="rotate-180" />
              </div>
            </div>

            {/* 002 label + portrait image */}
            <div className="flex gap-6 items-start shrink-0">
              <p className="font-mono font-normal text-[#1f1f1f] text-sm uppercase" style={{ lineHeight: 1.1 }}>
                002
              </p>
              <div
                className="relative overflow-hidden shrink-0"
                style={{ width: "436px", height: "614px" }}
              >
                <img
                  src={ABOUT_PORTRAIT}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "-0.69%",
                    left: "-0.71%",
                    width: "101.42%",
                    height: "101.39%",
                    maxWidth: "none",
                  }}
                />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ─── Photographer Full-Bleed Image ─── */}
      <section>
        {/* Desktop — landscape fill */}
        <div className="hidden md:block relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={PHOTOGRAPHER_IMAGE}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Mobile — portrait crop matching Figma positioning */}
        <div className="md:hidden relative w-full overflow-hidden" style={{ aspectRatio: "422 / 594" }}>
          <img
            src={PHOTOGRAPHER_IMAGE}
            alt=""
            style={{
              position: "absolute",
              height: "100%",
              left: "-36.41%",
              top: "-0.04%",
              width: "213.34%",
              maxWidth: "none",
            }}
          />
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="bg-black px-4 py-12 md:px-8 md:py-20">
        <div className="flex flex-col gap-8 md:gap-12">

          {/* Label */}
          <p className="font-mono font-normal text-white text-sm uppercase" style={{ lineHeight: 1.1 }}>
            [ services ]
          </p>

          {/* [4] Deliverables */}
          <div className="flex items-center justify-between w-full whitespace-nowrap">
            <p
              className="font-light text-white uppercase"
              style={{ fontSize: "clamp(32px, 6.667vw, 96px)", letterSpacing: "-0.08em", lineHeight: "normal" }}
            >
              [4]
            </p>
            <p
              className="font-light text-white uppercase"
              style={{ fontSize: "clamp(32px, 6.667vw, 96px)", letterSpacing: "-0.08em", lineHeight: "normal" }}
            >
              Deliverables
            </p>
          </div>

          {/* Service items */}
          <div className="flex flex-col gap-12">
            {SERVICES.map((service) => (
              <div key={service.index} className="flex flex-col gap-[9px]">

                {/* Index + rule */}
                <p className="font-mono font-normal text-white text-sm uppercase" style={{ lineHeight: 1.1 }}>
                  {service.index}
                </p>
                <div className="w-full h-px bg-white" />

                {/* Desktop: title left — description + thumbnail right */}
                <div className="hidden md:flex items-start justify-between pt-1">
                  <p
                    className="font-bold italic text-white uppercase whitespace-nowrap shrink-0"
                    style={{ fontSize: "36px", lineHeight: 1.1, letterSpacing: "-1.44px" }}
                  >
                    {service.title}
                  </p>
                  <div className="flex gap-6 items-start">
                    <p
                      className="font-normal text-white"
                      style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px", width: "393px" }}
                    >
                      {service.description}
                    </p>
                    <div className="relative shrink-0 overflow-hidden" style={{ width: "151px", height: "151px" }}>
                      <img
                        src={service.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile: title → description → thumbnail stacked */}
                <div className="md:hidden flex flex-col gap-4 pt-1">
                  <p
                    className="font-bold italic text-white uppercase"
                    style={{ fontSize: "36px", lineHeight: 1.1, letterSpacing: "-1.44px" }}
                  >
                    {service.title}
                  </p>
                  <p
                    className="font-normal text-white"
                    style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px" }}
                  >
                    {service.description}
                  </p>
                  <div className="relative overflow-hidden" style={{ width: "151px", height: "151px" }}>
                    <img
                      src={service.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ─── Selected Work / Projects ─── */}
      <section id="projects" className="bg-[#fafafa] px-4 py-12 md:px-8 md:py-20">

        {/* ── Mobile ── */}
        <div className="flex flex-col gap-8 md:hidden">
          <div className="flex flex-col gap-4">
            <p className="font-mono font-normal text-[#1f1f1f] text-sm uppercase" style={{ lineHeight: 1.1 }}>
              [ portfolio ]
            </p>
            <div className="flex items-start justify-between w-full uppercase whitespace-nowrap">
              <div
                className="flex flex-col font-light text-black"
                style={{ fontSize: "32px", letterSpacing: "-2.56px", lineHeight: 0.86 }}
              >
                <p>Selected</p>
                <p>Work</p>
              </div>
              <p className="font-mono font-normal text-[#1f1f1f] text-sm" style={{ lineHeight: 1.1 }}>
                004
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} height={390} aspectRatio="3/4" titleSize={24} />
            ))}
          </div>
          <ProjectsCTA />
        </div>

        {/* ── Desktop ── */}
        <div className="hidden md:flex flex-col gap-[61px]">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
              <div
                className="flex flex-col font-light text-black"
                style={{ fontSize: "96px", letterSpacing: "-7.68px", lineHeight: 0.86 }}
              >
                <p>Selected</p>
                <p>Work</p>
              </div>
              <p className="font-mono font-normal text-[#1f1f1f] text-sm" style={{ lineHeight: 1.1 }}>
                004
              </p>
            </div>
            {/* Vertical [ portfolio ] label */}
            <div className="flex items-center justify-center" style={{ width: "15px", height: "110px" }}>
              <p
                className="font-mono font-normal text-[#1f1f1f] text-sm uppercase whitespace-nowrap"
                style={{ lineHeight: 1.1, transform: "rotate(-90deg)" }}
              >
                [ portfolio ]
              </p>
            </div>
          </div>

          {/* Staggered two-column grid */}
          <div className="flex gap-6 items-end w-full">
            {/* Left column: cards 1+2 + CTA, spread via justify-between */}
            <div className="flex-1 self-stretch flex flex-col justify-between">
              <ProjectCard {...PROJECTS[0]} height={744} />
              <ProjectCard {...PROJECTS[1]} height={699} />
              <div style={{ maxWidth: "465px" }}>
                <ProjectsCTA />
              </div>
            </div>
            {/* Right column: offset 240px down, cards 3+4 */}
            <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
              <ProjectCard {...PROJECTS[2]} height={699} />
              <ProjectCard {...PROJECTS[3]} height={744} />
            </div>
          </div>
        </div>

      </section>
      {/* ─── Testimonials ─── */}
      <section className="bg-[#fafafa] relative md:min-h-[960px]">

        {/* ── Mobile: heading + horizontal scroll ── */}
        <div className="md:hidden flex flex-col gap-8 px-4 py-16">
          <p
            className="font-medium text-black text-center capitalize"
            style={{ fontSize: "64px", letterSpacing: "-4.48px", lineHeight: 0.8 }}
          >
            Testimonials
          </p>
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} style={{ transform: `rotate(${i % 2 === 0 ? -3.5 : 2}deg)` }}>
                  <TestimonialCard {...t} width={260} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop: absolutely scattered cards around giant heading ── */}

        {/* Lukas — sits BEHIND the heading (painted first) */}
        <div
          className="hidden md:block absolute"
          style={{ left: 676, top: 272, zIndex: 1 }}
        >
          <div style={{ transform: `rotate(${TESTIMONIALS[1].rotation}deg)` }}>
            <TestimonialCard {...TESTIMONIALS[1]} />
          </div>
        </div>

        {/* "Testimonials" heading — middle layer */}
        <div
          className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none"
          style={{ zIndex: 2 }}
        >
          <p
            className="font-medium text-black text-center capitalize"
            style={{ fontSize: "198px", letterSpacing: "-13.86px", lineHeight: 1.1 }}
          >
            Testimonials
          </p>
        </div>

        {/* Marko, Sarah, Sofia — in FRONT of heading (painted last) */}
        {([TESTIMONIALS[0], TESTIMONIALS[2], TESTIMONIALS[3]] as typeof TESTIMONIALS).map((t) => (
          <div
            key={t.name}
            className="hidden md:block absolute"
            style={{ left: t.left, top: t.top, zIndex: 3 }}
          >
            <div style={{ transform: `rotate(${t.rotation}deg)` }}>
              <TestimonialCard {...t} />
            </div>
          </div>
        ))}

      </section>

      {/* ─── News ─── */}
      <section id="news" className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px]">

        {/* ── Mobile: heading + horizontal scroll ── */}
        <div className="flex flex-col gap-8 md:hidden">
          <p className="font-light text-black uppercase" style={{ fontSize: "32px", letterSpacing: "-2.56px", lineHeight: 0.86 }}>
            Keep up with my latest news &amp; achievements
          </p>
          <div className="overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {NEWS_ITEMS.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 shrink-0" style={{ width: "300px" }}>
                  <div className="relative overflow-hidden w-full" style={{ height: "398px" }}>
                    <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <p className="font-normal text-[#1f1f1f]" style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px" }}>
                    {item.text}
                  </p>
                  <a href="#" className="border-b border-black flex items-center gap-[10px] py-1 self-start">
                    <span className="font-medium text-black" style={{ fontSize: "14px", letterSpacing: "-0.56px" }}>Read more</span>
                    <ArrowIcon size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop: vertical title left + 3 staggered cards right ── */}
        <div className="hidden md:flex items-end justify-between">

          {/* Vertical rotated title */}
          <div className="flex-none flex items-center justify-center" style={{ width: "110px", height: "706px" }}>
            <div style={{ transform: "rotate(-90deg)" }}>
              <p className="font-light text-black uppercase whitespace-nowrap" style={{ fontSize: "64px", letterSpacing: "-5.12px", lineHeight: 0.86 }}>
                Keep up with my latest
              </p>
              <p className="font-light text-black uppercase whitespace-nowrap" style={{ fontSize: "64px", letterSpacing: "-5.12px", lineHeight: 0.86 }}>
                News &amp; achievements
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex items-end flex-1 ml-8">
            {NEWS_ITEMS.map((item, i) => (
              <div key={i} className="flex items-end flex-1 min-w-0">
                {/* Vertical divider before card 2 and 3 */}
                {i > 0 && (
                  <div className="w-px self-stretch shrink-0 mx-6" style={{ background: "rgba(0,0,0,0.15)" }} />
                )}
                <div
                  className="flex flex-col gap-4 flex-1 min-w-0"
                  style={{ paddingTop: item.offset ? "120px" : 0 }}
                >
                  <div className="relative overflow-hidden w-full" style={{ height: "469px" }}>
                    <img src={item.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <p className="font-normal text-[#1f1f1f]" style={{ fontSize: "14px", lineHeight: 1.3, letterSpacing: "-0.56px" }}>
                    {item.text}
                  </p>
                  <a href="#" className="border-b border-black flex items-center gap-[10px] py-1 self-start">
                    <span className="font-medium text-black" style={{ fontSize: "14px", letterSpacing: "-0.56px" }}>Read more</span>
                    <ArrowIcon size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
