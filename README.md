# Structural Architecture Website

Professional bilingual (English/French) website for structural engineering and construction services in Niger and West Africa.

## 🌐 Live Website
- **Primary Domain**: [structuralarchitecture.info](https://structuralarchitecture.info)
- **English Version**: [structuralarchitecture.info/en/](https://structuralarchitecture.info/en/)
- **French Version**: [structuralarchitecture.info/fr/](https://structuralarchitecture.info/fr/)

## 📋 Project Overview

This is a modern, responsive, and SEO-optimized static website built for Issoufou Abdou Chefou's structural engineering business. The site offers:

- ✅ **Fully Bilingual**: Complete English and French versions
- ✅ **Mobile-First Responsive Design**: Optimized for all devices
- ✅ **SEO Optimized**: Meta tags, structured data, sitemap
- ✅ **Performance Optimized**: Fast loading, lazy loading, minified assets
- ✅ **Accessible**: WCAG AA compliant design
- ✅ **PWA Ready**: Manifest, service worker support
- ✅ **Contact Forms**: Integrated with Formspree
- ✅ **Dark Mode Support**: Theme switching functionality

## 🎯 Services Offered

1. **Structural Design & Calculations**
2. **Ready-to-Build Plans** (Houses, Commercial, R+1)
3. **Site Supervision & Consulting**
4. **BIM & Revit Modeling**
5. **Training & Workshops**
6. **Notes de Calcul (Calculation Reports)**

## 📁 Project Structure

```
structuralarchitecture.info/
├── README.md                    # Project documentation
├── index.html                   # Root redirect page
├── CNAME                       # Custom domain configuration
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Search engine crawling rules
├── manifest.webmanifest        # PWA manifest
├── 
├── en/                         # English pages
│   ├── index.html              # Home page
│   ├── services.html           # Services page
│   ├── plans.html              # Building plans
│   ├── portfolio.html          # Project portfolio
│   ├── about.html              # About page
│   ├── faq.html                # FAQ page
│   ├── pricing.html            # Pricing & quotes
│   ├── blog.html               # Blog listing
│   ├── contact.html            # Contact page
│   ├── privacy.html            # Privacy policy
│   ├── terms.html              # Terms of service
│   └── 404.html                # Error page
│
├── fr/                         # French pages (same structure)
│   ├── index.html
│   ├── services.html
│   ├── plans.html
│   ├── portfolio.html
│   ├── about.html
│   ├── faq.html
│   ├── pricing.html
│   ├── blog.html
│   ├── contact.html
│   ├── privacy.html
│   ├── terms.html
│   └── 404.html
│
└── assets/                     # Static assets
    ├── css/
    │   └── main.css            # Main stylesheet
    ├── js/
    │   └── main.js             # Main JavaScript
    ├── images/                 # Images and photos
    ├── icons/                  # Icons and favicons
    └── pdf/                    # PDF downloads
```

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `structuralarchitecture.info`
3. Make it public
4. Don't initialize with README (we have our own)

### Step 2: Upload Files

**Option A: Using Git (Recommended)**
```bash
# Clone the repository
git clone https://github.com/yourusername/structuralarchitecture.info.git
cd structuralarchitecture.info

# Copy all website files to this directory
# Then add and commit
git add .
git commit -m "Initial website deployment"
git push origin main
```

**Option B: Using GitHub Web Interface**
1. Upload all files through GitHub's web interface
2. Drag and drop the entire folder structure

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

Your site will be available at: `https://yourusername.github.io/structuralarchitecture.info`

### Step 4: Configure Custom Domain

1. In your repository, the `CNAME` file should contain:
   ```
   structuralarchitecture.info
   ```

2. In **Settings > Pages**, under **Custom domain**:
   - Enter: `structuralarchitecture.info`
   - Click **Save**
   - ✅ Check **Enforce HTTPS**

## 🌐 DNS Configuration

Configure your domain DNS settings with your registrar (Namecheap, Porkbun, etc.):

### For Root Domain (structuralarchitecture.info)

Add these **A Records**:
```
Type: A
Host: @
Value: 185.199.108.153

Type: A  
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

### For WWW Subdomain

Add **CNAME Record**:
```
Type: CNAME
Host: www
Value: yourusername.github.io
```

### Example: Namecheap Configuration

1. Log into Namecheap
2. Go to **Domain List** > **Manage**
3. Go to **Advanced DNS** tab
4. Delete any existing A/CNAME records for @ and www
5. Add the A records and CNAME record as shown above
6. Save changes

**Note**: DNS propagation can take 24-48 hours to complete.

## 📧 Contact Form Setup

The contact forms use Formspree for handling submissions:

### Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### Step 2: Update Form Endpoint
1. In `/assets/js/main.js`, find line ~15:
   ```javascript
   formspreeEndpoint: 'https://formspree.io/f/your-form-id'
   ```
2. Replace `your-form-id` with your actual Formspree form ID

### Step 3: Configure Formspree Settings
- **Redirect**: Set to your thank you page or leave blank
- **Spam Protection**: Enable reCAPTCHA if desired
- **Email Notifications**: Configure where to receive submissions

## 🎨 Customization Guide

### Colors
Edit CSS variables in `/assets/css/main.css`:
```css
:root {
  --primary: #0B5FFF;        /* Main blue */
  --secondary: #F59E0B;      /* Accent amber */
  --dark: #0F172A;           /* Dark text */
  --light: #F8FAFC;          /* Light background */
}
```

### Fonts
Currently using:
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

To change fonts, update the Google Fonts import in the CSS file.

### Images
1. Add images to `/assets/images/`
2. Update image paths in HTML files
3. Include alt text in both languages

### Logo
Replace the text logo in the header with an image:
```html
<a href="./" class="logo">
  <img src="/assets/images/logo.png" alt="Structural Architecture">
</a>
```

## 📝 Content Management

### Adding New Pages
1. Create HTML file in both `/en/` and `/fr/` directories
2. Follow the existing template structure
3. Update navigation menus in all pages
4. Add pages to `sitemap.xml`

### Adding Blog Posts
1. Create new HTML files in `/en/` and `/fr/`
2. Update the blog listing pages
3. Follow SEO best practices with meta tags

### Updating Services or Plans
1. Edit the respective HTML files
2. Update both English and French versions
3. Maintain consistent pricing across languages

## 🔧 Maintenance Tasks

### Regular Updates
- [ ] Update project portfolio monthly
- [ ] Add new blog posts quarterly  
- [ ] Review and update pricing annually
- [ ] Update contact information as needed
- [ ] Refresh testimonials and certifications

### SEO Maintenance
- [ ] Monitor Google Search Console
- [ ] Update meta descriptions for better CTR
- [ ] Add new keywords based on search trends
- [ ] Check for broken links monthly

### Performance Monitoring
- [ ] Test page speed with PageSpeed Insights
- [ ] Optimize images (compress, WebP format)
- [ ] Monitor uptime and availability
- [ ] Update dependencies annually

## 🌍 SEO Keywords

### English Keywords
- structural engineering Niger
- building plans West Africa
- construction supervision
- civil engineer Niamey
- architectural plans Niger
- BIM modeling services
- site supervision Niger
- structural calculations
- building design Niger
- construction consulting
- residential plans Niger
- commercial building plans
- Revit modeling Niger
- engineering services
- construction plans

### French Keywords  
- ingénierie structurelle Niger
- plans de construction Afrique Ouest
- supervision chantier
- ingénieur civil Niamey  
- plans architecturaux Niger
- services modélisation BIM
- supervision chantier Niger
- calculs structurels
- conception bâtiment Niger
- consulting construction
- plans résidentiels Niger
- plans bâtiment commercial
- modélisation Revit Niger
- services ingénierie
- plans construction

## 📊 Analytics Setup (Optional)

### Google Analytics 4
1. Create Google Analytics account
2. Get tracking ID (G-XXXXXXXXXX)
3. Uncomment and update the GA code in HTML files:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `structuralarchitecture.info`
3. Verify ownership via DNS or HTML file
4. Submit your sitemap: `https://structuralarchitecture.info/sitemap.xml`

## 🛡️ Security Best Practices

### Contact Form Security
- ✅ Honeypot fields implemented
- ✅ Basic spam protection
- ✅ Form validation
- 🔄 Consider adding reCAPTCHA for extra protection

### HTTPS
- ✅ GitHub Pages enforces HTTPS automatically
- ✅ CNAME file configured properly
- 🔄 Monitor SSL certificate renewal

## 📞 Support & Contact

### Technical Support
- **Developer**: Issoufou Abdou Chefou
- **Email**: bacseried@gmail.com
- **Phone**: +227 96 38 08 77
- **WhatsApp**: [+227 96 38 08 77](https://wa.me/22796380877)

### Business Contact
- **Primary Email**: bacseried@gmail.com
- **Business Hours**: Monday-Saturday, 8 AM - 6 PM (WAT)
- **Emergency**: Available via WhatsApp 24/7

## 📋 Deployment Checklist

Before going live, ensure:

- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Contact forms are functional
- [ ] All images have proper alt text
- [ ] Mobile responsiveness tested
- [ ] Dark mode toggle works
- [ ] SEO meta tags are complete
- [ ] Sitemap is updated
- [ ] Google Analytics configured
- [ ] DNS settings propagated
- [ ] HTTPS enforced
- [ ] 404 pages work properly
- [ ] Performance optimized (PageSpeed > 90)

## 🚨 Troubleshooting

### Common Issues

**Site not loading after DNS change**
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)

**Contact form not working**
- Verify Formspree endpoint in JavaScript
- Check browser console for errors
- Ensure Formspree account is active

**Images not displaying**
- Check file paths are correct
- Ensure images are in `/assets/images/` folder
- Verify file extensions match HTML references

**Language switching not working**
- Check JavaScript console for errors
- Verify page structure matches expected paths
- Ensure both language versions exist

### Getting Help

1. **GitHub Issues**: Report bugs via GitHub issues
2. **Email Support**: bacseried@gmail.com
3. **WhatsApp**: [+227 96 38 08 77](https://wa.me/22796380877)

---

## 📄 License

© 2024 Structural Architecture. All rights reserved.

This website is proprietary software of Issoufou Abdou Chefou and Structural Architecture. Unauthorized copying, distribution, or modification is prohibited.

---

**Last Updated**: August 2024  
**Version**: 1.0.0  
**Maintained by**: Issoufou Abdou Chefou