"use client";

import { useState } from "react";

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/728a7bbd-68d3-43ce-8202-844e2cae2c92";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

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
    </main>
  );
}
