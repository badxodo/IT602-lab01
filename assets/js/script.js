document.addEventListener('DOMContentLoaded', () => {
    console.log('JANIS SNE Hero loaded');
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if(scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        });
    }

    const menuTrigger = document.querySelector('.menu-placeholder');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuText = document.querySelector('.menu-text');
    const menuIconSvg = document.querySelector('.menu-icon-svg');

    const svgMenuToClose = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14"/></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0"/><set fill="freeze" attributeName="opacity" begin="0.4s" to="0"/></path></g></svg>`;

    const svgCloseToMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5l14 0M5 19l14 0M5 12h14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 14M5 19l14 -14M12 12h0;M5 5l14 0M5 19l14 0M5 12h14"/></path></svg>`;

    if (menuTrigger && menuOverlay) {
        menuTrigger.addEventListener('click', () => {
            menuTrigger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            if (menuTrigger.classList.contains('active')) {
                document.body.classList.add('no-scroll');
                if(menuText) menuText.textContent = 'CLOSE';
                if(menuIconSvg) menuIconSvg.innerHTML = svgMenuToClose;
            } else {
                document.body.classList.remove('no-scroll');
                if(menuText) menuText.textContent = 'MENU';
                if(menuIconSvg) menuIconSvg.innerHTML = svgCloseToMenu;
            }
        });
    }
});

// ============================================
// SMOOTH SCROLL IMPLEMENTATION
// ============================================

// Enhanced smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// CTA SECTION SCROLL ANIMATIONS
// ============================================

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe CTA elements when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    const ctaDescription = document.querySelector('.cta-description');
    const ctaFormWrapper = document.querySelector('.cta-form-wrapper');
    
    if (ctaDescription) observer.observe(ctaDescription);
    if (ctaFormWrapper) observer.observe(ctaFormWrapper);
    
    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Log form data (replace with your actual submission logic)
            console.log('Form submitted:', formData);
            
            // Show success message
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('span').textContent;
            submitBtn.querySelector('span').textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = 'rgba(100, 255, 150, 0.2)';
            submitBtn.style.borderColor = 'rgba(100, 255, 150, 0.5)';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                contactForm.reset();
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.borderColor = '';
            }, 2000);
        });
    }
});

// ============================================
// SMOOTH SCROLL EASING
// ============================================

// Custom smooth scroll with easing (optional enhancement)
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function easeInOutCubic(t) {
        return t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ============================================
// PARALLAX EFFECT FOR DECORATIVE ELEMENTS
// ============================================

let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.decorative-plus');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ============================================
// CTA SECTION ANIMATIONS
// ============================================

// CTA Section Animations
document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.getElementById('cta-section');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const ctaLines = document.querySelectorAll('.cta-line');
    const ctaDots = document.querySelectorAll('.cta-dot');
    
    // Intersection Observer for CTA Section
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger line and dot animations
                setTimeout(() => {
                    ctaLines.forEach(line => {
                        line.classList.add('animate-in');
                    });
                    ctaDots.forEach(dot => {
                        dot.classList.add('animate-in');
                    });
                }, 300);
                
                // Hide scroll indicator
                if (scrollIndicator) {
                    scrollIndicator.style.opacity = '0';
                    scrollIndicator.style.visibility = 'hidden';
                    scrollIndicator.style.transition = 'opacity 0.6s ease, visibility 0.6s ease';
                }
                
                // Only trigger once
                ctaObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });
    
    if (ctaSection) {
        ctaObserver.observe(ctaSection);
    }
});

// ============================================
// FORM VALIDATION AND SUBMISSION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    if (!contactForm) return;
    
    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Error messages
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    
    // Success/Error messages
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const formMessages = document.getElementById('form-messages');
    
    // Validation functions
    function validateName() {
        const value = nameInput.value.trim();
        if (value.length < 2) {
            showError(nameInput, nameError);
            return false;
        }
        showSuccess(nameInput, nameError);
        return true;
    }
    
    function validateEmail() {
        const value = emailInput.value.trim().toLowerCase();
        const emailPattern = /^[a-z0-9._%+-]+@([a-z0-9.-]+\.)+[a-z]{2,}$/;
        if (!emailPattern.test(value)) {
            showError(emailInput, emailError);
            return false;
        }
        showSuccess(emailInput, emailError);
        return true;
    }
    
    function validateMessage() {
        const value = messageInput.value.trim();
        if (value.length < 10) {
            showError(messageInput, messageError);
            return false;
        }
        showSuccess(messageInput, messageError);
        return true;
    }
    
    function showError(input, errorElement) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.classList.remove('hidden');
        errorElement.classList.add('show');
    }
    
    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.classList.remove('show');
        setTimeout(() => errorElement.classList.add('hidden'), 300);
    }
    
    function clearValidation(input, errorElement) {
        input.classList.remove('error', 'success');
        errorElement.classList.remove('show');
        setTimeout(() => errorElement.classList.add('hidden'), 300);
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    // Clear validation on input
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error') || nameInput.classList.contains('success')) {
            clearValidation(nameInput, nameError);
        }
    });
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error') || emailInput.classList.contains('success')) {
            clearValidation(emailInput, emailError);
        }
    });
    messageInput.addEventListener('input', () => {
        if (messageInput.classList.contains('error') || messageInput.classList.contains('success')) {
            clearValidation(messageInput, messageError);
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Hide previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        formMessages.classList.add('hidden');
        
        // Simulate form submission (replace with actual API call)
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            formMessages.classList.remove('hidden');
            successMessage.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            clearValidation(nameInput, nameError);
            clearValidation(emailInput, emailError);
            clearValidation(messageInput, messageError);
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
                formMessages.classList.add('hidden');
            }, 5000);
            
        } catch (error) {
            // Show error message
            formMessages.classList.remove('hidden');
            errorMessage.classList.remove('hidden');
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                errorMessage.classList.add('hidden');
                formMessages.classList.add('hidden');
            }, 5000);
        } finally {
            // Remove loading state
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
});
