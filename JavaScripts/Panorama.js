pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "MidPoint",
        "sceneFadeDuration": 1000,
        "autoLoad": true
    },

    

    "scenes": {
        "MidPoint": {
            "title": "Flag Pole Area",
            "author": "This is where the school holds flag ceremonies and important gatherings. Every morning, students and teachers gather here to show respect for the national flag and sing the national anthem.",
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
                    "pitch": 25,
                    "yaw": 320,
                    "type": "scene",
                    "text": "Classroom",
                    "sceneId": "Classroom",
                    
                },

                {
                    "pitch": 50,
                    "yaw": 320,
                    "type": "scene",
                    "text": "Oasis of Serenity",
                    "sceneId": "Oasis",
                    
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
            "author": "The covered court at the school is an open-air facility that serves as a central hub for a variety of events and activities. Its protective roof provides shade and shelter, allowing students to enjoy sports, gatherings, and celebrations regardless of the weather. The smooth flooring is ideal for basketball, volleyball, and other athletic events, while seating areas accommodate spectators. This versatile space hosts everything from school assemblies and talent shows to tournaments and community functions, fostering a vibrant sense of school spirit and camaraderie among students and faculty alike.",
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
            "author": "A place where students conduct experiments, learn about scientific concepts and procedures, and the like. As of now, it is temporarily used as the classroom of Grade 7 (Sardonyx).",
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
            "title": "Back Desk",
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
            "author": "This hallway leads to different parts of the school and offers a clear view of the covered court. It’s a quiet and refreshing spot where students can pass by, take a break, or chat with friends. The plants around it add to the peaceful atmosphere.",
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
            "title": "Oasis of Serenity",
            "author": "From the name of the place itself, 'The Oasis of Serenity', is described as a place for students to relieve stress, feel at peace and tranquility during stressful times. It is located at the rooftop of the Administration Building.",
            "hfov": "150",
            "pitch": -3,
            "yaw": 180,
            "type": "equirectangular",
            "panorama": "Sources/Oasis.jpg",
            "hotSpots": [
                {
                    "pitch": -4,
                    "yaw": -215,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "MidPoint",
                }
            ]
        },
        
        "Classroom": {
            "title": "Classroom",
            "author": "The classroom is a modern and inviting learning environment, featuring large windows that allow ample natural light to brighten the space. Bookshelves line the walls, filled with a diverse collection of texts that encourage exploration and study. Tables and comfortable chairs facilitate group work and discussions. A large whiteboard at the front enhances teaching and presentations, while a TV provides multimedia support for engaging lessons. Air conditioning ensures a comfortable climate, making it an ideal setting for creativity and collaboration among students.",
            "hfov": "150",
            "panorama": "Sources/7-sapphireRoom.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -55,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "MidPoint",
                }
            ]
        }

    }
});




