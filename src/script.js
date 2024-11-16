import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { gsap } from 'gsap'
import { scenes, sceneAnimations, clickableObjects } from './sceneData.js'

let sceneIndex = 0 // IMPORTANT TESTING VARIABLE

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
camera.rotation.x = 0

scene.add(camera)

// GUI for Camera
const gui = new GUI()
const cameraFolder = gui.addFolder('Camera Position')

cameraFolder.add(camera.position, 'x').min(-10).max(10).step(0.1).name('X Position')
cameraFolder.add(camera.position, 'y').min(-10).max(10).step(0.1).name('Y Position')
cameraFolder.add(camera.position, 'z').min(-10).max(10).step(0.1).name('Z Position')

gui.hide()


// Audio Listener Setup
const listener = new THREE.AudioListener()
const sound = new THREE.Audio(listener)
const audioLoader = new THREE.AudioLoader()
camera.add(listener)

// Add this function to resume audio context
const resumeAudioContext = () => {
    if (listener.context.state === 'suspended') {
        listener.context.resume()
    }
}

// Comment out or remove Orbit Controls Setup
/*
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
*/

// Load texture
const textureLoader = new THREE.TextureLoader()

// Create meshes from scene objects

let currentSceneObjects = scenes[sceneIndex]
let currentSceneAnimations = sceneAnimations[sceneIndex]
let clickableObjectsInScene = clickableObjects[sceneIndex]

let meshes = {}

// Function to move to next scene
const moveToNextScene = () => {
    // Remove current scene objects
    Object.values(meshes).forEach(mesh => {
        scene.remove(mesh)
    })

    // Clear meshes object
    for (let key in meshes) {
        delete meshes[key]
    }

    // Increment scene index
    sceneIndex++
    clickTargetIndex = 0

    // Get new scene data
    currentSceneObjects = scenes[sceneIndex]
    currentSceneAnimations = sceneAnimations[sceneIndex]
    clickableObjectsInScene = clickableObjects[sceneIndex]

    createSceneMeshes(currentSceneObjects)
}

const createSceneMeshes = (currentSceneObjects) => {
    currentSceneObjects.forEach(obj => {
        const texture = textureLoader.load(obj.texture)

        texture.colorSpace = THREE.SRGBColorSpace

        const geometry = new THREE.PlaneGeometry(...obj.geometry)
        const material = new THREE.MeshBasicMaterial({ map: texture })

        material.transparent = true
        material.opacity = obj.opacity

        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(...obj.position)

        meshes[obj.name] = mesh

        // Only add to scene if visible is true
        if (obj.visible) {
            scene.add(mesh)
        }
    })

    // Play scene audio after meshes are loaded
    audioLoader.load(`./sound/scene${sceneIndex}.mp3`, function (buffer) {
        sound.setBuffer(buffer)
        sound.play()
    })
}

const removeCurrentPopOutMesh = () => {
    if (window.currentPopOutMesh) {
        scene.remove(window.currentPopOutMesh)
        window.currentPopOutMesh.visible = false
        window.currentPopOutMesh.material.opacity = 0
        window.currentPopOutMesh = null
    }
}

createSceneMeshes(currentSceneObjects)

let clickTargetIndex = 0
let isLastAnimation = false

const playSound = (soundFile) => {
    if (soundFile) {
        resumeAudioContext()
        // Stop any currently playing sound
        sound.stop()
        audioLoader.load('./sound/' + soundFile, function (buffer) {
            sound.setBuffer(buffer)
            sound.play()
            console.log('Playing sound: ' + soundFile)
        })
    }
}


