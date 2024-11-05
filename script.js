import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { gsap } from 'gsap'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()
const clock = new THREE.Clock()
const raycaster = new THREE.Raycaster()

scene.background = new THREE.Color(0.85, 0.85, 0.85)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// Window Size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Base camera Settings
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 5
camera.rotation.x = 0.35

scene.add(camera)

// Audio Listener Setup
const listener = new THREE.AudioListener()
camera.add(listener)

// Orbit Controls Setup
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.enabled = false

// Load texture
const textureLoader = new THREE.TextureLoader()

const sceneObjects = [
    {
        name: 'background',
        texture: './static/bg1.png',
        geometry: [12, 8], 
        position: [0, 0, -0.2],
        opacity: 1,
        zIndex: -1,
        visible: true
    },
    {
        name: 'bear',
        texture: './static/bear1.png',
        geometry: [4, 4],
        position: [2.5, -1, 0],
        opacity: 1,
        zIndex: 0,
        visible: true
    },
    {
        name: 'bear2',
        texture: './static/bear2.png',
        geometry: [4, 4],
        position: [2.5, -1, 0],
        opacity: 0,
        zIndex: 0,
        visible: false
    },
    {
        name: 'dialog',
        texture: './static/dialog1.png',
        geometry: [4, 4],
        position: [0.5, 1.5, 0.1],
        opacity: 1,
        zIndex: 1,
        visible: false
    },
    {
        name: 'nextButton',
        texture: './static/next.png',
        geometry: [2, 1],
        position: [4, -2, 0.1],
        opacity: 0,
        zIndex: 1,
        visible: false
    }
]

// Create meshes from scene objects
const meshes = {}

sceneObjects.forEach(obj => {
    const texture = textureLoader.load(obj.texture)
    texture.colorSpace = THREE.SRGBColorSpace
    
    const geometry = new THREE.PlaneGeometry(...obj.geometry)
    const material = new THREE.MeshBasicMaterial({ map: texture })
    
    material.transparent = true
    material.opacity = obj.opacity
    
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(...obj.position)
    
    if(obj.scale) {
        mesh.scale.set(...obj.scale)
    }
    
    meshes[obj.name] = mesh
    
    // Only add to scene if visible is true
    if(obj.visible) {
        scene.add(mesh)
    }
})

// Add click event listener to the canvas
canvas.addEventListener('click', (event) => {
    // Get mouse position
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / sizes.width) * 2 - 1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera)

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObject(meshes.bear)

    if (intersects.length > 0) {
        // Create sequential fade animations
        const animateSequence = (meshes, animations) => {
            const timeline = gsap.timeline()
            
            meshes.forEach((mesh, index) => {
                switch(animations[index]) {
                    case 'fadeOut':
                        timeline.to(mesh.material, {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                scene.remove(mesh)
                                if (index + 1 < meshes.length) {
                                    scene.add(meshes[index + 1])
                                    timeline.to(meshes[index + 1].material, {
                                        opacity: 1,
                                        duration: 0.5
                                    })
                                }
                            }
                        })
                        break
                        
                    case 'appear':
                        timeline.to(mesh.material, {
                            opacity: 1,
                            duration: 0.5,
                            onStart: () => {
                                scene.add(mesh)
                            }
                        })
                        break
                        
                    case 'pop out':
                        timeline.from(mesh.scale, {
                            x: 0,
                            y: 0,
                            duration: 0.5,
                            ease: "back.out(1.7)",
                            onStart: () => {
                                scene.add(mesh)
                                mesh.material.opacity = 1
                            }
                        })
                        break
                }
            })
            
            return timeline
        }

        animateSequence([meshes.bear, meshes.bear2, meshes.dialog, meshes.nextButton], 
                       ['fadeOut', 'appear', 'pop out', 'pop out'])
    }
})

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