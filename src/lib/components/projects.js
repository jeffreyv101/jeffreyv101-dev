import sdcLogo from '$lib/assets/projects/sdc-club-logo.png'
import missionizeLogo from '$lib/assets/projects/missionize-logo.png'
import twr360 from '$lib/assets/experience/twr360.png'

// Project List
const projects = [
    {
        "title": "Discipler",
        "image": missionizeLogo,
        "skills": ["React Native", "fastAPI", "MongoDB", "GPT-4"],
        "description": [
            "Leading the technical development of Discipler, an AI-driven personal development platform designed to deliver daily, customized growth plans for individuals, groups, and communities. Leveraging GPT-4 and modern web technologies, the platform generates dynamic content, tracks user habits, and fosters engagement through gamified features and group analytics."
        ],
        "link": "WIP"
    },
    {
        "title": "Family Financial Literacy Application",
        "skills": ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
        "description": [
            "Developed a comprehensive family financial education platform that allows parents to teach their children about money management through a virtual banking system."
        ],
        "link": "https://familyfinlit.org"
    },
    {
        "title": "Software Development Club Website",
        "image": sdcLogo,
        "skills": ["React.js", "React Router", "Vite.js", "Tailwind CSS"],
        "description": [
            "Developed a website for the Liberty University Software Development Club to help students find resources and information about the club. The website includes information about upcoming events, club resources, and projects."
        ],
        "link": "https://lusdc.org"
    },
    {
        "title": "TWR360 Generative AI Chatbot",
        "skills": ["Google Generative AI", "Google Cloud Platform", "Node.js", "AWS EC2", "S3"],
        "image": "twr360.png",
        "description": [
            "Built a generative AI chatbot for the TWR360 platform to help users find relevant content. Click the follow link to go to the TWR360 homepage where the chatbot widget will be located on the lower right corner:"
        ],
        "link": "https://twr360.org"
    },
    {
        "title": "TWR360 RSS.com Podcast Delivery System",
        "skills": ["AWS EC2", "Python"],
        "image": twr360,
        "description": [
            "Led the development of a JSON feed to XML feed converter to develop a robust podcast delivery system for internal use for the TWR360 platform in a club team of 10 members using V-shaped methodology."
        ],
        "link": "NA"
    },
    {
        "title": "JPMorgan Software Engineering Virtual Experience",
        "image": "",
        "skills": ["Java", "Maven", "Spring", "Kafka", "SQL", "REST API"],
        "description": [
            "Over the period of August 2023, completed this virtual experience program. The application interfaced with a stock price data feed, utilizing JPMorgan Chase & Co's frameworks and tools.  Presented the data visually for traders."
        ],
        "link": "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_sZPzENtiAe9DFXqeJ_1692719265228_completion_certificate.pdf"
    }
];
export default projects;