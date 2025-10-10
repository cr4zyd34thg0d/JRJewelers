// Jewelry Store Website JavaScript
// Handles all interactive functionality including forms, gallery, and navigation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initJewelryShowcase();
    initGallery();
    initForms();
    initScrollAnimations();
});

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('text-purple-600');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('text-purple-600');
                    }
                });
            }
        });
    });
}

// Input sanitization utility
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Validate URL for security
function isValidImageURL(url) {
    if (!url) return false;
    
    // Allow relative paths and HTTPS URLs only
    if (url.startsWith('/') || url.startsWith('./') || url.startsWith('images/')) {
        return true;
    }
    
    // Allow HTTPS URLs from trusted domains
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'https:' && 
               (urlObj.hostname === 'images.unsplash.com' || 
                urlObj.hostname.endsWith('.unsplash.com'));
    } catch {
        return false;
    }
}

// Jewelry showcase data and functionality
function initJewelryShowcase() {
    // Use products from configuration file
    const jewelryItems = JEWELRY_PRODUCTS.filter(item => item.featured);

    const showcaseContainer = document.getElementById('jewelry-showcase');
    
    if (showcaseContainer) {
        // Clear existing content securely
        showcaseContainer.innerHTML = '';
        
        jewelryItems.forEach((item, index) => {
            // Validate and sanitize all inputs
            const sanitizedName = sanitizeHTML(item.name || '');
            const sanitizedDescription = sanitizeHTML(item.description || '');
            const sanitizedCategory = sanitizeHTML(item.category || '');
            const sanitizedPrice = sanitizeHTML(item.price || '');
            
            // Validate image URL
            const imageUrl = getProductImage(item, index);
            if (!isValidImageURL(imageUrl)) {
                console.warn('Invalid image URL detected:', imageUrl);
                return; // Skip this item
            }
            
            // Create element safely using DOM methods
            const cardDiv = document.createElement('div');
            cardDiv.className = 'jewelry-card rounded-lg overflow-hidden';
            
            cardDiv.innerHTML = `
                <div class="relative group">
                    <img src="${imageUrl}" alt="${sanitizedName}" 
                         class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4='">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div class="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-medium">
                        ${sanitizedCategory}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-playfair text-xl font-semibold mb-2">${sanitizedName}</h3>
                    <p class="text-gray-600 mb-3">${sanitizedDescription}</p>
                    <div class="flex justify-between items-center">
                        ${STORE_INFO.settings.showPrices ? `<span class="text-2xl font-bold text-purple-600">${sanitizedPrice}</span>` : '<span class="text-lg text-gray-500">Price on request</span>'}
                        <button class="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors inquiry-btn"
                                data-item-name="${sanitizedName}">
                            Inquire
                        </button>
                    </div>
                </div>
            `;
            
            // Add event listener securely (no inline onclick)
            const inquiryBtn = cardDiv.querySelector('.inquiry-btn');
            inquiryBtn.addEventListener('click', function() {
                inquireAboutItem(this.dataset.itemName);
            });
            
            showcaseContainer.appendChild(cardDiv);
        });
    }
}

// Gallery functionality
function initGallery() {
    // Use gallery images from configuration file
    const galleryImages = GALLERY_IMAGES;

    const galleryContainer = document.getElementById('gallery-grid');
    
    if (galleryContainer) {
        // Clear existing content securely
        galleryContainer.innerHTML = '';
        
        galleryImages.forEach((image, index) => {
            // Validate and sanitize inputs
            const sanitizedAlt = sanitizeHTML(image.alt || '');
            const sanitizedTitle = sanitizeHTML(image.title || '');
            
            // Validate image URL
            const imageUrl = getGalleryImage(image, index);
            if (!isValidImageURL(imageUrl)) {
                console.warn('Invalid gallery image URL detected:', imageUrl);
                return; // Skip this image
            }
            
            // Create element safely using DOM methods
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.style.position = 'relative';
            galleryItem.style.overflow = 'hidden';
            galleryItem.style.borderRadius = '12px';
            galleryItem.style.cursor = 'pointer';
            
            galleryItem.innerHTML = `
                <img src="${imageUrl}" alt="${sanitizedAlt}" 
                     class="w-full h-64 object-cover rounded-lg"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4='">
                <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div class="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i class="fas fa-search-plus text-2xl mb-2"></i>
                        <p class="font-semibold">${sanitizedTitle}</p>
                    </div>
                </div>
            `;
            
            // Add event listener securely (no inline onclick)
            galleryItem.addEventListener('click', function() {
                openLightbox(index);
            });
            
            galleryContainer.appendChild(galleryItem);
        });

        // Create lightbox
        createLightbox(galleryImages);
    }
}

