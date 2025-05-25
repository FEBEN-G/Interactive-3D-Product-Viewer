# Name:Feben Getachew  UGR/4295/15   Section-3

# Interactive 3D Product Viewer (Basic Mesh Edition)

A **modern 3D desktop viewer** built with [Three.js](https://threejs.org/) that lets users explore a product composed entirely of basic geometries such as boxes, cylinders, and spheres. Features include realistic lighting, shadows, smooth camera controls, and interactive part highlighting.

---
## Demo

Check out the live demo [here](https://feben-g.github.io/Interactive-3D-Product-Viewer/).
---
## Features

- **Scene Setup**
  - Perspective camera & WebGL renderer integrated into an HTML canvas
  - Responsive resizing support
  - OrbitControls for zoom and pan, with optional auto-rotate

- **3D Product Composition**
  - Product built from multiple `THREE.Mesh` objects:
    - **BoxGeometry:** monitor, keyboard
    - **CylinderGeometry:** base stand
    - **SphereGeometry:** mouse
  - Realistic materials using `MeshStandardMaterial`
  - Product centered at the origin for proper rotation

- **Lighting & Shadows**
  - Ambient and directional lighting for balanced illumination
  - Shadows enabled for casting and receiving

- **User Interaction**
  - Raycasting to detect mouse clicks on individual parts
  - Click feedback with temporary color and scale changes
  - Info panel displaying the selected part’s name
  - Hover and click highlight effects

- **Camera Animation**
  - Smooth automatic camera orbit around the product
  - Auto-rotation pauses on user interaction

- **Animation Loop**
  - Smooth rendering via `requestAnimationFrame`
  - Modular, well-organized codebase for maintainability

---

#  Project Structure

 / (root)
├── index.html
├── styles/
│   └── style.css
└── scripts/
    ├── initScene.js           
    ├── createProduct.js       
    ├── addLighting.js         
    ├── interaction.js         
    └── cameraAnimation.js     

## Technologies

- [Three.js](https://threejs.org/)
- JavaScript (ES6+)
- HTML5 & CSS3

