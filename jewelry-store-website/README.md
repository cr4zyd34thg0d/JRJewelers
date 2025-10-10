# 💎 JRJewelers Website - Complete Setup Guide

Your complete jewelry store website with everything you need to showcase your jewelry, accept repair requests, and grow your business online. No technical experience required!

## 📋 What You'll Learn
- [Get Started in 10 Minutes](#-get-started-in-10-minutes)
- [Make It Yours (Customize)](#-make-it-yours-customize)
- [Add Your Photos](#-add-your-photos)
- [Get Your Website Online](#-get-your-website-online)
- [Receive Customer Messages](#-receive-customer-messages)
- [Promote Your Website](#-promote-your-website)
- [Keep It Updated](#-keep-it-updated)

## ⚡ Get Started in 10 Minutes

### Step 1: Check Your Files
You should have these files in your `jewelry-store-website` folder:
```
jewelry-store-website/
├── index.html              # Your website page
├── store-config.js         # 👈 EDIT THIS FILE (your store info)
├── js/main.js              # Makes everything work
├── css/styles.css          # Makes it look pretty
└── README.md               # This guide
```

### Step 2: Add Your Store Information (5 minutes)
1. **Open `store-config.js`** in any text editor (Notepad, TextEdit, etc.)
2. **Change these important details:**

```javascript
// Change these to your information:
name: "JRJewelers",                    // 👈 Your store name
phone: "(555) 123-4567",              // 👈 Your phone number
email: "info@jrjewelers.com",         // 👈 Your email
address: {
    street: "123 Main Street",         // 👈 Your address
    cityState: "Your City, State 12345"
},
hours: {
    monday: "10:00 AM - 7:00 PM",      // 👈 Your business hours
    // ... update all days
}
```

3. **Save the file** when you're done

### Step 3: Test Your Website (2 minutes)
1. **Double-click `index.html`** - it opens in your web browser
2. **Check everything looks right** - your store name, phone, address should appear
3. **Try the contact form** - fill it out and click submit
4. **Success!** You should see a green message saying it was submitted

### Step 4: Get It Online (3 minutes)
**Choose the easiest option for you:**

**🚀 Option A: Netlify (Recommended - Free & Easy)**
- Go to [netlify.com](https://netlify.com) and create account
- Drag your entire `jewelry-store-website` folder onto their website
- Your site is instantly online! You get a free web address
- **Bonus**: Customer forms automatically work!

**🌐 Option B: Your Web Hosting**
- If you have web hosting (GoDaddy, Bluehost, etc.)
- Upload all files to your hosting account
- Your site is live at your domain name

**🎉 Congratulations! Your jewelry store is now online!**

---

## 🎨 Make It Yours (Customize)

### Change Your Store Details
Everything you need to change is in the `store-config.js` file. Open it and update:

**🏪 Basic Information:**
- Store name and tagline
- Phone number and email
- Street address and hours
- Social media links (Facebook, Instagram)

**💍 Your Jewelry Products:**
- Add your jewelry pieces with names and prices
- Include descriptions and categories
- Mark which ones to show on the homepage

**🔧 Repair Services:**
- List the repair services you offer
- Add descriptions and price ranges
- Customize the repair request form

**🎨 Colors and Appearance:**
- Change your brand colors (purple, gold, etc.)
- Add your logo if you have one
- Customize the look and feel

### What Customers Will See
- **Professional Homepage** - Beautiful showcase of your jewelry
- **Product Gallery** - Interactive photo gallery with zoom
- **Repair Requests** - Easy online form for repair bookings
- **Contact Information** - Your address, hours, and phone
- **Mobile Friendly** - Works perfectly on phones and tablets

---

## 📸 Add Your Photos

### Option 1: Use Your Own Photos (Best)

**Step 1: Create Photo Folders**
1. In your `jewelry-store-website` folder, create a new folder called `images`
2. Inside `images`, create two folders:
   - `products` (for individual jewelry pieces)
   - `gallery` (for showcase photos)

**Step 2: Add Your Photos**
- **Product photos**: Take square photos (400x400 pixels) of individual pieces
- **Gallery photos**: Take rectangular photos (600x400 pixels) of your collection
- **Save as JPG files** with simple names like `diamond-ring.jpg`

**Step 3: Tell the Website About Your Photos**
In `store-config.js`, update the image paths:
```javascript
// For products:
image: "images/products/your-photo-name.jpg"

// For gallery:
src: "images/gallery/your-photo-name.jpg"
```

### Option 2: Start with Stock Photos (Quick)
The website comes with beautiful jewelry photos already! You can:
- Launch your website immediately with these photos
- Add your own photos later when you have time
- Mix stock photos with your own photos

### Option 3: Phone Photos (Easy)
Don't have professional photos? No problem!
- Use your smartphone to take photos
- Use good lighting (near a window works great)
- Keep backgrounds simple and clean
- Take multiple angles of each piece

**📱 Phone Photo Tips:**
- Clean your jewelry first for sparkle
- Use natural light from a window
- Avoid shadows by moving around
- Take several shots and pick the best ones

---

## �  Get Your Website Online

### Option 1: Netlify (Recommended - Free & Automatic)

**Why Netlify is Perfect for Jewelry Stores:**
- ✅ **Completely Free** - No monthly fees ever
- ✅ **Instant Setup** - Drag and drop your files
- ✅ **Forms Work Automatically** - Customer messages come to your email
- ✅ **Professional Web Address** - Get a free .netlify.app address
- ✅ **Custom Domain** - Add your own domain name later
- ✅ **Automatic Updates** - Easy to update your website

**How to Deploy on Netlify:**
1. **Go to [netlify.com](https://netlify.com)** and create a free account
2. **Drag your entire `jewelry-store-website` folder** onto the Netlify dashboard
3. **Your website is instantly live!** You'll get a web address like `jrjewelers-amazing.netlify.app`
4. **Test your forms** - Fill out a contact form and you'll get an email!
5. **Optional**: Add your own domain name in Netlify settings

### Option 2: Traditional Web Hosting

**If you already have web hosting (GoDaddy, Bluehost, etc.):**
1. **Log into your hosting account**
2. **Find the File Manager** (usually in cPanel)
3. **Upload all your website files** to the `public_html` folder
4. **Your website is live** at your domain name
5. **Set up forms** (see the "Receive Customer Messages" section below)

### Option 3: WordPress Hosting

**If you have WordPress hosting:**
1. **Create a subdomain** like `store.yourdomain.com`
2. **Upload your files** to the subdomain folder
3. **Your jewelry store runs alongside your WordPress site**

### Option 4: GitHub Pages (Free for Developers)

**If you're comfortable with GitHub:**
1. **Create a GitHub repository** and upload your files
2. **Enable GitHub Pages** in repository settings
3. **Your site is live** at `yourusername.github.io/repository-name`

---

## 📧 Receive Customer Messages

**⚠️ IMPORTANT: This is how you actually get customer emails!**

Right now, your forms work but you won't receive the messages. Here's how to fix that:

### Option 1: Netlify Forms (Easiest - Works Automatically)

**If you're using Netlify hosting:**
- ✅ **Already set up!** Forms automatically work
- ✅ **Get email notifications** when customers submit forms
- ✅ **View all submissions** in your Netlify dashboard
- ✅ **No setup required** - it just works!

### Option 2: Formspree (Works with Any Hosting)

**Perfect if you're using traditional hosting:**

1. **Go to [formspree.io](https://formspree.io)** and create a free account
2. **Create a new form** and get your form ID (looks like `xpzgkqyw`)
3. **Open `store-config.js`** and add your form ID:
   ```javascript
   formspreeId: "xpzgkqyw", // 👈 Put your actual form ID here
   ```
4. **Save and re-upload your website**
5. **Test it!** Fill out a form and you'll get an email

**Formspree Benefits:**
- ✅ **Free plan available** (50 submissions/month)
- ✅ **Email notifications** sent to your inbox
- ✅ **Spam protection** built-in
- ✅ **Works with any hosting** provider

### Option 3: EmailJS (Advanced)

**For more control over email sending:**
1. **Sign up at [emailjs.com](https://emailjs.com)**
2. **Connect your Gmail or Outlook account**
3. **Get your service ID and template ID**
4. **Add them to your `store-config.js`**

### What Happens When Forms Aren't Set Up?

**Current Behavior:**
- Forms show a **yellow warning message**: "Email delivery not set up yet"
- Submissions are **saved locally** in your browser (temporary)
- You can **view them** by pressing F12 and typing `viewSubmissions()`
- **But you won't get emails** until you set up one of the options above

**⚠️ Don't Launch Without Email Setup!** Your customers will think you received their messages, but you won't actually get them.

---

## 🎯 Promote Your Website

### Get Found Online (SEO & Marketing)

**🔍 Local SEO (Get Found in Google):**
1. **Google My Business** - Claim your business listing on Google
2. **Add your website URL** to your Google listing
3. **Upload photos** of your store and jewelry
4. **Ask happy customers** to leave Google reviews

**📱 Social Media Integration:**
- **Update your social links** in `store-config.js`
- **Post regularly** on Instagram and Facebook
- **Share photos** of new jewelry and repairs
- **Use hashtags** like #localjeweler #customjewelry #jewelryrepair

**📧 Email Marketing:**
- **Collect emails** through your website's newsletter signup
- **Send monthly updates** about new pieces and special offers
- **Share jewelry care tips** and seasonal promotions

**🎯 Local Marketing Ideas:**
- **Add your website** to business cards and flyers
- **Include the web address** in newspaper ads
- **Share on local Facebook groups** (follow group rules)
- **Partner with wedding vendors** and share your website

---

## 🔄 Keep It Updated

### Regular Updates (Easy!)

**Monthly Tasks:**
- **Add new jewelry photos** to keep the gallery fresh
- **Update prices** if anything changes
- **Check form submissions** to make sure you're getting messages
- **Post new content** on social media with your website link

**Seasonal Updates:**
- **Holiday promotions** - Update your homepage message
- **New collections** - Add seasonal jewelry pieces
- **Special offers** - Update repair service pricing
- **Business hours** - Update for holidays or special events

### How to Make Changes

**To Update Store Information:**
1. **Open `store-config.js`** in any text editor
2. **Make your changes** (prices, hours, contact info)
3. **Save the file**
4. **Re-upload to your hosting** (or Netlify auto-updates)

**To Add New Jewelry:**
1. **Take photos** of new pieces
2. **Add them** to your `images/products/` folder
3. **Update the product list** in `store-config.js`
4. **Upload the changes**

**To Change Colors or Appearance:**
1. **Open `store-config.js`**
2. **Find the `branding` section**
3. **Change the color codes** (like #7c3aed for purple)
4. **Save and upload**

### Backup Your Website

**Important: Always keep a backup!**
- **Download all your files** regularly
- **Keep a copy** of your customized `store-config.js`
- **Save your photos** in a separate folder on your computer
- **Document any changes** you make

---

## 🔒 Security & Privacy

Your website includes comprehensive security features:

**✅ Form Protection:**
- Input validation and sanitization
- Rate limiting (max 3 submissions per 5 minutes)
- Spam protection with honeypot fields
- Secure data transmission (HTTPS only)

**✅ Customer Privacy:**
- No tracking cookies or analytics by default
- Minimal data collection (only what's needed)
- Secure form submission to trusted services
- No payment information collected

**✅ Website Security:**
- Protection against XSS attacks
- Clickjacking prevention
- Content Security Policy headers
- Secure image loading

**📖 For Technical Details:** See `SECURITY.md` for complete security documentation.

---

## 🆘 Need Help?

### Common Questions

**❓ "My store name doesn't show up"**
- Check that you saved `store-config.js` after editing
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Make sure you uploaded the updated file to your hosting

**❓ "I'm not getting form submissions"**
- Set up Formspree or use Netlify hosting
- Check your spam folder for form notifications
- Test the form yourself to make sure it works

**❓ "Forms show 'too many submissions' error"**
- This is normal security protection (max 3 per 5 minutes)
- Wait a few minutes and try again
- This prevents spam and protects your email

**❓ "My photos don't appear"**
- Check that photo files are in the right folders
- Make sure file names match exactly in `store-config.js`
- Verify photos are JPG or PNG format

**❓ "Website looks broken on mobile"**
- The website is mobile-friendly by default
- Test on a real phone or use browser developer tools
- Make sure you didn't accidentally change important files

**❓ "Security warnings in browser"**
- Check that all images are from HTTPS sources
- Verify your hosting supports HTTPS
- Make sure you're not mixing HTTP and HTTPS content

### Getting Support

1. **Read this guide first** - most answers are here
2. **Check SECURITY.md** - for security-related questions
3. **Test locally** - always open `index.html` in your browser first
4. **Check your hosting support** - most providers have 24/7 chat help
5. **Ask a tech-savvy friend** - sometimes a second pair of eyes helps

---

## 🎉 Success Checklist

Before you launch, make sure you have:

**✅ Store Information**
- [ ] Updated store name, phone, and email
- [ ] Added your address and business hours
- [ ] Set your social media links

**✅ Content**
- [ ] Added your jewelry products with prices
- [ ] Uploaded your photos (or using stock photos)
- [ ] Customized repair services list

**✅ Forms Working**
- [ ] Set up Formspree or using Netlify
- [ ] Tested contact form and got an email
- [ ] Tested repair request form

**✅ Online Presence**
- [ ] Website is live and accessible
- [ ] Looks good on mobile phones
- [ ] All links work properly
- [ ] Contact information is correct

**✅ Marketing Ready**
- [ ] Added website to business cards
- [ ] Updated Google My Business listing
- [ ] Shared on social media
- [ ] Ready to tell customers about it!

---

## 💎 Your Jewelry Store is Ready!

**Congratulations!** You now have a professional jewelry store website that will help you:

- **Attract new customers** with beautiful jewelry displays
- **Streamline repair requests** with online booking
- **Build trust** with a professional online presence
- **Compete with larger stores** on a level playing field
- **Grow your business** beyond walk-in customers

**🚀 Ready to launch? Your success story starts now!**

*Remember: Your website is a powerful tool to grow your jewelry business. Keep it updated, promote it actively, and watch your customer base expand!*

