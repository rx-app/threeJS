import * as THREE from 'three'
// 轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(0,0,10)
scene.add(camera)

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x34f3ec} );
const cube = new THREE.Mesh( geometry, material );
// cube.position.set(5,0,0)
// cube.scale.set(3,2,1)
// cube.rotation.set(Math.PI/4,0,0,'XYZ')
scene.add( cube );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//渲染
// renderer.render(scene,camera)

const controls = new OrbitControls(camera,renderer.domElement)
// 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const clock = new THREE.Clock()

gsap.to(cube.position,{x:5,duration:5})
gsap.to(cube.rotation,{x:2*Math.PI,duration:5,ease: "power1.inOut"})

function render(){


    renderer.render(scene,camera)
    requestAnimationFrame(render)
}

render()
