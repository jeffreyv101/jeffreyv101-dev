import pyinaboxLogo from '$lib/assets/projects/py-in-a-box.png'
import pythonRunner from '$lib/assets/projects/demos/python-runner.png'

import sdcLogo from '$lib/assets/projects/sdc-club-logo.png'
import sdcDemo from '$lib/assets/projects/demos/sdc-website.png'

import twr360 from '$lib/assets/experience/twr360.png'
import twr360Demo from '$lib/assets/projects/demos/twr360-chatbot.png'

import missionizeLogo from '$lib/assets/projects/missionize-logo.png'

// Project List
const projects = [
    {
        "title": "Py in a Box",
        "image": pyinaboxLogo,
        "demo-image": pythonRunner,
        "highlights": [
            "Workflow Engine Extension",
            "Multi-Language Script Support",
            "Sandboxed Execution Environment"
        ],
        "skills": ["Kubernetes", "Python", "PowerShell", "Docker"],
        "context": "CloudFit workflow users cannot take full advantage due to limited language support.",
        "description": [
            "As part of a capstone project with CloudFit Software, extended the organization's workflow engine to execute Python and PowerShell scripts within a sandboxed environment using Docker containers orchestrated by Kubernetes. Developed a user-friendly interface for script submission and result retrieval, enhancing the platform's versatility and user experience."
        ],
        "link": "NA"
    },
    {
        "title": "Software Development Club Website",
        "image": sdcLogo,
        "demo-image": sdcDemo,
        "skills": ["React.js", "React Router", "Vite.js", "Tailwind CSS"],
        "highlights": [
            "Club Information Hub",
            "Event Announcements",
            "Resource Repository"
        ],
        "context": "",
        "description": [
            "Developed a website for the Liberty University Software Development Club to help students find resources and information about the club. The website includes information about upcoming events, club resources, and projects."
        ],
        "link": "https://lusdc.org"
    },
    {
        "title": "TWR360 Generative AI Chatbot",
        "skills": ["Google Gemini", "Google Cloud Platform", "Node.js", "AWS EC2", "S3"],
        "image": twr360,
        "demo-image": twr360Demo,
        "highlights": [
            "Generative AI Chatbot Integration",
            "Content Discovery Enhancement",
            "User Engagement Improvement"
        ],
        "context": "",
        "description": [
            "Built a generative AI chatbot for the TWR360 platform to help users find relevant content. Click the follow link to go to the TWR360 homepage where the chatbot widget will be located on the lower right corner:"
        ],
        "link": "https://twr360.org"
    },
    {
        "title": "TWR360 RSS.com Podcast Delivery System",
        "skills": ["AWS EC2", "Python"],
        "image": twr360,
        "demo-image": "",
        "highlights": [
            "JSON to XML Feed Converter",
            "Robust Podcast Delivery System",
            "V-Shaped Methodology in Team of 10"
        ],
        "context": "",
        "description": [
            "Led the development of a JSON feed to XML feed converter to develop a robust podcast delivery system for internal use for the TWR360 platform in a club team of 10 members using V-shaped methodology."
        ],
        "link": "NA"
    },
    {
        "title": "Discipler",
        "image": missionizeLogo,
        "demo-image": "",
        "highlights": [
            "AI-Driven Personal Development Platform",
            "Custom Growth Plans",
            "Gamified Engagement"
        ],
        "skills": ["React Native", "fastAPI", "MongoDB", "GPT-4"],
        "context": "",
        "description": [
            "Leading the technical development of Discipler, an AI-driven personal development platform designed to deliver daily, customized growth plans for individuals, groups, and communities. Leveraging GPT-4 and modern web technologies, the platform generates dynamic content, tracks user habits, and fosters engagement through gamified features and group analytics."
        ],
        "link": "WIP"
    },
    {
        "title": "Family Financial Literacy Application",
        "skills": ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
        "image": "",
        "demo-image": "",
        "highlights": [
            "Comprehensive Financial Education Platform",
            "Virtual Banking System for Kids",
            "Parental Controls and Monitoring"
        ],
        "context": "",
        "description": [
            "Developed a comprehensive family financial education platform that allows parents to teach their children about money management through a virtual banking system."
        ],
        "link": "https://familyfinlit.org"
    },
    {
        "title": "JPMorgan Software Engineering Virtual Experience",
        "image": "",
        "demo-image": "",
        "skills": ["Java", "Maven", "Spring", "Kafka", "SQL", "REST API"],
        "highlights": [
            "Virtual Experience Program Completion",
            "Stock Price Data Feed Application",
            "JPMorgan Chase & Co Frameworks"
        ],
        "context": "Simulated the development of a risk-sensitive, high-performance banking backend system used at a large global financial-services firm, focusing on streaming data ingestion, microservices communication and rapid prototyping of reliable services.",
        "description": [
            "Set up and configured a Spring Boot application codebase, establishing development environment and build pipelines. Implemented event-driven message processing by integrating Apache Kafka as a message broker to handle transactional streams, enabling asynchronous, decoupled workflows. Developed and managed an in-memory H2 database layer to support rapid prototyping of persistence logic and service state without external dependencies."
        ],
        "link": "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_sZPzENtiAe9DFXqeJ_1692719265228_completion_certificate.pdf"
    }
];
export default projects;