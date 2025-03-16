pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "MidPoint",
        "sceneFadeDuration": 1000,
        "autoLoad": true
    },

    

    "scenes": {
        "MidPoint": {
            "title": "MidPoint",
            "author": "(Description)",
            "hfov": "150",
            "pitch": -2,
            "yaw": 140,
            "type": "equirectangular",
            "panorama": "Sources/MidPoint.jpg",
            "strings": {
                    "by": ""
            },
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
                    "sceneId": "MidPoint",
                }
            ]
        },

        "ScienceLab2": {
            "title": "Science Lab Room",
            "author": "(Description)",
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
                    "sceneId": "MidPoint",
                }
            ]
        }

        

    }
});




