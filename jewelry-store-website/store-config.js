// 💎 JEWELRY STORE CONFIGURATION
// Edit this file to customize your store information
// Save the file and refresh your website to see changes

const STORE_INFO = {
    // ===== BASIC STORE INFORMATION =====
    name: "Elegant Jewelry",
    tagline: "Exquisite Jewelry",
    subtitle: "Crafted with Love", 
    description: "Discover our stunning collection of fine jewelry and experience our expert repair services. Creating beautiful moments since 1985.",
    foundedYear: "1985",
    
    // ===== CONTACT INFORMATION =====
    contact: {
        phone: "(555) 123-4567",
        email: "info@elegantjewelry.com",
        
        // Store Address
        address: {
            street: "123 Main Street",
            area: "Downtown District", 
            cityState: "Your City, State 12345"
        },
        
        // Business Hours (displayed on website)
        hours: {
            monday: "10:00 AM - 7:00 PM",
            tuesday: "10:00 AM - 7:00 PM", 
            wednesday: "10:00 AM - 7:00 PM",
            thursday: "10:00 AM - 7:00 PM",
            friday: "10:00 AM - 7:00 PM",
            saturday: "10:00 AM - 6:00 PM",
            sunday: "12:00 PM - 5:00 PM"
        },
        
        // Social Media Links (put your actual URLs here)
        social: {
            facebook: "https://facebook.com/yourstore",
            instagram: "https://instagram.com/yourstore", 
            pinterest: "https://pinterest.com/yourstore"
        }
    },
    
    // ===== WEBSITE APPEARANCE =====
    branding: {
        // Colors (use hex codes like #7c3aed)
        primaryColor: "#7c3aed",    // Main purple color
        secondaryColor: "#fbbf24",  // Gold accent color
        accentColor: "#ec4899",     // Pink accent
        
        // Logo (if you have one - leave empty to use text logo)
        logoUrl: "", // Example: "images/logo.png"
        
        // Favicon (small icon in browser tab)
        faviconUrl: "" // Example: "images/favicon.ico"
    },
    
    // ===== REPAIR SERVICES YOU OFFER =====
    repairServices: [
        {
            name: "Ring Resizing",
            description: "Professional ring sizing for the perfect fit",
            priceRange: "$25 - $75" // Optional: add price ranges
        },
        {
            name: "Stone Setting & Replacement",
            description: "Expert stone setting and replacement services", 
            priceRange: "$50 - $200"
        },
        {
            name: "Chain & Bracelet Repair",
            description: "Fix broken chains, clasps, and links",
            priceRange: "$30 - $100"
        },
        {
            name: "Watch Repair", 
            description: "Battery replacement and mechanical watch servicing",
            priceRange: "$15 - $150"
        },
        {
            name: "Cleaning & Polishing",
            description: "Restore the shine and luster to your jewelry",
            priceRange: "$20 - $50"
        },
        {
            name: "Custom Restoration",
            description: "Restore antique and vintage pieces",
            priceRange: "Quote on request"
        }
    ],
    
    // ===== WEBSITE SETTINGS =====
    settings: {
        // Enable/disable features
        showPrices: true,           // Show prices on products
        enableNewsletter: true,     // Show newsletter signup
        enableRepairForm: true,     // Show repair request form
        enableContactForm: true,    // Show contact form
        
        // SEO Settings
        metaKeywords: "jewelry, engagement rings, wedding bands, jewelry repair, custom jewelry, local jeweler",
        
        // Google Analytics (get this from Google Analytics)
        googleAnalyticsId: "", // Example: "GA_TRACKING_ID"
        
        // Form handling (see deployment guide for setup)
        formspreeId: "", // Example: "your-form-id" from formspree.io
        netlifyForms: false // Set to true if using Netlify
    }
};

