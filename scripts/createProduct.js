import * as THREE from 'three';

export function createProduct(scene) {
  // Shared material with standard properties for realistic lighting
  const material = new THREE.MeshStandardMaterial({
    color: '#555',
    metalness: 0.3,
    roughness: 0.6,
  });

  // Monitor mesh (box)
  const monitor = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 0.1), material);
  monitor.position.set(0, 1.5, 0);
  monitor.castShadow = true;

  // Base mesh (cylinder)
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.4, 0.3, 32), material);
  base.position.set(0, 0.15, 0);
  base.castShadow = true;

  // Keyboard mesh (flat box)
  const keyboard = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 0.6), material);
  keyboard.position.set(0, 0.05, 1.2);
  keyboard.castShadow = true;

  // Mouse mesh (sphere)
  const mouse = new THREE.Mesh(new THREE.SphereGeometry(0.15, 32, 32), material);
  mouse.position.set(1.2, 0.15, 1.2);
  mouse.castShadow = true;

  // Ground plane to receive shadows
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.ShadowMaterial({ opacity: 0.2 })
  );
  ground.rotation.x = -Math.PI / 2; // Rotate flat on the ground
  ground.position.y = 0;
  ground.receiveShadow = true;

  // Add all meshes to the scene
  scene.add(monitor, base, keyboard, mouse, ground);

  return {
    monitor,
    base,
    keyboard,
    mouse,
  };
}
