<script>
    export let project;
    export let onClick;
</script>

<button
    on:click={() => onClick(project)}
    class="project-card w-full h-full flex flex-col bg-[#1a1a1a] rounded-xl shadow-md border border-[#2a2a2a] hover:bg-[#1f1f1f] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer text-left overflow-hidden group"
>
    {#if project["demo-image"] != ''}
        <div class="relative w-full aspect-[16/9] overflow-hidden bg-[#111] flex-shrink-0">
            <img
                src="{project["demo-image"]}"
                alt="{project.title} demo"
                class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/30 to-transparent opacity-70"></div>
        </div>
    {/if}
    <div class="p-6 flex flex-col flex-1">
        <h2 class="text-xl font-semibold text-white mb-3">{project.title}</h2>

        <div class="flex flex-wrap gap-2 mt-3">
            {#each project.skills as skill}
                <span class="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20">
                    {skill}
                </span>
            {/each}
        </div>

        <div class="flex flex-wrap items-center gap-2 mt-3 flex-1">
            {#each project.highlights as highlight}
                <span class="text-gray-400 text-sm">• {highlight}</span>
            {/each}
        </div>

        <p class="text-blue-400 text-sm mt-4 font-medium">Click to view details →</p>
    </div>
</button>
