import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initScene() {
  // Create a new Three.js scene
  const scene = new THREE.Scene();

  // Set up a Perspective Camera
  // FOV: 75 degrees, Aspect ratio based on window size, Near and far clipping planes
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(5, 5, 5); // Position camera at an angle for better view

  // Initialize WebGL renderer, attach to canvas with id 'webgl'
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('webgl'),
    antialias: true, // Enable smooth edges
  });
  renderer.setSize(window.innerWidth, window.innerHeight); // Set size to fill window
  renderer.setPixelRatio(window.devicePixelRatio); // Support high DPI screens

  // Add OrbitControls for intuitive mouse interaction (zoom, pan)
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooth camera movements

  // Handle browser window resize events to keep aspect ratio and renderer size correct
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Return all core elements for further use in the app
  return { scene, camera, renderer, controls };
}
