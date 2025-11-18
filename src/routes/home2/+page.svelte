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

    // Modal state
    let selectedJob = null;
    let showModal = false;

    function openModal(job) {
        selectedJob = job;
        showModal = true;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        showModal = false;
        selectedJob = null;
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Close modal on Escape key
    function handleKeydown(event) {
        if (event.key === 'Escape' && showModal) {
            closeModal();
        }
    }

    // Typing Animation
    let phrase = ["Incoming IT Analyst at Genworth Financial"];
    let typedChar = ""; // SECTION displaying typed text
    let index = 0; 
    let typewriter = 0; // for setInterval/clearInterval
    // Disable START button; prevent clicking twice 
    let isTyping = false;
    
    const typeChar = () => {
      if (index < phrase[0].length) {
        isTyping = true;
        typedChar += phrase[0][index];
        index += 1;
      } else {
        stopTyping();
        return;
      }
    }

    const typing = () => typewriter = setInterval(typeChar, 100);
    
    const stopTyping = () => {
      clearInterval(typewriter);
      isTyping = false;
    }
    typing();
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
    <Header />
    <div id="hero" class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-green-900 text-center px-4">
        <h1 style="font-family: 'CustomCursive'" class="text-4xl tracking-wide font-extrabold text-white sm:text-6xl lg:text-7xl">Jeffrey Vandever</h1>
        <h3 class="text-xlitalic text-white pt-2">Building Technology that Empowers People.</h3>
        <p class="text-md font-bold text-blue-100 italic dark:text-green-200">
        → {typedChar}
        </p>
        <div class="flex items-center justify-center gap-6">
            <a
                href="#experience"
                class="mt-4 inline-block px-4 py-2 text-md font-medium text-white bg-gray-600 rounded-lg shadow-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 transition duration-300"
            >
                View my Work
            </a>
            <a 
                href="#contact" 
                class="mt-4 inline-block px-4 py-2 text-md font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-300"
            >
                Read My Story
            </a>
            <a 
                href="#contact" 
                class="mt-4 inline-block px-4 py-2 text-md font-medium text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
            >
                Get in Touch!
            </a>
        </div>
    </div>

    <div id="experience" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-900 to-green-700 lg:px-8">
        <h2 class="text-center text-4xl font-semibold tracking-tight text-gray-100">Experience</h2>
        <ul class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 max-w-[150rem] mx-auto">
            {#if experience.length === 0}
            <li class="text-center text-gray-500 dark:text-gray-400">No experience listed yet.</li>
            {/if}
            {#each experience as job}
            <li>
                <button 
                    on:click={() => openModal(job)}
                    class="w-full bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700/60 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer text-left"
                >
                    <div class="md:flex md:justify-between">
                        <div>
                            <h2 class="text-2xl font-semibold text-white">{job.title}</h2>
                            <h2 class="text-lg text-gray-300">{job.company}</h2>
                        </div>
                        <div class="flex justify-between md:block md:justify-normal">
                            <h2 class="italic font-bold pb-2.5 text-gray-200">{job.location}</h2>
                            <h3 class="italic text-gray-200">{job.date}</h3>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                        {#each job.highlights as highlight}
                            <span class="text-green-300 text-sm font-medium mt-3">• {highlight}</span>
                        {/each}
                    </div>
                    <p class="text-green-400 text-sm mt-4 font-medium">Click to view details →</p>
                </button>
            </li>
            {/each}
        </ul>
    </div>

    <!-- Modal Overlay -->
    {#if showModal && selectedJob}
    <div 
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 border-0"
        on:click={closeModal}
        on:keydown={handleKeydown}
        role="button"
        tabindex="0"
        aria-label="Close modal overlay"
    >
        <div 
            class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-green-500/30"
            on:click={(e) => e.stopPropagation()}
            on:keydown={(e) => e.stopPropagation()}
            role="document"
        >
            <!-- Modal Header -->
            <div class="sticky top-0 bg-gradient-to-r from-green-800 to-blue-800 p-6 rounded-t-2xl border-b border-green-500/30">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-3xl font-bold text-white">{selectedJob.title}</h2>
                        <div class="flex items-center gap-4 mt-2">
                            {#if selectedJob.image}
                                <img src={selectedJob.image} alt="{selectedJob.company} logo" class="h-12 mt-2 mb-1 rounded-md"/>
                            {/if}
                            <div>
                            <p class="text-green-200 text-lg mt-1">{selectedJob.company}</p>
                            <p class="text-gray-300 text-sm mt-1">{selectedJob.location} • {selectedJob.date}</p>
                            </div>
                        </div>
                    </div>
                    <button 
                        on:click={closeModal}
                        class="text-gray-300 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Modal Content -->
            <div class="p-6 space-y-6">
                <!-- Skills Section -->
                <div>
                    <h3 class="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sailboat-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" /><path d="M4 18l-1 -3h18l-1 3" /><path d="M12 11v4" /><path d="M7 3c1.333 2.667 1.333 5.333 0 8h10c1.333 -2.667 1.333 -5.333 0 -8" /><path d="M6 3h12" /></svg>
                        Skills & Technologies
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        {#each selectedJob.skills as skill}
                            <span class="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                                {skill}
                            </span>
                        {/each}
                    </div>
                </div>

                <!-- Highlights Section -->
                <div>
                    <h3 class="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>
                        Key Highlights
                    </h3>
                    <ul class="space-y-2">
                        {#each selectedJob.highlights as highlight}
                            <li class="flex items-start gap-2 text-gray-300">
                                <span class="text-blue-400 mt-1">▸</span>
                                <span>{highlight}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Description Section -->
                <div>
                    <h3 class="text-xl font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h.01" /><path d="M11 12h1v4h1" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
                        Description
                    </h3>
                    <div class="space-y-3">
                        {#each selectedJob.description as paragraph}
                            <p class="text-gray-300 leading-relaxed">
                                {paragraph}
                            </p>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="sticky bottom-0 bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-t border-gray-700 rounded-b-2xl">
                <button 
                    on:click={closeModal}
                    class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >Close</button>
            </div>
        </div>
    </div>
    {/if}

</main>