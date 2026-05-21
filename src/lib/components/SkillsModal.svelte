<script>
    export let showModal = false;
    /**
     * @type {Array<{ title: string, skills: Array<{ name: string, svg: string }> }>}
     */
    export let skills = [];
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

{#if showModal}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    on:click={onClose}
>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="bg-[#161616] rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-[#2a2a2a]"
        on:click={(e) => e.stopPropagation()}
    >
        <!-- Modal Header -->
        <div class="sticky top-0 z-10 p-6 border-b border-[#2a2a2a] bg-[#1a1a1a] rounded-t-2xl">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-black uppercase text-white">All Technical Skills</h2>
                <button
                    on:click={onClose}
                    class="p-2 text-gray-400 transition-all duration-200 rounded-full hover:text-white hover:bg-white/10"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Modal Content -->
        <div class="p-6 space-y-8">
            {#each skills as category}
                <div>
                    <h3 class="mb-4 text-sm font-semibold text-blue-400 uppercase tracking-widest">
                        {category.title}
                    </h3>
                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                        {#each category.skills as skill}
                            <div class="p-3 transition-all duration-300 border border-[#2a2a2a] rounded-xl bg-[#1a1a1a] hover:bg-[#1f1f1f] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30">
                                <div class="flex items-center justify-center w-8 h-8 mx-auto mb-2 text-blue-300">
                                    {@html skill.svg}
                                </div>
                                <p class="text-sm font-medium text-center text-gray-300">{skill.name}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

        <!-- Modal Footer -->
        <div class="sticky bottom-0 p-4 border-t border-[#2a2a2a] bg-[#161616] rounded-b-2xl">
            <button
                on:click={onClose}
                class="w-full px-6 py-3 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
            >Close</button>
        </div>
    </div>
</div>
{/if}
