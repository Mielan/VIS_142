import React from 'react'
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
//import { OrbitControls } from "drei"
import * as THREE from 'three'

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({antialias:true});
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry( 2, 2, 2 );
// const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// function animate(){
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// camera.position.z = 5;
// animate();

function Box(){
    return(
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

            
export default function Threejs1(){
    return(
        <Canvas>
            <Box></Box>
        </Canvas>
    )
}

