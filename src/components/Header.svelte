<header class="fixed inset-x-0 top-0 z-50 bg-gray-800 shadow">
  <nav class="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <h2 class="text-xl font-semibold text-blue-400">Jeffrey Vandever</h2>
      </a>
    </div>

    <!-- Burger Menu Icon for Mobile Screens -->
    <div id="burger-icon" class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
          <span class="sr-only">Open main menu</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <!-- Header Link Styling for Desktop Screens -->
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/" class="text-sm/6 font-semibold text-gray-400">Home</a>
        <a href="#experience" class="text-sm/6 font-semibold text-gray-400">Experience</a>
        <a href="#projects" class="text-sm/6 font-semibold text-gray-400">Projects</a>
        <a href="#contact" class="text-sm/6 font-semibold text-gray-400">Contact Me</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end dark:text-gray-100">
        <a href="https://github.com/jeffreyv101" target="_blank" class="text-sm/6 font-semibold text-gray-300">View GitHub <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <h2 class="text-2xl font-semibold text-blue-700 dark:text-blue-500">Jeffrey Vandever</h2>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-500" aria-label="Close menu">
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400">
            <div class="space-y-2 py-6">
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Home</a>
              <a href="#experience" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Experience</a> 
              <a href="#projects" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Projects</a>
              <a href="#contact" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Contact Me</a>
            </div>
            <div class="py-6">
              <a href="https://github.com/jeffreyv101" target="_blank" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">View GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

<!-- Script for Mobile Navigation -->
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const burgerIcon = document.getElementById('burger-icon');
    const mobileMenu = document.querySelector('[role="dialog"]');
    
    if (burgerIcon && mobileMenu) {
      const closeMenu = mobileMenu.querySelector('button[aria-label="Close menu"]');
      const backdrop = mobileMenu.querySelector('div:first-of-type');

      if (closeMenu && backdrop) {
        burgerIcon.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            burgerIcon.classList.add('hidden');
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            burgerIcon.classList.remove('hidden');
        });

        backdrop.addEventListener('click', () => {
            mobileMenu.classList.remove('visible');
        });
      }
      else
        console.log('Mobile navigation is not working 3!');
    }
  });
</script>