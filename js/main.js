```javascript
/**
 * ============================================================================
 * Kairos Search
 * File: js/main.js
 * Description:
 * Main JavaScript for the Kairos Search website.
 *
 * Features
 * - Mobile navigation
 * - Sticky header enhancements
 * - Active navigation highlighting
 * - Smooth scrolling
 * - Scroll reveal animations
 * - Back-to-top button
 * - Header shadow on scroll
 * - Debounced resize handler
 * - GitHub Pages compatible
 * ============================================================================
 */

(() => {
    'use strict';

    /* =========================================================================
       ELEMENTS
       ========================================================================= */

    const header = document.querySelector('.site-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const sections = document.querySelectorAll('main section[id]');

    const backToTop = document.querySelector('.back-to-top');

    const revealElements = document.querySelectorAll(
        '.section, .card, .section-header, .hero-content'
    );

    /* =========================================================================
       MOBILE MENU
       ========================================================================= */

    function openMenu() {
        navMenu.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu() {
        navMenu.classList.contains('active')
            ? closeMenu()
            : openMenu();
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    /* =========================================================================
       SMOOTH SCROLL
       ========================================================================= */

    navLinks.forEach(link => {

        link.addEventListener('click', event => {

            const href = link.getAttribute('href');

            if (!href || !href.startsWith('#')) return;

            const target = document.querySelector(href);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });

    });

    if (backToTop) {

        backToTop.addEventListener('click', event => {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });

    }

    /* =========================================================================
       HEADER SHADOW
       ========================================================================= */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 20) {

            header.style.boxShadow =
                '0 8px 30px rgba(0,0,0,.08)';

        } else {

            header.style.boxShadow = 'none';

        }

    }

    /* =========================================================================
       BACK TO TOP
       ========================================================================= */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add('show');

        } else {

            backToTop.classList.remove('show');

        }

    }

    /* =========================================================================
       ACTIVE NAVIGATION
       ========================================================================= */

    function updateActiveNavigation() {

        const scrollPosition = window.scrollY + 160;

        sections.forEach(section => {

            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (
                scrollPosition >= top &&
                scrollPosition < bottom
            ) {

                const id = section.getAttribute('id');

                navLinks.forEach(link => {

                    link.removeAttribute('aria-current');

                    if (
                        link.getAttribute('href') === '#' + id
                    ) {
                        link.setAttribute(
                            'aria-current',
                            'page'
                        );
                    }

                });

            }

        });

    }

    /* =========================================================================
       SCROLL REVEAL
       ========================================================================= */

    revealElements.forEach(element => {

        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';

    });

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add('fade-up');

                entry.target.style.opacity = '';
                entry.target.style.transform = '';

                revealObserver.unobserve(entry.target);

            });

        },

        {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        }

    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* =========================================================================
       DEBOUNCE
       ========================================================================= */

    function debounce(fn, delay = 200) {

        let timer;

        return (...args) => {

            clearTimeout(timer);

            timer = setTimeout(() => {

                fn(...args);

            }, delay);

        };

    }

    /* =========================================================================
       RESIZE
       ========================================================================= */

    const handleResize = debounce(() => {

        if (window.innerWidth >= 1024) {

            closeMenu();

        }

    }, 150);

    window.addEventListener('resize', handleResize);

    /* =========================================================================
       SCROLL
       ========================================================================= */

    function handleScroll() {

        updateHeader();

        updateBackToTop();

        updateActiveNavigation();

    }

    window.addEventListener(
        'scroll',
        handleScroll,
        { passive: true }
    );

    /* =========================================================================
       INITIALISE
       ========================================================================= */

    function init() {

        updateHeader();

        updateBackToTop();

        updateActiveNavigation();

    }

    document.addEventListener('DOMContentLoaded', init);

})();
```
