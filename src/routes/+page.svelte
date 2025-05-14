<!-- Imports -->
<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
 
    import sdcLogo from '$lib/assets/sdc-club-logo.png'
    import jaarsHealthcare from '$lib/assets/jaars-healthcare.png'
    import twr360 from '$lib/assets/twr360.png'

    // Typing Animation
    let phrases = [" Software Engineer.", " Web Developer.", " Musician.", " UI/UX Designer."];
    let phraseIndex = 0;
    let currentPhrase = phrases[phraseIndex]; // text to be typed
    let typedChar = ""; // SECTION displaying typed text
    let index = 0; 
    let typewriter = 0; // for setInterval/clearInterval
    
    // If Input is empty, clear out SECTION displaying typed text
    $: if (!currentPhrase) {
      typedChar = "";
      index = typedChar.length;
    }
    
    // Disable START button; prevent clicking twice 
    let isTyping = false;
    
    const typeChar = () => {
      if (index < currentPhrase.length) {
        isTyping = true;
        typedChar += currentPhrase[index];
        index += 1;
      } else {
        stopTyping();
        setTimeout(backspaceChar, 1000); // Start backspacing after a delay
        return;
      }
    }
    
    const backspaceChar = () => {
      if (typedChar.length > 0) {
        typedChar = typedChar.slice(0, -1);
        index -= 1;
      } else {
        stopTyping();
        // Change to next phrase
        phraseIndex = (phraseIndex++ + 1) % phrases.length;
        currentPhrase = phrases[phraseIndex];
        setTimeout(typing, 1000); // Start typing again after a delay
        return;
      }
      setTimeout(backspaceChar, 50); // Continue backspacing
    }

    const typing = () => typewriter = setInterval(typeChar, 100);
    
    const stopTyping = () => {
      clearInterval(typewriter);
      isTyping = false;
    }
    typing();

    // Skills List
    let skills = [
      {
        title: "Languages",
        items: ["Python", "C++", "C", "Java", "JavaScript", "PHP", "HTML", "CSS"]
      },
      {
        title: "Libraries/Frameworks",
        items: ["React.js", "Node.js", "Express.js", "Flask", "Spring Boot", "Bootstrap", "Tailwind CSS"]
      },
      {
        title: "Databases",
        items: ["SQL", "MySQL", "NoSQL", "MongoDB"]
      },
      {
        title: "Tools",
        items: ["AWS", "Google Cloud Platform", "Salesforce", "Docker", "Git", "GitHub", "Figma"]
      }
    ];

    // Experience List
    let experience = [
      {
        title: "IT Development Intern",
        company: "Genworth Financial",
        location: "Richmond, VA",
        date: "May 2025 - Aug 2025",
        description: ["More information coming soon!"]
      },
      {
        title: "Web Design Assistant",
        company: "Liberty University - Facilities Planning and Construction",
        location: "Lynchburg, VA",
        date: "Apr 2025 - Present",
        description: ["Led the development of a new website for the department, taking elements from the 5+ different departments under it's umbrella.", "Collaborated with the department to gather requirements and ensure the website met their needs and expectations.", "Implemented responsive design principles to ensure the website was accessible on various devices.", "More information coming soon!"]
      },
      {
        title: "Full Stack Developer Intern",
        company: "Trans World Radio",
        location: "Cary, NC",
        date: "May 2024 - Aug 2024",
        description: ["Researched, designed, developed, and integrated a generative LLM AI assistant for thousands of users through a first-of-its-kind custom-designed API with Google Generative AI.", "Refactored and redesigned front-end and back-end elements on pages such as the main resources page and a partner’s outreach page using Google Cloud services, Strapi.js, a proprietary backend system, and JavaScript."]
      },
      {
        title: "Information Technology Intern",
        company: "Lavner Education",
        location: "Cherry Hill, NJ",
        date: "June 2023 - Aug 2023",
        description: ["Streamlined computer hardware and software setup and maintenance processes, optimizing inventory management and ensuring seamless program and device operations at camp.", "Facilitated a fun, safe, and engaging environment for students aged from 6-14, teaching new technology concepts, and encouraging creative thinking.", "Ensured a secure atmosphere throughout camp by constantly supervising the ~50 students the camp would host."]
      }

    ]


    // Project List
    let projects = [
        {
          title: "Software Development Club Website",
          image: sdcLogo,
          skills: ["React.js", "React Router", "Vite.js", "Tailwind CSS"],
          description: "Developed a website for the Liberty University Software Development Club to help students find resources and information about the club. The website was developed using React.js, React Router, Vite.js, and Tailwind CSS.",
          link: ""
        },
        {
          title: "JAARS Healthcare Portal",
          image: jaarsHealthcare,
          skills: ["Salesforce", "JavaScript", "HTML", "CSS"],
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
            skills: ["Google Generative AI", "Google Cloud Platform", "AWS EC2"],
            image: twr360,
            description: "Built a generative AI chatbot for the TWR360 platform to help users find relevant content. The chatbot was built using: Google Generative AI, Google Cloud Platform, and an AWS EC2 Server. Click the follow link to go to the TWR360 homepage where the chatbot widget will be located on the lower right corner:",
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

    // Education List
    let education = [
        {
            title: "Liberty University",
            degree: "Bachelor of Science in Computer Science: Software Engineering",
            date: "Expected Graduation: May 2026"
        },
        {
            title: "Liberty University",
            degree: "Bachelor of Science in Computer Science: Web and Mobile Programming",
            date: "Expected Graduation: May 2026"
        }
    ];
</script>

<div class="bg-gradient-to-b from-blue-900 to-green-900">
  <Header />

  <div class="relative isolate px-6 pt-0 lg:px-8">
    <div class="absolute inset-0 -z-10 overflow-hidden xl:h-full">
    </div>
    <div class="relative mx-auto max-w-4xl py-32 sm:py-40 lg:py-60 text-center">
      <h2 class="text-lg font-medium text-blue-100 dark:text-green-200">Welcome!</h2>
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        I'm Jeffrey Vandever,
      </h1>
      <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        I am a<span class="text-green-400">{typedChar}</span>
      </h1>
      <p class="mt-6 text-lg text-blue-100 dark:text-green-200">
        A passionate developer with expertise in software engineering, web development, and design.
      </p>
      <a href="#contact" class="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-300">
        Get in Touch!
      </a>
    </div>
  </div>
</div>

<div id="skills" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-800 to-green-700 lg:px-8">
  <h1 class="text-center text-4xl font-semibold tracking-tight text-gray-100">Technical Skills at a Glance</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
    {#each skills as skill}
      <div class="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:text-gray-200">
        <h2 class="text-xl font-semibold text-blue-900 dark:text-green-200">{skill.title}</h2>
        <ul class="list-disc pl-5">
          {#each skill.items as item}
            <li class="text-gray-700 dark:text-gray-300">{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<div id="experience" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-700 to-gray-700 lg:px-8">
  <h1 class="text-center text-4xl font-semibold tracking-tight text-gray-100">Experience</h1>
  <ul class="lg:grid lg:grid-cols-2">
    {#each experience as job}
      <li class="lg:px-5 py-5">
        <div class="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 dark:bg-blue-950 dark:text-gray-50">
          <div class="md:flex md:justify-between">
            <div>
              <h2 class="text-2xl font-semibold text-blue-900 dark:text-green-200">{job.title}</h2>
              <h2 class="text-lg text-gray-700 dark:text-gray-300">{job.company}</h2>
            </div>
            <div class="flex justify-between md:block md:justify-normal">
              <h2 class="italic font-bold pb-2.5 text-gray-600 dark:text-gray-400">{job.location}</h2>
              <h3 class="italic text-gray-600 dark:text-gray-400">{job.date}</h3>
            </div>
          </div>
          <ul>
            {#each job.description as descriptionItem}
              <li class="m-2 text-gray-700 dark:text-gray-300">{descriptionItem}</li>
            {/each}
          </ul>
        </div>
      </li>
    {/each}
  </ul>
</div>

<div id="projects" class="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-gray-700 to-gray-800">
  <h1 class="text-center text-4xl font-semibold tracking-tight pb-5 text-gray-100">Projects</h1>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each projects as project}
      <li class="group p-6 rounded-xl bg-gradient-to-r from-green-100 to-blue-100 hover:shadow-lg transition-shadow duration-300 dark:from-green-800 dark:to-blue-950">
        {#if project.image != ''}
          <img src="{project.image}" alt="{project.title}" class="w-full h-80 lg:h-48 object-cover rounded-t-xl mb-4">
        {/if}
        <h2 class="text-xl font-semibold mb-4 text-blue-900 dark:text-green-200">{project.title}</h2>
        {#each project.skills as skill}
          <span class="inline-block bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 mb-4 rounded dark:bg-blue-900 dark:text-blue-300">{skill}</span>
        {/each}
        <p class="text-gray-600 mb-4 dark:text-gray-300">{project.description}</p>
        <div class="flex justify-between items-center">
          {#if project.link == 'NA'}
            <span class="text-gray-500 dark:text-gray-400">Proprietary Project, please contact for more information...</span>
          {:else if project.link == ''}
            <span class="text-gray-500 dark:text-gray-400">No link available</span>
          {:else if project.link == 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_sZPzENtiAe9DFXqeJ_1692719265228_completion_certificate.pdf'}
            <a href="{project.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline dark:text-green-400 transition-colors duration-300">
              View Certificate
            </a>
          {:else if project.link == 'https://twr360.org'}
            <a href="{project.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline dark:text-green-400 transition-colors duration-300">
              View TWR360
            </a>
          {:else}
            <a href="{project.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline dark:text-green-400 transition-colors duration-300">
              View Project
            </a>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
  <br>
  <br>
</div>

<div id="education" class="relative isolate px-6 pt-14 bg-gradient-to-b from-gray-800 to-gray-900">
  <h1 class="text-center text-4xl font-semibold tracking-tight py-5 text-gray-100">Education</h1>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {#each education as school}
      <li class="group p-6 rounded-xl bg-gradient-to-r bg-white hover:shadow-lg transition-shadow duration-300 dark:from-blue-800 dark:to-gray-900">
        <h2 class="text-xl font-semibold mb-4 text-blue-900 dark:text-green-200">{school.title}</h2>
        <p class="text-gray-600 mb-4 dark:text-gray-300">{school.degree}</p>
        <p class="text-gray-500 dark:text-gray-400">{school.date}</p>
      </li>
    {/each}
  </ul>
  <br>
  <br>
</div>

<div id="contact" class="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b bg-gray-900">
  <h1 class="text-center text-4xl font-semibold tracking-tight text-gray-100">Get in Touch</h1>
  <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32">
    <form method="POST" action="https://formspree.io/f/xqakqokj" class="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <input type="hidden" name="_subject" value="Contact request from portfolio website" />
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
        <input 
          type="email" 
          name="_replyto" 
          id="email" 
          placeholder="Your email" 
          required 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
        />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder="Your message" 
          required 
          rows="5" 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
        ></textarea>
      </div>
      <div class="text-center">
        <button 
          type="submit" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-green-500 dark:hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";

  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>

<Footer />