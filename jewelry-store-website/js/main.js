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

// Jewelry showcase data and functionality
function initJewelryShowcase() {
    // Use products from configuration file
    const jewelryItems = JEWELRY_PRODUCTS.filter(item => item.featured);

    const showcaseContainer = document.getElementById('jewelry-showcase');
    
    if (showcaseContainer) {
        showcaseContainer.innerHTML = jewelryItems.map((item, index) => `
            <div class="jewelry-card rounded-lg overflow-hidden">
                <div class="relative group">
                    <img src="${getProductImage(item, index)}" alt="${item.name}" 
                         class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105">
                    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    <div class="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-medium">
                        ${item.category}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-playfair text-xl font-semibold mb-2">${item.name}</h3>
                    <p class="text-gray-600 mb-3">${item.description}</p>
                    <div class="flex justify-between items-center">
                        ${STORE_INFO.settings.showPrices ? `<span class="text-2xl font-bold text-purple-600">${item.price}</span>` : '<span class="text-lg text-gray-500">Price on request</span>'}
                        <button class="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                                onclick="inquireAboutItem('${item.name}')">
                            Inquire
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Gallery functionality
function initGallery() {
    // Use gallery images from configuration file
    const galleryImages = GALLERY_IMAGES;

    const galleryContainer = document.getElementById('gallery-grid');
    
    if (galleryContainer) {
        galleryContainer.innerHTML = galleryImages.map((image, index) => `
            <div class="gallery-item" onclick="openLightbox(${index})">
                <img src="${getGalleryImage(image, index)}" alt="${image.alt}" 
                     class="w-full h-64 object-cover rounded-lg">
                <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <div class="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <i class="fas fa-search-plus text-2xl mb-2"></i>
                        <p class="font-semibold">${image.title}</p>
                    </div>
                </div>
            </div>
        `).join('');

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

// Form handling
function initForms() {
    // Repair form
    const repairForm = document.getElementById('repair-form');
    if (repairForm) {
        repairForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRepairSubmission(this);
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactSubmission(this);
        });
    }
}

// Handle repair form submission
function handleRepairSubmission(form) {
    const formData = new FormData(form);
    const repairData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        repairType: formData.get('repairType'),
        description: formData.get('description'),
        urgency: formData.get('urgency'),
        newsletter: formData.get('newsletter') === 'on',
        submittedAt: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Repair request submitted successfully! We\'ll contact you within 24 hours.', 'success');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Log data (in production, send to backend)
        console.log('Repair Request:', repairData);
        
        // Store in localStorage for demo purposes
        const existingRequests = JSON.parse(localStorage.getItem('repairRequests') || '[]');
        existingRequests.push(repairData);
        localStorage.setItem('repairRequests', JSON.stringify(existingRequests));
        
    }, 1500);
}

// Handle contact form submission
function handleContactSubmission(form) {
    const formData = new FormData(form);
    const contactData = {
        firstName: formData.get('contactFirstName'),
        lastName: formData.get('contactLastName'),
        email: formData.get('contactEmail'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        submittedAt: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Log data (in production, send to backend)
        console.log('Contact Message:', contactData);
        
        // Store in localStorage for demo purposes
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        existingMessages.push(contactData);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));
        
    }, 1500);
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
    
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
    notification.classList.add(bgColor, 'text-white');
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i>
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