<script>
    export let showModal = false;
    /**
     * @type {any}
     */
    export let selectedItem = null;
    /**
     * @type {'experience' | 'project'}
     */
    export let type = 'experience';
    /**
     * @type {() => void}
     */
    export let onClose;

    /**
     * @param {KeyboardEvent} event
     */
    function handleKeydown(event) {
        if (event.key === 'Escape') {
            onClose();
        }
    }

    // Color scheme based on type
    $: colors = type === 'experience' ? {
        border: 'border-green-500/30',
        headerGradient: 'from-green-800 to-blue-800',
        headerBorder: 'border-green-500/30',
        skillsBg: 'bg-green-500/20',
        skillsText: 'text-green-300',
        skillsBorder: 'border-green-500/30',
        skillsTitle: 'text-green-400',
        highlightsTitle: 'text-blue-400',
        highlightsIcon: 'text-blue-400',
        button: 'bg-green-600 hover:bg-green-700'
    } : {
        border: 'border-blue-500/30',
        headerGradient: 'from-blue-800 to-purple-800',
        headerBorder: 'border-blue-500/30',
        skillsBg: 'bg-blue-500/20',
        skillsText: 'text-blue-300',
        skillsBorder: 'border-blue-500/30',
        skillsTitle: 'text-blue-400',
        highlightsTitle: 'text-green-400',
        highlightsIcon: 'text-green-400',
        button: 'bg-blue-600 hover:bg-blue-700'
    };
</script>

<svelte:window on:keydown={handleKeydown} />

{#if showModal && selectedItem}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
    class="fixed inset-0 z-50 flex items-center justify-center p-4 border-0 bg-black/70 backdrop-blur-sm"
    on:click={onClose}
>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
        class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 {colors.border} m-2 md:m-0"
        on:click={(e) => e.stopPropagation()}
    >
        <!-- Modal Header -->
        <div class="sticky top-0 bg-gradient-to-r {colors.headerGradient} rounded-t-2xl border-b {colors.headerBorder}">
            <div class="flex items-start justify-between p-6">
                <div>
                    <h2 class="text-3xl font-bold text-white">{selectedItem.title}</h2>
                    <div class="flex items-center gap-4 mt-2">
                        {#if selectedItem.image}
                            <img src={selectedItem.image} alt="{type === 'experience' ? selectedItem.company : selectedItem.title} logo" class="h-12 mt-2 mb-1 rounded-md"/>
                        {/if}
                            <div>
                                {#if selectedItem.company}
                                <p class="mt-1 text-lg text-green-200">{selectedItem.company}</p>
                                {/if}
                                {#if selectedItem.location || selectedItem.date}
                                <p class="mt-1 text-sm text-gray-300">{selectedItem.location} • {selectedItem.date}</p>
                                {/if}
                            </div>
                    </div>
                </div>
                <button 
                    on:click={onClose}
                    class="p-2 text-gray-300 transition-all duration-200 rounded-full hover:text-white hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6 space-y-6">
            <!-- Skills Section -->
            <div>
                <h3 class="text-xl font-semibold {colors.skillsTitle} mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sailboat-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1" /><path d="M4 18l-1 -3h18l-1 3" /><path d="M12 11v4" /><path d="M7 3c1.333 2.667 1.333 5.333 0 8h10c1.333 -2.667 1.333 -5.333 0 -8" /><path d="M6 3h12" /></svg>
                    {type === 'experience' ? 'Skills & Technologies' : 'Technologies Used'}
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each selectedItem.skills as skill}
                        <span class="{colors.skillsBg} {colors.skillsText} px-4 py-2 rounded-full text-sm font-medium border {colors.skillsBorder}">
                            {skill}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Highlights Section -->
            <div>
                <h3 class="text-xl font-semibold {colors.highlightsTitle} mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>
                    {type === 'experience' ? 'Key Highlights' : 'Key Features'}
                </h3>
                <ul class="space-y-2">
                    {#each selectedItem.highlights as highlight}
                        <li class="flex items-start gap-2 text-gray-300">
                            <span class="{colors.highlightsIcon} mt-1">▸</span>
                            <span>{highlight}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            {#if type === 'project' && selectedItem.context}
            <!-- Context Section (Projects only) -->
            <div>
                <h3 class="flex items-center gap-2 mb-3 text-xl font-semibold text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>
                    Problem Statement
                </h3>
                <p class="leading-relaxed text-gray-300">{selectedItem.context}</p>
            </div>
            {/if}

            <!-- Description Section -->
            <div>
                <h3 class="flex items-center gap-2 mb-3 text-xl font-semibold text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9h.01" /><path d="M11 12h1v4h1" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
                    {type === 'experience' ? 'Description' : 'Project Description'}
                </h3>
                <div class="space-y-3">
                    {#each selectedItem.description as paragraph}
                        <p class="leading-relaxed text-gray-300">
                            {paragraph}
                        </p>
                    {/each}
                </div>

                {#if type === 'project' && selectedItem["demo-image"] && selectedItem["demo-image"] !== ''}
                    <div class="mt-6">
                        <img 
                            src={selectedItem["demo-image"]} 
                            alt="{selectedItem.title} demo" 
                            class="w-full border border-gray-700 rounded-lg shadow-lg"
                        >
                    </div>
                {/if}
            </div>

            {#if type === 'project' && selectedItem.link && selectedItem.link !== 'NA' && selectedItem.link !== 'WIP'}
            <!-- Link Section (Projects only) -->
            <div>
                <h3 class="flex items-center gap-2 mb-3 text-xl font-semibold text-cyan-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                    Project Link
                </h3>
                <a 
                    href={selectedItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 underline transition-colors text-cyan-300 hover:text-cyan-200 underline-offset-4"
                >
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
            {/if}
        </div>

        <!-- Modal Footer -->
        <div class="sticky bottom-0 p-4 border-t border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 rounded-b-2xl">
            <button 
                on:click={onClose}
                class="w-full {colors.button} text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >Close</button>
        </div>
    </div>
</div>
{/if}
