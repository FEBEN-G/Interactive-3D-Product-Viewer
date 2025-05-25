import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { enableInteractions } from './interaction.js';
import { animateCamera } from './cameraAnimation.js';

// Initialize the scene, camera, renderer, and controls
const { scene, camera, renderer, controls } = initScene();

// Create the product composed of multiple mesh parts
const productParts = createProduct(scene);

// Add lighting with shadows enabled
addLighting(scene, renderer);

// Enable mouse interaction (clicks, hover effects) on product parts
enableInteractions(productParts, camera, scene, renderer);

// Animation loop: animate camera and render the scene each frame
function animate(time) {
  animateCamera(camera, time);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
