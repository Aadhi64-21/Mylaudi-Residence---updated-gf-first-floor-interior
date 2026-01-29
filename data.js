var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.554091726031027,
          "pitch": 0.03685515940822803,
          "rotation": 0.7853981633974483,
          "target": "3-dining"
        },
        {
          "yaw": -1.4958678440117446,
          "pitch": 0.10462614855812369,
          "rotation": 3.141592653589793,
          "target": "5-courtyard"
        },
        {
          "yaw": -2.0821964008580345,
          "pitch": 0.05825659796158966,
          "rotation": 0,
          "target": "1-db-"
        },
        {
          "yaw": -1.2742676242601405,
          "pitch": 0.009181232485978796,
          "rotation": 7.853981633974483,
          "target": "6-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-db-",
      "name": "DB ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.8039641950431609,
          "pitch": 0.16910885762332484,
          "rotation": 3.141592653589793,
          "target": "5-courtyard"
        },
        {
          "yaw": 1.118962274896944,
          "pitch": 0.04192246020929602,
          "rotation": 1.5707963267948966,
          "target": "6-study"
        },
        {
          "yaw": 2.538481045239778,
          "pitch": 0.04469819802405972,
          "rotation": 3.141592653589793,
          "target": "3-dining"
        },
        {
          "yaw": -1.7562982789868116,
          "pitch": 0.1585081715034562,
          "rotation": 3.141592653589793,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-utility",
      "name": "Utility",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.28122457124813316,
        "pitch": -0.05444762885353782,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.5399395500808613,
          "pitch": -0.05674918291968467,
          "rotation": 0.7853981633974483,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 0.06319696281252263,
          "pitch": -0.011694820307019071,
          "rotation": 0,
          "target": "2-utility"
        },
        {
          "yaw": -0.6728306519193303,
          "pitch": 0.09865822021394877,
          "rotation": 3.141592653589793,
          "target": "5-courtyard"
        },
        {
          "yaw": 3.1328398510588844,
          "pitch": 0.08623758492257316,
          "rotation": 3.141592653589793,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -2.7766311230971823,
          "pitch": 0.17073530812676907,
          "rotation": 3.141592653589793,
          "target": "3-dining"
        },
        {
          "yaw": -2.9514453586680816,
          "pitch": 0.017435654294471803,
          "rotation": 0,
          "target": "2-utility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-courtyard",
      "name": "Courtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.5414436571658108,
        "pitch": -0.003911359541667991,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -0.7042265359843434,
          "pitch": 0.05173826070073062,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 2.910656817939648,
          "pitch": 0.009349628733851034,
          "rotation": 0.7853981633974483,
          "target": "6-study"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 1.8163975016501483,
          "pitch": 0.1271976231588603,
          "rotation": 0,
          "target": "5-courtyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-first-floor-lobby",
      "name": "First floor lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.1517213028725237,
          "pitch": 0.010518809635467363,
          "rotation": 3.141592653589793,
          "target": "8-first-floor-stairs"
        },
        {
          "yaw": 0.6928648326063733,
          "pitch": -0.015957948068690442,
          "rotation": 0.7853981633974483,
          "target": "9-entertainment-room"
        },
        {
          "yaw": -1.4523306551276125,
          "pitch": 0.02158104561310381,
          "rotation": 5.497787143782138,
          "target": "10-front-bedroom-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-first-floor-stairs",
      "name": "First floor stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.8814153623829082,
        "pitch": 0.001624997190925015,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": -2.096741135621553,
          "pitch": 0.03781636677848077,
          "rotation": 3.141592653589793,
          "target": "7-first-floor-lobby"
        },
        {
          "yaw": -2.8840554954141133,
          "pitch": -0.00254502113075894,
          "rotation": 0,
          "target": "9-entertainment-room"
        },
        {
          "yaw": 0.03847086052334525,
          "pitch": 0.0027927075724676342,
          "rotation": 5.497787143782138,
          "target": "10-front-bedroom-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-entertainment-room",
      "name": "Entertainment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -2.0820477786139495,
          "pitch": -0.04650380962387679,
          "rotation": 5.497787143782138,
          "target": "7-first-floor-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-front-bedroom-first-floor",
      "name": "Front Bedroom First floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
