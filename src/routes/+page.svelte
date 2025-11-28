<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import Header from '$lib/components/+Header.svelte';
    import Footer from '$lib/components/+Footer.svelte';
    import SkillsModal from '$lib/components/SkillsModal.svelte';
    import SkillsShowcase from '$lib/components/SkillsShowcase.svelte';
    import ExperienceCard from '$lib/components/ExperienceCard.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import DetailModal from '$lib/components/DetailModal.svelte';

    // Pictures
    import speechPic from '$lib/assets/about/speech.jpeg';
    import profilePic from '$lib/assets/about/profile.jpg';
    import genworthCeo from '$lib/assets/about/genworth-ceo.jpeg';
    import spiritBand from '$lib/assets/about/spirit-band.jpeg';
    import spiritBand2 from '$lib/assets/about/spirit-band2.jpeg';
    import spiritBand3 from '$lib/assets/about/spirit-band3.jpg';
    import marchingBand from '$lib/assets/about/marching-band.jpeg';

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
                    duration: 0.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
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
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        // Animate project cards on scroll
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
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
                        start: 'top 90%',
                        end: 'top 80%',
                        scrub: 1,
                        toggleActions: 'play none none reverse',
                    },
                    delay: (index % 2) * 0.2,
                }
            );
        });

        // Animate the projects section title
        const projectsTitle = document.querySelector('.projects-title');
        if (projectsTitle) {
            gsap.fromTo(projectsTitle,
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
                        trigger: projectsTitle,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    });

    // Experience Modal state
    /**
     * @type {typeof experience[0] | null | undefined}
     */
    let selectedJob = null;
    let showExperienceModal = false;

    /**
     * @param {typeof experience[0] | null} job
     */
    function openExperienceModal(job) {
        selectedJob = job;
        showExperienceModal = true;
        document.body.style.overflow = 'hidden';
    }

    function closeExperienceModal() {
        showExperienceModal = false;
        selectedJob = null;
        document.body.style.overflow = 'auto';
    }

    // Skills Modal state
    let showSkillsModal = false;

    function openSkillsModal() {
        showSkillsModal = true;
        document.body.style.overflow = 'hidden';
    }

    function closeSkillsModal() {
        showSkillsModal = false;
        document.body.style.overflow = 'auto';
    }

    // Project Modal state
    /**
     * @type {typeof projects[0] | null | undefined}
     */
    let selectedProject = null;
    let showProjectModal = false;

    /**
     * @param {typeof projects[0] | null} project
     */
    function openProjectModal(project) {
        selectedProject = project;
        showProjectModal = true;
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        showProjectModal = false;
        selectedProject = null;
        document.body.style.overflow = 'auto';
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

<main>
    <Header />
    <div id="hero" class="flex flex-col items-center justify-center px-4 text-center lg:tracking-tighter h-fit md:min-h-screen bg-gradient-to-b from-blue-900 to-green-900">
        <div class="flex flex-col items-center justify-center w-full gap-8 mt-32 mb-20 xl:flex-row xl:gap-12 max-w-7xl">
            <div class="xl:text-left">
                <h2 style="font-family: 'CustomCursive'" class="text-white hero-welcome text-2xlopacity-0">Welcome! I'm </h2>
                <h2 style="font-family: 'CustomCursive'" class="text-5xl font-extrabold text-white opacity-0 hero-name sm:text-6xl lg:text-8xl">Jeffrey Vandever</h2>
                <h3 class="pt-2 text-xl italic text-white opacity-0 hero-tagline xl:pt-4">Building Technology that Empowers People.</h3>
                <p class="italic font-bold text-blue-100 opacity-0 hero-typing text-md dark:text-green-200">
                → {typedChar}
                </p>
                <div class="flex items-center justify-center gap-6 opacity-0 hero-buttons xl:justify-start">
                    <a
                        href="#experience"
                        class="inline-block px-4 py-2 mt-4 font-medium text-white transition duration-300 bg-gray-600 rounded-lg shadow-lg hero-button text-md hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900"
                    >
                        View my Work
                    </a>
                    <a 
                        href="#contact" 
                        class="inline-block px-4 py-2 mt-4 font-medium text-white transition duration-300 bg-green-600 rounded-lg shadow-lg hero-button text-md hover:bg-green-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                        Contact Me!
                    </a>
                </div>
            </div>
            <img src={profilePic} alt="Profile" class="hidden max-w-xs mx-4 mt-4 opacity-0 hero-image rounded-xl h-96 xl:block xl:mt-0 xl:max-w-md" />
        </div>
    </div>

    <div id="about-me" class="px-8 bg-gradient-to-b from-green-700 to-green-800 pt-14">
        <h2 style="font-family: 'CustomCursive'" class="text-6xl font-bold text-center text-white">Who I am</h2>
        <h3 style="font-family: 'CustomCursive'" class="text-2xl italic text-center text-white">Excellence and Investment in others</h3>
        
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8 max-w-[150rem] mx-auto pb-8">
            <!-- First Row: Image Left, Text Right -->
            <div class="flex items-center justify-center">
                <img src={speechPic} alt="Jeffrey Vandever playing in the Spirit Band" class="object-cover rounded-lg shadow-lg max-h-96 w-max"/>
            </div>
            <div class="flex flex-col justify-center text-left xl:pr-8">
                <div class="p-6 space-y-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-md">
                    <p class="text-lg leading-relaxed text-gray-200">
                        I'm someone who believes that excellence isn't about perfection — it's about <span class="font-bold text-green-300">consistency, curiosity, and care for others.</span>
                    </p>
                    <p class="text-lg leading-relaxed text-gray-200">
                        My drive as a technologist comes from a desire to build solutions that make people's work, learning, and communication easier and more meaningful. Whether I'm developing software, leading a team, or mentoring peers, I aim to set a high standard not only in the quality of my work but in how I treat the people I work with.
                    </p>
                </div>
            </div>
            
            <!-- Second Row: Text Left, Image Right -->
            <div class="flex flex-col justify-center text-left xl:pl-8">
                <div class="p-6 space-y-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-md">
                    <p class="text-lg leading-relaxed text-gray-200">
                        I value clarity over complexity, empathy over ego, and growth over comfort. Technology changes fast, but the ability to <span class="font-bold text-green-300">listen, learn, and lead with integrity</span> never goes out of style. I've learned that progress is most rewarding when it lifts others with you — whether that's helping a team member debug a problem, guiding students through their first project, or delivering a product that genuinely helps an organization thrive.
                    </p>
                    <p class="text-lg leading-relaxed text-gray-200">
                        At the end of the day, I want my work to be known for two things: <span class="font-bold text-green-300">Excellence in execution</span> and a <span class="font-bold text-green-300">genuine investment in people.</span>
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <img src={genworthCeo} alt="Jeffrey Vandever with other interns and Genworth Financial CEO" class="object-cover rounded-lg shadow-lg max-h-96 w-max"/>
            </div>
        </div>

        <!--Summary of my core values-->

        <!--Scrolling Skills Showcase-->
        <SkillsShowcase {allSkills} onViewAll={openSkillsModal} />
    </div>

    <!-- Skills Modal -->
    <SkillsModal showModal={showSkillsModal} {skills} onClose={closeSkillsModal} />
    
    <div id="experience" class="relative px-6 isolate pt-14 bg-gradient-to-b from-green-800 to-green-900 lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="text-6xl font-semibold tracking-tight text-center text-gray-100 experience-title">Experience</h2>
        <ul class="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8 max-w-[150rem] mx-auto pb-14">
            {#if experience.length === 0}
            <li class="text-center text-gray-500 dark:text-gray-400">No experience listed yet.</li>
            {/if}
            {#each experience as job}
            <li class="experience-card">
                <ExperienceCard {job} onClick={openExperienceModal} />
            </li>
            {/each}
        </ul>
    </div>

    <!-- Experience Modal -->
    <DetailModal showModal={showExperienceModal} selectedItem={selectedJob} type="experience" onClose={closeExperienceModal} />

    <div id="projects" class="relative px-6 pb-20 isolate pt-14 bg-gradient-to-b from-green-900 to-gray-800 lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="text-6xl font-semibold tracking-tight text-center text-gray-100 projects-title">Projects</h2>
        <ul class="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8 max-w-[150rem] mx-auto pb-14">
            {#if projects.length === 0}
            <li class="text-center text-gray-500 dark:text-gray-400">No projects listed yet.</li>
            {/if}
            {#each projects as project}
            <li class="project-card">
                <ProjectCard {project} onClick={openProjectModal} />
            </li>
            {/each}
        </ul>
    </div>

    <!-- Project Modal -->
    <DetailModal showModal={showProjectModal} selectedItem={selectedProject} type="project" onClose={closeProjectModal} />

    <div id="education" class="relative px-6 py-20 isolate bg-gradient-to-b from-gray-800 to-gray-900 lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="text-6xl font-semibold tracking-tight text-center text-gray-100">Education</h2>
        <div class="max-w-4xl mx-auto mt-12">
            {#each education as edu}
                <div class="p-8 border border-gray-700 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-md">
                    <h3 class="text-3xl font-bold text-white">{edu.title}</h3>
                    <p class="mt-2 text-lg italic text-green-300">{edu.date}</p>
                    <div class="mt-6 space-y-3">
                        {#each edu.degree as deg}
                            <div class="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1 text-blue-400">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                <p class="text-lg text-gray-200">{deg}</p>
                            </div>
                        {/each}
                        {#if edu.minor}
                            <div class="flex items-start gap-3 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1 text-green-400">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                <p class="text-base italic text-gray-300">{edu.minor}</p>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div id="contact" class="relative px-6 py-20 bg-gray-900 isolate bg-gradient-to-b lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="text-6xl font-semibold tracking-tight text-center text-gray-100">Contact Me</h2>
        <div class="max-w-2xl mx-auto mt-12">
            <form method="POST" action="https://formspree.io/f/xqakqokj" class="p-8 space-y-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-md">
            <input type="hidden" name="_subject" value="Contact request from portfolio website" />
            <div>
                <label for="email" class="block text-sm font-medium text-gray-300">Your Email</label>
                <input 
                type="email" 
                name="_replyto" 
                id="email" 
                placeholder="Your email" 
                required 
                class="block w-full p-2 mt-1 text-gray-300 placeholder-gray-400 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                />
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-gray-300">Your Message</label>
                <textarea 
                name="message" 
                id="message" 
                placeholder="Your message" 
                required 
                rows="5" 
                class="block w-full p-2 mt-1 text-gray-300 placeholder-gray-400 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
            </div>
            <div class="text-center">
                <button 
                type="submit" 
                class="inline-flex items-center px-6 py-3 text-base font-medium text-white transition duration-300 bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                Send
                </button>
            </div>
            </form>
        </div>
    </div>

    <Footer />

</main>