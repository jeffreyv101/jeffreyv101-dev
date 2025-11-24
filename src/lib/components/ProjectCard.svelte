<script>
    export let project;
    export let onClick;
</script>

<button 
    on:click={() => onClick(project)}
    class="project-card w-full bg-gray-800/50 backdrop-blur-md rounded-lg shadow-md border border-gray-700 hover:bg-gray-700/60 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer text-left overflow-hidden group"
>
    {#if project["demo-image"] != ''}
        <div class="relative w-full h-64 overflow-hidden bg-gray-900">
            <img 
                src="{project["demo-image"]}" 
                alt="{project.title} demo" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
            >
            <!-- Gradient overlay for better text readability -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
        </div>
    {/if}
    <div class="p-6">
        <h2 class="text-2xl font-semibold text-white mb-3">{project.title}</h2>
        
        <!-- Skills Section -->
        <div class="flex flex-wrap gap-2 mt-3">
            {#each project.skills as skill}
                <span class="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                    {skill}
                </span>
            {/each}
        </div>

        <!-- Highlights Section -->
        <div class="flex flex-wrap items-center gap-2 mt-3">
            {#each project.highlights as highlight}
                <span class="text-green-300 text-sm font-medium">• {highlight}</span>
            {/each}
        </div>
        
        <p class="text-blue-400 text-sm mt-4 font-medium">Click to view details →</p>
    </div>
</button>
