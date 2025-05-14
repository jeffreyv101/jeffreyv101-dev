<script>
    import Header from '$lib/components/+Header.svelte';
    import Footer from '$lib/components/+Footer.svelte';
</script>

<Header />
<div class="bg-gradient-to-b from-blue-900 to-green-900">
  <Header />

  <div class="relative isolate px-6 pt-0 lg:px-8">
    <div class="absolute inset-0 -z-10 overflow-hidden xl:h-full">
    </div>
    <div class="relative mx-auto max-w-4xl py-32 sm:py-40 lg:py-60 text-center">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Blog coming soon!
      </h1>
      <p class="mt-6 text-lg text-blue-100 dark:text-green-200">
        Stay tuned for updates on my latest projects and insights into the world of software development. I can't wait to share my journey with you!
      </p>
      <a href="/" class="mt-8 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-300">
        Back to Home
      </a>
    </div>
  </div>
</div>

<Footer />