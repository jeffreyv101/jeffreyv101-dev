<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    onMount(() => {
        // Disable animations on mobile for better performance
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            // Set opacity to 1 for all elements on mobile
            document.querySelectorAll('.hero-welcome, .hero-name, .hero-tagline, .hero-subtitle, .hero-buttons, .hero-image, .scroll-arrow').forEach(el => {
                if (el instanceof HTMLElement) el.style.opacity = '1';
            });
            return;
        }
        // Hero section animations
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        heroTimeline
            // Animate welcome text
            .fromTo('.hero-welcome', 
                { opacity: 0, y: -30 },
                { opacity: 1, y: 0, duration: 0.8 }
            )
            // Animate main name
            .fromTo('.hero-name',
                { opacity: 0, scale: 0.8, rotateX: -20 },
                { opacity: 1, scale: 1, rotateX: 0, duration: 1 },
                '-=0.4'
            )
            // Animate tagline
            .fromTo('.hero-tagline',
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8 },
                '-=0.6'
            )
            // Animate subtitle text
            .fromTo('.hero-subtitle',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.4'
            )
            // Animate buttons
            .fromTo('.hero-buttons',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            )
            // Animate profile picture with bounce
            .fromTo('.hero-image',
                { opacity: 0, scale: 0.5, rotation: -10 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    rotation: 0, 
                    duration: 1,
                    ease: 'back.out(1.7)'
                },
                '-=0.8'
            )
            // Animate scroll arrow
            .fromTo('.scroll-arrow',
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            );

        // Add floating animation to profile picture
        gsap.to('.hero-image', {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: 1.5
        });

        // Add subtle glow pulse to buttons
        gsap.to('.hero-button', {
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            stagger: 0.2
        });
    });
</script>
