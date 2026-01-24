<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    
    /**
     * @type {Array<{ name: string, svg: string }>}
    */
    export let allSkills = [];
    export let onViewAll;

    // Tooltip state
    /**
     * @type {string|null}
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
        if (typeof document === 'undefined') return;
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
    });
</script>

<div class="py-12 overflow-hidden max-w-[150rem] mx-auto">
    <div class="flex items-center justify-center gap-4 mb-6">
        <h3 style="font-family: 'CustomCursive'" class="text-center text-4xl font-semibold text-white">Technical Skills</h3>
    </div>
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
    <div class="flex items-center justify-center mt-6">
        <button
            on:click={onViewAll}
            class="bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg border border-green-500/30 transition-all duration-300 hover:scale-105"
            aria-label="View all skills"
        >
            View All
        </button>
    </div>
</div>

<!-- Tooltip for skills -->
{#if hoveredSkill}
    <div 
        class="fixed z-50 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg border border-green-500/50 pointer-events-none"
        style="left: {tooltipX + 10}px; top: {tooltipY + 10}px;"
    >
        {hoveredSkill}
    </div>
{/if}
