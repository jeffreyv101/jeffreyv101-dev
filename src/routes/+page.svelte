<!-- Imports -->
<script>
    import Header from '$lib/components/+Header.svelte';
    import Footer from '$lib/components/+Footer.svelte';

    // Import skills, experience, projects, and education data
    import experienceData from '$lib/components/experience';
    const experience = experienceData;
    import skillsData from '$lib/components/skills.json';
    const skills = skillsData; // SVG Icons for Skills courtesy of Tabler Icons
    import projectsData from '$lib/components/projects.js';
    const projects = projectsData;
    import educationData from '$lib/components/education.json';
    const education = educationData;

    // Typing Animation
    let phrases = [" Software Engineer.", " Data Engineer.", " Web Developer.", " DevOps Engineer.", " Musician.", " Sax Player.", " UI/UX Designer."];
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
      <h2 class="text-lg font-medium text-blue-100 dark:text-green-200">
        Welcome!
      </h2>
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        I'm Jeffrey Vandever,
      </h1>
      <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-5xl sm:pt-3 lg:text-6xl">
        I am a<span class="text-green-400">{typedChar}</span>
      </h1>
      <p class="mt-6 text-md text-blue-100 dark:text-green-200">
        Building technology that empowers people.
      </p>
      <p class="text-md font-bold text-blue-100 italic dark:text-green-200">
        → Incoming IT Analyst at Genworth Financial
      </p>
      
      <div class="flex items-center justify-center gap-6">
        <a
          href="#about-me"
          class="mt-4 inline-block px-4 py-2 text-lg font-medium text-white bg-gray-600 rounded-lg shadow-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 transition duration-300"
        >
          Read More
        </a>
        <a 
          href="#contact" 
          class="mt-4 inline-block px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-300"
        >
          Get in Touch!
        </a>
      </div>
    </div>
  </div>
</div>

<div id="skills" class="bg-green-700 pt-14 px-8">
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
</div>

<div id="education" class="relative isolate px-6 pt-14 bg-gradient-to-b from-gray-800 to-gray-900">
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