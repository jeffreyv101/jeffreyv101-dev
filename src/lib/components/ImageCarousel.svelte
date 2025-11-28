<script>
    import { onMount, onDestroy } from 'svelte';

    /**
     * @type {string[]}
     */
    export let images = [];
    export let autoScrollInterval = 5000; // 5 seconds
    export let alt = "Carousel image";

    let currentIndex = 0;
    /**
     * @type {number | undefined}
     */
    let intervalId;

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    /**
     * @param {number} index
     */
    function goToImage(index) {
        currentIndex = index;
    }

    onMount(() => {
        if (images.length > 1) {
            intervalId = setInterval(nextImage, autoScrollInterval);
        }
    });

    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
</script>

<div class="relative w-full overflow-hidden rounded-lg shadow-lg group">
    <!-- Images -->
    <div class="relative max-h-96">
        {#each images as image, index}
            <img 
                src={image} 
                alt={`${alt} ${index + 1}`}
                class="object-cover w-full transition-opacity duration-500 max-h-96 {index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}"
            />
        {/each}
    </div>

    {#if images.length > 1}
        <!-- Previous Button -->
        <button
            on:click={prevImage}
            class="absolute p-2 text-white transition-all -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-black/50 hover:bg-black/70 group-hover:opacity-100"
            aria-label="Previous image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>

        <!-- Next Button -->
        <button
            on:click={nextImage}
            class="absolute p-2 text-white transition-all -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-black/50 hover:bg-black/70 group-hover:opacity-100"
            aria-label="Next image"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
            {#each images as _, index}
                <button
                    on:click={() => goToImage(index)}
                    class="w-2 h-2 rounded-full transition-all {index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}"
                    aria-label={`Go to image ${index + 1}`}
                >
                </button>
            {/each}
        </div>
    {/if}
</div>
