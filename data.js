var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "FRENTE",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08801295743136706,
          "pitch": 0.30955249836046406,
          "rotation": 0,
          "target": "1-comedor"
        },
        {
          "yaw": 0.8216055575241121,
          "pitch": 0.19025923956090196,
          "rotation": 17.27875959474387,
          "target": "4-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-comedor",
      "name": "COMEDOR",
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
        "yaw": -1.0718669389400954,
        "pitch": 0.29858565816940263,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.4831021173096488,
          "pitch": 0.30007897008760764,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": 1.0840565028789388,
          "pitch": 0.6175853126504638,
          "rotation": 11.780972450961727,
          "target": "5-pasillo"
        },
        {
          "yaw": 1.9923566526447871,
          "pitch": 0.40412309025105664,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "COCINA",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.118348896502603,
          "pitch": 0.420225202222408,
          "rotation": 0,
          "target": "1-comedor"
        },
        {
          "yaw": -1.9549955128600924,
          "pitch": 0.1892766012090359,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": 1.3288947026151945,
          "pitch": 0.5326208742845928,
          "rotation": 1.5707963267948966,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "LIVING",
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
        "yaw": -0.13667383589942972,
        "pitch": 0.026533915509734385,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.5369403455523232,
          "pitch": 0.16093546158282024,
          "rotation": 0,
          "target": "4-patio"
        },
        {
          "yaw": 3.1008981261721793,
          "pitch": 0.2952226798517863,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-patio",
      "name": "PATIO",
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
        "yaw": -0.1352159898348244,
        "pitch": -0.007721260017282461,
        "fov": 1.2189295971039993
      },
      "linkHotspots": [
        {
          "yaw": -0.6842480607463681,
          "pitch": 0.3758104597217251,
          "rotation": 0,
          "target": "0-frente"
        },
        {
          "yaw": -0.49298176187692455,
          "pitch": 0.07534760242712046,
          "rotation": 1.5707963267948966,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo",
      "name": "PASILLO",
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
        "yaw": -0.06873594472536837,
        "pitch": 0.022583953471162488,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.5332553827300917,
          "pitch": 0.047752659684640264,
          "rotation": 1.5707963267948966,
          "target": "6-bao"
        },
        {
          "yaw": 0.15705397590505044,
          "pitch": 0.0284995788414264,
          "rotation": 1.5707963267948966,
          "target": "8-gianluca"
        },
        {
          "yaw": -0.22581099689770845,
          "pitch": 0.023562850772002264,
          "rotation": 4.71238898038469,
          "target": "7-eli"
        },
        {
          "yaw": -3.0518515273236133,
          "pitch": 0.10252078014706711,
          "rotation": 1.5707963267948966,
          "target": "1-comedor"
        },
        {
          "yaw": 2.6735066971132273,
          "pitch": 0.09166604653056609,
          "rotation": 4.71238898038469,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "BAÑO",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7818905838415873,
          "pitch": 0.08465582856105769,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-eli",
      "name": "ELI",
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
        "yaw": -0.2959652539451838,
        "pitch": 0.34497967284940856,
        "fov": 1.2189295971039993
      },
      "linkHotspots": [
        {
          "yaw": -2.1252913897729577,
          "pitch": -0.07002028751572098,
          "rotation": 10.995574287564278,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gianluca",
      "name": "GIANLUCA",
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
        "yaw": -0.30805281181194033,
        "pitch": 0.11581890025924046,
        "fov": 1.2189295971039993
      },
      "linkHotspots": [
        {
          "yaw": -1.4178821666459331,
          "pitch": 0.4403808027197762,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
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