// Add click event listener to the canvas
canvas.addEventListener('click', (event) => {
    // Resume audio context on first click
    resumeAudioContext()

    // Get mouse position
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / sizes.width) * 2 - 1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera)

    // Get clickable objects for current scene
    const clickableObjectName = clickableObjects[sceneIndex][clickTargetIndex]

    // Calculate if the clickable object was intersected
    let intersectedObject = null

    if (meshes[clickableObjectName]) {
        const intersects = raycaster.intersectObject(meshes[clickableObjectName])
        if (intersects.length > 0) {
            intersectedObject = clickableObjectName
        }
    }

    if (intersectedObject) {
        console.log(intersectedObject)
        // Handle next button click
        if (intersectedObject === 'nextButton') {
            moveToNextScene();
            return;
        }

        const timeline = gsap.timeline()
        const animation = currentSceneAnimations[clickTargetIndex]
        console.log(animation)
        const mesh = meshes[animation.object]

        // Check if this is the last animation
        isLastAnimation = clickTargetIndex === currentSceneAnimations.length - 1

        clickTargetIndex++

        switch (animation.animation) {

            case 'transform':
                removeCurrentPopOutMesh()
                const targetMesh = meshes[animation.transformTarget]
                playSound(animation.sound)

                timeline.to(mesh.material, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        scene.remove(mesh)
                        scene.add(targetMesh)
                        targetMesh.visible = true
                        timeline.to(targetMesh.material, {
                            opacity: 1,
                            duration: 0.5,
                            onComplete: () => {
                                if (isLastAnimation) {
                                    showNextButton(scene, meshes, timeline)
                                }
                            }
                        })
                    }
                })
                break

            case 'fadeIn':
                removeCurrentPopOutMesh()
                playSound(animation.sound)

                timeline.to(mesh.material, {
                    opacity: 1,
                    duration: 0.5,
                    onStart: () => {
                        scene.add(mesh)
                        mesh.visible = true
                    },
                    onComplete: () => {
                        if (isLastAnimation) {
                            showNextButton(scene, meshes, timeline)
                        }
                    }
                })
                break

            case 'pingpong':
                removeCurrentPopOutMesh()
                playSound(animation.sound)

                const originalX = mesh.position.x
                timeline.to(mesh.position, {
                    x: originalX + 4,
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => {
                        mesh.scale.x = 1
                    }
                })
                    .to(mesh.position, {
                        x: originalX,
                        duration: 1,
                        ease: "power1.inOut",
                        onStart: () => {
                            mesh.scale.x = -1
                        },
                        onComplete: () => {
                            if (isLastAnimation) {
                                showNextButton(scene, meshes, timeline)
                            }
                        }
                    })
                break
            case 'movingScale':
                removeCurrentPopOutMesh()
                playSound(animation.sound)

                const scaleSize = animation.scaleSize || 1.5
                const movePosition = animation.movePositionChange || [0, 0, 0]
                timeline.to(mesh.position, {
                    x: mesh.position.x + movePosition[0],
                    y: mesh.position.y + movePosition[1],
                    z: mesh.position.z + movePosition[2],
                    duration: 1,
                    ease: "power1.inOut"
                }, "<")
                    .to(mesh.scale, {
                        x: scaleSize,
                        y: scaleSize,
                        duration: 1,
                        ease: "power1.inOut",
                        onComplete: () => {
                            if (isLastAnimation) {
                                showNextButton(scene, meshes, timeline)
                            }
                        }
                    }, "<")
                break

            case 'transformMultiple':
                removeCurrentPopOutMesh()
                playSound(animation.sound)

                const objects = Array.isArray(animation.object) ? animation.object : [animation.object]
                const targets = Array.isArray(animation.transformTarget) ? animation.transformTarget : [animation.transformTarget]

                objects.forEach((objName, index) => {
                    const sourceMesh = meshes[objName]
                    const targetMesh = meshes[targets[index]]

                    timeline.to(sourceMesh.material, {
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                            sourceMesh.visible = false
                            targetMesh.visible = true
                        }
                    })
                        .to(targetMesh.material, {
                            opacity: 1,
                            duration: 0.5,
                            onStart: () => {
                                scene.add(targetMesh)
                            },
                            onComplete: () => {
                                if (isLastAnimation && index === objects.length - 1) {
                                    showNextButton(scene, meshes, timeline)
                                }
                            }
                        })
                })
                break

            case 'pop out':
                removeCurrentPopOutMesh()
                playSound(animation.sound)
                // Store current mesh as the active pop out
                window.currentPopOutMesh = mesh

                timeline.from(mesh.scale, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    onStart: () => {
                        scene.add(mesh)
                        mesh.visible = true
                        mesh.material.opacity = 1
                    },
                    onComplete: () => {
                        if (isLastAnimation) {
                            // Clear pop out reference when scene is complete
                            window.currentPopOutMesh = null
                            showNextButton(scene, meshes, timeline)
                        }
                    }
                })
                break
            case 'none':
                removeCurrentPopOutMesh()
                playSound(animation.sound)
                // Do nothing
                if (isLastAnimation) {
                    showNextButton(scene, meshes, timeline)
                }
                break
        }
    }
}
)

const showNextButton = (scene, meshes, timeline) => {
    const nextButton = meshes['nextButton']
    scene.add(nextButton)
    nextButton.visible = true
    timeline.to({}, {
        duration: 1,
        onComplete: () => {
            timeline.from(nextButton.scale, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
                onStart: () => {
                    nextButton.material.opacity = 1
                }
            })
        }
    })
}

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

    // Remove or comment out controls update
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()