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

    import speechPic from '$lib/assets/about/speech.jpeg';
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
    <div id="hero" class="flex flex-col items-center justify-center lg:tracking-tighter h-fit md:min-h-screen bg-gradient-to-b from-blue-900 to-green-900 text-center px-4">
        <div class="mt-32 mb-20 flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-12 w-full max-w-7xl">
            <div class="xl:text-left">
                <h2 style="font-family: 'CustomCursive'" class="hero-welcome text-white text-2xlopacity-0">Welcome! I'm </h2>
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
        
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8 max-w-[150rem] mx-auto pb-8">
            <!-- First Row: Image Left, Text Right -->
            <div class="flex items-center justify-center">
                <img src={speechPic} alt="Jeffrey Vandever playing in the Spirit Band" class="rounded-lg shadow-lg max-h-96 w-max object-cover"/>
            </div>
            <div class="flex flex-col justify-center text-left xl:pr-8 text-gray-200 space-y-4">
                <p class="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni est architecto, saepe ex aut tempora provident quia ipsum repellat non ullam ipsa accusantium explicabo, sapiente dolorem tempore totam? Ex, debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aperiam possimus maiores voluptates nulla quos architecto adipisci?
                </p>
                <p class="text-lg leading-relaxed">
                    Fuga dolore dicta harum facilis ut nam, temporibus doloremque sint reprehenderit, quas quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum dignissimos ducimus itaque ipsam tempore ad minus et earum adipisci dicta sapiente, pariatur, officiis nesciunt dolor?
                </p>
            </div>
            
            <!-- Second Row: Text Left, Image Right -->
            <div class="flex flex-col justify-center text-left xl:pl-8 text-gray-200 space-y-4">
                <p class="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatum libero vitae, laboriosam perspiciatis minus optio rerum aliquam iure ad id quam totam pariatur reiciendis adipisci odio? Dolores, a possimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, beatae labore.
                </p>
                <p class="text-lg leading-relaxed">
                    Blanditiis quod odit voluptates modi vero? Sint ea quam rem sunt illum id voluptate nulla iste? Quas, rem possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illum minima quos praesentium possimus suscipit ipsam porro iste nisi rem?
                </p>
            </div>
            <div class="flex items-center justify-center">
                <img src={genworthCeo} alt="Jeffrey Vandever with other interns and Genworth Financial CEO" class="rounded-lg shadow-lg max-h-96 w-max object-cover"/>
            </div>
        </div>

        <!--Summary of my core values-->

        <!--Scrolling Skills Showcase-->
        <SkillsShowcase {allSkills} onViewAll={openSkillsModal} />
    </div>

    <!-- Skills Modal -->
    <SkillsModal showModal={showSkillsModal} {skills} onClose={closeSkillsModal} />
    
    <div id="experience" class="relative isolate px-6 pt-14 bg-gradient-to-b from-green-800 to-green-900 lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="experience-title text-center text-6xl font-semibold tracking-tight text-gray-100">Experience</h2>
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

    <div id="projects" class="relative isolate px-6 pt-14 mb-20 bg-gradient-to-b from-green-900 to-gray-800 lg:px-8">
        <h2 style="font-family: 'CustomCursive'" class="projects-title text-center text-6xl font-semibold tracking-tight text-gray-100">Projects</h2>
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

    <Footer />

</main>