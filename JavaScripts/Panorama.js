pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "MidPoint",
        "sceneFadeDuration": 1000,
        "autoLoad": true
    },

    

    "scenes": {
        "MidPoint": {
            "title": "",
            "author": "(Description)",
            "hfov": "150",
            "pitch": -2,
            "yaw": 140,
            "type": "equirectangular",
            "panorama": "Sources/MidPoint.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 87,
                    "type": "scene",
                    "text": "Covered Court",
                    "sceneId": "CoveredCourt",
                    
                },

                {
                    "pitch": 8,
                    "yaw": 304,
                    "type": "scene",
                    "text": "Science Lab Room",
                    "sceneId": "ScienceLab1",
                    
                },

                {
                    "pitch": 4,
                    "yaw": 285,
                    "type": "scene",
                    "sceneId": "Hallway1stfloor",
                    
                }
            ]
        },

        "CoveredCourt": {
            "title": "Covered Court",
            "author": "(Description)",
            "hfov": "150",
            "pitch": -3,
            "yaw": -1,
            "type": "equirectangular",
            "panorama": "Sources/CoveredCourt.jpg",
            "hotSpots": [
                {
                    "pitch": -1.1,
                    "yaw": 180,
                    "type": "scene",
                    "sceneId": "MidPoint",
                }
            ]
        },

        "ScienceLab1": {
            "title": "Science Lab Room",
            "author": "(Description)",
            "hfov": "150",
            "pitch": -3,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "Sources/ScienceLab1.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 182,
                    "type": "scene",
                    "text": "Back Desk",
                    "sceneId": "ScienceLab2",
                },

                {
                    "pitch": -1,
                    "yaw": -37,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "Hallway1stfloor",
                }
            ]
        },

        "ScienceLab2": {
            "title": "Science Lab Room",
            "author": "This well-equipped lab features essential scientific tools, including microscopes and anatomical models, fostering an engaging learning environment. With its hands-on resources, students can explore biological concepts and conduct experiments, enhancing their understanding of science while adapting to their new temporary space. ",
            "hfov": "150",
            "pitch": -3,
            "yaw": 50,
            "type": "equirectangular",
            "panorama": "Sources/ScienceLab2.jpg",
            "hotSpots": [
                {
                    "pitch": -13,
                    "yaw": 228,
                    "type": "scene",
                    "sceneId": "ScienceLab1",
                },

                {
                    "pitch": 2,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "Hallway1stfloor",
                }
            ]
        },

        "Hallway1stfloor": {
            "title": "Hallway",
            "author": "(Description)",
            "hfov": "150",
            "pitch": -3,
            "yaw": 50,
            "type": "equirectangular",
            "panorama": "Sources/Hallway1stfloor.jpg",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 9,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "MidPoint",
                    
                },

                {
                    "pitch": -2,
                    "yaw": 4,
                    "type": "scene",
                    "text": "CoveredCourt",
                    "sceneId": "CoveredCourt",
                    
                },

                {
                    "pitch": 0,
                    "yaw": -105,
                    "type": "scene",
                    "text": "Science Lab Room",
                    "sceneId": "ScienceLab1",
                    
                },
            ]
        },

        "Oasis": {
            "title": "Oasis",
            "author": "(Description)",
            "hfov": "150",
            "pitch": -3,
            "yaw": 50,
            "type": "equirectangular",
            "panorama": "Sources/Oasis.jpg",
            "hotSpots": [
                {
                    "pitch": -4,
                    "yaw": 147,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "4thFloor",
                }
            ]
        }
        

    }
});




