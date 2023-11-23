'use client'
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';
import { CCDIKSolver } from 'three/addons/animation/CCDIKSolver.js';
import { Button, HStack } from "@chakra-ui/react";


export default function Home() {
  const canvasRef = useRef();
  const [isReady, setReady] = useState(false);
  const [isPaused, setPaused] = useState(false);
  let mixer;
  let audioContext = new AudioContext();
  let audioSource; // Initialize audio source here

  const startAnimationAndSound = () => {
    // Initialize your scene, camera, animation, and sound here
    // Then set isReady to true
    setReady(true);
  };

  const togglePause = () => {
    if (isPaused) {
      mixer.timeScale = 1; // Assuming you have initialized mixer
      audioContext.resume(); // Resume the audio
    } else {
      mixer.timeScale = 0;
      audioContext.suspend(); // Pause the audio
    }
    setPaused(!isPaused);
  };

  useEffect(() => {
    if (!isReady) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create floor geometry and material
    const floorGeometry = new THREE.PlaneGeometry(100, 100, 10, 10); // 100x100 is the size
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });

    // Create floor mesh
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);

    // Rotate and position the floor
    floor.rotation.x = -Math.PI / 2; // rotate it to lie on the 'floor'
    floor.position.y = -10; // move it down to intersect the model at the feet

    // Add floor to scene
    scene.add(floor);

    // Load audio file
    let audioBuffer;
    fetch('/mmd/sduper.wav')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(buffer => {
        audioBuffer = buffer;
      })
      .catch(e => console.error('Audio loading failed', e));

    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const loader = new MMDLoader();
    
    let mesh, ikSolver;

    audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;

    loader.load(
      //'https://rawcdn.githack.com/mrdoob/three.js/r87/examples/models/mmd/miku/miku_v2.pmd',
      '/mmd/tdaBase2.0/base.pmx',
      (m) => {
        mesh = m;
        scene.add(mesh);
        ikSolver = new CCDIKSolver(mesh);
        mixer = new THREE.AnimationMixer(mesh);
        // Load the VMD animation
        loader.loadAnimation(
          'mmd/superDuperP1.vmd',
          mesh,
          (clip) => {
            mixer.clipAction(clip).play();

            // Play audio when the animation starts
            const audioSource = audioContext.createBufferSource();
            audioSource.buffer = audioBuffer;
            audioSource.connect(audioContext.destination);
            
            // Resume AudioContext to overcome browser restrictions
            audioContext.resume().then(() => {
              audioSource.start(0); // Start the audio immediately
            });
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% animation loaded');
          },
          (error) => {
            console.log('An error happened during animation loading', error);
          }
        );
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% model loaded');
      },
      (error) => {
        console.log('An error happened during model loading', error);
      }
    );

    camera.position.z = 30;
    camera.position.y = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      if (ikSolver) {
        ikSolver.update();
      }

      if (mixer) mixer.update(0.01); // Update the animation

      renderer.render(scene, camera);
    };

    canvasRef.current.appendChild(renderer.domElement);
    animate();

  }, [isReady]);

  return (
    <>
      <HStack spacing={4}>
        <Button onClick={startAnimationAndSound}>
          Start Animation and Sound
        </Button>
        <Button onClick={togglePause}>
          {isPaused ? 'Resume' : 'Pause'}
        </Button>
      </HStack>
      <div ref={canvasRef}></div>
    </>
  );
}
