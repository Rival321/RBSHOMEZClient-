# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Below is the structure of the Project:

📂 src/ (Main Folder)
📂 pages/ → Full pages/views
📂 assets/ → Static files (images, icons, etc.)
📂 utils/ → Helper functions and API calls
📂 context/ → Global state management
📂 components/ (Reusable UI)
These will be general components used across multiple pages:

📁 UI Components
Navbar.jsx → The top navigation bar
Footer.jsx → The bottom footer section
Button.jsx → Reusable button styles
Card.jsx → Generic card component for listings

📁 Property & Listings
PropertyCard.jsx → Displays individual property details
ImageViewer.jsx → The image slider for properties
GalleryGrid.jsx → Shows all images when clicked in ImageViewer
SearchBar.jsx → Property search input

📁 User & Authentication
LoginForm.jsx → Login form component
RegisterForm.jsx → Signup form component
ProfileCard.jsx → User profile preview

📁 Community & Business
CommunityPost.jsx → Individual post component
EventCard.jsx → Displays events in the community section
BusinessListing.jsx → Individual business profile

📂 pages/ (Full Screens)
Home.jsx → Main landing page
PropertyDetails.jsx → Page for detailed property view
Community.jsx → Community discussions & events
BusinessDirectory.jsx → Business listing section
Profile.jsx → User profile page
Login.jsx → Login screen

📂 assets/ (Static Files)
📁 images/ → All static images
📁 icons/ → SVGs and icons
📁 styles/ → Global CSS or Tailwind styles