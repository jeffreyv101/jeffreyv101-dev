<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import Header from '$lib/components/+Header.svelte';
    import Footer from '$lib/components/+Footer.svelte';

    import profilePic from '$lib/assets/about/profile.jpg';
    import genworthCeo from '$lib/assets/about/genworth-ceo.jpeg';
    import spiritBand from '$lib/assets/about/spirit-band.jpeg';

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Import skills, experience, projects, and education data
    import experienceData from '$lib/components/experience';
    const experience = experienceData;
    import skillsData from '$lib/components/skills.json';
    const skills = skillsData; // SVG Icons for Skills courtesy of Tabler Icons
    import projectsData from '$lib/components/projects.js';
    const projects = projectsData;
    import educationData from '$lib/components/education.json';
    const education = educationData;

    // Flatten all skills into one array
    const allSkills = skills.flatMap(category => category.skills);

    // Tooltip state
    /**
     * @type {string | null}
     */
    let hoveredSkill = null;
    let tooltipX = 0;
    let tooltipY = 0;

    /**
     * @param {MouseEvent | FocusEvent} event
     * @param {string} skillName
     */
    function showTooltip(event, skillName) {
        hoveredSkill = skillName;
        if (event instanceof MouseEvent) {
            tooltipX = event.clientX;
            tooltipY = event.clientY;
        }
    }

    function hideTooltip() {
        hoveredSkill = null;
    }

    // GSAP Animation
    onMount(() => {
        // Hero section animations
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        heroTimeline
            // Animate welcome text
            .fromTo('.hero-welcome', 
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 0.8 }
            )
            // Animate main name
            .fromTo('.hero-name',
                { opacity: 0, scale: 0.8, rotateX: -20 },
                { opacity: 1, scale: 1, rotateX: 0, duration: 1 },
                '-=0.4'
            )
            // Animate tagline
            .fromTo('.hero-tagline',
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8 },
                '-=0.6'
            )
            // Animate typing text container
            .fromTo('.hero-typing',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.4'
            )
            // Animate buttons
            .fromTo('.hero-buttons',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            )
            // Animate profile picture with bounce
            .fromTo('.hero-image',
                { opacity: 0, scale: 0.5, rotation: -10 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    rotation: 0, 
                    duration: 1,
                    ease: 'back.out(1.7)'
                },
                '-=0.8'
            );

        // Add floating animation to profile picture
        gsap.to('.hero-image', {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 1.5
        });

        // Add subtle glow pulse to buttons
        gsap.to('.hero-button', {
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: 0.2
        });

        const track = document.querySelector('.skills-track');
        if (track) {
            // Duplicate skills for seamless loop
            const trackWidth = track.scrollWidth;
            
            // Create infinite scrolling animation
            gsap.to('.skills-track', {
                x: -trackWidth / 2,
                duration: 60,
                ease: 'none',
                repeat: -1,
            });
        }

        // Animate experience cards on scroll
        const experienceCards = document.querySelectorAll('.experience-card');
        experienceCards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    rotateX: -15,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: 1,
                        toggleActions: 'play none none reverse',
                    },
                    delay: (index % 2) * 0.2, // Stagger based on column position
                }
            );
        });

        // Animate the section title
        const experienceTitle = document.querySelector('.experience-title');
        if (experienceTitle) {
            gsap.fromTo(experienceTitle,
                {
                    opacity: 0,
                    y: -50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: experienceTitle,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    });

    // Modal state
    /**
     * @type {{ title: any; image: any; company: any; location: any; date: any; skills: any; highlights: any; description: any; } | null}
     */
    let selectedJob = null;
    let showModal = false;

    /**
     * @param {{ title: any; image: any; company: any; location: any; date: any; skills: any; highlights: any; description: any; } | null} job
     */
    function openModal(job) {
        selectedJob = job;
        showModal = true;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    /**
     * @returns {void}
     */
    function closeModal() {
        showModal = false;
        selectedJob = null;
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Close modal on Escape key
    /**
     * @param {{ key: string; }} event
     */
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
    <div id="hero" class="flex flex-col items-center justify-center lg:tracking-tighter min-h-screen bg-gradient-to-b from-blue-900 to-green-900 text-center px-4">
        <div class="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-12 w-full max-w-7xl">
            <div class="xl:text-left">
                <h2 style="font-family: 'CustomCursive'" class="hero-welcome text-white text-2xl opacity-0">Welcome! I'm </h2>
                <h2 style="font-family: 'CustomCursive'" class="hero-name text-5xl font-extrabold text-white sm:text-6xl lg:text-8xl opacity-0">Jeffrey Vandever</h2>
                <h3 class="hero-tagline text-xl italic text-white pt-2 xl:pt-4 opacity-0">Building Technology that Empowers People.</h3>
                <p class="hero-typing text-md font-bold text-blue-100 italic dark:text-green-200 opacity-0">
                → {typedChar}
                </p>
                <div class="hero-buttons flex items-center justify-center gap-6 xl:justify-start opacity-0">
                    <a
                        href="#experience"
                        class="hero-button mt-4 inline-block px-4 py-2 text-md font-medium text-white bg-gray-600 rounded-lg shadow-lg hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900 transition duration-300"
                    >
                        View my Work
                    </a>
                    <a 
                        href="#contact" 
                        class="hero-button mt-4 inline-block px-4 py-2 text-md font-medium text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
                    >
                        Contact Me!
                    </a>
                </div>
            </div>
            <img src={profilePic} alt="Profile" class="hero-image hidden rounded-xl mt-4 mx-4 h-96 xl:block xl:mt-0 max-w-xs xl:max-w-md opacity-0" />
        </div>
    </div>

    <div id="about-me" class="bg-gradient-to-b from-green-700 to-green-800 pt-14 px-8">
        <h2 style="font-family: 'CustomCursive'" class="text-6xl font-bold text-center text-white">Who I am</h2>
        <h3 style="font-family: 'CustomCursive'" class="text-2xl text-center text-white italic">Excellence in every line of code.</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 max-w-[150rem] mx-auto">
            <img src={spiritBand} alt="Jeffrey Vandever playing in the Spirit Band" class="mx-auto rounded-lg shadow-lg max-h-80"/>
            <p class="text-left pr-8 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni est architecto, saepe ex aut tempora provident quia ipsum repellat non ullam ipsa accusantium explicabo, sapiente dolorem tempore totam? Ex, debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam possimus maiores voluptates nulla quos architecto adipisci? Fuga dolore dicta harum facilis ut nam, temporibus doloremque sint reprehenderit, quas quasi?</p>

            <p class="text-left pl-8 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatum libero vitae, laboriosam perspiciatis minus optio rerum aliquam iure ad id quam totam pariatur reiciendis adipisci odio? Dolores, a possimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, beatae labore. Blanditiis quod odit voluptates modi vero? Sint ea quam rem sunt illum id voluptate nulla iste? Quas, rem possimus.</p>
            <img src={genworthCeo} alt="Jeffrey Vandever with other interns and Genworth Financial CEO" class="mx-auto rounded-lg shadow-lg max-h-80"/>
        </div>

        <!--Summary of my core values-->

        <!--Scrolling Skills Showcase-->
        <div class="py-12 overflow-hidden">
            <h3 class="text-center text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div class="relative">
                <!-- Gradient overlays for fade effect -->
                <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-green-800 to-transparent z-10"></div>
                <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-green-800 to-transparent z-10"></div>
                
                <!-- Skills track container -->
                <div class="flex overflow-hidden">
                    <div class="skills-track flex gap-8 py-4">
                        {#each [...allSkills, ...allSkills] as skill}
                            <button
                                class="flex-shrink-0 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 cursor-pointer"
                                on:mouseenter={(e) => showTooltip(e, skill.name)}
                                on:mouseleave={hideTooltip}
                                on:focus={(e) => showTooltip(e, skill.name)}
                                on:blur={hideTooltip}
                                aria-label={skill.name}
                            >
                                <div class="text-green-200 w-full h-full flex items-center justify-center">
                                    {@html skill.svg}
                                </div>
                            </button>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <div id="experience" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-800 to-gray-700 lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="experience-title text-center text-6xl font-semibold tracking-tight text-gray-100">Experience</h2>
        <ul class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 max-w-[150rem] mx-auto pb-14">
            {#if experience.length === 0}
            <li class="text-center text-gray-500 dark:text-gray-400">No experience listed yet.</li>
            {/if}
            {#each experience as job}
            <li class="experience-card">
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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 border-0"
        on:click={closeModal}
    >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
            class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-green-500/30"
            on:click={(e) => e.stopPropagation()}
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

    <!-- Tooltip for skills -->
    {#if hoveredSkill}
        <div 
            class="fixed z-50 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg border border-green-500/50 pointer-events-none"
            style="left: {tooltipX + 10}px; top: {tooltipY + 10}px;"
        >
            {hoveredSkill}
        </div>
    {/if}

    

    <Footer />

</main>