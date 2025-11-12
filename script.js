// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navButtons = document.querySelector('.nav-buttons');
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        if (navButtons) {
            navButtons.classList.toggle('show');
        }
    });
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            if (navButtons) {
                navButtons.classList.remove('show');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
        }
    });
});

// Quote Modal functionality (guards around missing DOM)
function openQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (!modal) return;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
    const modal = document.getElementById('quote-modal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Reset form
    const form = document.getElementById('quote-form');
    if (form) {
        form.reset();
        clearErrors();
    }
}

// Close modal when clicking outside
const quoteModalEl = document.getElementById('quote-modal');
if (quoteModalEl) {
    quoteModalEl.addEventListener('click', function(e) {
        if (e.target === this) {
            closeQuoteModal();
        }
    });
}

// Form validation and submission
const quoteFormEl = document.getElementById('quote-form');
if (quoteFormEl) {
    quoteFormEl.addEventListener('submit', function(e) {
        e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name').trim(),
        email: formData.get('email').trim(),
        company: formData.get('company').trim(),
        phone: formData.get('phone').trim(),
        message: formData.get('message').trim()
    };
    
    // Validate form
    let isValid = true;
    
    if (!data.name || data.name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!data.company || data.company.length < 2) {
        showError('company', 'Company name is required');
        isValid = false;
    }
    
    if (!data.message || data.message.length < 10) {
        showError('message', 'Please provide more details about your requirements');
        isValid = false;
    }
    
        if (!isValid) return;
    
    // Show loading state
    const submitBtn = document.getElementById('quote-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showToast('Quote request submitted successfully! We\'ll contact you within 24 hours.', 'success');
        
        // Close modal
        closeQuoteModal();
        
        // Log the data (in a real app, this would be sent to a server)
        console.log('Quote request data:', data);
    }, 1500);
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button and form
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        emailInput.value = '';
        
        // Show success message
        showToast('Successfully subscribed to our newsletter!', 'success');
        
        // Log the data (in a real app, this would be sent to a server)
        console.log('Newsletter subscription:', { email });
    }, 1000);
    });
}

// Utility functions
function showError(fieldName, message) {
    const field = document.getElementById(`quote-${fieldName}`);
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    field.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const fieldElements = document.querySelectorAll('.form-group input, .form-group textarea');
    
    errorElements.forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
    
    fieldElements.forEach(el => {
        el.classList.remove('error');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Download catalog functionality
function downloadCatalog() {
    const link = document.createElement('a');
    link.href = './assets/quote.pdf';
    link.download = 'quote.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Catalog download started!', 'success');
}

// Product and industry card interactions
document.addEventListener('DOMContentLoaded', function() {
    // Product learn more buttons (optional)
    const productLinks = document.querySelectorAll('.product-link');
    productLinks.forEach((link) => {
        link.addEventListener('click', function() {
            const titleEl = this.closest('.product-card')?.querySelector('.product-title');
            if (!titleEl) return;
            const productTitle = titleEl.textContent;
            showToast(`Learning more about ${productTitle}`, 'success');
            console.log(`Product clicked: ${productTitle}`);
        });
    });
    
    // Industry view solutions buttons (optional)
    const industryLinks = document.querySelectorAll('.industry-link');
    industryLinks.forEach((link) => {
        link.addEventListener('click', function() {
            const titleEl = this.closest('.industry-card')?.querySelector('.industry-title');
            if (!titleEl) return;
            const industryTitle = titleEl.textContent;
            showToast(`Viewing solutions for ${industryTitle}`, 'success');
            console.log(`Industry clicked: ${industryTitle}`);
        });
    });
});

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for animation
    const cards = document.querySelectorAll('.feature-card, .product-card, .industry-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('quote-modal');
        if (modal.classList.contains('show')) {
            closeQuoteModal();
        }
    }
});

// Form field enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Auto-resize textarea
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    });
    
    // Clear errors on input
    const formFields = document.querySelectorAll('#quote-form input, #quote-form textarea');
    formFields.forEach(field => {
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
                const fieldName = this.name;
                const errorElement = document.getElementById(`${fieldName}-error`);
                if (errorElement) {
                    errorElement.classList.remove('show');
                }
            }
        });
    });
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Analytics tracking (placeholder for real analytics)
function trackEvent(category, action, label) {
    console.log('Analytics Event:', { category, action, label });
    // In a real app, this would send data to analytics service
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track quote button clicks
    const quoteButtons = document.querySelectorAll('[data-testid*="button-quote"]');
    quoteButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Lead Generation', 'Quote Button Click', this.dataset.testid);
        });
    });
    
    // Track catalog downloads
    const catalogButtons = document.querySelectorAll('[data-testid*="button-catalog"]');
    catalogButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Lead Generation', 'Catalog Download', this.dataset.testid);
        });
    });
    
    // Track navigation usage
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation', 'Section Click', this.getAttribute('href'));
        });
    });
});

// Error handling for network requests (placeholder)
function handleNetworkError(error) {
    console.error('Network error:', error);
    showToast('Network error. Please check your connection and try again.', 'error');
}

// Service worker registration (for future PWA features)
// Service worker placeholder (disabled)