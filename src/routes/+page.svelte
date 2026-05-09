<script>
    import { browser } from '$app/environment';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import {
        Header,
        Footer,
        SkillsModal,
        SkillsShowcase,
        ExperienceCard,
        ProjectCard,
        DetailModal,
        ImageCarousel,
        HeroAnimations,
        ExperienceAnimations,
        ProjectAnimations,
        experienceData,
        skillsData,
        projectsData,
        educationData,
        speechPic,
        profilePic,
        genworthCeo,
        spiritBand,
        spiritBand2,
        spiritBand3,
        marchingBand
    } from '$lib';

    const experience = experienceData;
    const skills = skillsData;
    const projects = projectsData;
    const education = educationData;

    const carouselImages1 = [speechPic, spiritBand3];
    const carouselImages2 = [genworthCeo, spiritBand, spiritBand2, marchingBand];

    if (browser) {
        gsap.registerPlugin(ScrollTrigger);
    }

    const allSkills = skills.flatMap((/** @type {{ skills: any; }} */ category) => category.skills);

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
        if (browser) document.body.style.overflow = 'hidden';
    }

    function closeExperienceModal() {
        showExperienceModal = false;
        selectedJob = null;
        if (browser) document.body.style.overflow = 'auto';
    }

    let showSkillsModal = false;

    function openSkillsModal() {
        showSkillsModal = true;
        if (browser) document.body.style.overflow = 'hidden';
    }

    function closeSkillsModal() {
        showSkillsModal = false;
        if (browser) document.body.style.overflow = 'auto';
    }

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
        if (browser) document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        showProjectModal = false;
        selectedProject = null;
        if (browser) document.body.style.overflow = 'auto';
    }
</script>

