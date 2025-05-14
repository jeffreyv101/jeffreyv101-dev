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
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <h2 class="text-2xl font-semibold text-blue-300 dark:text-blue-500">Portfolio</h2>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-300 dark:text-gray-500" aria-label="Close menu">
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-400/10 dark:divide-gray-400">
            <div class="space-y-2 py-6">
              <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-50 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800">Home</a>
              <a href="#experience" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-50 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800">Experience</a> 
              <a href="#projects" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:text-black hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Projects</a>
              <a href="#contact" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:text-black hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">Contact Me</a>
            </div>

            <div class="py-6  flex items-center justify-between">
              <!-- GitHub -->
              <a href="https://github.com/jeffreyv101" target="_blank">
                <!-- GitHub Icon courtesy of Bootstrap icons -->
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-github hover:fill-white" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/jeffrey-vandever/" target="_blank">
                <!-- LinkedIn Icon courtesy of Bootstrap icons -->
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-linkedin hover:fill-white" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>

              <!-- Instagram -->
              <a href="https://www.instagram.com/jeffrohasaprofileyo/" target="_blank">
                <!-- Instagram Icon courtesy of Bootstrap icons -->
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-instagram hover:fill-white" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
              </a>
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
        console.error('Mobile navigation is not working correctly.');
    }
  });
</script>