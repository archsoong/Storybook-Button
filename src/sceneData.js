export const scenes = [
    // Scene 00: Start
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
            name: 'bear0',
            texture: './bear0.png',
            geometry: [5.3, 6.5],
            position: [0, -0.5, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'title',
            texture: './title.png',
            geometry: [6, 4],
            position: [3, 2, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'nextButton',
            texture: './next.png',
            geometry: [1.3, 1.3],
            position: [4.9, -3, 0.3],
            opacity: 1,
            visible: true
        }
    ],
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
            geometry: [1.1, 3.2],
            position: [4.7, 1.15, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'pedestriangreen',
            texture: './pedestriangreen.png',
            geometry: [1.1, 3.2],
            position: [4.7, 1.15, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'dialog4',
            texture: './dialog4.png',
            geometry: [5, 2.5],
            position: [-1.2, 1, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog5',
            texture: './dialog5.png',
            geometry: [6, 2.5],
            position: [2, -1.2, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog6',
            texture: './dialog6.png',
            geometry: [4, 2.5],
            position: [0.5, 1.8, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog7',
            texture: './dialog7.png',
            geometry: [3.8, 2.8],
            position: [3.4, -1.3, 0.2],
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
    // Scene 05: Taking Bus
    [
        {
            name: 'background',
            texture: './bg4.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'familybear2',
            texture: './familybear2.png',
            geometry: [6, 4],
            position: [0.8, -1.5, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'dialog8',
            texture: './dialog8.png',
            geometry: [4, 3.5],
            position: [2.8, 1.2, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog9',
            texture: './dialog9.png',
            geometry: [5, 3],
            position: [-2.4, 1.4, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'busbutton',
            texture: './busbutton.png',
            geometry: [2, 2],
            position: [4.2, -1.5, 0.3],
            opacity: 1,
            visible: true
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
    // Scene 06: Elevator Up
    [
        {
            name: 'background',
            texture: './bg5.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'familybear2',
            texture: './familybear2.png',
            geometry: [6, 4],
            position: [-0.6, -1.8, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'elevator1',
            texture: './elevator1.png',
            geometry: [1.5, 3],
            position: [2.75, -1, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'elevator5',
            texture: './elevator5.png',
            geometry: [1.5, 3],
            position: [2.75, -1, 0.1],
            opacity: 0,
            visible: false
        },
        {
            name: 'dialog10',
            texture: './dialog10.png',
            geometry: [3, 2.8],
            position: [-1, 1, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog11',
            texture: './dialog11.png',
            geometry: [3.5, 3],
            position: [0, 1.2, 0.2],
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
    // Scene 07: Emergency Button
    [
        {
            name: 'background',
            texture: './bg6.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'bearpapa',
            texture: './bearpapa.png',
            geometry: [3.6, 4],
            position: [2, -1, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'bear5',
            texture: './bear5.png',
            geometry: [3.5, 3.5],
            position: [-1.2, -1.3, 0.1],
            opacity: 1,
            visible: true
        },
        {
            name: 'redbutton',
            texture: './redbutton.png',
            geometry: [2, 1.5],
            position: [-4.1, -1, 0.2],
            opacity: 1,
            visible: true
        },
        {
            name: 'dialog12',
            texture: './dialog12.png',
            geometry: [3, 2.8],
            position: [-0.7, 1.2, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog13',
            texture: './dialog13.png',
            geometry: [5, 3],
            position: [3, 2, 0.2],
            opacity: 1,
            visible: false
        },
        {
            name: 'dialog14',
            texture: './dialog14.png',
            geometry: [4, 3],
            position: [-2.2, 1.2, 0.2],
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
    // Scene 08: Final Scene
    [
        {
            name: 'background',
            texture: './bg7.png',
            geometry: [12, 8],
            position: [0, 0, -0.1],
            opacity: 1,
            visible: true
        }
    ]
];

export const sceneAnimations = [
    // Scene 00: Start
    [
        {}
    ],
    // Scene 01: Button up
    [
        {
            object: 'bear1',
            animation: 'transform',
            transformTarget: 'bear2',
            sound: 'transform.mp3',
            order: 1
        },
        {
            object: 'bear2',
            animation: 'transform',
            transformTarget: 'bear3',
            sound: 'transform.mp3',
            order: 2
        },
        {
            object: 'dialog',
            animation: 'pop out',
            sound: 'dialog.mp3',
            order: 3
        }
    ],
    // Scene 02: Toy car
    [
        {
            object: 'toycar',
            animation: 'pingpong',
            sound: 'toycar.mp3',
            order: 1
        },
        {
            object: 'dialog2',
            animation: 'pop out',
            sound: 'dialog2.mp3',
            order: 2
        }
    ],
    // Scene 03: TV Scene
    [
        {
            object: 'tvoff',
            animation: 'transform',
            transformTarget: 'tvon',
            sound: 'cartoon.mp3',
            order: 1
        },
        {
            object: 'dialog3',
            animation: 'pop out',
            sound: 'dialog3.mp3',
            order: 2
        }
    ],
    // Scene 04: Crossing the road
    [
        {
            object: 'dialog4',
            animation: 'pop out',
            sound: 'dialog4.mp3',
            order: 1
        },
        {
            object: 'dialog5',
            animation: 'pop out',
            sound: 'dialog5.mp3',
            order: 2
        },
        {
            object: ['trafficlightgreen', 'pedestrianred'],
            animation: 'transformMultiple',
            transformTarget: ['trafficlightred', 'pedestriangreen'],
            sound: 'traffic.mp3',
            order: 3
        },
        {
            object: 'dialog6',
            animation: 'pop out',
            sound: 'dialog6.mp3',
            order: 4
        },
        {
            object: 'familybear',
            animation: 'movingScale',
            movePositionChange: [-2, -3, 0.0],
            scaleSize: 1.4,
            sound: 'transform.mp3',
            order: 5
        },
        {
            object: 'dialog7',
            animation: 'pop out',
            sound: 'dialog7.mp3',
            order: 6
        }
    ],
    // Scene 05: Taking Bus
    [
        {
            object: 'dialog8',
            animation: 'pop out',
            sound: 'dialog8.mp3',
            order: 1
        },
        {
            object: 'dialog9',
            animation: 'pop out',
            sound: 'dialog9.mp3',
            order: 2
        },
        {
            object: 'none',
            animation: 'none',
            sound: 'busstop.mp3',
            order: 3
        },
        {
            object: 'familybear2',
            animation: 'movingScale',
            movePositionChange: [-10, 0, 0.0],
            scaleSize: 1,
            sound: 'transform.mp3',
            order: 4
        }
    ],
    // Scene 06: Elevator Scene
    [
        {
            object: 'dialog10',
            animation: 'pop out',
            sound: 'dialog10.mp3',
            order: 1
        },
        {
            object: 'elevator1',
            animation: 'transform',
            transformTarget: 'elevator5',
            sound: 'elevator.mp3',
            order: 2
        },
        {
            object: 'dialog11',
            animation: 'pop out',
            sound: 'dialog11.mp3',
            order: 3
        }
    ],
    // Scene 07: Emergency Button
    [
        {
            object: 'dialog12',
            animation: 'pop out',
            sound: 'dialog12.mp3',
            order: 1
        },
        {
            object: 'none',
            animation: 'none',
            sound: 'emergency.mp3',
            order: 2
        },
        {
            object: 'dialog13',
            animation: 'pop out',
            sound: 'dialog13.mp3',
            order: 3
        },
        {
            object: 'dialog14',
            animation: 'pop out',
            sound: 'dialog14.mp3',
            order: 4
        }
    ]
];

export const clickableObjects = [
    // Scene 00: Start
    [
        'nextButton'
    ],
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
        'pedestrianred',
        'familybear',
        'familybear',
        'familybear',
        'nextButton'
    ],
    // Scene 05: Taking Bus
    [
        'familybear2',
        'familybear2',
        'busbutton',
        'familybear2',
        'nextButton'
    ],
    // Scene 06: Elevator Scene
    [
        'familybear2',
        'elevator1',
        'familybear2',
        'nextButton'
    ],
    // Scene 07: Button Scene
    [
        'bear5',
        'redbutton',
        'bearpapa',
        'bear5',
        'nextButton'
    ]
];
