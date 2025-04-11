/**
 * Prism Creative - Enhanced Animated Landing Page
 * Advanced animations and interactive elements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation with advanced sequence
    initEnhancedLoading();
    
    // Initialize enhanced mouse effects
    // initEnhancedCursor();
    
    // Initialize header animation with parallax
    initEnhancedHeader();
    
    // Initialize mobile menu with 3D effect
    initEnhancedMobileMenu();

    // Initialize scroll animations with reveal effects
    initEnhancedScrollAnimations();
    
    // Initialize work filter with morphing transitions
    initEnhancedWorkFilter();
    
    // Initialize enhanced testimonial slider with 3D effects
    initEnhancedTestimonialSlider();
    
    // Initialize counter animation with easing
    initEnhancedCounterAnimation();
    
    // Initialize interactive form elements
    initEnhancedForms();
    
    // Initialize particle background
    initParticleBackground();
    
    // Initialize text animations
    initTextAnimations();
    
    // Initialize smooth scrolling with parallax
    initSmoothScrolling();
});

// Enhanced loading animation sequence
function initEnhancedLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.querySelector('.loading-progress');
    
    // Simulate progress with random increments for more natural feel
    let progress = 0;
    const progressInterval = setInterval(() => {
        if (progress < 70) {
            // Random increment between 5 and 15
            const increment = Math.random() * 10 + 5;
            progress += increment;
            if (progress > 70) progress = 70;
            loadingBar.style.width = `${progress}%`;
        }
    }, 200);
    
    // Complete loading and hide screen
    window.addEventListener('load', () => {
        clearInterval(progressInterval);
        
        // Complete the progress bar quickly
        loadingBar.style.transition = 'width 0.5s ease-out';
        loadingBar.style.width = '100%';
        
        // Add a slight delay before hiding
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            
            // Enable page scrolling once loading is complete
            document.body.style.overflow = 'visible';
            
            setTimeout(() => {
                loadingScreen.style.visibility = 'hidden';
                
                // Initialize wow effect after loading
                startPageEntryAnimations();
            }, 500);
        }, 600);
    });
    
    // Fallback if load event doesn't trigger
    setTimeout(() => {
        clearInterval(progressInterval);
        loadingBar.style.width = '100%';
        
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            document.body.style.overflow = 'visible';
            
            setTimeout(() => {
                loadingScreen.style.visibility = 'hidden';
                startPageEntryAnimations();
            }, 500);
        }, 600);
    }, 3500);
}

// Start animations after loading completes
// Start animations after loading completes
function startPageEntryAnimations() {
    // Add a class to trigger animations
    document.body.classList.add('page-loaded');
    
    // Initialize any animations that should start after page load
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.classList.add('animate-in');
    }
    
    // Animate hero subtitle words with staggered delay and proper spacing
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      const text = heroSubtitle.textContent;
      heroSubtitle.textContent = '';
      
      // Split by words and preserve spaces
      const words = text.split(' ');
      
      words.forEach((word, index) => {
        // Create span for each word
        const wordSpan = document.createElement('span');
        wordSpan.className = 'subtitle-word';
        wordSpan.textContent = word;
        wordSpan.style.opacity = '0';
        wordSpan.style.transform = 'translateY(20px)';
        wordSpan.style.display = 'inline-block';
        wordSpan.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        wordSpan.style.transitionDelay = `${0.1 + index * 0.05}s`;
        
        // Add word to subtitle
        heroSubtitle.appendChild(wordSpan);
        
        // Add space after word (except for last word)
        if (index < words.length - 1) {
          heroSubtitle.appendChild(document.createTextNode(' '));
        }
        
        // Animate in with delay
        setTimeout(() => {
          wordSpan.style.opacity = '1';
          wordSpan.style.transform = 'translateY(0)';
        }, 100);
      });
    }
  }
// Enhanced custom cursor with contextual changes
// Enhanced custom cursor with simplified direct movement
// function initEnhancedCursor() {
//     const cursor = document.getElementById('cursor');
//     if (!cursor || window.innerWidth < 992) return;
    
//     const cursorDot = document.querySelector('.cursor-dot');
//     const cursorOutline = document.querySelector('.cursor-outline');
//     const cursorText = document.querySelector('.cursor-text');
    
//     // Make sure cursor elements exist
//     if (!cursorDot || !cursorOutline || !cursorText) return;
    
//     // Direct mouse tracking for better reliability
//     document.addEventListener('mousemove', e => {
//         requestAnimationFrame(() => {
//             cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//             cursor.style.opacity = '1';
//         });
//     });
    
//     // Specific interactions for different elements
//     const interactiveElements = document.querySelectorAll('a, button, .btn, input, select, textarea');
//     interactiveElements.forEach(el => {
//         el.addEventListener('mouseenter', () => {
//             cursor.classList.add('cursor-active');
//         });
        
//         el.addEventListener('mouseleave', () => {
//             cursor.classList.remove('cursor-active');
//         });
//     });
    
//     // Special cursor for work items
//     const workItems = document.querySelectorAll('.work-item');
//     workItems.forEach(item => {
//         item.addEventListener('mouseenter', () => {
//             cursor.classList.add('cursor-view');
//             cursorText.textContent = 'View';
//         });
        
//         item.addEventListener('mouseleave', () => {
//             cursor.classList.remove('cursor-view');
//         });
//     });
    
//     // Special cursor for form inputs
//     const formElements = document.querySelectorAll('input, textarea, select');
//     formElements.forEach(el => {
//         el.addEventListener('mouseenter', () => {
//             cursor.classList.add('cursor-input');
//         });
        
//         el.addEventListener('mouseleave', () => {
//             cursor.classList.remove('cursor-input');
//         });
//     });
    
//     // Fix cursor visibility when switching between sections or scrolling
//     window.addEventListener('scroll', () => {
//         cursor.style.opacity = '1';
//     });
    
//     // Hide default cursor on all clickable elements
//     document.querySelectorAll('a, button, input, textarea, select, .btn, .service-card, .work-item')
//         .forEach(el => {
//             el.style.cursor = 'none';
//         });
        
//     // Hide the default cursor on the whole document
//     document.documentElement.style.cursor = 'none';
//     document.body.style.cursor = 'none';
    
//     // Ensure cursor is visible when mouse enters window
//     document.addEventListener('mouseenter', () => {
//         cursor.style.opacity = '1';
//     });
// }

// Enhanced header with parallax and color change
function initEnhancedHeader() {
    const header = document.getElementById('header');
    const headerLinks = document.querySelectorAll('.nav-link');
    let lastScrollTop = 0;
    let scrollDirection = 'none';
    
    // Advanced scroll handling
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = scrollTop - lastScrollTop;
        
        // Determine scroll direction
        scrollDirection = scrollDelta > 0 ? 'down' : 'up';
        
        // Handle header appearance based on scroll
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (scrollDirection === 'down' && scrollTop > 200) {
            if (!header.classList.contains('hidden')) {
                header.classList.add('hidden');
            }
        } else {
            if (header.classList.contains('hidden')) {
                header.classList.remove('hidden');
            }
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Enhanced active link update
    enhancedActiveNavLink();
    window.addEventListener('scroll', enhancedActiveNavLink);
}

// Enhanced active nav link detection with smoother transitions
function enhancedActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Deactivate all links
            navLinks.forEach(link => {
                if (link.classList.contains('active')) {
                    link.classList.add('deactivating');
                    setTimeout(() => {
                        link.classList.remove('active');
                        link.classList.remove('deactivating');
                    }, 300);
                }
            });
            
            // Activate current link
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('activating');
                    setTimeout(() => {
                        link.classList.add('active');
                        link.classList.remove('activating');
                    }, 50);
                }
            });
        }
    });
}

// Enhanced mobile menu with 3D perspective
function initEnhancedMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        
        // Stagger animation for menu items
        if (mobileMenu.classList.contains('open')) {
            mobileNavItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 100 + index * 70);
            });
            
            // Prevent scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Reset item styles when closing
            mobileNavItems.forEach(item => {
                item.style.transition = 'none';
                item.style.opacity = '0';
            });
            
            // Allow scrolling again
            document.body.style.overflow = '';
        }
    });
    
    // Animated close when menu links are clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // First animate out the menu items
            mobileNavItems.forEach((item, index) => {
                const delay = mobileNavItems.length - index;
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                }, delay * 50);
            });
            
            // Then close the menu
            setTimeout(() => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            }, mobileNavItems.length * 50 + 300);
        });
    });
}

// Enhanced scroll animations with intersection observer and GSAP-like effects
function initEnhancedScrollAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback for browsers that don't support IntersectionObserver
        const animatedElements = document.querySelectorAll('.section-header, .service-card, .work-item, .about-image, .about-text, .team-member, .contact-info, .contact-form, .filter-btn');
        
        window.addEventListener('scroll', function() {
            animatedElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (rect.top < windowHeight * 0.8) {
                    el.classList.add('animated');
                }
            });
        });
        
        return;
    }
    
    // Set up intersection observer for animations
    const animatedElements = document.querySelectorAll('.section-header, .service-card, .work-item, .about-image, .about-text, .team-member, .contact-info, .contact-form, .filter-btn, .reveal-text');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Different animation for different element types
                if (entry.target.classList.contains('service-card')) {
                    const index = entry.target.getAttribute('data-index');
                    entry.target.style.transitionDelay = `${index * 0.15}s`;
                    entry.target.style.animation = `fadeInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s forwards`;
                } else if (entry.target.classList.contains('work-item')) {
                    // Random animation for work items for variety
                    const animations = ['fadeInUp', 'fadeInLeft', 'fadeInRight', 'zoomIn', 'rotateIn'];
                    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
                    entry.target.style.animation = `${randomAnim} 1s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards`;
                } else {
                    entry.target.classList.add('animated');
                }
                
                // Once animated, stop observing
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15  // 15% of item needs to be visible
    });
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
    
    // Add extra parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.hero-shape, .about-image, .team-member img');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            // Get the data-speed attribute or use a default value
            const speed = el.getAttribute('data-speed') || 0.05;
            
            // Apply transform
            const yPos = scrollTop * parseFloat(speed);
            const transformTarget = el.tagName === 'IMG' ? el : el;
            transformTarget.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Enhanced work filter with morphing animation
function initEnhancedWorkFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    
    if (!filterBtns.length || !workItems.length) return;
    
    // Add staggered animation for filter buttons
    filterBtns.forEach((btn, index) => {
        btn.style.transitionDelay = `${index * 0.1}s`;
        btn.classList.add('animated');
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Highlight clicked button with ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('filter-ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 600);
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter work items with staggered animations
            workItems.forEach((item, index) => {
                // First animate all items out
                item.style.transition = 'all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95) translateY(10px)';
                
                setTimeout(() => {
                    // Then determine which ones to show
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        
                        // Staggered entrance for visible items
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1) translateY(0)';
                        }, index * 100);
                    } else {
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }, 300);
            });
        });
    });
}

// Enhanced testimonial slider with 3D transitions
function initEnhancedTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (!slides.length || !dots.length) return;
    
    let currentSlide = 0;
    let slideInterval;
    let isAnimating = false;
    
    // Function to go to slide with enhanced transitions
    function goToSlide(index, direction = 'right') {
        if (isAnimating) return;
        isAnimating = true;
        
        const currentSlideElement = slides[currentSlide];
        const nextSlideElement = slides[index];
        
        // Determine animation direction
        const currentOutTransform = direction === 'right' 
            ? 'translateX(-100px) rotateY(-10deg)' 
            : 'translateX(100px) rotateY(10deg)';
            
        const nextInTransform = direction === 'right'
            ? 'translateX(100px) rotateY(10deg)'
            : 'translateX(-100px) rotateY(-10deg)';
            
        // Animate out current slide
        currentSlideElement.style.transition = 'all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
        currentSlideElement.style.opacity = '0';
        currentSlideElement.style.transform = currentOutTransform;
        
        // Set initial position for next slide
        nextSlideElement.style.transition = 'none';
        nextSlideElement.style.transform = nextInTransform;
        nextSlideElement.style.opacity = '0';
        
        // Small delay before bringing in new slide
        setTimeout(() => {
            // Remove active class from current slide
            currentSlideElement.classList.remove('active');
            
            // Update dots
            dots[currentSlide].classList.remove('active');
            dots[index].classList.add('active');
            
            // Add active class to new slide
            nextSlideElement.classList.add('active');
            
            // Animate in next slide
            nextSlideElement.style.transition = 'all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6)';
            nextSlideElement.style.opacity = '1';
            nextSlideElement.style.transform = 'translateX(0) rotateY(0deg)';
            
            // Update current slide index
            currentSlide = index;
            
            // Reset animation lock after transition completes
            setTimeout(() => {
                isAnimating = false;
            }, 600);
        }, 300);
    }
    
    // Determine direction based on index
    function getDirection(current, next) {
        if (next > current) return 'right';
        if (next < current) return 'left';
        
        // Special case for first/last transitions
        if (current === slides.length - 1 && next === 0) return 'right';
        if (current === 0 && next === slides.length - 1) return 'left';
        
        return 'right'; // Default
    }
    
    // Auto-rotate slides with randomized transitions
    function startSlideInterval() {
        slideInterval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            goToSlide(nextSlide, 'right');
        }, 5000);
    }
    
    // Initialize slider
    startSlideInterval();
    
    // Add click event to dots with direction detection
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (currentSlide === index) return;
            
            // Determine animation direction
            const direction = getDirection(currentSlide, index);
            goToSlide(index, direction);
            
            // Reset interval when user clicks
            clearInterval(slideInterval);
            startSlideInterval();
        });
    });
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const testimonialSection = document.querySelector('.testimonials-slider');
    if (testimonialSection) {
        testimonialSection.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);
        
        testimonialSection.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }
    
    function handleSwipe() {
        const threshold = 50;
        
        if (touchEndX < touchStartX - threshold) {
            // Swipe left, go to next slide
            const nextSlide = (currentSlide + 1) % slides.length;
            goToSlide(nextSlide, 'right');
        }
        
        if (touchEndX > touchStartX + threshold) {
            // Swipe right, go to previous slide
            const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevSlide, 'left');
        }
        
        // Reset interval after swipe
        clearInterval(slideInterval);
        startSlideInterval();
    }
}

// Enhanced counter animation with easing and text scrambling effect
function initEnhancedCounterAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    if (!stats.length) return;
    
    // Create character array for number scrambling
    const chars = '0123456789'.split('');
    
    function animateCounter() {
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight * 0.8 && !stat.classList.contains('counted')) {
                stat.classList.add('counted');
                
                const target = parseInt(stat.getAttribute('data-count'), 10);
                let count = 0;
                const duration = 2500;
                let startTime = null;
                
                // Add a wrapper for glow effect
                stat.innerHTML = `<span class="stat-glow">${count}</span>`;
                const display = stat.querySelector('.stat-glow');
                
                // Easing function (cubic-bezier approximation)
                function easeOutElastic(x) {
                    const c4 = (2 * Math.PI) / 3;
                    
                    return x === 0
                      ? 0
                      : x === 1
                      ? 1
                      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
                }
                
                // Counter animation frame
                function updateCounter(timestamp) {
                    if (!startTime) startTime = timestamp;
                    
                    const elapsed = timestamp - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = easeOutElastic(progress);
                    
                    // Calculate current value with easing
                    const currentValue = Math.floor(easedProgress * target);
                    
                    // Update with scrambling effect
                    if (progress < 1) {
                        if (currentValue !== count) {
                            count = currentValue;
                            display.textContent = count;
                            
                            // Add scramble effect
                            if (progress < 0.8) {
                                const randomChars = Array(String(target).length - String(count).length)
                                    .fill(0)
                                    .map(() => chars[Math.floor(Math.random() * chars.length)])
                                    .join('');
                                    
                                display.textContent = count + randomChars;
                            }
                        }
                        requestAnimationFrame(updateCounter);
                    } else {
                        display.textContent = target;
                        
                        // Add a final highlight animation
                        display.style.animation = 'pulse 0.5s ease-out';
                    }
                }
                
                requestAnimationFrame(updateCounter);
            }
        });
    }
    
    // Check for IntersectionObserver support
    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        // Observe first stat to trigger all
        if (stats.length > 0) {
            counterObserver.observe(stats[0].closest('.about-stats') || stats[0]);
        }
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        window.addEventListener('scroll', function() {
            const aboutStats = document.querySelector('.about-stats');
            if (aboutStats) {
                const rect = aboutStats.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    animateCounter();
                }
            }
        });
    }
}

// Enhanced form interactions
function initEnhancedForms() {
    const form = document.getElementById('contact-form');
    const formControls = document.querySelectorAll('.form-control');
    
    if (!formControls.length) return;
    
    // Add focus/blur animations for form fields
    formControls.forEach(control => {
        // Create ripple effect on focus
        control.addEventListener('focus', function() {
            this.classList.add('focused');
            
            // Add ripple effect
            const parent = this.closest('.form-group-inner');
            if (parent) {
                const ripple = document.createElement('span');
                ripple.classList.add('form-ripple');
                parent.appendChild(ripple);
                
                // Set ripple position and animate
                const rect = this.getBoundingClientRect();
                ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height) * 2}px`;
                ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                
                // Trigger animation
                setTimeout(() => {
                    ripple.style.transform = 'translate(-50%, -50%) scale(1)';
                    ripple.style.opacity = '0';
                }, 10);
                
                // Remove after animation
                setTimeout(() => {
                    if (parent.contains(ripple)) {
                        parent.removeChild(ripple);
                    }
                }, 600);
            }
        });
        
        control.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
    
    if (!form) return;
    
    // Enhanced form submission with typing effect
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm(this)) return;
        
        const submitBtn = this.querySelector('.btn-submit');
        if (!submitBtn) return;
        
        const btnText = submitBtn.querySelector('span');
        const btnIcon = submitBtn.querySelector('i');
        
        if (!btnText || !btnIcon) return;
        
        // Disable form during submission
        formControls.forEach(control => {
            control.disabled = true;
        });
        submitBtn.disabled = true;
        
        // Change button appearance with typing effect
        btnText.innerHTML = '';
        btnIcon.className = 'fas fa-spinner fa-spin';
        
        // Typing effect for "Sending..."
        const sendingText = 'Sending...';
        let charIndex = 0;
        
        const typingInterval = setInterval(() => {
            if (charIndex < sendingText.length) {
                btnText.innerHTML += sendingText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);
        
        // Add success wave effect to button
        submitBtn.classList.add('sending');
        
        // Simulate API call with progress steps
        setTimeout(() => {
            // Clear the typing interval if still running
            clearInterval(typingInterval);
            
            // Reset form
            form.reset();
            
            // Update button to processing state
            btnText.innerHTML = 'Processing';
            btnIcon.className = 'fas fa-cog fa-spin';
            
            setTimeout(() => {
                // Success state
                submitBtn.classList.remove('sending');
                submitBtn.classList.add('success');
                btnIcon.className = 'fas fa-check';
                
                // Typing effect for "Message Sent!"
                btnText.innerHTML = '';
                const successText = 'Message Sent!';
                charIndex = 0;
                
                const successInterval = setInterval(() => {
                    if (charIndex < successText.length) {
                        btnText.innerHTML += successText.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(successInterval);
                    }
                }, 50);
                
                // Confetti effect
                createConfetti(submitBtn);
                
                // Reset button and form after delay
                setTimeout(() => {
                    submitBtn.classList.remove('success');
                    btnText.textContent = 'Send Message';
                    btnIcon.className = 'fas fa-paper-plane';
                    
                    // Re-enable form controls
                    formControls.forEach(control => {
                        control.disabled = false;
                    });
                    submitBtn.disabled = false;
                    
                    // Reset labels
                    document.querySelectorAll('.form-label').forEach(label => {
                        label.style.top = '';
                    });
                }, 3000);
            }, 1000);
        }, 1500);
    });
    
    // Validate form fields
    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let valid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                // Highlight empty field with shake animation
                field.classList.add('error');
                
                // Use modern Web Animations API if available
                if (typeof field.animate === 'function') {
                    const errorShake = [
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-5px)' },
                        { transform: 'translateX(5px)' },
                        { transform: 'translateX(-5px)' },
                        { transform: 'translateX(5px)' },
                        { transform: 'translateX(0)' }
                    ];
                    
                    field.animate(errorShake, {
                        duration: 400,
                        iterations: 1
                    });
                } else {
                    // Fallback for browsers that don't support Web Animations API
                    field.style.animation = 'shake 0.4s ease';
                }
                
                valid = false;
                
                // Remove error class after animation
                setTimeout(() => {
                    field.classList.remove('error');
                    if (!field.animate) {
                        field.style.animation = '';
                    }
                }, 400);
            }
        });
        
        return valid;
    }
    
    // Confetti effect after form submission
    function createConfetti(element) {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top;
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Random properties
            const size = Math.random() * 8 + 4; // 4-12px
            const angle = Math.random() * 360; // 0-360deg
            const spread = 100;
            const xPos = centerX + (Math.random() - 0.5) * spread;
            const yPos = centerY;
            
            // Random colors
            const hue = Math.random() * 360;
            const colors = [`hsl(${hue}, 100%, 70%)`, `hsl(${hue+40}, 100%, 70%)`, `hsl(${hue+80}, 100%, 70%)`];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Set confetti styles
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.position = 'fixed';
            confetti.style.left = `${xPos}px`;
            confetti.style.top = `${yPos}px`;
            confetti.style.backgroundColor = color;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '0.8';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.transform = `rotate(${angle}deg`;
            
            // Append to body
            document.body.appendChild(confetti);
            
            // Animate confetti
            setTimeout(() => {
                confetti.style.transition = `all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${Math.random() * 0.3}s`;
                confetti.style.transform = `rotate(${angle + 360}deg)`;
                confetti.style.top = `${yPos - 150 - Math.random() * 100}px`;
                confetti.style.left = `${xPos + (Math.random() - 0.5) * 200}px`;
                confetti.style.opacity = '0';
                
                // Remove after animation
                setTimeout(() => {
                    if (document.body.contains(confetti)) {
                        document.body.removeChild(confetti);
                    }
                }, 1300);
            }, 10);
        }
    }
}

// Particle background effect for certain sections
function initParticleBackground() {
    // Create particles for hero section
    createParticleCanvas('hero-section');
    
    // Create particles for testimonials section
    createParticleCanvas('testimonials-section');
    
    function createParticleCanvas(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.className = 'particle-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.opacity = '0.4';
        
        // Insert canvas as first child of section
        section.insertBefore(canvas, section.firstChild);
        
        // Set canvas size
        const resize = () => {
            const { width, height } = section.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;
        };
        
        // Call resize initially and on window resize
        resize();
        window.addEventListener('resize', resize);
        
        // Initialize particles
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const particles = [];
        const particleCount = Math.min(Math.floor(window.innerWidth / 20), 30); // Cap max particles for performance
        
        // Particle colors based on section
        let particleColor = '#6c63ff';
        
        if (sectionId === 'testimonials-section') {
            particleColor = '#ff6b6b';
        }
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        
        // Draw and animate particles
        function animate() {
            // Clear canvas with semi-transparent background to create trail effect
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                // Update position
                p.x += p.vx;
                p.y += p.vy;
                
                // Handle boundaries
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
                
                // Draw particle
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                gradient.addColorStop(0, `${particleColor}`);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw connections to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(108, 99, 255, ${0.2 * (1 - distance/100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}

// Advanced text animations for headings and content
function initTextAnimations() {
    // Split headings into chars for animation
    const animateHeadings = document.querySelectorAll('.section-title');
    
    animateHeadings.forEach(heading => {
        // Skip if already processed
        if (heading.classList.contains('processed')) return;
        
        const text = heading.textContent;
        heading.innerHTML = '';
        heading.classList.add('processed');
        
        // Create wrapper
        const wrapper = document.createElement('span');
        wrapper.className = 'title-wrapper';
        heading.appendChild(wrapper);
        
        // Loop through each letter
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.className = 'title-char';
            charSpan.style.transitionDelay = `${i * 0.03}s`;
            
            // Handle spaces
            if (text[i] === ' ') {
                charSpan.innerHTML = '&nbsp;';
            } else {
                charSpan.textContent = text[i];
            }
            
            wrapper.appendChild(charSpan);
        }
        
        // Check for IntersectionObserver support
        if ('IntersectionObserver' in window) {
            // Observe when the heading enters viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add animation class
                        entry.target.classList.add('title-animate');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(heading);
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            window.addEventListener('scroll', function scrollHandler() {
                const rect = heading.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    heading.classList.add('title-animate');
                    window.removeEventListener('scroll', scrollHandler);
                }
            });
        }
    });
    
    // Fancy hover effect for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const text = link.textContent;
        
        // Skip if already processed
        if (link.classList.contains('hover-text-processed')) return;
        
        link.classList.add('hover-text-processed');
        link.innerHTML = '';
        
        // Create wrapper for original text
        const original = document.createElement('span');
        original.className = 'original-text';
        original.textContent = text;
        link.appendChild(original);
        
        // Create hover text effect
        const hoverText = document.createElement('span');
        hoverText.className = 'hover-text';
        hoverText.innerHTML = text.split('').map(char => 
            char === ' ' ? '&nbsp;' : `<span>${char}</span>`
        ).join('');
        
        link.appendChild(hoverText);
        
        // Add staggered animation to each character
        const hoverChars = hoverText.querySelectorAll('span');
        hoverChars.forEach((char, index) => {
            char.style.transitionDelay = `${index * 0.02}s`;
        });
    });
}

// Smooth scrolling with parallax effects
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Create visual effect for the target section
                const highlight = document.createElement('div');
                highlight.className = 'section-highlight';
                highlight.style.position = 'absolute';
                highlight.style.top = '0';
                highlight.style.left = '0';
                highlight.style.right = '0';
                highlight.style.bottom = '0';
                highlight.style.backgroundColor = 'rgba(108, 99, 255, 0.05)';
                highlight.style.opacity = '0';
                highlight.style.zIndex = '-1';
                highlight.style.pointerEvents = 'none';
                
                // Set position context if not already set
                if (getComputedStyle(targetElement).position === 'static') {
                    targetElement.style.position = 'relative';
                }
                
                // Add to target section
                targetElement.appendChild(highlight);
                
                // Animate the highlight
                setTimeout(() => {
                    highlight.style.transition = 'opacity 1s ease-out';
                    highlight.style.opacity = '1';
                    
                    setTimeout(() => {
                        highlight.style.opacity = '0';
                        
                        // Remove after fade out
                        setTimeout(() => {
                            if (targetElement.contains(highlight)) {
                                targetElement.removeChild(highlight);
                            }
                        }, 1000);
                    }, 800);
                }, 100);
                
                // Calculate scroll target position with offset
                const headerHeight = 80;
                const targetOffset = targetElement.offsetTop - headerHeight;
                
                // Animate scroll
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
                
                // Update URL hash after scrolling
                setTimeout(() => {
                    history.pushState(null, null, targetId);
                }, 1000);
            }
        });
    });
    
    // Add magnetic effect to buttons
    const magneticElements = document.querySelectorAll('.btn, .service-card, .social-link');
    
    magneticElements.forEach(element => {
        // Skip on mobile
        if (window.innerWidth < 768) return;
        
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distanceX = (e.clientX - centerX) / (rect.width / 2);
            const distanceY = (e.clientY - centerY) / (rect.height / 2);
            
            // Limit the maximum movement
            const maxMovement = 10;
            const moveX = distanceX * maxMovement;
            const moveY = distanceY * maxMovement;
            
            // Apply the movement with a transform
            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            // Reset position when mouse leaves
            this.style.transform = '';
        });
    });
}

// Helper function to create parallax effect on mouse move for hero section
function createMouseParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const parallaxItems = heroSection.querySelectorAll('.hero-image, .hero-shape');
    
    heroSection.addEventListener('mousemove', function(e) {
        // Get mouse position relative to the hero section
        const rect = heroSection.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate relative position (0-1)
        const relX = x / rect.width;
        const relY = y / rect.height;
        
        // Calculate shift amount for each parallax item
        parallaxItems.forEach(item => {
            const depth = parseFloat(item.getAttribute('data-depth') || 0.1);
            const moveX = (relX - 0.5) * 30 * depth;
            const moveY = (relY - 0.5) * 30 * depth;
            
            // Apply parallax effect
            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    // Reset position when mouse leaves
    heroSection.addEventListener('mouseleave', function() {
        parallaxItems.forEach(item => {
            item.style.transform = '';
        });
    });
}

// Initialize additional animations on page load
window.addEventListener('load', function() {
    // Apply service card glare effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const glare = this.querySelector('.service-card-glare');
            if (!glare) return;
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            glare.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Add text reveal animation for paragraphs
    const revealTexts = document.querySelectorAll('.reveal-text');
    if (revealTexts.length > 0) {
        if ('IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.setProperty('--delay', `${0.2 + index * 0.1}s`);
                        entry.target.classList.add('animated');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2
            });
            
            revealTexts.forEach(text => {
                revealObserver.observe(text);
            });
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            revealTexts.forEach((text, index) => {
                text.style.setProperty('--delay', `${0.2 + index * 0.1}s`);
                text.classList.add('animated');
            });
        }
    }
    
    // Add decorations to elements
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        const decorations = item.querySelector('.work-item-decorations');
        if (!decorations) {
            const decorationsDiv = document.createElement('div');
            decorationsDiv.className = 'work-item-decorations';
            
            const dot = document.createElement('div');
            dot.className = 'decoration-dot';
            
            const circle = document.createElement('div');
            circle.className = 'decoration-circle';
            
            const plus = document.createElement('div');
            plus.className = 'decoration-plus';
            plus.textContent = '+';
            
            decorationsDiv.appendChild(dot);
            decorationsDiv.appendChild(circle);
            decorationsDiv.appendChild(plus);
            
            item.querySelector('.work-image').appendChild(decorationsDiv);
        }
    });
});
 