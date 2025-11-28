<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        // Animate experience cards on scroll
        const experienceCards = document.querySelectorAll('.experience-card');
        experienceCards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    rotateX: -15,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        end: 'top 50%',
                        scrub: 1,
                        toggleActions: 'play none none reverse',
                    },
                    delay: (index % 2) * 0.2, // Stagger based on column position
                }
            );
        });

        // Animate the section title
        const experienceTitle = document.querySelector('.experience-title');
        if (experienceTitle) {
            gsap.fromTo(experienceTitle,
                {
                    opacity: 0,
                    y: -50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: experienceTitle,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    });
</script>
