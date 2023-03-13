import * as THREE from 'three'
// 轨道控制器
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(0,0,10)
scene.add(camera)

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x34f3ec} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//渲染
// renderer.render(scene,camera)

const controls = new OrbitControls(camera,renderer.domElement)

function render(){
    renderer.render(scene,camera)
    requestAnimationFrame(render)
}

render()