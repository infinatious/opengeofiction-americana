"use strict";

import * as Color from "../constants/color.js";

export const urbanizedArea = {
  id: "urbanized-area",
  type: "fill",
  minzoom: 4,
  maxzoom: 6,
  filter: ["==", ["get", "class"], "residential"],
  paint: {
    "fill-color": [
      "interpolate-lab",
      ["linear"],
      ["zoom"],
      4,
      "hsl(41, 90%, 85%)",
      5,
      "hsl(41, 90%, 80%)",
      5.5,
      "hsl(41, 90%, 80%)",
      6,
      Color.backgroundFill,
    ],
  },
  source: "openmaptiles",
  "source-layer": "landuse",
};

export const legendEntries = [
  {
    description: "Urban area",
    layers: [urbanizedArea.id],
  },
];

export const residential = {
  "id": "landuse-residential",
  "type": "fill",
  "source": "openmaptiles",
  "source-layer": "landuse",
  "filter": [
    "all",
    [
      "in",
      "class",
      "residential",
      "suburb",
      "neighbourhood"
    ]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": {
      "base": 1,
      "stops": [
        [10, "hsla(30, 10%, 99%, 1)"],
        [12, "hsla(30, 17%, 95%, 0.9)"],
        [16, "hsla(30, 19%, 95%, 0.82)"]
      ]
    }
  }
}


export const industrial = {
  "id": "landuse-industrial",
  "type": "fill",
  "source": "openmaptiles",
  "source-layer": "landuse",
  "filter": [
    "all",
    ["==", "$type", "Polygon"],
    [
      "in",
      "class",
      "industrial",
      "garages",
      "dam"
    ]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": Color.industrialFill
  }
}

export const retail = {
    "id": "landuse-retail",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "landuse",
    "filter": [
      "all",
      ["==", "$type", "Polygon"],
      ["in", "class", "retail"]
    ],
    "layout": {"visibility": "visible"},
    "paint": {
      "fill-color": Color.retailFill
    }
  }

  export const commercial = {
    "id": "landuse-commercial",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "landuse",
    "filter": [
      "all",
      ["==", "$type", "Polygon"],
      ["in", "class", "commercial"]
    ],
    "layout": {"visibility": "visible"},
    "paint": {
      "fill-color": Color.commercialFill
    }
  }

export const school = {
    "id": "landuse-school",
    "type": "fill",
    "source": "openmaptiles",
    "source-layer": "landuse",
    "filter": [
      "all",
      [
        "in",
        "class",
        "school",
        "education",
        "college",
        "university"
      ]
    ],
    "paint": {
      "fill-color": Color.schoolFill
    }
  }

export const sports = {
  "id": "landuse-sports",
"type": "fill",
"metadata": {
  "mapbox:group": "1444849388993.3071"
},
"source": "openmaptiles",
"source-layer": "landuse",
"filter": [
  "all",
  [
    "in",
    "class",
    "stadium",
    "pitch",
    "track",
    "stadium"
  ]
],
"layout": {"visibility": "visible"},
"paint": {
  "fill-color": Color.sportsFill,
  "fill-opacity": 0.7,
  "fill-outline-color": "rgba(6, 143, 60, 1)"
}
}

export const quarry = {
  "id": "landuse-quarry",
  "type": "fill",
  "metadata": {
    "mapbox:group": "1444849388993.3071"
  },
  "source": "openmaptiles",
  "source-layer": "landuse",
  "filter": [
    "all",
    ["in", "class", "quarry"]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": Color.quarryFill,
    "fill-opacity": 0.7,
    "fill-outline-color": Color.quarryOutline
  }
}

export const cemetery = {
  "id": "landuse-cemetery",
  "type": "fill",
  "metadata": {
    "mapbox:group": "1444849388993.3071"
  },
  "source": "openmaptiles",
  "source-layer": "landuse",
  "filter": ["==", "class", "cemetery"],
  "paint": {
    "fill-color": Color.cemetaryFill
  }
}

export const military = {
  "id": "landuse-military",
  "type": "fill",
  "source": "openmaptiles",
  "source-layer": "landuse",
  "filter": [
    "all",
    ["in", "class", "military"]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": Color.militaryFill,
    "fill-opacity": 0.4,
    "fill-outline-color": Color.militaryOutline
  }
}