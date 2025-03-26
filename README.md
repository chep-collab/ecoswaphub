# React + TypeScript + Vite
# EcoSwapHub

A sustainability-focused web app built with React.js to facilitate item swapping, reducing CO2 emissions through community-driven exchanges.

## Live Demo
- **Vercel**: [https://ecoswaphub.vercel.app](https://ecoswaphub.vercel.app)
- **GitHub Pages**: [https://chep-collab.github.io/ecoswaphub/](https://chep-collab.github.io/ecoswaphub/)

## Features
- Item listing and search functionality.
- Swap request system to connect users.
- Community profile page showing users who have swapped items and their CO2 savings.
- Interactive map using Leaflet and Mapbox to display item locations.
- Responsive design with Material-UI.

## Tech Stack
- **Frontend**: React.js, TypeScript, Material-UI
- **Build Tool**: Vite
- **Deployment**: Vercel, GitHub Pages
- **Map**: Leaflet, Mapbox

## Getting Started
1. Clone the repository: `git clone https://github.com/chep-collab/ecoswaphub.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open `http://localhost:5179` in your browser.

## Challenges and Solutions
- **Challenge**: Issues with Material-UI icon imports.
  - **Solution**: Used a fallback icon and simplified Vite configuration.
- **Challenge**: Backend connectivity issues.
  - **Solution**: Converted the app to a frontend-only app using local state.

## Future Enhancements
- Add localStorage to persist data across page refreshes.
- Enhance the swap request flow with real-time updates.
- Integrate user authentication (simulated in the frontend).
```
