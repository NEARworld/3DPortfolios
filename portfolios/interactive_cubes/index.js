import * as THREE from 'three';
import {OrbitControls} from 'https://unpkg.com/three@0.145.0/examples/jsm/controls/OrbitControls.js';
export function init() {
  // renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  // scene, camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
  camera.position.z = 8;
  camera.position.x = 4;
  camera.position.y = 4;
  camera.lookAt(0, 0, 0);

  // controls
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  // orbitControls.autoRotate = true;

  // light
  renderer.shadowMap.enabled = true;
  const light = new THREE.PointLight(0xffffff, 1, 20);
  light.position.set(4, 6, 4);
  light.castShadow = true;
  scene.add(light);
  
  // const helper = new THREE.CameraHelper( light.shadow.camera );
  // scene.add( helper );

  return {THREE, renderer, scene, camera, orbitControls};
}
export function addCube(x, y, z) {
  let geometry, material;
  // cube
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshPhongMaterial({color: 0xfafafa});
  const cubeMesh = new THREE.Mesh(geometry, material);
  cubeMesh.position.set(x, y, z);
  return cubeMesh;
}