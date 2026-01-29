# Images Folder Structure for Vishwakarma Foundry Works

## Folder Organization:

### 📁 /products/
Place product images here:
- `half-dala-machine.jpg` - Half Dala Machine product photo
- `bhoosi-tank-model.jpg` - Bhoosi Tank Model product photo  
- `balwan-tank-model.jpg` - Balwan Tank Model product photo
- `balwan-half-dala.jpg` - Balwan Half Dala product photo
- `bran-expert.jpg` - Bran Expert product photo

### 📁 /factory/
Place factory and manufacturing images here:
- `factory-exterior.jpg` - Factory building exterior
- `manufacturing-process.jpg` - Manufacturing process photos
- `production-line.jpg` - Production line photos
- `quality-control.jpg` - Quality control photos

### 📁 /logo/
Place company logos and branding here:
- `company-logo.png` - Main company logo
- `favicon.ico` - Website favicon
- `brand-assets/` - Additional brand assets

## How to Use Images in Code:

### Product Images:
```jsx
<img src="/images/products/half-dala-machine.jpg" alt="Half Dala Machine" />
```

### Factory Images:
```jsx
<img src="/images/factory/manufacturing-process.jpg" alt="Manufacturing Process" />
```

### Logo Images:
```jsx
<img src="/images/logo/company-logo.png" alt="Vishwakarma Foundry Works Logo" />
```

## Image Specifications:
- **Recommended Size**: 1200x800px for product images
- **Format**: JPG for photos, PNG for logos
- **File Size**: Keep under 500KB for optimal loading
- **Alt Text**: Always include descriptive alt text for accessibility

## Current Image References in Code:
The website currently uses placeholder images from Pexels. Replace these URLs with your local image paths:

**Hero Section:**
- Replace: `https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg`
- With: `/images/factory/manufacturing-process.jpg`

**Products Section:**
- Replace product image URLs with: `/images/products/[product-name].jpg`

**About Section:**
- Replace with factory images from: `/images/factory/`
