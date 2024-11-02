import * as THREE from 'three'
import GUI from 'lil-gui'
import { gsap } from 'gsap'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const gui = new GUI()

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
scene.background = new THREE.Color(0.85, 0.85, 0.85)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 5, 5)
scene.add(directionalLight)

const clock = new THREE.Clock()
const raycaster = new THREE.Raycaster()

/**
 * Sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Camera
 */
// Base camera
const aspectRatio = sizes.width / sizes.height
//const camera = new THREE.OrthographicCamera(- 1 * aspectRatio*5, 1 * aspectRatio*5, 5, -5, 1, 100)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = -4
camera.position.z = 10
camera.rotation.x = 0.35

scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true

// Load texture
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('./static/Bear.png') // Update with your image path

// Create a plane geometry for the image
const imageGeometry = new THREE.PlaneGeometry(10, 10) // Adjust size as needed
const imageMaterial = new THREE.MeshBasicMaterial({ 
    map: texture,
    side: THREE.DoubleSide
})
const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial)
imageMesh.position.set(0, 0, 0) // Adjust position as needed
imageMaterial.transparent = true
imageMaterial.alphaTest = 0.5 // Adjust this value between 0 and 1 to control transparency threshold
scene.add(imageMesh)

// Add click event listener to the canvas
canvas.addEventListener('click', (event) => {
    // Get mouse position
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / sizes.width) * 2 - 1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera)

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObject(imageMesh)

    if (intersects.length > 0) {
        // Create a fade out animation
        const fadeOut = gsap.to(imageMaterial, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                scene.remove(imageMesh)
            }
        })
    }
})

// Ensure the material can handle opacity changes
imageMaterial.transparent = true
imageMaterial.opacity = 1



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const tick = () => {
    const elapsedTime = clock.getElapsedTime()


    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

gui.hide()