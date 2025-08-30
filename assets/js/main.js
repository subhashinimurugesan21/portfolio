// Portfolio Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.skills-grid li, .timeline li, .graphic-container');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-on-scroll');
        observer.observe(el);
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Graphic container enhanced interactions
    const graphicContainers = document.querySelectorAll('.graphic-container');
    graphicContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            const svg = this.querySelector('.graphic-svg');
            if (svg) {
                svg.style.filter = 'drop-shadow(0 5px 15px rgba(0, 212, 170, 0.3))';
            }
        });
        
        container.addEventListener('mouseleave', function() {
            const svg = this.querySelector('.graphic-svg');
            if (svg) {
                svg.style.filter = 'none';
            }
        });
    });

    // Skills grid enhanced interactions
    const skillsItems = document.querySelectorAll('.skills-grid li');
    skillsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--accent)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--border)';
        });
    });

    // Timeline enhanced interactions
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const dot = this.parentElement.querySelector('li:before');
            if (dot) {
                dot.style.animation = 'pulse 1s infinite';
            }
        });
    });

    // Contact form enhanced functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const formStatus = document.getElementById('formStatus');
            
            // Add loading state
            submitBtn.classList.add('loading');
            submitBtn.textContent = 'Sending...';
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.textContent = 'Send Message';
                
                // Show success message
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.style.color = 'var(--primary)';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            }, 2000);
        });

        // Enhanced form field interactions
        const formFields = contactForm.querySelectorAll('input, textarea');
        formFields.forEach(field => {
            field.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            field.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.site-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Typing effect for hero title (optional)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && heroTitle.textContent.includes('Hello, I\'m Subhashini')) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Add active state to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Enhanced hover effects for graphics
    const graphics = document.querySelectorAll('.graphic-svg');
    graphics.forEach(graphic => {
        graphic.addEventListener('mouseenter', function() {
            this.style.strokeDasharray = 'none';
            this.style.strokeDashoffset = '0';
        });
    });

    // Add some random movement to graphics on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        graphicContainers.forEach((container, index) => {
            const speed = (index + 1) * 0.1;
            container.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Performance optimization: throttle scroll events
    let ticking = false;
    function updateAnimations() {
        ticking = false;
        // Animation updates here
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
});

// Add CSS classes for enhanced animations
document.addEventListener('DOMContentLoaded', function() {
    // Add staggered animation delays to elements
    const elements = document.querySelectorAll('.graphic-container, .skills-grid li, .timeline li');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
}); 