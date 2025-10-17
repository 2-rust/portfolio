import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { FiCpu, FiHeadphones, FiMonitor } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiPostgresql,
  SiSanity,
  SiStrapi,
  SiNestjs,
  SiCloudflare,
  SiRedux,
  SiSupabase,
  SiRemix,
  SiSass,
  SiBootstrap,
  SiContentful,
  SiRust,
  SiSolidity,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiVite,
  SiGit
} from "react-icons/si";

export const socialLinks = [
  {
    id: 5,
    priority: 1,
    title: "GitHub",
    url: "https://github.com/2-rust",
  },
  {
    id: 6,
    priority: 2,
    title: "Twitter",
    url: "https://twitter.com/t_rustdev_",
  },
  {
    id: 7,
    priority: 3,
    title: "Telegram",
    url: "https://t.me/rust_devv",
  },
  // {
  //   id: 8,
  //   priority: 4,
  //   title: "Instagram",
  //   url: "https://www.instagram.com/imabhishek.dev/",
  // },
];

export const personalInfo = {
  name: "Dillon Marszalek",
  title: "Blockchain & Full Stack Developer",
  avatar: "/images/about/logo.png",
  email: "dillonking130@gmail.com",
  location: "Ontario, Canada",
  description:
    "Passionate and seasoned solution architect and software engineer with a robust expertise in web and blockchain technologies. Over the past eight years, I've effectively leveraged technology to craft innovative digital solutions. I thrive on embracing new challenges and navigating through obstacles to deliver impactful results. Excited about pushing the boundaries of technology and contributing to the ever-evolving landscape of digital solutions.",
};

export const heroSection = {
  personalInfo: personalInfo,
  socialLinks: socialLinks,
};

export const workExperience = [
  {
    company: "Freelancer",
    position: "Trading Bot Developer",
    period: "Feb 2024 - Present",
    shortDesc:
      "",
    bulletPoints: [
      "Created bot systems for blockchain transaction automation, including trading bots(Bundler, Volume, Sniper, Copy Trading), arbitrage, and liquidations on Solana Network(Pump.fun, Raydium and Meteora)",
      "Also Created Bundler and Volume Booster on Four.meme(BNB)",
      "Developed on-chain trading business logic and implemented it into a Node.js back end paired with a MySQL database",
      "Created API and WebSocket endpoints for live data feeds and direct connection to the front end",
      "Expanded the system for commercial use, enabling multiple users to access it simultaneously",
      "Integrating AI tools into internal projects to enhance automation and workflows",
      "Utilized various decentralized finance liquidity pool protocols such as Jito and Uniswap",
    ],
  },
  {
    company: "NFheroes, LLC",
    position: "DeFi Engineer",
    period: "May 2023 - Feb 2024",
    shortDesc:
      "",
    bulletPoints: [
      "Built a decentralized finance blockchain app that automatically indexes and tracks tokens on the blockchain with support for BNB Chain, Ethereum, and Fantom",
      " Built the back-end of the application, processing blockchain data to track price activity and trade volume of tokens in real-time. Enabled advanced aggregation and analytics to provide in-depth, instantaneous tracking",
      "Designed and implemented microservice architecture on AWS Elastic container service and AWS RDS (Postgres DB), processing months of blockchain data. Microservices were written in TypeScript using Nest.js",
      "Designed web app using Figma and worked with front-end engineer to build React front-end for the app hosted on Vercel (Next.js). Also did a bit of front-end development myself",
      "Built an automated CI/CD pipeline using GitHub and GitHub Actions to automatically deploy the back end and website",
      "Wrote smart contracts to analyze on-chain data and look for potential scam tokens",
    ],
  },
  {
    company: "Moduluc",
    position: "Senior Solana Smart Contract Developer",
    period: "",
    shortDesc:
      "March 2022 - May 2023",
    bulletPoints: [
      "Developed and deployed new Solana programs to enhance the company’s blockchain ecosystem",
      "Collaborated with internal teams to design, build, and optimize Solana-based applications",
      "Led the development team, overseeing technical implementation and ensuring high-quality code delivery",
      "Directed end-to-end development of Solana smart contracts with Anchor, improving performance and reliability",
    ],
  },
  {
    company: "MintySwap, PTE LTD",
    position: "Evm Smart Contracts Developer",
    period: "",
    shortDesc:
      "",
    bulletPoints: [
      "Created and deployed a staking contract for the platform token",
      "Created a demo DApp for the staking contract",
      "Implemented and deployed the graph for the staking contract tracking all events and allowing more advanced queries",
    ],
  },
  {
    company: "Brand View",
    position: "Full Stack Developer",
    period: "Nov 2018 - May 2020",
    shortDesc:
      "",
    bulletPoints: [
      "Adapted the back end to switch from MySQL to MongoDB, enhancing the scalability and performance of the database system better to handle the increasing volume of user data and transactions",
      "Designed and implemented a robust user authentication system, ensuring secure access and protecting sensitive user information",
      "Developed a seamless payment processing system, integrating various payment gateways to facilitate smooth and secure transactions",
      "Delivered a scalable architecture that supported future expansion and growth, allowing the platform to adapt to increasing user demands and new feature integrations",
      "Worked closely with cross-functional teams to design, develop, and deploy critical features, fostering a collaborative environment that contributed to the successful delivery of the project",
    ],
  },
];

