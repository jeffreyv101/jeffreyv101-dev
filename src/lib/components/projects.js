import sdcLogo from '$lib/assets/sdc-club-logo.png'
import missionizeLogo from '$lib/assets/missionize-logo.png'
import jaarsHealthcare from '$lib/assets/jaars-healthcare.png'
import twr360 from '$lib/assets/twr360.png'
import repoReelsLight from '$lib/assets/repo-reels-light.png'
import repoReelsDark from '$lib/assets/repo-reels-dark.png'

// Project List
const projects = [
    {
        title: "Repo Reels",
        image: repoReelsLight,
        skills: ["React Native", "PostgreSQL", "Node.js", "Express.js", "GitHub API"],
        description: "Inspired by the quick, dynamic nature of Instagram Reels, with the collaborative spirit of Git, Repo Reels will be a go-to hub for sharing and discovering bite-sized, visual content that revolves around programming.",
        link: "WIP"
    },
    {
        title: "Software Development Club Website",
        image: sdcLogo,
        skills: ["React.js", "React Router", "Vite.js", "Tailwind CSS"],
        description: "Developing a website for the Liberty University Software Development Club to help students find resources and information about the club. The website will include a blog, a resources page, and a contact page.",
        link: "WIP"
    },
    {
        title: "Missionize & Discipler",
        image: missionizeLogo,
        skills: ["React.js", "OpenAI GPT-4", "Node.js", "Supabase", "Twilio"],
        description: "Played a crucial part in the development of Discipler, an AI-driven personal development platform designed to deliver daily, customized growth plans for individuals, groups, and communities. Leveraging GPT-4 and modern web technologies, the platform generates dynamic content, tracks user habits, and fosters engagement through gamified features and group analytics.",
        link: "https://discipler.io"
    },
    {
        title: "JAARS Healthcare Portal",
        image: jaarsHealthcare,
        skills: ["Salesforce Digital Experience", "Lightning Apps"],
        description: "Led the development of a healthcare portal for JAARS, a non-profit organization, to help missionaries and their families communicate documents and schedule time with healthcare providers in their area. The portal was developed using the organization's sandbox Salesforce account and the Salesforce Lightning Web Component framework. The project was completed in a team of 5 members using agile methodologies.",
        link: "NA"
    },
    {
        title: "TWR360 RSS.com Podcast Delivery System",
        skills: ["AWS EC2", "Python"],
        image: twr360,
        description: "Led the development of a JSON feed to XML feed converter to develop a robust podcast delivery system for internal use for the TWR360 platform in a club team of 10 members using V-shaped methodology.",
        link: "NA"
    },
    {
        title: "TWR360 Generative AI Chatbot",
        skills: ["Google Generative AI", "Google Cloud Platform", "AWS EC2", "S3"],
        image: twr360,
        description: "Built a generative AI chatbot for the TWR360 platform to help users find relevant content. Click the follow link to go to the TWR360 homepage where the chatbot widget will be located on the lower right corner:",
        link: "https://twr360.org"
    },
    {
        title: "JPMorgan Software Engineering Virtual Experience",
        image: "",
        skills: ["Java", "Maven", "Spring", "Kafka", "SQL", "REST API"],
        description: "Over the period of August 2023, completed this virtual experience program. The application interfaced with a stock price data feed, utilizing JPMorgan Chase & Co's frameworks and tools.  Presented the data visually for traders.",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_sZPzENtiAe9DFXqeJ_1692719265228_completion_certificate.pdf"
    }
];
export default projects;