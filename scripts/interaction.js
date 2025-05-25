import * as THREE from 'three';

export function enableInteractions(parts, camera, scene, renderer) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const panel = document.getElementById('infoPanel');

  let lastClicked = null;          // last clicked object
  let lastOriginalColor = null;    // its original color
  let lastOriginalScale = null;    // its original scale
  let resetTimeoutId = null;       // timeout id for reset

  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const objects = Object.values(parts);
    const intersects = raycaster.intersectObjects(objects);

    if (intersects.length > 0) {
      const part = intersects[0].object;

      // Immediately reset previously highlighted part
      if (lastClicked) {
        lastClicked.material.color.copy(lastOriginalColor);
        lastClicked.scale.copy(lastOriginalScale);
        if (resetTimeoutId) {
          clearTimeout(resetTimeoutId);
          resetTimeoutId = null;
        }
      }

      // Save current part's original properties
      lastOriginalColor = part.material.color.clone();
      lastOriginalScale = part.scale.clone();

      // Apply highlight: change color and scale
      part.material.color.set('#ffa500');
      part.scale.set(lastOriginalScale.x * 1.1, lastOriginalScale.y * 1.1, lastOriginalScale.z * 1.1);

      lastClicked = part;

      // Set timeout to reset highlight after 200ms
      resetTimeoutId = setTimeout(() => {
        if (lastClicked) {
          lastClicked.material.color.copy(lastOriginalColor);
          lastClicked.scale.copy(lastOriginalScale);
          lastClicked = null;
          resetTimeoutId = null;
        }
      }, 200);

      // Show info panel
      panel.innerText = getPartName(part, parts);
      panel.style.display = 'block';
      setTimeout(() => (panel.style.display = 'none'), 1500);
    }
  });
}

function getPartName(obj, parts) {
  for (const [name, part] of Object.entries(parts)) {
    if (part === obj) return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return 'Unknown Part';
}
