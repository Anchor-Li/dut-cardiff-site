
# DUT-Cardiff Joint Research Centre Website

This project is a React-based website for the DUT-Cardiff Virtual Centre for Biomedical Engineering & Computer Science Research.

## 🛠 Project Structure & Content Editing Guide

If you want to edit the content of the website, here is a guide on which files to modify:

### 1. 📝 Main Content Data (Most Important)
**File Path:** `src/data/mockData.ts`

This is the central place where most of the dynamic content is stored. You can edit:
- **Sub-centers**: Names, descriptions, images, and member lists.
- **Activities**: News, events, dates, and summaries.
- **Achievements**: Papers, projects, and patents lists.

### 2. 🏠 Home Page Content
**File Path:** `src/pages/Home.tsx`

Edit this file to change:
- **Hero Section**: The big title and subtitle on the main banner.
- **Overview Section**: The introduction text about the center.
- **Statistics**: The numbers shown in the "Achievements Stats" section (e.g., "30+ Core Researchers").

### 3. 🧭 Navigation Bar
**File Path:** `src/components/Navbar.tsx`

Edit this file to change:
- **Menu Items**: The links in the top navigation bar.
- **Logo Text**: The "DUT-Cardiff" text in the top left.

### 4. 🦶 Footer Content
**File Path:** `src/components/Footer.tsx`

Edit this file to change:
- **Contact Info**: Address, email, and phone number.
- **Links**: External links to university websites.
- **Copyright**: The copyright notice at the bottom.

### 5. 📄 Other Pages
- **Sub-centers List Page**: `src/pages/SubCenters.tsx` (Title and intro text)
- **Sub-center Detail Page**: `src/pages/SubCenterDetail.tsx` (Layout for individual sub-center pages)
- **Activities List Page**: `src/pages/Activities.tsx` (Title and intro text)
- **Activity Detail Page**: `src/pages/ActivityDetail.tsx` (Layout for individual activity pages)
- **Achievements Page**: `src/pages/Achievements.tsx` (Title, intro text, and filter labels)

## 🎨 Styling
- **Global Styles**: `src/index.css` (Base styles, fonts)
- **Theme Config**: `tailwind.config.js` (Colors, fonts, custom theme settings)

## 🚀 How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```
