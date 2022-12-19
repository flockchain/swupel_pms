import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { DivContainer, DivSpinner } from "./ScrollPage";

const ScrollModelAnimation = () => {
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const refContainer = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const parameters = {
      materialColor: "#ffeded",
    };
    const { current: container } = refContainer;

    if (container && !renderer) {
      //Texture
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load("/earth.jpeg");
      const swupelTexture = textureLoader.load("/GreetingsLogo.PNG");

      const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1),
        new THREE.MeshStandardMaterial({
          map: earthTexture,
        })
      );

      const whiteBall = new THREE.Mesh(
        new THREE.SphereGeometry(1),
        new THREE.MeshBasicMaterial({
          color: "white",
          wireframe: true,
        })
      );

      const firstCube = new THREE.Mesh(
        new THREE.BoxGeometry(1),
        new THREE.MeshStandardMaterial({
          map: swupelTexture,
        })
      );

      const secondCube = new THREE.Mesh(
        new THREE.BoxGeometry(1),
        new THREE.MeshStandardMaterial({
          map: swupelTexture,
        })
      );

      const thirdCube = new THREE.Mesh(
        new THREE.BoxGeometry(1),
        new THREE.MeshStandardMaterial({
          map: swupelTexture,
        })
      );

      const chain = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 3, 3),
        new THREE.MeshBasicMaterial({
          color: "white",
          wireframe: false,
        })
      )

      whiteBall.material.color.setHex(0x78ecb4);
      chain.material.color.setHex(0x78ecb4);

      earth.position.x = 1.7;
      whiteBall.position.x = -2;
      firstCube.position.x = 2;
      secondCube.position.x = 2;
      thirdCube.position.x = 2;
      chain.position.x = 2;

      earth.position.y = 0;
      whiteBall.position.y = -3.8;
      firstCube.position.y = -7;
      secondCube.position.y = -8.5;
      thirdCube.position.y = -10;
      chain.position.y = -8.2;

      firstCube.rotation.y = 2;
      secondCube.rotation.y = 2;
      thirdCube.rotation.y = 2;

      scene.add(earth, whiteBall,chain, firstCube, secondCube, thirdCube);
      const sectionMeshes = [earth, whiteBall];
      earth.visible = true;
      whiteBall.visible = true;
      firstCube.visible = true;
      secondCube.visible = true;
      thirdCube.visible = true;
      chain.visible = true;

      const objectDistance = 4;

      //Lights
      const directioanlLight = new THREE.DirectionalLight(0xffffff, 1);
      directioanlLight.position.set(1, 1, 0);
      directioanlLight.castShadow = true;
      scene.add(directioanlLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      //sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      //camera
      //Camera Group
      const cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      //Base Camera
      const camera = new THREE.PerspectiveCamera(
        35,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.z = 6;

      cameraGroup.add(camera);

      //Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      //Resize
      window.addEventListener("resize", () => {
        //update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        //update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });
      //Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;

      //Scroll
      let scrollY = window.scrollY;
      let currentSection = 0;

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        const newSection = Math.round(scrollY / sizes.height);

        // if (newSection != currentSection) {
        //   currentSection = newSection;

        //   gsap.to(sectionMeshes[currentSection].rotation, {
        //     duration: 1.5,
        //     ease: "power2.inOut",
        //     x: "+=6",
        //     y: "+=3",
        //     z: "+=1.5",
        //   });
        // }
      });
      //Cursor
      type Cursor = {
        x?: number;
        y?: number;
      }

      const cursor: Cursor = {};
      cursor.x = 0;
      cursor.y = 0;

      window.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX / sizes.width - 0.5;
        cursor.y = e.clientY / sizes.height - 0.5;
      });
      //Animate
      const clock = new THREE.Clock();
      let previousTime = 0;

      const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        const deltaTime = elapsedTime - previousTime;
        previousTime = elapsedTime;

        //animate meshes
        for (const mesh of sectionMeshes) {
          mesh.rotation.x += deltaTime * 0.1;
          mesh.rotation.y += deltaTime * 0.12;
        }

        camera.position.y = (-scrollY / sizes.height) * objectDistance;

        //render
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <DivContainer ref={refContainer}></DivContainer>
  );
};

export default ScrollModelAnimation;