// ===== YOUR JEWELRY PRODUCTS =====
// Add your jewelry pieces here
const JEWELRY_PRODUCTS = [
    {
        id: 1,
        name: "Diamond Solitaire Ring",
        price: "$2,499",
        image: "images/products/diamond-ring.jpg", // Put your image in images/products/ folder
        description: "Classic 1-carat diamond solitaire in 14k white gold",
        category: "Engagement Rings",
        featured: true // Show on homepage
    },
    {
        id: 2, 
        name: "Pearl Necklace Set",
        price: "$899",
        image: "images/products/pearl-necklace.jpg",
        description: "Elegant freshwater pearl necklace with matching earrings",
        category: "Necklaces",
        featured: true
    },
    {
        id: 3,
        name: "Rose Gold Wedding Band", 
        price: "$1,299",
        image: "images/products/wedding-band.jpg",
        description: "Handcrafted rose gold band with intricate detailing",
        category: "Wedding Bands", 
        featured: true
    },
    {
        id: 4,
        name: "Sapphire Earrings",
        price: "$1,899", 
        image: "images/products/sapphire-earrings.jpg",
        description: "Blue sapphire drop earrings in platinum setting",
        category: "Earrings",
        featured: true
    },
    {
        id: 5,
        name: "Tennis Bracelet",
        price: "$3,299",
        image: "images/products/tennis-bracelet.jpg", 
        description: "Diamond tennis bracelet with 2 carats total weight",
        category: "Bracelets",
        featured: true
    },
    {
        id: 6,
        name: "Vintage Brooch",
        price: "$599",
        image: "images/products/vintage-brooch.jpg",
        description: "Art Deco inspired vintage brooch with emerald accents", 
        category: "Vintage",
        featured: true
    }
    
    // Add more products here following the same format
    // To add a new product, copy the structure above and change the details
];

// ===== GALLERY IMAGES =====
// Add your gallery photos here
const GALLERY_IMAGES = [
    {
        src: "images/gallery/gallery-1.jpg", // Put your images in images/gallery/ folder
        alt: "Elegant pearl jewelry collection",
        title: "Pearl Collection"
    },
    {
        src: "images/gallery/gallery-2.jpg",
        alt: "Diamond engagement rings", 
        title: "Diamond Rings"
    },
    {
        src: "images/gallery/gallery-3.jpg",
        alt: "Gold wedding bands",
        title: "Wedding Bands"
    },
    {
        src: "images/gallery/gallery-4.jpg",
        alt: "Colorful gemstone earrings",
        title: "Gemstone Earrings"
    },
    {
        src: "images/gallery/gallery-5.jpg", 
        alt: "Diamond tennis bracelet",
        title: "Diamond Bracelets"
    },
    {
        src: "images/gallery/gallery-6.jpg",
        alt: "Vintage jewelry pieces",
        title: "Vintage Collection"
    },
    {
        src: "images/gallery/gallery-7.jpg",
        alt: "Custom designed necklaces", 
        title: "Custom Necklaces"
    },
    {
        src: "images/gallery/gallery-8.jpg",
        alt: "Luxury watch collection",
        title: "Luxury Watches"
    }
    
    // Add more gallery images here following the same format
];

// ===== TEMPORARY STOCK IMAGES =====
// These are used if you haven't added your own images yet
// Replace with your own images by updating the paths above
const STOCK_IMAGES = {
    products: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center", 
        "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center"
    ],
    gallery: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=600&h=400&fit=crop&crop=center", 
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1588444650700-6c3c3c5e4b5a?w=600&h=400&fit=crop&crop=center"
    ]
};

// ===== HELPER FUNCTIONS =====
// These functions help the website use your configuration
// Don't edit these unless you know what you're doing

function getProductImage(product, index) {
    // Use your image if it exists, otherwise use stock image
    if (product.image && !product.image.includes('images/')) {
        return product.image;
    }
    return product.image || STOCK_IMAGES.products[index % STOCK_IMAGES.products.length];
}

function getGalleryImage(galleryItem, index) {
    // Use your image if it exists, otherwise use stock image  
    if (galleryItem.src && !galleryItem.src.includes('images/')) {
        return galleryItem.src;
    }
    return galleryItem.src || STOCK_IMAGES.gallery[index % STOCK_IMAGES.gallery.length];
}

function formatBusinessHours() {
    const hours = STORE_INFO.contact.hours;
    return `
        Monday - Friday: ${hours.monday}<br>
        Saturday: ${hours.saturday}<br>
        Sunday: ${hours.sunday}
    `;
}

// Export for use in other files (don't change this)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STORE_INFO, JEWELRY_PRODUCTS, GALLERY_IMAGES };
}