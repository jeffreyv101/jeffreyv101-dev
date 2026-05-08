<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    onMount(() => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        if (isMobile) {
            if (typeof document !== 'undefined') {
                document.querySelectorAll('.hero-card, .hero-title, .hero-desc, .hero-stats, .hero-tiles').forEach(el => {
                    if (el instanceof HTMLElement) el.style.opacity = '1';
                });
            }
            return;
        }

        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTimeline
            .fromTo('.hero-card',
                { opacity: 0, x: -60, scale: 0.95 },
                { opacity: 1, x: 0, scale: 1, duration: 0.9 }
            )
            .fromTo('.hero-title',
                { opacity: 0, x: 60 },
                { opacity: 1, x: 0, duration: 0.8 },
                '-=0.6'
            )
            .fromTo('.hero-desc',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.4'
            )
            .fromTo('.hero-stats',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.3'
            )
            .fromTo('.hero-tiles',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.3'
            );
    });
</script>
