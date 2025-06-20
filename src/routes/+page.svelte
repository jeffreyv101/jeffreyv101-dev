<!-- Imports -->
<script>
    import Header from '$lib/components/+Header.svelte';
    import Footer from '$lib/components/+Footer.svelte';

    // Import skills, experience, projects, and education data
    import experienceData from '$lib/components/experience.js';
    const experience = experienceData;
    import skillsData from '$lib/components/skills.js';
    const skills = skillsData;
    import projectsData from '$lib/components/projects.js';
    const projects = projectsData;
    import educationData from '$lib/components/education.js';
    const education = educationData;
 
    import repoReelsLight from '$lib/assets/repo-reels-light.png'
    import repoReelsDark from '$lib/assets/repo-reels-dark.png'


    // Typing Animation
    let phrases = [" Software Engineer.", " Data Engineer.", " Web Developer.", " Musician.", " Sax Player.", " UI/UX Designer."];
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
    
    // Dark Mode Image Handling for Repo Reels
    import { onMount } from 'svelte';

    onMount(() => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const updateRepoReelsImage = (event) => {
        if (event.matches) {
          // Dark mode is enabled
          projects[0].image = repoReelsDark; // Update image for Repo Reels in dark mode
        } else {
          // Light mode is enabled
          projects[0].image = repoReelsLight; // Update image for Repo Reels in light mode
        }
      };
      // Set initial image based on current mode
      updateRepoReelsImage(darkModeMediaQuery);
      darkModeMediaQuery.addEventListener('change', updateRepoReelsImage);

      // Cleanup listener on unmount
      return () => {
        darkModeMediaQuery.removeEventListener('change', updateRepoReelsImage);
      };
    });
</script>

<head>
  <title>Jeffrey Vandever - Portfolio</title>
</head>

<main>
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
      <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:pt-3 lg:text-6xl">
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

<div id="about-me" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-800 to-green-700 lg:px-8">
  <h2 class="text-center text-4xl font-extrabold tracking-tight text-gray-100">About Me</h2>
  <div class="max-w-[150rem] mx-auto bg-gradient-to-r from-white to-green-100 p-8 mt-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:from-green-900 dark:to-blue-950 dark:text-gray-50">
    <p class="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
      I am a <span class="font-bold text-green-700 dark:text-green-300">passionate software engineer</span> with a strong foundation in computer science and a keen interest in web development. I have experience in various programming languages, frameworks, and tools, and I am always eager to learn new technologies and improve my skills. I enjoy working on challenging projects that require <span class="italic text-blue-800 dark:text-blue-300">creative problem-solving</span> and collaboration with others.
    </p>
    <p class="mt-6 text-lg text-gray-700 leading-relaxed dark:text-gray-300">
      Outside of software engineering, I am involved with <span class="font-semibold text-green-700 dark:text-green-300">Liberty's Basketball Spirit Band</span> and <span class="font-semibold text-green-700 dark:text-green-300">Liberty's Marching Band</span> on Alto Sax! My participation in these ensembles has allowed me to travel to various locations and perform during <span class="italic text-blue-800 dark:text-blue-300">college football bowl games</span> as well as <span class="italic text-blue-800 dark:text-blue-300">national basketball championships</span>.
    </p>
    <p class="mt-6 text-lg text-gray-700 leading-relaxed dark:text-gray-300">
      This summer, I am thrilled to be interning at <span class="font-bold text-green-700 dark:text-green-300">Genworth</span> for their IT Development Internship! I am looking forward to learning more about how software and engineering is used in insurance and gaining valuable experience in the field.
    </p>
  </div>
</div>

<div id="skills" class="bg-green-700 pt-14 px-8">
  <h2 class="text-center text-4xl text-gray-100 font-bold">Skills</h2>
  {#if experience.length === 0}
    <li class="text-center text-gray-500 dark:text-gray-400">No skills listed yet.</li>
  {/if}
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 max-w-[150rem] mx-auto">
    {#each skills as skillCategory}
      <li class="flex">
        <div class="flex flex-col flex-1 bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:from-green-900 dark:to-blue-950 dark:text-gray-50 h-full">
          <h2 class="text-2xl font-bold text-green-700 dark:text-green-300 mb-4 tracking-tight">{skillCategory.title}</h2>
          <ul class="grid grid-cols-2 sm:grid-cols-3 3xl:grid-cols-4 gap-4">
            {#each skillCategory.skills as skill}
              <li class="flex items-center space-x-3 bg-white/60 dark:bg-green-950/60 dark:text-white rounded-lg p-2 hover:scale-105 transition-transform duration-200 shadow-sm">
                {@html skill.svg}
                <span class="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
              </li>
            {/each}
          </ul>
        </div>
      </li>
    {/each}
  </ul>
</div>

<div id="experience" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-700 to-gray-700 lg:px-8">
  <h2 class="text-center text-4xl font-semibold tracking-tight text-gray-100">Experience</h2>
  <ul class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 max-w-[150rem] mx-auto">
    {#if experience.length === 0}
      <li class="text-center text-gray-500 dark:text-gray-400">No experience listed yet.</li>
    {/if}
    {#each experience as job}
      <li class="flex">
        <div class="flex flex-col flex-1 bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 dark:bg-gradient-to-r dark:from-green-900 dark:to-blue-950 dark:text-gray-50 h-full">
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
          <ul class="flex-1">
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
  <h2 class="text-center text-4xl font-semibold tracking-tight pb-5 text-gray-100">Projects</h2>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[150rem] mx-auto">
    {#each projects as project}
      <li class="group p-6 rounded-xl bg-gradient-to-r from-white to-blue-100 hover:shadow-lg transition-shadow duration-300  dark:from-green-800 dark:to-blue-950">
        {#if project.image != ''}
          <img src="{project.image}" alt="{project.title}" class="w-full h-80 lg:h-48 object-cover rounded-t-xl mb-4" loading="lazy">
        {/if}
        <h2 class="text-xl font-semibold mb-4 text-blue-900 dark:text-green-200">{project.title}</h2>
        {#each project.skills as skill}
          <span class="inline-block bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 mb-4 rounded hover:scale-105 dark:bg-blue-900 dark:text-blue-300"> {skill} </span>
        {/each}
        <p class="text-gray-600 mb-4 dark:text-gray-300">{project.description}</p>
        <div class="flex justify-between items-center">
          {#if project.link == 'NA'}
            <span class="text-gray-500 dark:text-gray-400">Proprietary Project, please contact for more information...</span>
          {:else if project.link == 'WIP'}
            <span class="text-gray-500 dark:text-gray-400">Project in progress...</span>
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
  <h2 class="text-center text-4xl font-semibold tracking-tight py-5 text-gray-100">Education</h2>
  <ul class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[150rem] mx-auto">
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
  <h2 class="text-center text-4xl font-semibold tracking-tight text-gray-100">Get in Touch</h2>
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
          class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
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
          class="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
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
</main>