<main class="bg-[#111111] min-h-screen">
    <Header />

    <!-- ─── Hero ─── -->
    <section id="home" class="flex items-center px-6 pb-20 mx-auto pt-28 max-w-7xl">
        <div class="grid items-center w-full grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-20 lg:items-stretch">

            <!-- Left: Profile Card -->
            <div class="flex justify-center lg:justify-start lg:flex-col">
                <div class="relative w-full max-w-sm opacity-0 hero-card lg:max-w-md lg:flex lg:flex-col lg:flex-1">
                <!-- White card -->
                    <div class="p-6 text-center bg-white shadow-2xl rounded-3xl lg:flex lg:flex-col lg:flex-1">
                        <!-- Profile image with blue background -->
                        <div class="w-full overflow-hidden bg-blue-500 rounded-2xl h-60 lg:h-auto lg:flex-1">
                            <img
                                src={profilePic}
                                alt="Jeffrey Vandever"
                                class="object-cover object-top w-full h-auto"
                            />
                        </div>
                        <!-- Name -->
                        <h1 class="mt-5 text-3xl font-bold text-gray-900">Jeffrey Vandever</h1>
                        <!-- Tagline -->
                        <p class="px-4 mt-2 text-sm leading-relaxed text-gray-500">
                            A Software Engineer building full-stack applications and DevSecOps solutions.
                        </p>
                        <!-- Social Icons -->
                        <div class="flex justify-center pb-1 mt-5 gap-7">
                            <a href="https://github.com/jeffreyv101" target="_blank" class="text-gray-400 transition-colors hover:text-gray-900" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/jeffrey-vandever/" target="_blank" class="text-gray-400 transition-colors hover:text-blue-600" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/jeffrohasaprofileyo/" target="_blank" class="text-gray-400 transition-colors hover:text-pink-500" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Title + Stats + Tiles -->
            <div class="text-center lg:text-left">
                <div class="opacity-0 hero-title">
                    <h2 class="text-6xl font-black leading-none tracking-tight text-white uppercase sm:text-7xl lg:text-8xl">SOFTWARE</h2>
                    <h2 class="text-6xl sm:text-7xl lg:text-8xl font-black text-[#2a2a2a] leading-none uppercase tracking-tight">ENGINEER</h2>
                </div>

                <p class="max-w-md mx-auto text-base leading-relaxed text-gray-400 opacity-0 hero-desc mt-7 md:text-lg lg:mx-0">
                    Passionate about building innovative solutions that bridge technical complexity with real-world impact.
                </p>

                <!-- Stats -->
                <div class="flex justify-center gap-0 mt-10 opacity-0 hero-stats lg:justify-start">
                    <div class="pr-8 md:pr-12">
                        <p class="text-4xl font-black text-white md:text-5xl">+3</p>
                        <p class="mt-1 text-xs leading-tight tracking-wider text-gray-500 uppercase">Years of<br>Experience</p>
                    </div>
                    <div class="border-l border-[#2a2a2a] pl-8 pr-8 md:pl-12 md:pr-12">
                        <p class="text-4xl font-black text-white md:text-5xl">+12</p>
                        <p class="mt-1 text-xs leading-tight tracking-wider text-gray-500 uppercase">Projects<br>Completed</p>
                    </div>
                    <div class="border-l border-[#2a2a2a] pl-8 md:pl-12">
                        <p class="text-4xl font-black text-white md:text-5xl">+2</p>
                        <p class="mt-1 text-xs leading-tight tracking-wider text-gray-500 uppercase">Internships<br>Completed</p>
                    </div>
                </div>

                <!-- Skill Tiles -->
                <div class="grid max-w-sm grid-cols-2 gap-4 mx-auto mt-10 opacity-0 hero-tiles lg:mx-0">
                    <!-- Blue tile: Full Stack -->
                    <a href="#skills">
                    <div class="p-5 text-left transition-colors bg-blue-500 rounded-2xl hover:bg-blue-600">
                        <svg class="mb-4 text-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                        </svg>
                        <p class="text-xs font-bold leading-relaxed tracking-wide text-white uppercase">Gemini API, LLMs,<br>AI Agents</p>
                        <div class="flex justify-end mt-4">
                            <div class="bg-white/20 rounded-lg p-1.5">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="m7 17 10-10M7 7h10v10"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    </a>
                    <!-- Dark tile: Cloud/DevSecOps -->
                    <a href="#skills">
                    <div class="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-5 text-left hover:bg-[#222] transition-colors">
                        <svg class="mb-4 text-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                            <rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>
                        </svg>
                        <p class="text-xs font-bold leading-relaxed tracking-wide text-white uppercase">AWS, Docker,<br>Kubernetes, CI/CD</p>
                        <div class="flex justify-end mt-4">
                            <div class="bg-white/10 rounded-lg p-1.5">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="m7 17 10-10M7 7h10v10"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ─── About Me ─── -->
    <section id="about-me" class="pt-20 pb-16 border-t border-[#1e1e1e] scroll-mt-20">
        <h2 class="px-6 text-4xl font-black text-center text-white uppercase md:text-6xl">Who I am</h2>
        <h3 class="px-6 mt-2 text-lg font-semibold text-center text-gray-500 md:text-2xl">Excellence and Investment in others</h3>

        <div class="grid grid-cols-1 gap-8 px-6 mx-auto mt-10 max-w-7xl xl:grid-cols-2 md:px-8">
            <div class="flex items-center justify-center">
                <ImageCarousel images={carouselImages1} alt="Jeffrey Vandever photos" />
            </div>
            <div class="flex flex-col justify-center">
                <div class="p-6 space-y-4 border border-[#2a2a2a] rounded-xl bg-[#1a1a1a]">
                    <p class="text-base leading-relaxed text-gray-300">
                        I'm someone who believes that excellence isn't about perfection — it's about <span class="font-bold text-blue-400">consistency, curiosity, and care for others.</span>
                    </p>
                    <p class="text-base leading-relaxed text-gray-300">
                        My drive as a developer and service engineer comes from a desire to build solutions that make people's work, learning, and communication easier and more meaningful. Whether I'm developing software, leading a team, or mentoring peers, I aim to set a high standard not only in the quality of my work but in how I treat the people I work with.
                    </p>
                </div>
            </div>

            <div class="flex flex-col justify-center">
                <div class="p-6 space-y-4 border border-[#2a2a2a] rounded-xl bg-[#1a1a1a]">
                    <p class="text-base leading-relaxed text-gray-300">
                        I value clarity over complexity, empathy over ego, and growth over comfort. Technology changes fast, but the ability to <span class="font-bold text-blue-400">listen, learn, and lead with integrity</span> never goes out of style. I've learned that progress is most rewarding when it lifts others with you.
                    </p>
                    <p class="text-base leading-relaxed text-gray-300">
                        At the end of the day, I want my work to be known for two things: <span class="font-bold text-blue-400">Excellence in execution</span> and a <span class="font-bold text-blue-400">genuine investment in people.</span>
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <ImageCarousel images={carouselImages2} alt="Jeffrey Vandever with Genworth Financial" />
            </div>
        </div>
    </section>

    <!-- ─── Skills Showcase ─── -->
    <section id="skills" class="border-t border-[#1e1e1e] scroll-mt-20">
        <SkillsShowcase {allSkills} onViewAll={openSkillsModal} />
    </section>

    <!-- Skills Modal -->
    <SkillsModal showModal={showSkillsModal} {skills} onClose={closeSkillsModal} />

    <!-- ─── Experience ─── -->
    <section id="experience" class="relative px-6 md:px-8 pt-20 pb-20 border-t border-[#1e1e1e] scroll-mt-20">
        <h2 class="text-4xl font-black text-center text-white uppercase md:text-6xl experience-title">Experience</h2>
        <ul class="grid max-w-6xl grid-cols-1 gap-5 mx-auto mt-10 xl:grid-cols-2">
            {#if experience.length === 0}
            <li class="text-center text-gray-500">No experience listed yet.</li>
            {/if}
            {#each experience as job}
            <li class="flex flex-col experience-card">
                <ExperienceCard {job} onClick={openExperienceModal} />
            </li>
            {/each}
        </ul>
    </section>

    <!-- Experience Modal -->
    <DetailModal showModal={showExperienceModal} selectedItem={selectedJob} type="experience" onClose={closeExperienceModal} />

    <!-- ─── Projects ─── -->
    <section id="projects" class="relative px-6 pb-20 md:px-8 pt-20 border-t border-[#1e1e1e] scroll-mt-20">
        <h2 class="text-4xl font-black text-center text-white uppercase md:text-6xl projects-title">Projects</h2>
        <ul class="grid grid-cols-1 gap-5 mx-auto mt-10 xl:grid-cols-3 max-w-7xl">
            {#if projects.length === 0}
            <li class="text-center text-gray-500">No projects listed yet.</li>
            {/if}
            {#each projects as project}
            <li class="flex flex-col project-card">
                <ProjectCard {project} onClick={openProjectModal} />
            </li>
            {/each}
        </ul>
    </section>

    <!-- Project Modal -->
    <DetailModal showModal={showProjectModal} selectedItem={selectedProject} type="project" onClose={closeProjectModal} />

    <!-- ─── Education ─── -->
    <section id="education" class="relative px-6 py-20 md:px-8 border-t border-[#1e1e1e] scroll-mt-20">
        <h2 class="text-4xl font-black text-center text-white uppercase md:text-6xl">Education</h2>
        <div class="max-w-3xl mx-auto mt-12 space-y-6">
            {#each education as edu}
                <div class="p-8 rounded-xl bg-[#1a1a1a]" style="border: 1px solid #2a2a2a; border-left: 4px solid #3b82f6;">
                    <h3 class="text-2xl font-bold text-white">{edu.title}</h3>
                    <p class="mt-2 text-sm font-medium text-blue-400">{edu.date}</p>
                    <div class="mt-6 space-y-3">
                        {#each edu.degree as deg}
                            <div class="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1 text-blue-400">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                <p class="text-base text-gray-200">{deg}</p>
                            </div>
                        {/each}
                        {#if edu.minor}
                            <div class="flex items-start gap-3 mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1 text-blue-300">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                <p class="text-sm italic text-gray-400">{edu.minor}</p>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <!-- ─── Contact ─── -->
    <section id="contact" class="relative px-6 py-20 md:px-8 border-t border-[#1e1e1e] scroll-mt-20">
        <h2 class="text-4xl font-black text-center text-white uppercase md:text-6xl">Contact Me</h2>
        <div class="max-w-2xl mx-auto mt-12">
            <form method="POST" action="https://formspree.io/f/xqakqokj" class="p-8 space-y-6 border border-[#2a2a2a] rounded-xl bg-[#1a1a1a]">
                <input type="hidden" name="_subject" value="Contact request from portfolio website" />
                <div>
                    <label for="email" class="block mb-1 text-sm font-medium text-gray-400">Your Email</label>
                    <input
                        type="email"
                        name="_replyto"
                        id="email"
                        placeholder="your@email.com"
                        required
                        class="block w-full p-3 text-gray-200 placeholder-gray-600 bg-[#111111] border border-[#333] rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <label for="message" class="block mb-1 text-sm font-medium text-gray-400">Your Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="What's on your mind?"
                        required
                        rows="5"
                        class="block w-full p-3 text-gray-200 placeholder-gray-600 bg-[#111111] border border-[#333] rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                </div>
                <div class="text-center">
                    <button
                        type="submit"
                        class="inline-flex items-center px-8 py-3 text-base font-semibold text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </section>

    <HeroAnimations />
    <ExperienceAnimations />
    <ProjectAnimations />

    <Footer />
</main>
