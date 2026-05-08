<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    /**
     * @type {Array<{ name: string, svg: string }>}
    */
    export let allSkills = [];
    export let onViewAll;

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

    onMount(() => {
        if (typeof document === 'undefined') return;
        const track = document.querySelector('.skills-track');
        if (track) {
            const trackWidth = track.scrollWidth;
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
    <div class="flex items-center justify-center gap-4 mb-8">
        <h3 style="font-family: 'CustomCursive'" class="text-center text-4xl font-semibold text-white">Technical Skills</h3>
    </div>
    <div class="relative">
        <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

        <div class="flex overflow-hidden">
            <div class="skills-track flex gap-6 py-4">
                {#each [...allSkills, ...allSkills] as skill}
                    <button
                        class="flex-shrink-0 w-16 h-16 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] hover:border-blue-500/40 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                        on:mouseenter={(e) => showTooltip(e, skill.name)}
                        on:mouseleave={hideTooltip}
                        on:focus={(e) => showTooltip(e, skill.name)}
                        on:blur={hideTooltip}
                        aria-label={skill.name}
                    >
                        <div class="text-blue-300 w-full h-full flex items-center justify-center">
                            {@html skill.svg}
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center mt-8">
        <button
            on:click={onViewAll}
            class="bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-5 py-2.5 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 text-sm font-medium"
            aria-label="View all skills"
        >
            View All Skills
        </button>
    </div>
</div>

{#if hoveredSkill}
    <div
        class="fixed z-50 bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg shadow-lg border border-blue-500/30 pointer-events-none text-sm"
        style="left: {tooltipX + 12}px; top: {tooltipY + 12}px;"
    >
        {hoveredSkill}
    </div>
{/if}
