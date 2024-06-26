import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const canvas = document.querySelector(".canvas");

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "purple",
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const sizes = {
  width: 600,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
