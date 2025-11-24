<script>
    export let job;
    export let onClick;
</script>

<button 
    on:click={() => onClick(job)}
    class="experience-card w-full bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700/60 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer text-left"
>
    <div class="md:flex md:justify-between">
        <div>
            <h2 class="text-2xl font-semibold text-white">{job.title}</h2>
            <h2 class="text-lg text-gray-300">{job.company}</h2>
        </div>
        <div class="flex justify-between md:block md:justify-normal">
            <h2 class="italic font-bold pb-2.5 text-gray-200">{job.location}</h2>
            <h3 class="italic text-gray-200">{job.date}</h3>
        </div>
    </div>
    <div class="flex flex-wrap items-center gap-2">
        {#each job.highlights as highlight}
            <span class="text-green-300 text-sm font-medium mt-3">• {highlight}</span>
        {/each}
    </div>
    <p class="text-green-400 text-sm mt-4 font-medium">Click to view details →</p>
</button>
