// SEO and Analytics Configuration
// File: assets/js/seo-analytics.js
// Purpose: Centralized SEO tracking and analytics setup for Structural Architecture

(function() {
    'use strict';

    // Configuration
    const SITE_CONFIG = {
        name: 'Structural Architecture',
        domain: 'structuralarchitecture.info',
        languages: ['en', 'fr'],
        businessInfo: {
            name: 'Structural Architecture',
            phone: '+22796380877',
            email: 'bacseried@gmail.com',
            address: 'Niger, West Africa',
            currency: 'XOF'
        }
    };

    // Google Analytics 4 Configuration
    // Replace 'GA_MEASUREMENT_ID' with actual GA4 ID when available
    const GA_CONFIG = {
        measurement_id: 'GA_MEASUREMENT_ID', // To be replaced with actual ID
        config: {
            page_title: document.title,
            page_location: window.location.href,
            content_group1: getCurrentLanguage(),
            content_group2: getPageCategory(),
            custom_map: {
                'custom_parameter_1': 'page_category',
                'custom_parameter_2': 'user_language'
            }
        }
    };

    // Initialize analytics when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeAnalytics();
        setupSEOTracking();
        setupStructuredDataValidation();
    });

    // Initialize Google Analytics
    function initializeAnalytics() {
        // Google Analytics 4 setup (uncomment when GA ID is available)
        /*
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_CONFIG.measurement_id, GA_CONFIG.config);
        
        // Load GA script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.measurement_id}`;
        document.head.appendChild(script);
        */

        // Track page view
        trackPageView();
    }

    // Track page views and user interactions
    function trackPageView() {
        const pageData = {
            page: window.location.pathname,
            title: document.title,
            language: getCurrentLanguage(),
            category: getPageCategory(),
            timestamp: new Date().toISOString()
        };

        // Custom analytics tracking (can be replaced with actual GA when setup)
        console.log('Page View Tracked:', pageData);
        
        // Track to localStorage for development (remove in production)
        if (localStorage) {
            const visits = JSON.parse(localStorage.getItem('sa_visits') || '[]');
            visits.push(pageData);
            localStorage.setItem('sa_visits', JSON.stringify(visits.slice(-50))); // Keep last 50 visits
        }
    }

    // Setup SEO event tracking
    function setupSEOTracking() {
        // Track contact form submissions
        const forms = document.querySelectorAll('form[action*="formspree"]');
        forms.forEach(form => {
            form.addEventListener('submit', function() {
                trackEvent('form_submit', {
                    form_name: form.id || 'contact_form',
                    page: window.location.pathname,
                    language: getCurrentLanguage()
                });
            });
        });

        // Track phone clicks
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('phone_click', {
                    phone_number: link.href.replace('tel:', ''),
                    page: window.location.pathname
                });
            });
        });

        // Track WhatsApp clicks
        const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
        whatsappLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('whatsapp_click', {
                    page: window.location.pathname,
                    language: getCurrentLanguage()
                });
            });
        });

        // Track email clicks
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', function() {
                trackEvent('email_click', {
                    page: window.location.pathname
                });
            });
        });

        // Track language switches
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', function() {
                trackEvent('language_switch', {
                    from_language: getCurrentLanguage(),
                    to_language: button.dataset.lang,
                    page: window.location.pathname
                });
            });
        });

        // Track service page visits
        if (window.location.pathname.includes('services')) {
            trackEvent('service_page_view', {
                language: getCurrentLanguage()
            });
        }

        // Track pricing page visits
        if (window.location.pathname.includes('pricing')) {
            trackEvent('pricing_page_view', {
                language: getCurrentLanguage()
            });
        }
    }

    // Validate structured data on page
    function setupStructuredDataValidation() {
        const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
        
        structuredDataScripts.forEach((script, index) => {
            try {
                const data = JSON.parse(script.textContent);
                console.log(`Structured Data ${index + 1}:`, data);
                
                // Basic validation
                if (!data['@context'] || !data['@type']) {
                    console.warn(`Structured Data ${index + 1} missing required fields`);
                }
            } catch (error) {
                console.error(`Invalid JSON-LD in script ${index + 1}:`, error);
            }
        });
    }

    // Utility functions
    function getCurrentLanguage() {
        const path = window.location.pathname;
        if (path.includes('/fr/')) return 'fr';
        if (path.includes('/en/')) return 'en';
        return 'en'; // default
    }

    function getPageCategory() {
        const path = window.location.pathname;
        if (path.includes('services')) return 'services';
        if (path.includes('plans')) return 'plans';
        if (path.includes('portfolio')) return 'portfolio';
        if (path.includes('about')) return 'about';
        if (path.includes('blog')) return 'blog';
        if (path.includes('contact')) return 'contact';
        if (path.includes('pricing')) return 'pricing';
        if (path.includes('faq')) return 'faq';
        if (path.includes('privacy')) return 'legal';
        if (path.includes('terms')) return 'legal';
        if (path === '/en/' || path === '/fr/' || path === '/') return 'home';
        return 'other';
    }

    function trackEvent(eventName, parameters = {}) {
        const eventData = {
            event: eventName,
            timestamp: new Date().toISOString(),
            ...parameters
        };

        // Google Analytics 4 event tracking (uncomment when GA is setup)
        /*
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        */

        // Custom event tracking
        console.log('Event Tracked:', eventData);
        
        // Track to localStorage for development
        if (localStorage) {
            const events = JSON.parse(localStorage.getItem('sa_events') || '[]');
            events.push(eventData);
            localStorage.setItem('sa_events', JSON.stringify(events.slice(-100))); // Keep last 100 events
        }
    }

    // SEO Meta Tag Validation
    function validateSEOTags() {
        const requiredTags = [
            'title',
            'meta[name="description"]',
            'meta[property="og:title"]',
            'meta[property="og:description"]',
            'meta[property="og:url"]',
            'meta[property="og:type"]',
            'link[rel="canonical"]'
        ];

        const issues = [];
        
        requiredTags.forEach(selector => {
            const element = document.querySelector(selector);
            if (!element) {
                issues.push(`Missing: ${selector}`);
            } else if (selector === 'title' && element.textContent.length < 30) {
                issues.push('Title too short (< 30 characters)');
            } else if (selector.includes('description') && element.content && element.content.length < 120) {
                issues.push('Description too short (< 120 characters)');
            }
        });

        if (issues.length > 0) {
            console.warn('SEO Issues Found:', issues);
        } else {
            console.log('✅ All essential SEO tags present');
        }

        return issues;
    }

    // Performance tracking
    function trackPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        trackEvent('page_performance', {
                            load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
                            dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
                            page: window.location.pathname,
                            language: getCurrentLanguage()
                        });
                    }
                }, 1000);
            });
        }
    }

    // Schema.org structured data helpers
    function generateLocalBusinessSchema() {
        return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://structuralarchitecture.info",
            "name": SITE_CONFIG.businessInfo.name,
            "url": `https://${SITE_CONFIG.domain}`,
            "telephone": SITE_CONFIG.businessInfo.phone,
            "email": SITE_CONFIG.businessInfo.email,
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "NE",
                "addressRegion": "Niger"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.6078",
                "longitude": "8.0817"
            },
            "openingHours": "Mo-Fr 08:00-18:00",
            "priceRange": "$$",
            "servedArea": {
                "@type": "Country",
                "name": "Niger"
            }
        };
    }

    // Initialize performance tracking
    trackPerformance();

    // Run SEO validation on development
    if (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1')) {
        setTimeout(validateSEOTags, 1000);
    }

    // Export functions for global use
    window.SAAnalytics = {
        trackEvent: trackEvent,
        trackPageView: trackPageView,
        validateSEOTags: validateSEOTags,
        generateLocalBusinessSchema: generateLocalBusinessSchema
    };

})();