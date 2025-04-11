/**
 * Prism Creative - Animated Landing Page
 * Main JavaScript file
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Loading screen animation
  const loadingScreen = document.getElementById('loading-screen');
  
  // Hide loading screen after animation completes
  setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
          loadingScreen.style.visibility = 'hidden';
      }, 500);
  }, 2500);

  // Initialize header animation
  initHeaderAnimation();
  
  // Initialize custom cursor
  initCustomCursor();
  
  // Initialize mobile menu
  initMobileMenu();

  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize work filter
  initWorkFilter();
  
  // Initialize testimonial slider
  initTestimonialSlider();
  
  // Initialize counter animation
  initCounterAnimation();
  
  // Initialize contact form
  initContactForm();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
});

// Header animation on scroll
function initHeaderAnimation() {
  const header = document.getElementById('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add scrolled class when user scrolls down
      if (scrollTop > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
      
      // Hide header when scrolling down, show when scrolling up
      if (scrollTop > lastScrollTop && scrollTop > 200) {
          header.classList.add('hidden');
      } else {
          header.classList.remove('hidden');
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  
  // Update active nav link on scroll
  updateActiveNavLink();
  window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let scrollPosition = window.pageYOffset + 200;
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${sectionId}`) {
                  link.classList.add('active');
              }
          });
      }
  });
}

// Custom cursor animation
function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  // Only enable custom cursor on desktop
  if (window.innerWidth < 992) return;
  
  document.addEventListener('mousemove', e => {
      // Smoothly position the cursor
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursor.style.opacity = '1';
      
      // Use transform for better performance than top/left
      cursor.style.transform = `translate(${posX}px, ${posY}px)`;
      
      // Slightly delay the outline for a trailing effect
      setTimeout(() => {
          cursorOutline.style.transform = `translate(-50%, -50%)`;
      }, 50);
  });
  
  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, input, select, textarea, .service-card, .work-item, .team-member');
  
  interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-active');
      });
      
      el.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-active');
      });
  });
  
  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      
      // Prevent scroll when menu is open
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  
  // Close menu when a nav link is clicked
  mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
      });
  });
}

// Scroll animations
function initScrollAnimations() {
  // Elements to animate on scroll
  const animatedElements = document.querySelectorAll('.section-header, .service-card, .work-item, .about-image, .about-text, .team-member, .contact-info, .contact-form, .filter-btn');
  
  // Animate elements when they come into view
  function checkScrollAnimation() {
      animatedElements.forEach(el => {
          // Calculate position of the element
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Element is in viewport
          if (rect.top < windowHeight * 0.85) {
              el.classList.add('animated');
              
              // Add stagger effect to service cards
              if (el.classList.contains('service-card')) {
                  const index = el.getAttribute('data-index');
                  el.style.animationDelay = `${index * 0.15}s`;
              }
          }
      });
  }
  
  // Initial check
  setTimeout(checkScrollAnimation, 500);
  
  // Check on scroll
  window.addEventListener('scroll', checkScrollAnimation);
}

// Work filter functionality
function initWorkFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workItems = document.querySelectorAll('.work-item');
  
  filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Remove active class from all buttons
          filterBtns.forEach(b => b.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Get filter value
          const filterValue = this.getAttribute('data-filter');
          
          // Filter work items
          workItems.forEach(item => {
              item.style.transform = 'scale(0.8)';
              item.style.opacity = '0';
              
              setTimeout(() => {
                  if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                      item.style.display = 'block';
                      setTimeout(() => {
                          item.style.transform = 'scale(1)';
                          item.style.opacity = '1';
                      }, 50);
                  } else {
                      item.style.display = 'none';
                  }
              }, 300);
          });
      });
  });
}

// Testimonial slider
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;
  let slideInterval;
  
  // Function to go to slide
  function goToSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
          slide.classList.remove('active');
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
          dot.classList.remove('active');
      });
      
      // Show current slide
      slides[index].classList.add('active');
      
      // Add active class to current dot
      dots[index].classList.add('active');
      
      // Update current slide index
      currentSlide = index;
  }
  
  // Auto-rotate slides
  function startSlideInterval() {
      slideInterval = setInterval(() => {
          const nextSlide = (currentSlide + 1) % slides.length;
          goToSlide(nextSlide);
      }, 5000);
  }
  
  // Initialize slider
  startSlideInterval();
  
  // Add click event to dots
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          goToSlide(index);
          
          // Reset interval when user clicks
          clearInterval(slideInterval);
          startSlideInterval();
      });
  });
}

// Counter animation
function initCounterAnimation() {
  const stats = document.querySelectorAll('.stat-number');
  
  function animateCounter() {
      stats.forEach(stat => {
          const rect = stat.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (rect.top < windowHeight * 0.8 && !stat.classList.contains('counted')) {
              stat.classList.add('counted');
              
              const target = parseInt(stat.getAttribute('data-count'), 10);
              let count = 0;
              const duration = 2000;
              const increment = Math.ceil(target / (duration / 30));
              
              const timer = setInterval(() => {
                  count += increment;
                  if (count >= target) {
                      stat.textContent = target;
                      clearInterval(timer);
                  } else {
                      stat.textContent = count;
                  }
              }, 30);
          }
      });
  }
  
  // Initial check
  setTimeout(animateCounter, 1000);
  
  // Check on scroll
  window.addEventListener('scroll', animateCounter);
}

// Contact form functionality
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitBtn = this.querySelector('.btn-submit');
      const btnText = submitBtn.querySelector('span');
      const btnIcon = submitBtn.querySelector('i');
      
      // Change button appearance
      btnText.textContent = 'Sending...';
      btnIcon.className = 'fas fa-spinner fa-spin';
      
      // Simulate API call
      setTimeout(() => {
          // Reset form
          form.reset();
          
          // Show success
          btnText.textContent = 'Message Sent!';
          btnIcon.className = 'fas fa-check';
          
          // Reset button after delay
          setTimeout(() => {
              btnText.textContent = 'Send Message';
              btnIcon.className = 'fas fa-paper-plane';
          }, 3000);
      }, 2000);
  });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              const targetOffset = targetElement.offsetTop - 80;
              
              window.scrollTo({
                  top: targetOffset,
                  behavior: 'smooth'
              });
          }
      });
  });
}