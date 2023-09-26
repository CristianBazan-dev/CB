<<<<<<< HEAD
import React, { Component } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

function ExampleModel(props) {


// Scene

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c1321);

// Create the sphere based on layouts in the docs. The
const geometry = new THREE.SphereGeometry(3, 64, 64);

// Creating gradient before rendering
let g = new THREE.TorusKnotGeometry(5, 1, 128, 16);
g.rotateX(-Math.PI * 2);
g.computeBoundingBox();

let uniforms = {
  bbMin: { value: g.boundingBox.min },
  bbMax: { value: g.boundingBox.max },
  color1: { value: new THREE.Color("0x796479") },
  color2: { value: new THREE.Color("0xf7caca") },
};

// Applying material and colour
const material = new THREE.MeshStandardMaterial({
  onBeforeCompile: (shader) => {
    shader.uniforms.bbMin = uniforms.bbMin;
    shader.uniforms.bbMax = uniforms.bbMax;
    shader.uniforms.color1 = uniforms.color1;
    shader.uniforms.color2 = uniforms.color2;
  },
  color: "#796479",
  roughness: 1.2,
});

material.shadowSide = new THREE.ShadowMaterial({});

// Combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);

// Adding to the scene

scene.add(mesh);

// Sizes and position in vw
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light.
const light = new THREE.PointLight(0xf7caca, 3, 0);
light.position.set(20, 10, 10);
light.power = 30;
light.intensity = 2;
scene.add(light);

// Camera. The parameters are:
// - field of view
// - aspect ratio (w x h )
// - clipping point. Where it dissapears (closer / fartest)

// Sphere and camera are in the same PositionalAudio, that's why we add the position z in camera

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

// Rendering on the screen with canvas
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });

// Define how big the canvas is and where render
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);

renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
// Resposivenes, resizing and updating the camera
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Re-rendering so the object adapts and doesn't sch
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

// Timeline magic
const tl = gsap.timeline({ defaults: { duration: .7 } });
tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".subtitle", { opacity: 0 }, { opacity: 1 });
tl.fromTo("nav", { y: "-100%" }, { y: "0%" });

// Colours at mouse
let mouseDown = false;
let rgb = [12, 23, 55];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));
window.addEventListener("click", (e) => {
  material.wireframe = true;
});
window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.width) * 255),
      150,
    ];
    // Animation
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    });
  }
});


  return (
    <canvas className="webgl">
      
    </canvas>
  );
}

export default ExampleModel;


// class ExampleModel extends Component {
//   constructor(props) {
//     super(props);
//     this.animate = this.animate.bind(this);
//   }

//   init() {
//     // Creating scene
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);

//     camera = new THREE.PerspectiveCamera(
//       100,
//       window.innerWidth / window.innerHeight
//     );

//     // renderer
//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // add geometry
//     const geometry = new THREE.SphereGeometry(3, 64, 64);
//     const material = new THREE.MeshStandardMaterial({
//       color: 0x00ff83,
//       roughness: 0.5,
//     });
    

//     const light = new THREE.PointLight(0xffffff, 1, 100);
//     light.position.set(0, 10, 10);
//     light.intensity = 1.25;
//     scene.add(light);

//     cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);

//     camera.position.z = 5;

//     return renderer.domElement;
//   }

//   animate() {
//     requestAnimationFrame(this.animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
//   }

//   componentDidMount() {
//     document.getElementById("render").appendChild(this.init());
//     this.animate();
//   }

//   render() {
//     return <div id="render"></div>;
//   }
// }


=======
import React, { Component } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";

function ExampleModel(props) {


// Scene

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0c1321);

// Create the sphere based on layouts in the docs. The
const geometry = new THREE.SphereGeometry(3, 64, 64);

// Creating gradient before rendering
let g = new THREE.TorusKnotGeometry(5, 1, 128, 16);
g.rotateX(-Math.PI * 2);
g.computeBoundingBox();

let uniforms = {
  bbMin: { value: g.boundingBox.min },
  bbMax: { value: g.boundingBox.max },
  color1: { value: new THREE.Color("0x796479") },
  color2: { value: new THREE.Color("0xf7caca") },
};

// Applying material and colour
const material = new THREE.MeshStandardMaterial({
  onBeforeCompile: (shader) => {
    shader.uniforms.bbMin = uniforms.bbMin;
    shader.uniforms.bbMax = uniforms.bbMax;
    shader.uniforms.color1 = uniforms.color1;
    shader.uniforms.color2 = uniforms.color2;
  },
  color: "#796479",
  roughness: 1.2,
});

material.shadowSide = new THREE.ShadowMaterial({});

// Combination of geometry and material
const mesh = new THREE.Mesh(geometry, material);

// Adding to the scene

scene.add(mesh);

// Sizes and position in vw
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light.
const light = new THREE.PointLight(0xf7caca, 3, 0);
light.position.set(20, 10, 10);
light.power = 30;
light.intensity = 2;
scene.add(light);

// Camera. The parameters are:
// - field of view
// - aspect ratio (w x h )
// - clipping point. Where it dissapears (closer / fartest)

// Sphere and camera are in the same PositionalAudio, that's why we add the position z in camera

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

// Rendering on the screen with canvas
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });

// Define how big the canvas is and where render
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);

renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
// Resposivenes, resizing and updating the camera
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// Re-rendering so the object adapts and doesn't sch
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

// Timeline magic
const tl = gsap.timeline({ defaults: { duration: .7 } });
tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });
tl.fromTo(".subtitle", { opacity: 0 }, { opacity: 1 });
tl.fromTo("nav", { y: "-100%" }, { y: "0%" });

// Colours at mouse
let mouseDown = false;
let rgb = [12, 23, 55];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));
window.addEventListener("click", (e) => {
  material.wireframe = true;
});
window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.width) * 255),
      150,
    ];
    // Animation
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    });
  }
});


  return (
    <canvas className="webgl">
      
    </canvas>
  );
}

export default ExampleModel;


// class ExampleModel extends Component {
//   constructor(props) {
//     super(props);
//     this.animate = this.animate.bind(this);
//   }

//   init() {
//     // Creating scene
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);

//     camera = new THREE.PerspectiveCamera(
//       100,
//       window.innerWidth / window.innerHeight
//     );

//     // renderer
//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // add geometry
//     const geometry = new THREE.SphereGeometry(3, 64, 64);
//     const material = new THREE.MeshStandardMaterial({
//       color: 0x00ff83,
//       roughness: 0.5,
//     });
    

//     const light = new THREE.PointLight(0xffffff, 1, 100);
//     light.position.set(0, 10, 10);
//     light.intensity = 1.25;
//     scene.add(light);

//     cube = new THREE.Mesh(geometry, material);

//     scene.add(cube);

//     camera.position.z = 5;

//     return renderer.domElement;
//   }

//   animate() {
//     requestAnimationFrame(this.animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
//   }

//   componentDidMount() {
//     document.getElementById("render").appendChild(this.init());
//     this.animate();
//   }

//   render() {
//     return <div id="render"></div>;
//   }
// }


>>>>>>> 33e23e6fec986364e78a1762dda785d5ad147cd8
