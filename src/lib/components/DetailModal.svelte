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
</script>

<svelte:window on:keydown={handleKeydown} />

{#if showModal && selectedItem}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    on:click={onClose}
>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="bg-[#161616] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#2a2a2a] m-2 md:m-0"
        on:click={(e) => e.stopPropagation()}
    >
        <!-- Modal Header -->
        <div class="sticky top-0 bg-[#1a1a1a] rounded-t-2xl border-b border-[#2a2a2a]">
            <div class="flex items-start justify-between p-6">
                <div>
                    <h2 class="text-2xl font-black uppercase text-white">{selectedItem.title}</h2>
                    <div class="flex items-center gap-4 mt-2">
                        {#if selectedItem.image}
                            <img src={selectedItem.image} alt="{type === 'experience' ? selectedItem.company : selectedItem.title} logo" class="h-10 mt-1 rounded-md"/>
                        {/if}
                        <div>
                            {#if selectedItem.company}
                            <p class="text-base text-blue-300">{selectedItem.company}</p>
                            {/if}
                            {#if selectedItem.location || selectedItem.date}
                            <p class="mt-0.5 text-sm text-gray-500 whitespace-nowrap">{selectedItem.location} • {selectedItem.date}</p>
                            {/if}
                        </div>
                    </div>
                </div>
                <button
                    on:click={onClose}
                    class="p-2 text-gray-500 transition-all duration-200 rounded-full hover:text-white hover:bg-white/10 flex-shrink-0 ml-4"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6 space-y-6">
            <!-- Skills Section -->
            <div>
                <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    {type === 'experience' ? 'Skills & Technologies' : 'Technologies Used'}
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each selectedItem.skills as skill}
                        <span class="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20">
                            {skill}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Highlights Section -->
            <div>
                <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    {type === 'experience' ? 'Key Highlights' : 'Key Features'}
                </h3>
                <ul class="space-y-2">
                    {#each selectedItem.highlights as highlight}
                        <li class="flex items-start gap-2 text-gray-300">
                            <span class="text-blue-500 mt-1 flex-shrink-0">▸</span>
                            <span>{highlight}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            {#if type === 'project' && selectedItem.context}
            <div>
                <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    Problem Statement
                </h3>
                <p class="leading-relaxed text-gray-300">{selectedItem.context}</p>
            </div>
            {/if}

            <!-- Description Section -->
            <div>
                <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    {type === 'experience' ? 'Description' : 'Project Description'}
                </h3>
                <div class="space-y-3">
                    {#each selectedItem.description as paragraph}
                        <p class="leading-relaxed text-gray-300">{paragraph}</p>
                    {/each}
                </div>

                {#if type === 'project' && selectedItem["demo-image"] && selectedItem["demo-image"] !== ''}
                    <div class="mt-6">
                        <img
                            src={selectedItem["demo-image"]}
                            alt="{selectedItem.title} demo"
                            class="w-full border border-[#2a2a2a] rounded-lg shadow-lg"
                        >
                    </div>
                {/if}
            </div>

            {#if type === 'project' && selectedItem.link && selectedItem.link !== 'NA' && selectedItem.link !== 'WIP'}
            <div>
                <h3 class="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">
                    Project Link
                </h3>
                <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 underline underline-offset-4 transition-colors"
                >
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
            {/if}
        </div>

        <!-- Modal Footer -->
        <div class="sticky bottom-0 p-4 border-t border-[#2a2a2a] bg-[#161616] rounded-b-2xl">
            <button
                on:click={onClose}
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >Close</button>
        </div>
    </div>
</div>
{/if}
