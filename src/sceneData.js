export const scenes = [
    // Scene 01: Button up
    [
        {
            name: 'background',
            texture: './bg1.png',
            geometry: [12, 8], 
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'bear1',
            texture: './bear1.png', 
            geometry: [4, 4],
            position: [2.5, -1, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'bear2',
            texture: './bear2.png',
            geometry: [4, 4], 
            position: [2.5, -1, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'bear3',
            texture: './bear3.png',
            geometry: [4, 4], 
            position: [2.5, -1, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'dialog',
            texture: './dialog1.png',
            geometry: [4, 4],
            position: [0.5, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'nextButton',
            texture: './next.png',
            geometry: [1.3, 1.3],
            position: [4.9, -3, 0.3],
            opacity: 0,
            visible: false
        }
    ],
    // Scene 02: Toy car
    [
        {
            name: 'background',
            texture: './bg1.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'bear3',
            texture: './bear3.png',
            geometry: [4, 4], 
            position: [-3, -1.5, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'toycar',
            texture: './toycar.png',
            geometry: [2, 1.5], 
            position: [-1, -2.5, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'dialog2',
            texture: './dialog2.png',
            geometry: [6, 4],
            position: [-0.5, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'nextButton',
            texture: './next.png',
            geometry: [1.3, 1.3],
            position: [4.9, -3, 0.3],
            opacity: 0,
            visible: false
        }
    ],
    // Scene 03: TV Scene
    [
        {
            name: 'background',
            texture: './bg2.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'bear4',
            texture: './bear4.png',
            geometry: [4.5, 4], 
            position: [3, -1.5, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'tvoff',
            texture: './tvoff.png',
            geometry: [4, 4],
            position: [-3.8, 0.1, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'tvon',
            texture: './tvon.png',
            geometry: [4, 4],
            position: [-3.8, 0.1, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'dialog3',
            texture: './dialog3.png',
            geometry: [5, 3.5],
            position: [1, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'nextButton',
            texture: './next.png',
            geometry: [1.3, 1.3],
            position: [4.9, -3, 0.3],
            opacity: 0,
            visible: false
        }
    ],
    // Scene 04: Crossing the road
    [
        {
            name: 'background',
            texture: './bg3.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'trafficlightgreen',
            texture: './trafficlightgreen.png',
            geometry: [3.3, 4],
            position: [-2.16, 1.65, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'trafficlightred',
            texture: './trafficlightred.png',
            geometry: [3.3, 4],
            position: [-2.16, 1.65, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'familybear',
            texture: './familybear.png',
            geometry: [3, 2],
            position: [2.5, 0.5, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'pedestrianred',
            texture: './pedestrianred.png',
            geometry: [1.5, 3.2],
            position: [4.86, 1.1, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'pedestriangreen',
            texture: './pedestriangreen.png',
            geometry: [1.5, 3.2],
            position: [4.86, 1.1, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'dialog4',
            texture: './dialog4.png',
            geometry: [5, 3.5],
            position: [0, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog5',
            texture: './dialog5.png',
            geometry: [5, 3.5],
            position: [0, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog6',
            texture: './dialog6.png',
            geometry: [5, 3.5],
            position: [0, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog7',
            texture: './dialog7.png',
            geometry: [5, 3.5],
            position: [0, 1.5, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'nextButton',
            texture: './next.png',
            geometry: [1.3, 1.3],
            position: [4.9, -3, 0.3],
            opacity: 0,
            visible: false
        }
    ]
];

export const sceneAnimations = [
    // Scene 01: Button up
    [
        {
            object: 'bear1',
            animation: 'transform',
            transformTarget: 'bear2',
            order: 1
        },
        {
            object: 'bear2',
            animation: 'transform',
            transformTarget: 'bear3',
            order: 2
        },
        {
            object: 'dialog',
            animation: 'pop out',
            order: 3
        }
    ],
    // Scene 02: Toy car
    [
        {
            object: 'toycar',
            animation: 'pingpong',
            order: 1
        },
        {
            object: 'dialog2',
            animation: 'pop out',
            order: 2
        }
    ],
    // Scene 03: TV Scene
    [
        {
            object: 'tvoff',
            animation: 'transform',
            transformTarget: 'tvon',
            order: 1
        },
        {
            object: 'dialog3',
            animation: 'pop out',
            order: 2
        }
    ],
    // Scene 04: Crossing the road
    [
        {
            object: 'dialog4',
            animation: 'pop out',
            order: 1
        },
        {
            object: 'dialog5',
            animation: 'pop out',
            order: 1
        },
        {
            object: 'dialog5',
            animation: 'pop out',
            order: 1
        }
    ]
];

export const clickableObjects = [
    // Scene 01: Button up
    [
        'bear1',
        'bear2',
        'bear3',
        'nextButton'
    ],
    // Scene 02: Toy car
    [
        'toycar',
        'bear3',
        'nextButton'
    ],
    // Scene 03: TV Scene
    [
        'bear4',
        'bear4',
        'nextButton'
    ],
    // Scene 04: Crossing the road
    [
        'familybear',
        'familybear',
        'familybear',
        'pedestrianred',
        'familybear',
        'familybear',
        'familybear'
    ]
];
