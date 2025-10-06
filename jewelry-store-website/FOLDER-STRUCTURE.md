# 📁 Jewelry Store Website - Folder Structure Guide

## 🗂️ Complete File Organization

```
jewelry-store-website/
├── 📄 index.html                    # Main website page (don't edit much)
├── ⚙️ store-config.js              # 👈 EDIT THIS - All your store info
├── 📖 README.md                     # Complete setup guide
├── 🚀 DEPLOYMENT.md                 # Deployment instructions
├── 📁 FOLDER-STRUCTURE.md           # This file
├── 📁 js/
│   └── main.js                      # Website functionality (don't edit)
├── 📁 css/
│   └── styles.css                   # Website styling (don't edit)
└── 📁 images/                       # 👈 CREATE THIS - Put your photos here
    ├── 📁 products/                 # Product photos (400x400px)
    │   ├── diamond-ring.jpg
    │   ├── pearl-necklace.jpg
    │   ├── wedding-band.jpg
    │   └── ... (your product photos)
    ├── 📁 gallery/                  # Gallery photos (600x400px)
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   └── ... (your gallery photos)
    └── 📁 logo/                     # Optional: Your logo
        ├── logo.png
        └── favicon.ico
```

## 🎯 What to Edit vs What to Leave Alone

### ✅ **Files You SHOULD Edit:**

**1. `store-config.js` - Your Store Information**
```javascript
// This is where ALL your store info goes:
- Store name, phone, email, address
- Business hours
- Social media links  
- Product information
- Gallery images
- Colors and branding
```

**2. `images/` folder - Your Photos**
```
images/products/     - Your jewelry product photos
images/gallery/      - Your gallery/showcase photos  
images/logo/         - Your logo and favicon (optional)
```

### ❌ **Files You Should NOT Edit (unless you're a developer):**

- `index.html` - Main website structure
- `js/main.js` - Website functionality
- `css/styles.css` - Website styling
- `README.md` - Documentation
- `DEPLOYMENT.md` - Deployment guide

## 📸 Image Guidelines

### **Product Photos (`images/products/`)**
- **Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **File size**: Under 500KB each
- **Naming**: Use descriptive names like `diamond-engagement-ring.jpg`

### **Gallery Photos (`images/gallery/`)**
- **Size**: 600x400 pixels (rectangular)
- **Format**: JPG or PNG  
- **File size**: Under 500KB each
- **Naming**: Use descriptive names like `pearl-collection.jpg`

### **Logo (Optional - `images/logo/`)**
- **Logo**: 200x60 pixels (PNG with transparent background)
- **Favicon**: 32x32 pixels (ICO format)

## 🔧 How to Add Your Photos

### **Step 1: Create Image Folders**
1. Create `images` folder in your website directory
2. Inside `images`, create `products` and `gallery` folders
3. Optionally create `logo` folder

### **Step 2: Add Your Photos**
1. Resize your photos to the recommended sizes
2. Save them in the appropriate folders
3. Use descriptive file names (no spaces, use hyphens)

### **Step 3: Update Configuration**
In `store-config.js`, update the image paths:

```javascript
// For products:
const JEWELRY_PRODUCTS = [
    {
        id: 1,
        name: "Diamond Ring",
        image: "images/products/diamond-ring.jpg", // 👈 Your photo path
        // ... other details
    }
];

// For gallery:
const GALLERY_IMAGES = [
    {
        src: "images/gallery/jewelry-collection.jpg", // 👈 Your photo path
        alt: "Beautiful jewelry collection",
        title: "Our Collection"
    }
];
```

## 🚀 Deployment Structure

When you deploy your website, upload this entire folder structure to your hosting:

### **For Netlify:**
- Drag the entire `jewelry-store-website` folder to Netlify

### **For Traditional Hosting:**
- Upload all files to your `public_html` or `www` folder via FTP

### **File Permissions:**
- All files should be readable (644 permissions)
- Folders should be executable (755 permissions)

## 📝 Quick Customization Checklist

### **Before Deploying:**
- [ ] Edit `store-config.js` with your store information
- [ ] Add your product photos to `images/products/`
- [ ] Add your gallery photos to `images/gallery/`
- [ ] Test locally by opening `index.html` in browser
- [ ] Check that your information appears correctly
- [ ] Test the contact and repair forms

### **After Deploying:**
- [ ] Test website on mobile devices
- [ ] Set up form handling (Netlify Forms or Formspree)
- [ ] Add Google Analytics (optional)
- [ ] Submit to Google My Business
- [ ] Share on social media

## 🔄 Making Updates

### **To Update Store Information:**
1. Edit `store-config.js`
2. Save the file
3. Re-upload to your hosting (or commit to GitHub if using Netlify/Vercel)

### **To Add New Products:**
1. Add product photo to `images/products/`
2. Add product info to `JEWELRY_PRODUCTS` array in `store-config.js`
3. Re-deploy website

### **To Add Gallery Images:**
1. Add photo to `images/gallery/`
2. Add image info to `GALLERY_IMAGES` array in `store-config.js`
3. Re-deploy website

## 💡 Pro Tips

### **Organization:**
- Use consistent naming for your image files
- Keep original high-resolution photos in a separate backup folder
- Document any customizations you make

### **Performance:**
- Optimize images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB for fast loading
- Use JPG for photos, PNG for graphics with transparency

### **Backup:**
- Keep a backup of your entire website folder
- Save your original `store-config.js` settings
- Document your hosting login information

---

**🎯 Remember: The key to success is keeping it simple! Focus on editing `store-config.js` and adding your photos. Everything else works automatically.**