// Lightbox functionality
function createLightbox(images) {
    const lightboxHTML = `
        <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden flex items-center justify-center">
            <div class="relative max-w-4xl max-h-full p-4">
                <button id="closeLightbox" class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10">
                    <i class="fas fa-times"></i>
                </button>
                <button id="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <img id="lightboxImage" class="max-w-full max-h-full object-contain rounded-lg">
                <div id="lightboxTitle" class="text-white text-center mt-4 text-xl font-semibold"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    let currentImageIndex = 0;
    
    // Lightbox controls
    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    document.getElementById('prevImage').addEventListener('click', () => navigateImage(-1));
    document.getElementById('nextImage').addEventListener('click', () => navigateImage(1));
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('hidden')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateImage(-1);
                    break;
                case 'ArrowRight':
                    navigateImage(1);
                    break;
            }
        }
    });
    
    function navigateImage(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) currentImageIndex = images.length - 1;
        if (currentImageIndex >= images.length) currentImageIndex = 0;
        
        lightboxImage.src = images[currentImageIndex].src;
        lightboxTitle.textContent = images[currentImageIndex].title;
    }
    
    function closeLightbox() {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    // Global function to open lightbox
    window.openLightbox = function(index) {
        currentImageIndex = index;
        lightboxImage.src = images[index].src;
        lightboxTitle.textContent = images[index].title;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };
}

// Input validation utilities
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone) {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)\.]/g, ''));
}

function validateName(name) {
    return name && name.trim().length >= 1 && name.trim().length <= 50 && 
           /^[a-zA-Z\s\-'\.]+$/.test(name.trim());
}

function validateTextInput(text, maxLength = 1000) {
    return text && text.trim().length >= 1 && text.trim().length <= maxLength;
}

function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input.trim().replace(/[<>]/g, '');
}

// Rate limiting for form submissions
const formSubmissionTracker = {
    submissions: [],
    maxSubmissions: 3,
    timeWindow: 300000, // 5 minutes
    
    canSubmit() {
        const now = Date.now();
        // Remove old submissions outside time window
        this.submissions = this.submissions.filter(time => now - time < this.timeWindow);
        
        if (this.submissions.length >= this.maxSubmissions) {
            return false;
        }
        
        this.submissions.push(now);
        return true;
    }
};

// Form handling
function initForms() {
    // Repair form
    const repairForm = document.getElementById('repair-form');
    if (repairForm) {
        repairForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Rate limiting check
            if (!formSubmissionTracker.canSubmit()) {
                showNotification('Too many submissions. Please wait a few minutes before trying again.', 'error');
                return;
            }
            
            if (validateRepairForm(this)) {
                handleRepairSubmission(this);
            }
        });
        
        // Add real-time validation
        addFormValidation(repairForm);
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Rate limiting check
            if (!formSubmissionTracker.canSubmit()) {
                showNotification('Too many submissions. Please wait a few minutes before trying again.', 'error');
                return;
            }
            
            if (validateContactForm(this)) {
                handleContactSubmission(this);
            }
        });
        
        // Add real-time validation
        addFormValidation(contactForm);
    }
}

// Real-time form validation
function addFormValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear previous error state
            this.classList.remove('border-red-500');
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove previous error styling
    field.classList.remove('border-red-500');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Validate based on field type
    switch (field.type) {
        case 'email':
            if (value && !validateEmail(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'tel':
            if (value && !validatePhone(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
            break;
        case 'text':
            if (field.required && !validateName(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid name (letters only, 1-50 characters)';
            }
            break;
        case 'textarea':
            if (field.required && !validateTextInput(value, 2000)) {
                isValid = false;
                errorMessage = 'Please enter a message (1-2000 characters)';
            }
            break;
    }
    
    // Show error if validation failed
    if (!isValid) {
        field.classList.add('border-red-500');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = errorMessage;
        field.parentNode.appendChild(errorDiv);
    }
    
    return isValid;
}

function validateRepairForm(form) {
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate required fields
    const firstName = sanitizeInput(formData.get('firstName'));
    const lastName = sanitizeInput(formData.get('lastName'));
    const email = sanitizeInput(formData.get('email'));
    const phone = sanitizeInput(formData.get('phone'));
    const repairType = sanitizeInput(formData.get('repairType'));
    const description = sanitizeInput(formData.get('description'));
    
    if (!validateName(firstName)) {
        showFieldError(form.querySelector('#firstName'), 'Please enter a valid first name');
        isValid = false;
    }
    
    if (!validateName(lastName)) {
        showFieldError(form.querySelector('#lastName'), 'Please enter a valid last name');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showFieldError(form.querySelector('#email'), 'Please enter a valid email address');
        isValid = false;
    }
    
    if (phone && !validatePhone(phone)) {
        showFieldError(form.querySelector('#phone'), 'Please enter a valid phone number');
        isValid = false;
    }
    
    if (!repairType) {
        showFieldError(form.querySelector('#repairType'), 'Please select a repair type');
        isValid = false;
    }
    
    if (!validateTextInput(description, 2000)) {
        showFieldError(form.querySelector('#description'), 'Please describe the repair needed (1-2000 characters)');
        isValid = false;
    }
    
    return isValid;
}

function validateContactForm(form) {
    const formData = new FormData(form);
    let isValid = true;
    
    // Validate required fields
    const firstName = sanitizeInput(formData.get('contactFirstName'));
    const lastName = sanitizeInput(formData.get('contactLastName'));
    const email = sanitizeInput(formData.get('contactEmail'));
    const subject = sanitizeInput(formData.get('subject'));
    const message = sanitizeInput(formData.get('message'));
    
    if (!validateName(firstName)) {
        showFieldError(form.querySelector('#contactFirstName'), 'Please enter a valid first name');
        isValid = false;
    }
    
    if (!validateName(lastName)) {
        showFieldError(form.querySelector('#contactLastName'), 'Please enter a valid last name');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showFieldError(form.querySelector('#contactEmail'), 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!validateTextInput(subject, 100)) {
        showFieldError(form.querySelector('#subject'), 'Please enter a subject (1-100 characters)');
        isValid = false;
    }
    
    if (!validateTextInput(message, 2000)) {
        showFieldError(form.querySelector('#message'), 'Please enter a message (1-2000 characters)');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('border-red-500');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
    
    // Focus on first error field
    if (!document.querySelector('.border-red-500:focus')) {
        field.focus();
    }
}

// Handle repair form submission
function handleRepairSubmission(form) {
    const formData = new FormData(form);
    
    // Sanitize all form data
    const sanitizedData = {
        firstName: sanitizeInput(formData.get('firstName')),
        lastName: sanitizeInput(formData.get('lastName')),
        email: sanitizeInput(formData.get('email')),
        phone: sanitizeInput(formData.get('phone')),
        repairType: sanitizeInput(formData.get('repairType')),
        description: sanitizeInput(formData.get('description')),
        urgency: sanitizeInput(formData.get('urgency')),
        newsletter: formData.get('newsletter') === 'on',
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent.substring(0, 200), // Limited for security
        timestamp: Date.now()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Clear any existing error messages
    form.querySelectorAll('.error-message').forEach(error => error.remove());
    form.querySelectorAll('.border-red-500').forEach(field => field.classList.remove('border-red-500'));
    
    // Check if Formspree is configured
    if (STORE_INFO.settings.formspreeId) {
        // Create new FormData with sanitized values
        const cleanFormData = new FormData();
        Object.keys(sanitizedData).forEach(key => {
            if (key !== 'userAgent' && key !== 'timestamp') {
                cleanFormData.append(key, sanitizedData[key]);
            }
        });
        
        // Send via Formspree (recommended)
        submitToFormspree(form, cleanFormData, 'repair')
            .then(() => {
                form.reset();
                showNotification('Repair request submitted successfully! We\'ll contact you within 24 hours.', 'success');
                resetSubmitButton(submitBtn, originalText);
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                showNotification('There was an error submitting your request. Please try again or call us directly.', 'error');
                resetSubmitButton(submitBtn, originalText);
            });
    } else if (STORE_INFO.settings.netlifyForms) {
        // Create new FormData with sanitized values
        const cleanFormData = new FormData();
        Object.keys(sanitizedData).forEach(key => {
            if (key !== 'userAgent' && key !== 'timestamp') {
                cleanFormData.append(key, sanitizedData[key]);
            }
        });
        
        // Send via Netlify Forms
        submitToNetlify(form, cleanFormData)
            .then(() => {
                form.reset();
                showNotification('Repair request submitted successfully! We\'ll contact you within 24 hours.', 'success');
                resetSubmitButton(submitBtn, originalText);
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                showNotification('There was an error submitting your request. Please try again or call us directly.', 'error');
                resetSubmitButton(submitBtn, originalText);
            });
    } else {
        // Fallback: Store locally and show setup message
        try {
            const existingRequests = JSON.parse(localStorage.getItem('repairRequests') || '[]');
            
            // Limit stored requests to prevent storage abuse
            if (existingRequests.length >= 50) {
                existingRequests.shift(); // Remove oldest
            }
            
            existingRequests.push(sanitizedData);
            localStorage.setItem('repairRequests', JSON.stringify(existingRequests));
            
            setTimeout(() => {
                form.reset();
                showNotification('Form submitted! Note: Email delivery is not set up yet. Please call us directly or set up Formspree.', 'warning');
                resetSubmitButton(submitBtn, originalText);
            }, 1000);
        } catch (error) {
            console.error('Local storage error:', error);
            showNotification('There was an error saving your request. Please call us directly.', 'error');
            resetSubmitButton(submitBtn, originalText);
        }
    }
}

function resetSubmitButton(button, originalText) {
    button.textContent = originalText;
    button.disabled = false;
}

// Handle contact form submission
function handleContactSubmission(form) {
    const formData = new FormData(form);
    
    // Sanitize all form data
    const sanitizedData = {
        firstName: sanitizeInput(formData.get('contactFirstName')),
        lastName: sanitizeInput(formData.get('contactLastName')),
        email: sanitizeInput(formData.get('contactEmail')),
        subject: sanitizeInput(formData.get('subject')),
        message: sanitizeInput(formData.get('message')),
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent.substring(0, 200), // Limited for security
        timestamp: Date.now()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Clear any existing error messages
    form.querySelectorAll('.error-message').forEach(error => error.remove());
    form.querySelectorAll('.border-red-500').forEach(field => field.classList.remove('border-red-500'));
    
    // Check if Formspree is configured
    if (STORE_INFO.settings.formspreeId) {
        // Create new FormData with sanitized values
        const cleanFormData = new FormData();
        Object.keys(sanitizedData).forEach(key => {
            if (key !== 'userAgent' && key !== 'timestamp') {
                cleanFormData.append(key, sanitizedData[key]);
            }
        });
        
        // Send via Formspree (recommended)
        submitToFormspree(form, cleanFormData, 'contact')
            .then(() => {
                form.reset();
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                resetSubmitButton(submitBtn, originalText);
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                showNotification('There was an error sending your message. Please try again or call us directly.', 'error');
                resetSubmitButton(submitBtn, originalText);
            });
    } else if (STORE_INFO.settings.netlifyForms) {
        // Create new FormData with sanitized values
        const cleanFormData = new FormData();
        Object.keys(sanitizedData).forEach(key => {
            if (key !== 'userAgent' && key !== 'timestamp') {
                cleanFormData.append(key, sanitizedData[key]);
            }
        });
        
        // Send via Netlify Forms
        submitToNetlify(form, cleanFormData)
            .then(() => {
                form.reset();
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                resetSubmitButton(submitBtn, originalText);
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                showNotification('There was an error sending your message. Please try again or call us directly.', 'error');
                resetSubmitButton(submitBtn, originalText);
            });
    } else {
        // Fallback: Store locally and show setup message
        try {
            const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            
            // Limit stored messages to prevent storage abuse
            if (existingMessages.length >= 50) {
                existingMessages.shift(); // Remove oldest
            }
            
            existingMessages.push(sanitizedData);
            localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
            
            setTimeout(() => {
                form.reset();
                showNotification('Message submitted! Note: Email delivery is not set up yet. Please call us directly or set up Formspree.', 'warning');
                resetSubmitButton(submitBtn, originalText);
            }, 1000);
        } catch (error) {
            console.error('Local storage error:', error);
            showNotification('There was an error saving your message. Please call us directly.', 'error');
            resetSubmitButton(submitBtn, originalText);
        }
    }
}

// Email submission functions
async function submitToFormspree(form, formData, formType) {
    // Validate formspreeId format
    const formspreeId = STORE_INFO.settings.formspreeId;
    if (!formspreeId || !/^[a-zA-Z0-9]{8}$/.test(formspreeId)) {
        throw new Error('Invalid Formspree ID format');
    }
    
    const formspreeUrl = `https://formspree.io/f/${formspreeId}`;
    
    // Add form type and security headers
    formData.append('_subject', formType === 'repair' ? 'New Jewelry Repair Request' : 'New Contact Message');
    formData.append('_form_type', formType);
    formData.append('_replyto', formData.get('email') || formData.get('contactEmail'));
    
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
        const response = await fetch(formspreeUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        return response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout - please try again');
        }
        throw error;
    }
}

