import * as THREE from 'three';

export function addLighting(scene, renderer) {
  // Enable shadow mapping for realistic shadows
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows for smoother edges

  // Add ambient light to illuminate all objects uniformly (base lighting)
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // Add directional light to create highlights and shadows, simulating sunlight
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 10, 7.5); // Position light above and to the side

  // Enable shadows cast by this light
  dirLight.castShadow = true;

  // Configure shadow map resolution (higher = better quality)
  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;

  // Set near and far planes for shadow camera to optimize shadow rendering range
  dirLight.shadow.camera.near = 0.5;
  dirLight.shadow.camera.far = 50;

  // Add the directional light to the scene
  scene.add(dirLight);
}
