import './style.css'
import * as THREE from 'three'

// Canvas 
const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene();


/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'red'}),
)
cube1.position.x = -2
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'green'}),
)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'blue'}),
)
cube3.position.x = 2
group.add(cube3)



// Rotation


// Scale 
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5


// Axes Helpers
const axesHelper = new THREE.AxisHelper();
scene.add(axesHelper);

// Camera - FOV=fields of view
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 0.1
// camera.position.y = 1
scene.add(camera);


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