export const techStack = [
  // === FRONTEND ===
  { name: "Rust", icon: SiRust, color: "text-white", type: "Frontend" },
  { name: "Solidity", icon: SiSolidity, color: "text-teal-300", type: "Frontend" },
  { name: "Python", icon: SiPython, color: "text-sky-400", type: "Frontend" },
  { name: "C++", icon: SiCplusplus, color: "text-purple-300", type: "Frontend" },
  { name: "Docker", icon: SiDocker, color: "text-gray-600", type: "Frontend" },
  { name: "Vite", icon: SiVite, color: "text-pink-500", type: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", type: "Frontend" },
  { name: "React", icon: FaReact, color: "text-blue-400", type: "Frontend" },
  { name: "Remix", icon: SiRemix, color: "text-indigo-500", type: "Frontend" },
  {
    name: "Redux",
    icon: SiRedux,
    color: "text-purple-700",
    type: "Frontend",
  },

  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    type: "Frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    type: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "text-purple-600",
    type: "Frontend",
  },
  { name: "SCSS", icon: SiSass, color: "text-pink-600", type: "Frontend" },

  // === BACKEND & DATABASES ===
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    type: "Backend & Databases",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
    type: "Backend & Databases",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-400",
    type: "Backend & Databases",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-green-400",
    type: "Backend & Databases",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-400",
    type: "Backend & Databases",
  },

  // === CMS ===
  { name: "Sanity", icon: SiSanity, color: "text-red-500", type: "CMS" },
  { name: "Strapi", icon: SiStrapi, color: "text-blue-700", type: "CMS" },
  {
    name: "Contentful",
    icon: SiContentful,
    color: "text-blue-500",
    type: "CMS",
  },

  // === TOOLS & DEVOPS ===
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    type: "Tools & DevOps",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    color: "text-orange-400",
    type: "Tools & DevOps",
  },
];

