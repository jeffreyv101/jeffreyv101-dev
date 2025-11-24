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
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    on:click={onClose}
>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
        class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border-2 border-green-500/30"
        on:click={(e) => e.stopPropagation()}
    >
        <!-- Modal Header -->
        <div class="sticky top-0 bg-gradient-to-r from-green-800 to-blue-800 p-6 rounded-t-2xl border-b border-green-500/30 z-10">
            <div class="flex justify-between items-center">
                <h2 class="text-3xl font-bold text-white">All Technical Skills</h2>
                <button 
                    on:click={onClose}
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
        <div class="p-6 space-y-8">
            {#each skills as category}
                <div>
                    <h3 class="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                        {category.title}
                    </h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {#each category.skills as skill}
                            <div class="bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 border border-gray-700 hover:border-green-500/50">
                                <div class="text-green-300 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                                    {@html skill.svg}
                                </div>
                                <p class="text-center text-sm text-gray-300 font-medium">{skill.name}</p>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

        <!-- Modal Footer -->
        <div class="sticky bottom-0 bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-t border-gray-700 rounded-b-2xl">
            <button 
                on:click={onClose}
                class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >Close</button>
        </div>
    </div>
</div>
{/if}
