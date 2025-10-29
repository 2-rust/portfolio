import type { Metadata } from "next";

export const metaData: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "Dillon Portfolio",
        title:
            "Dillon Marszalek | Software Developer",
        description:
            "Discover Dillon Marszalek, Passionate and seasoned solution architect and software engineer with a robust expertise in web and blockchain technologies. Over the past eight years, I've effectively leveraged technology to craft innovative digital solutions. I thrive on embracing new challenges and navigating through obstacles to deliver impactful results. Excited about pushing the boundaries of technology and contributing to the ever-evolving landscape of digital solutions.",
        images: [
            {
                url: "/logo.webp",
                alt: "Dillon Marszalek | Software Developer | React, Next.js, Nest.js",
                height: 630,
                width: 1200,
            },
        ],
    },
    title:
        "Dillon Marszalek | Software Developer | React, Next.js, Nest.js in Himachal Pradesh",
    description:
        "Discover Dillon Marszalek, Discover Dillon Marszalek, Passionate and seasoned solution architect and software engineer with a robust expertise in web and blockchain technologies. Over the past eight years, I've effectively leveraged technology to craft innovative digital solutions. I thrive on embracing new challenges and navigating through obstacles to deliver impactful results. Excited about pushing the boundaries of technology and contributing to the ever-evolving landscape of digital solutions.",
    keywords:
        "Dillon Marszalek, Blockchain and Full-Stack Developer, Solana Developer, EVM developer, Bitcoin Developer, ReactJS Developer, NextJS Developer, NestJS Developer, Remix Developer, Shopify Apps, AI Innovation, Web Development, Portfolio, React developer, Next js developer, Nest js developer, Himachal Pradesh, India, PostgreSQL, Strapi, Sanity, Supabase, Appwrite, TailwindCSS",
    robots:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
        icon: "/favicon.ico",
        apple: "/logo.png",
    },
    authors: {
        name: "Dillon Marszalek",
        url: "https://github.com/2-rust",
    },
};