export const projects = [
  {
    title: "Critters Quest ",
    description:
      "This project is a blockchain-based gaming and collectible platform built on Solana. Users can own, stake, and trade NFTs (digital collectibles), and possibly earn rewards through gameplay or participation.",
    image: "/images/projects/critters.quest.png",
    liveUrl: "https://critters.quest/",
    githubUrl: "https://github.com/2-rust/critters-quest",
    techStack: ["Next.js", "Rust", "TypeScript", "Tailwind"]
    // techStack: techStack.filter((item) =>
    //   ["Next.js", "Rust", "TypeScript", "Tailwind"].includes(item.name)
    // ),
  },
  {
    title: "Nutmarket ",
    description:
      "Nut.market is a crypto / DeFi marketplace platform where users can list, trade, or interact with digital assets (i.e. tokens / NFTs). I contributed by building the frontend with Next.js and Tailwind, integrating smart contract calls via Web3.js / ethers, and ensuring smooth UX for listing & asset browsing",
    image: "/images/projects/nutmarket.png",
    liveUrl: "https://nut.market/",
    githubUrl: "https://github.com/2-rust/nut.market-marketplace",
    techStack: ["Next.js", "Rust", "Anchor", "Web3.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Floppylabs ",
    description:
      "FloppyLabs is a “staking-as-a-service” platform on Solana. It enables NFT projects to deploy staking functionalities in minutes — handling staking, escrow, rewards, analytics, and UI — with minimal fuss. They monetize via small transaction fees (e.g. 0.01 SOL per stake/unstake).",
    image: "/images/projects/floppylabs.png",
    liveUrl: "https://floppylabs.io/",
    githubUrl: "https://github.com/2-rust/floppylabs-nft-staking",
    techStack: ["Next.js", "Rust", "TypeScript", "Tailwind", "Anchor", "Web3.js"]
  },
  {
    title: "Arcus  ",
    description:
      "Arcus is an institutional-grade Bitcoin yield and credit infrastructure platform. With MPC-based custody, permissioned access, and an API for lending/credit services, it enables institutions to safely deploy Bitcoin capital and generate yield.",
    image: "/images/projects/arcus.png",
    liveUrl: "https://arcusbtc.com/",
    githubUrl: "https://github.com/ArcusBTC/arcus-app",
    techStack: ["React.js", "Bitcoin.js", "TypeScript", "Tailwind", "Node.js"]
  },
  {
    title: "InternetJpegs ",
    description:
      "InternetJPEG is a digital art / Ordinal platform focusing on JPEG-based collectibles. It provides tools for minting, showcasing, and trading visual digital assets — blending internet culture with crypto art.",
    image: "/images/projects/internetjpeg.png",
    liveUrl: "https://internetjpeg.com/",
    githubUrl: "https://github.com/internetjpegs-com/Frontend",
    techStack: ["Vite.js", "Bitcoin.js", "TypeScript", "Tailwind", "Nest.js"]
  },
  {
    title: "BMP BRC20",
    description:
      "Airdrop platform for BRC20 tokens to Taproot addresses. Supports Unisat, Leader, and XVerse wallets. Utilized `PSBT` & `bitcoinjs` for deploying & minting tokens.",
    image: "/images/projects/brc20.png",
    liveUrl: "https://bmpbrc.com/",
    githubUrl: "https://github.com/2-rust/BRC20-withdraw-Backend",
    techStack: ["React.js", "Bitcoin.js", "TypeScript", "Tailwind", "Node.js"]
  },
  {
    title: "HydraSwap",
    description:
      "Cross-chain DEX with Hydra Market Maker (HMM) smart pricing algorithm. Concentrated liquidity for better LP rewards & impermanent loss reduction.",
    image: "/images/projects/hydraswap.png",
    liveUrl: "https://hydraswap.io/",
    githubUrl: "https://github.com/2-rust/hydra-swap-HMM-dex",
    techStack: ["React", "Rust", "TypeScript", "Tailwind", "Anchor"]
  },
  {
    title: "DigiMonkz",
    description:
      "Web3 NFT staking platform where users mint GEN111/GEN2 NFTs. Holders earn artifacts as rewards from staking.",
    image: "/images/projects/dizmonkz.jpg",
    liveUrl: "https://digimonkz.com/",
    githubUrl: "https://github.com/2-rust/DigiMonkz-Staking",
    techStack: ["React", "Solidity", "TypeScript", "Tailwind"]
  },
  {
    title: "Playzelo",
    description:
      "Deployed on Bitcoin, Ethereum, Binance, and Solana. Includes Scissors, Turtlerace, Mines, Dice, Plinko, Slot, Crash games. Supports native tokens & USDT, USDC for betting.",
    image: "/images/projects/playzelo.png",
    liveUrl: "https://playzelo.xyz/",
    githubUrl: "https://github.com/2-rust/scissors/tree/master/backend",
    techStack: ["Next.js", "Rust", "TypeScript", "Tailwind", "Solidity"]
  },
  {
    title: "Seek Syndicate",
    description:
      "P2E Game with SPL token rewards. Built Smart Contracts using Anchor (Rust) & Next.js for frontend.",
    image: "/images/projects/seek.jpg",
    liveUrl: "https://www.seekersyndicate.com/",
    githubUrl: "https://github.com/2-rust/SPLFaucetSmartContract",
    techStack: ["Vite.js", "Rust", "TypeScript", "Tailwind"]
  },
  {
    title: "Yieldz Lending",
    description:
      "DeFi Lending Protocol offering real-yield mechanisms for investors. First multi-layered real-yield ecosystem providing stable passive income.",
    image: "/images/projects/yy.png",
    liveUrl: "https://yieldzprotocol.com/",
    githubUrl: "https://github.com/2-rust/360-Defi-SmartContract",
    techStack: ["React", "Solidity", "TypeScript", "Tailwind"]
  },
  {
    title: "Nyx Cipher",
    description:
      "Developing AI-driven blockchain agents to automate financial and social intelligence on Ethereum(Base) & Solana. Integrating smart contracts with AI processing to optimize blockchain interactions. Cut research time 90%, amplify productivity by 10x. Power smarter investment decisions..",
    image: "/images/projects/nyx.png",
    liveUrl: "https://nyxcipher.ai/",
    githubUrl: "https://github.com/2-rust/Nyx-Cipher-Agent",
    techStack: ["Next.js", "LLM", "TypeScript", "Tailwind", "Web3.js", "Birdeye"]
  },
  {
    title: "Free Games Hub",
    description:
      "A treasure trove of free PC games and browser-based delights. Discover thrilling titles ready for download and instant play.",
    image: "/images/projects/free-games-hub.webp",
    liveUrl: "https://www.freegameshub.xyz",
    githubUrl: "https://github.com/2-rust/FreeGamesHub",
    techStack: ["Next.js", "TypeScript", "Tailwind"]
  },
];

export const setupSpecs = [
  {
    title: "RGB PC Build",
    subTitle:
      "Custom rig with 10C/16T, RTX 4060 and 32GB RAM for performance in dev & gaming.",
    icon: FiCpu,
  },
  {
    title: "Dual Monitor Setup",
    subTitle:
      "Lenovo 1080p + MSI 2K, 27” screens for perfect mix of clarity and productivity.",
    icon: FiMonitor,
  },
  {
    title: "Audio & Peripherals",
    subTitle:
      "Redragon speakers, Cosmic Byte keyboard & headphones, plus earbuds & neckband for Dolby audio and ANC.",
    icon: FiHeadphones,
  },
  {
    title: "Gaming Chair",
    subTitle:
      "Ergonomic comfort for long coding sessions and all-night builds.",
    icon: HiOutlineDesktopComputer,
  },
];

export const certifications = [
  {
    title: "Al Fluency: Framework & Foundations - Anthropic",
    image: "/images/certifications/ai-fluency.webp",
    url: "https://verify.skilljar.com/c/ekmscej8qr5j",
  },
  {
    title: "Subject Matter Expert - AWS",
    image: "/images/certifications/sme-aws.webp",
    url: "/images/certifications/sme-aws.webp",
  },
  {
    title: "Next.js - Vercel",
    image: "/images/certifications/vercel-next.webp",
    url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=54220&certId=dashboard-app-54220-1746641465395",
  },
  {
    title: "Frontend Developer (React) - HackerRank",
    image: "/images/certifications/hacker-rank.webp",
    url: "https://www.hackerrank.com/certificates/0b0a9b79a4a1",
  },
  {
    title: "Fundamentals of AI and ML - AWS",
    image: "/images/certifications/ai-ml.webp",
    url: "/images/certifications/ai-ml.webp",
  },
  {
    title: "Model Context Protocol - Anthropic",
    image: "/images/certifications/mcp.webp",
    url: "https://verify.skilljar.com/c/9ecfwypeucvc",
  },
];

export const testimonials = [
  {
    name: "Kevin",
    company: "internetjpeg.com",
    linkedIn: "",
    position: "Founder",
    avatar: "/images/testimonials/Kevin.png",
    testimonial:
      "Dillon worked with us and he was quite the problem solver. His ability to learn quickly and eagerness to learn new things was super helpful since we were a high velocity team and expected quick results. Would happily work with him again to develop good products, and recommend him to other employers looking for a fast learner in your team!",
  },
  {
    name: "Periwinkle",
    company: "CTO",
    linkedIn: "",
    position: "glittrfi",
    avatar: "/images/testimonials/Periwinkle.png",
    testimonial:
      "Dillon is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
];