async function submitToNetlify(form, formData) {
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString(),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timeout - please try again');
        }
        throw error;
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.getElementById('notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500';
    notification.classList.add(bgColor, 'text-white');
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'} mr-2"></i>
                <span>${message}</span>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.jewelry-card, .gallery-item, .repair-form');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility function for jewelry inquiries
window.inquireAboutItem = function(itemName) {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill subject line
        setTimeout(() => {
            const subjectField = document.getElementById('subject');
            if (subjectField) {
                subjectField.value = `Inquiry about ${itemName}`;
                subjectField.focus();
            }
        }, 1000);
    }
};

// Admin panel for viewing submissions (demo purposes)
window.viewSubmissions = function() {
    const repairRequests = JSON.parse(localStorage.getItem('repairRequests') || '[]');
    const contactMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    
    console.log('=== REPAIR REQUESTS ===');
    repairRequests.forEach((request, index) => {
        console.log(`${index + 1}.`, request);
    });
    
    console.log('=== CONTACT MESSAGES ===');
    contactMessages.forEach((message, index) => {
        console.log(`${index + 1}.`, message);
    });
    
    if (repairRequests.length === 0 && contactMessages.length === 0) {
        console.log('No submissions yet.');
    }
};

// Add to console for easy access
console.log('💎 Jewelry Store Website Loaded!');
console.log('📝 To view form submissions, type: viewSubmissions()');
console.log('🔧 All interactive features are ready!');