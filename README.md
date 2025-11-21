# 🛹 SSpots Project

![JavaScript](https://img.shields.io/badge/JavaScript-38.8%25-yellow)
![CSS](https://img.shields.io/badge/CSS-36.7%25-blue)
![HTML](https://img.shields.io/badge/HTML-24.5%25-orange)

**SSpots** is an ambitious web project focused on creating immersive virtual tours of skate parks from around the world. The platform allows users to explore different skate spots through interactive 360° panoramic views, providing a unique digital experience for the skateboarding community.

## 🌟 About the Project

This project is being developed as part of an internship at **DG2C Studio**, in collaboration with **Diego Campos Caamaño**. The goal is to build a comprehensive platform that showcases skate parks worldwide, enabling skaters to virtually visit and explore these locations before physically visiting them.

## ✨ Features

- **Interactive Virtual Tours**: Navigate through skate parks using 360° panoramic images
- **Hotspot Navigation**: Click on interactive hotspots to explore different areas within each park
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **Multi-Park Support**: Scalable architecture to feature multiple skate parks

## 🏗️ Project Structure

```
SSpots-Project/
├── index.html                 # Main landing page
├── public/                    # Public assets
│   └── favicon_io/           # Favicon files
├── src/
│   ├── assets/               # Images, logos, and media files
│   │   └── images/
│   │       ├── logo/
│   │       └── skate_parks/  # 360° images and park photos
│   ├── pages/                # Additional HTML pages
│   │   └── lalechera.html   # La Lechera skate park tour
│   ├── scripts/              # JavaScript files
│   │   └── script.js        # Main application logic
│   └── styles/               # CSS stylesheets
│       ├── common.css
│       ├── header.css
│       ├── img_static_hotspot.css
│       └── visor_360.css
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional, but recommended for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/CristianPlazaDEV/SSpots-Project.git
```

2. Navigate to the project directory:
```bash
cd SSpots-Project
```

3. Open `index.html` in your web browser, or serve it using a local development server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

4. Visit `http://localhost:8000` in your browser

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling and responsive design
- **JavaScript**: Interactive functionality and DOM manipulation
- **Pannellum**: 360° panorama viewer library for immersive experiences

### Key Library: Pannellum

This project uses [Pannellum](https://pannellum.org/), a lightweight and flexible web-based panorama viewer that allows for smooth 360° image rendering.

```html
<!-- Pannellum Integration -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
```

## 📍 Featured Skate Parks

### La Lechera - Torrelavega

The first featured location showcases **La Lechera** skate park in Torrelavega, featuring:
- Main skating area
- Quarter pipe section
- Fun box area
- Secondary skating zone
- Ramp section
- Bowl area

Each section is accessible through interactive hotspots on the virtual tour.

## 🎮 How to Use

1. **Navigate the Homepage**: Start at the main landing page
2. **Select a Virtual Tour**: Click on "Tour Virtual" to explore available skate parks
3. **Interact with Hotspots**: Click numbered hotspots to jump to different areas
4. **360° View**: Use mouse/touch to pan around the panoramic view
5. **Return to Map**: Click the return button to go back to the overview map

## 🔮 Future Development

- [ ] Add more skate parks from different countries
- [ ] Implement user comments and ratings
- [ ] Add video tours and trick clips
- [ ] Create a map-based navigation system
- [ ] Multi-language support
- [ ] User authentication for favorites and personalized experiences
- [ ] Mobile app version

## 👥 Contributors

- **Cristian Plaza** - Developer - [@CristianPlazaDEV](https://github.com/CristianPlazaDEV)
- **Diego Campos Caamaño** - Collaborator - DG2C Studio

## 🏢 Organization

Developed during internship at **DG2C Studio**

## 📄 License

This project is currently under development. License information will be added upon release.

## 📧 Contact

For questions or collaboration opportunities, please reach out through GitHub issues or contact DG2C Studio.

---

**Note**: This project is actively under development. Features and documentation are subject to change as the platform evolves.
