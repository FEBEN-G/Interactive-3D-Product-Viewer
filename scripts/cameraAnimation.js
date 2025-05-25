export function animateCamera(camera, time) {
  const radius = 6;           // Distance from the center of rotation
  const speed = 0.001;        // Rotation speed (radians per millisecond)
  const angle = time * speed; // Calculate current angle based on elapsed time

  // Update camera position to orbit around the Y-axis at height 1
  camera.position.x = radius * Math.cos(angle);
  camera.position.z = radius * Math.sin(angle);

  // Always look at the center of the product (at y=1)
  camera.lookAt(0, 1, 0);
}
