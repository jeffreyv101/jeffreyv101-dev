<script>
    export let job;
    export let onClick;
</script>

<button
    on:click={() => onClick(job)}
    class="experience-card w-full h-full flex flex-col bg-[#1a1a1a] p-6 rounded-xl shadow-md border border-[#2a2a2a] hover:bg-[#1f1f1f] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer text-left"
>
    <div class="md:flex md:justify-between md:items-start gap-4">
        <div class="min-w-0">
            <h2 class="text-xl font-semibold text-white">{job.title}</h2>
            <h2 class="text-base text-gray-400 mt-0.5">{job.company}</h2>
        </div>
        <div class="flex justify-between md:block md:justify-normal mt-2 md:mt-0 md:text-right flex-shrink-0">
            <h2 class="text-sm font-medium text-gray-300 whitespace-nowrap">{job.location}</h2>
            <h3 class="text-sm text-gray-500 mt-0.5 whitespace-nowrap">{job.date}</h3>
        </div>
    </div>
    <div class="flex flex-wrap items-center gap-2 mt-4 flex-1">
        {#each job.highlights as highlight}
            <span class="text-blue-300 text-sm font-medium">• {highlight}</span>
        {/each}
    </div>
    <p class="text-blue-400 text-sm mt-4 font-medium">Click to view details →</p>
</button>
