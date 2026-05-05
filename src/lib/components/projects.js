import pyinaboxLogo from '$lib/assets/projects/py-in-a-box.png'
import pythonRunner from '$lib/assets/projects/demos/python-runner.png'

import sdcLogo from '$lib/assets/projects/sdc-club-logo.png'
import sdcDemo from '$lib/assets/projects/demos/sdc-website.png'

import twr360 from '$lib/assets/experience/twr360.png'
import twr360Demo from '$lib/assets/projects/demos/twr360-chatbot.png'

import mergedDemo from '$lib/assets/projects/demos/merged.png'
import fpmWebsite from '$lib/assets/projects/demos/fpm-website.png'
import weatherApp from '$lib/assets/projects/demos/weather-app.png'

import missionizeLogo from '$lib/assets/projects/missionize-logo.png'

// Project List
const projects = [
    {
        "title": "Merged: Social Media for Developers",
        "image": "",
        "demo-image": mergedDemo,
        "company": "Portfolio Project",
        "location": "Lynchburg, VA",
        "date": "March 2026 - May 2026",
        "skills": ["React Native", "fastAPI", "mongoDB"],
        "highlights": [
            "Developer-Centric Social Platform",
            "Project Sharing and Networking",
            "Tinder-Like Swipe Interface"
        ],
        "context": "As part of CSCN 408, a mini-capstone course, our team was tasked with developing a large-scale application to solve a problem of our choice. We chose to develop a social media platform for developers to share their projects and connect with other developers.",
        "description": [
            "Merged is a social media platform for developers to share their projects and connect with other developers. The platform allows users to create profiles, post updates about their projects, and follow/connect with other developers. The platform also features a tinder-like swipe interface to connect with other developers based on shared interests and project types. This emphasizes collaboration and networking within the developer community, fostering connections based on shared passions and project synergies."
        ],
        "link": "https://github.com/jeffreyv101/Merged"
    },
    {
        "title": "TWR360 Generative AI Chatbot",
        "skills": ["Google Gemini", "Google Cloud Platform", "Node.js", "AWS EC2", "S3"],
        "image": twr360,
        "demo-image": twr360Demo,
        "company": "Trans World Radio",
        "location": "Cary, NC",
        "date": "May 2024 - Aug 2024",
        "highlights": [
            "Generative AI Chatbot Integration",
            "Content Discovery Enhancement",
            "User Engagement Improvement"
        ],
        "context": "",
        "description": [
            "Built a generative AI chatbot for the TWR360 platform to help users find relevant content. Click the link below to go to the TWR360 homepage where the chatbot widget will be located on the lower right corner:"
        ],
        "link": "https://twr360.org"
    },
    {
        "title": "Python Script Workflow Execution Environment",
        "image": pyinaboxLogo,
        "demo-image": pythonRunner,
        "company": "CloudFit Software",
        "location": "Lynchburg, VA",
        "date": "August 2025 - May 2026",
        "highlights": [
            "Workflow Engine Extension",
            "Multi-Language Script Support",
            "Sandboxed Execution Environment"
        ],
        "skills": ["C#", "Kubernetes", "Python", "PowerShell", "Docker"],
        "description": [
            "As part of a capstone project with CloudFit Software, extended the organization's workflow engine to execute Python and PowerShell scripts within a sandboxed environment using Docker containers orchestrated by Kubernetes. Developed a user-friendly interface for script submission and result retrieval, enhancing the platform's versatility and user experience."
        ],
        "link": "NA"
    },
    {
        "title": "Software Development Club Website",
        "image": sdcLogo,
        "demo-image": sdcDemo,
        "company": "Liberty University",
        "location": "Lynchburg, VA",
        "date": "July 2025 - September 2025",
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
        "title": "Liberty University Facilities Planning & Management Website",
        "image": "",
        "demo-image": fpmWebsite,
        "company": "Liberty University",
        "location": "Lynchburg, VA",
        "date": "April 2025 - May 2025 & September 2025 - May 2026",
        "skills": ["WordPress", "HTML", "CSS"],
        "highlights": [
            "Facilities Information Hub",
            "Planning & Management Tools",
            "Resource Repository"
        ],
        "context": "",
        "description": [
            "Redesigned and launched a unified departmental site for 5+ formerly separate departments, boosting page views by 30% and engagement by 25% while ensuring brand consistency and improving navigation across the Liberty.edu domain. Architected an enterprise marketplace for facilities asset surplus for the university community and the public."
        ],
        "link": "https://www.liberty.edu/facilities-management/"
    },
    {
        "title": "Weather Dashboard Application",
        "image": "",
        "demo-image": weatherApp,
        "company": "Personal Project",
        "location": "N/A",
        "date": "February 2026 - March 2026",
        "skills": ["Next.js", "Tailwind CSS", "TypeScript", "RapidAPI"],
        "highlights": [
            "Real-Time Weather Data",
            "Interactive Dashboard",
            "API Integration"
        ],
        "context": "",
        "description": [
            "Developed a weather dashboard application that provides real-time weather data and forecasts for any location using the OpenWeatherMap API. The application features an interactive dashboard with dynamic visualizations and user-friendly navigation."
        ],
        "link": "https://github.com/jeffreyv101/weather-app"
    },
    {
        "title": "TWR360 RSS.com Podcast Delivery System",
        "skills": ["AWS EC2", "Python"],
        "image": twr360,
        "demo-image": "",
        "company": "Liberty University Software Development Club",
        "location": "Lynchburg, VA",
        "date": "August 2024 - December 2024",
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