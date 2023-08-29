import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import "./model.css";

function Model(props) {
  useEffect(() => {
    let scene, camera, renderer, material;
    const initRendering = () => {
      // Scene
      const scene = new THREE.Scene();

      scene.background = new THREE.Color(0x0c1321);

      // Create the sphere based on layouts in the docs. The
      const geometry = new THREE.SphereGeometry(3, 64, 64);

      // Applying material and colour
      const material = new THREE.MeshStandardMaterial({
        color: "0x11ff23",
        roughness: 0.5,
      });

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
      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 10, 10);
      light.intensity = 1.25;
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
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

      tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });

      // Colours at mouse
      let mouseDown = false;
      let rgb = [12, 23, 55];
      window.addEventListener("mousedown", () => (mouseDown = true));
      window.addEventListener("mouseup", () => (mouseDown = false));

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
    };

    initRendering();
  }, []);

  const movingModel = (e) => {};

  const changingColor = (e) => {};

  return (
    <div>
      <canvas className="webgl"></canvas>
    </div>
  );
}

export default Model;
