// Structural Architecture - Main JavaScript

/**
 * Main application object
 */
const StructuralArchitecture = {
    // Configuration
    config: {
        languages: ['en', 'fr'],
        defaultLanguage: 'en',
        formspreeEndpoint: 'https://formspree.io/f/your-form-id', // Replace with actual Formspree endpoint
        whatsappNumber: '22796380877',
        phoneNumber: '+22796380877',
        email: 'bacseried@gmail.com'
    },

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.setupLanguageSwitching();
        this.setupThemeSwitching();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupFormHandling();
        this.setupLazyLoading();
        this.setupFAQ();
        this.setupScrollEffects();
        this.setupPlanFiltering();
        this.setupRippleEffect();
        this.setupScrollAnimations();
        this.setupTouchEnhancements();
        this.setupBeautifulAnimations();
        this.setupParallaxEffects();
        this.setupScrollToTopButton();
        this.setupPageTransitions();
        this.setupCursorEffects();
        this.detectLanguageFromURL();
        console.log('✨ Enhanced Structural Architecture website initialized with beautiful animations');
    },

    // Set up all event listeners
    setupEventListeners() {
        // DOM Content Loaded
        document.addEventListener('DOMContentLoaded', () => {
            this.updateActiveNavigation();
            this.setupHeaderScrollEffect();
        });

        // Window events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 100));
        window.addEventListener('resize', this.throttle(this.handleResize.bind(this), 250));

        // Page visibility
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    },

    // Language switching functionality
    setupLanguageSwitching() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = btn.dataset.lang;
                this.switchLanguage(targetLang);
            });
        });

        // Update active language button
        this.updateActiveLanguage();
    },

    // Detect current language from URL
    detectLanguageFromURL() {
        const path = window.location.pathname;
        const currentLang = path.includes('/fr/') ? 'fr' : 'en';
        
        // Update language buttons
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });

        return currentLang;
    },

    // Switch language
    switchLanguage(targetLang) {
        const currentPath = window.location.pathname;
        const currentLang = this.detectLanguageFromURL();
        
        if (currentLang === targetLang) return;

        let newPath;
        if (currentLang === 'en') {
            newPath = currentPath.replace('/en/', '/fr/');
        } else {
            newPath = currentPath.replace('/fr/', '/en/');
        }

        // Handle root paths
        if (currentPath === '/en/' || currentPath === '/en/index.html') {
            newPath = '/fr/';
        } else if (currentPath === '/fr/' || currentPath === '/fr/index.html') {
            newPath = '/en/';
        }

        window.location.href = newPath;
    },

    // Update active language button
    updateActiveLanguage() {
        const currentLang = this.detectLanguageFromURL();
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === currentLang);
        });
    },

    // Theme switching (dark/light mode)
    setupThemeSwitching() {
        const themeBtn = document.querySelector('.theme-switcher');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (themeBtn) {
            // Update theme button icon
            this.updateThemeIcon(themeBtn, currentTheme);
            
            themeBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                this.updateThemeIcon(themeBtn, newTheme);
            });
        }
    },

    // Update theme icon
    updateThemeIcon(btn, theme) {
        const icon = theme === 'dark' ? '☀️' : '🌙';
        btn.innerHTML = icon;
        btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    },

    // Enhanced mobile menu functionality
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const body = document.body;
        
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                const isActive = navMenu.classList.contains('active');
                
                navMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
                
                // Update aria attributes
                mobileToggle.setAttribute('aria-expanded', !isActive);
                
                // Prevent body scroll when menu is open
                body.style.overflow = !isActive ? 'hidden' : '';
                
                // Add backdrop blur effect
                if (!isActive) {
                    body.style.backdropFilter = 'blur(5px)';
                } else {
                    body.style.backdropFilter = '';
                }
            });

            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    body.style.overflow = '';
                    body.style.backdropFilter = '';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    body.style.overflow = '';
                    body.style.backdropFilter = '';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Handle escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    body.style.overflow = '';
                    body.style.backdropFilter = '';
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    },

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // Form handling
    setupFormHandling() {
        const forms = document.querySelectorAll('form[data-form-type]');
        
        forms.forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });

        // Setup honeypot fields
        this.setupHoneypot();
    },

    // Handle form submission
    async handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formType = form.dataset.formType;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Check honeypot
        if (this.checkHoneypot(form)) {
            console.log('Spam detected');
            return;
        }

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        form.classList.add('loading');

        try {
            const formData = new FormData(form);
            
            // Add form type to data
            formData.append('form_type', formType);
            formData.append('timestamp', new Date().toISOString());
            formData.append('user_agent', navigator.userAgent);

            const response = await fetch(this.config.formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showFormSuccess(form);
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showFormError(form);
        } finally {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            form.classList.remove('loading');
        }
    },

    // Setup honeypot for spam protection
    setupHoneypot() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Create honeypot field
            const honeypot = document.createElement('input');
            honeypot.type = 'text';
            honeypot.name = 'website';
            honeypot.style.display = 'none';
            honeypot.setAttribute('tabindex', '-1');
            honeypot.setAttribute('autocomplete', 'off');
            
            form.appendChild(honeypot);
        });
    },

    // Check honeypot field
    checkHoneypot(form) {
        const honeypot = form.querySelector('input[name="website"]');
        return honeypot && honeypot.value !== '';
    },

    // Show form success message
    showFormSuccess(form) {
        const successMessage = form.querySelector('.form-success') || this.createFormMessage('success');
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        successMessage.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    },

    // Show form error message
    showFormError(form) {
        const errorMessage = form.querySelector('.form-error') || this.createFormMessage('error');
        errorMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
        errorMessage.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    },

    // Create form message element
    createFormMessage(type) {
        const message = document.createElement('div');
        message.className = `form-${type}`;
        message.style.display = 'none';
        message.style.padding = '1rem';
        message.style.marginTop = '1rem';
        message.style.borderRadius = '0.5rem';
        message.style.backgroundColor = type === 'success' ? '#10B981' : '#EF4444';
        message.style.color = 'white';
        
        // Add to form
        const forms = document.querySelectorAll('form');
        if (forms.length > 0) {
            forms[0].appendChild(message);
        }
        
        return message;
    },

    // Lazy loading for images
    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
            });
        }
    },

    // FAQ functionality
    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active', !isActive);
                });
            }
        });
    },

    // Scroll effects
    setupScrollEffects() {
        // Header scroll effect is handled in handleScroll
        
        // Animate elements on scroll
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                    }
                });
            }, { threshold: 0.1 });

            animatedElements.forEach(el => observer.observe(el));
        }
    },

    // Header scroll effect
    setupHeaderScrollEffect() {
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY > 100;
                header.classList.toggle('scrolled', scrolled);
            });
        }
    },

    // Plan filtering functionality
    setupPlanFiltering() {
        const filterButtons = document.querySelectorAll('.plan-filter-btn');
        const planItems = document.querySelectorAll('.plan-card');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter plans
                planItems.forEach(item => {
                    const category = item.dataset.category;
                    const show = filter === 'all' || category === filter;
                    
                    item.style.display = show ? 'block' : 'none';
                });
            });
        });
    },

    // Update active navigation
    updateActiveNavigation() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = currentPath.endsWith(href) || 
                           (href === './' && currentPath.endsWith('/'));
            
            link.classList.toggle('active', isActive);
        });
    },

    // Handle scroll events
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Update header
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('scrolled', scrollY > 100);
        }
        
        // Parallax effects (if any)
        this.updateParallax(scrollY);
    },

    // Handle resize events
    handleResize() {
        // Close mobile menu on resize
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth > 768 && navMenu && mobileToggle) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    // Handle visibility change
    handleVisibilityChange() {
        if (document.hidden) {
            // Page is hidden
            console.log('Page hidden');
        } else {
            // Page is visible
            console.log('Page visible');
        }
    },

    // Parallax effects
    updateParallax(scrollY) {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    },

    // Utility: Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Utility: Debounce function
    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },

    // Contact utilities
    openWhatsApp(message = '') {
        const url = `https://wa.me/${this.config.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },

    makePhoneCall() {
        window.location.href = `tel:${this.config.phoneNumber}`;
    },

    sendEmail(subject = '', body = '') {
        const mailto = `mailto:${this.config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    },

    // Analytics (if needed)
    trackEvent(category, action, label = '', value = 0) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
        
        console.log('Event tracked:', { category, action, label, value });
    },

    // Add ripple effect to buttons
    setupRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    },

    // Setup scroll animations
    setupScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);
            
            // Add scroll animation class to elements
            const animateElements = document.querySelectorAll('.card, .service-card, .plan-card');
            animateElements.forEach(el => {
                el.classList.add('scroll-animate');
                observer.observe(el);
            });
        }
    },

    // Setup touch enhancements for mobile
    setupTouchEnhancements() {
        // Improve touch response
        const touchElements = document.querySelectorAll('.btn, .card, .nav-link');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });
            
            element.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, { passive: true });
        });
        
        // Prevent 300ms click delay on mobile
        if ('ontouchstart' in window) {
            document.addEventListener('touchstart', function() {}, { passive: true });
        }
        
        // Handle viewport changes on mobile (keyboard appearance)
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', () => {
                document.documentElement.style.setProperty('--vh', `${window.visualViewport.height * 0.01}px`);
            });
        }
    },

    // Setup beautiful animations and effects
    setupBeautifulAnimations() {
        // Add beautiful entrance animations to elements
        const animatedElements = document.querySelectorAll('.card, .section h2, .btn');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                        entry.target.style.opacity = '1';
                    }, index * 100);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            animationObserver.observe(el);
        });
    },

    // Setup parallax effects for beautiful scrolling
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.hero, .section:nth-child(even)');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    },

    // Setup scroll to top button with beautiful animation
    setupScrollToTopButton() {
        // Create scroll to top button
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, #1E40AF 100%);
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 8px 25px rgba(11, 95, 255, 0.3);
            z-index: 1000;
        `;
        
        document.body.appendChild(scrollBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
                scrollBtn.style.transform = 'translateY(0)';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
                scrollBtn.style.transform = 'translateY(20px)';
            }
        });
        
        // Smooth scroll to top
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add hover effect
        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.transform = 'translateY(-5px) scale(1.1)';
            scrollBtn.style.boxShadow = '0 15px 35px rgba(11, 95, 255, 0.4)';
        });
        
        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.transform = 'translateY(0) scale(1)';
            scrollBtn.style.boxShadow = '0 8px 25px rgba(11, 95, 255, 0.3)';
        });
    },

    // Enhanced header scroll effect with beautiful transitions
    setupHeaderScrollEffect() {
        const header = document.querySelector('.header');
        let lastScrollY = 0;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.pageYOffset;
            
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
                
                // Hide header when scrolling down, show when scrolling up
                if (currentScrollY > lastScrollY && currentScrollY > 300) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            } else {
                header.classList.remove('scrolled');
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    },

    // Setup smooth page transitions
    setupPageTransitions() {
        // Add page transition overlay
        const overlay = document.createElement('div');
        overlay.className = 'page-transition';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary) 0%, #1E40AF 100%);
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        `;
        
        document.body.appendChild(overlay);
        
        // Animate page entrance
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'translateY(0)';
        });
        
        // Add loading animation to internal links
        const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="."], a[href^="#"]');
        
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.href.includes('#')) return; // Skip anchor links
                
                e.preventDefault();
                
                overlay.style.opacity = '1';
                overlay.style.visibility = 'visible';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            });
        });
    },

    // Setup cursor effects for better interactivity
    setupCursorEffects() {
        if (window.innerWidth > 768) { // Only on desktop
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: var(--primary);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.1s ease;
                opacity: 0.7;
                mix-blend-mode: difference;
            `;
            
            document.body.appendChild(cursor);
            
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX - 10 + 'px';
                cursor.style.top = e.clientY - 10 + 'px';
            });
            
            // Enhance cursor on hover
            const hoverElements = document.querySelectorAll('a, button, .btn');
            
            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'scale(1.5)';
                    cursor.style.opacity = '1';
                });
                
                element.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'scale(1)';
                    cursor.style.opacity = '0.7';
                });
            });
        }
    }
};

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Service Worker registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    StructuralArchitecture.init();
});

// Export for use in other scripts
window.StructuralArchitecture = StructuralArchitecture;