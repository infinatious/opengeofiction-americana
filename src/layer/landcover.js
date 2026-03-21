"use strict";

import * as Color from "../constants/color.js";

export const sandFill = {
  id: "sand_fill",
  type: "fill",
  paint: {
    "fill-color": Color.sandFill
  },
  source: "openmaptiles",
  filter: ["==", ["get", "class"], "sand"],
  "source-layer": "landcover",
};

export const grassFill = {
  id: "grass_fill",
  type: "fill",
  paint: {
    "fill-color": Color.grassFill
  },
  source: "openmaptiles",
  "filter": [
    "all",
    ["==", "class", "grass"],
    [
      "!in",
      "subclass",
      "heath",
      "scrub"
    ]
  ],
  "source-layer": "landcover",
};

export const heath = {
  "id": "landcover-heath",
  "type": "fill",
  "source": "openmaptiles",
  "source-layer": "landcover",
  "filter": [
    "all",
    ["==", "class", "grass"],
    ["==", "subclass", "heath"]
  ],
  "paint": {
    "fill-color": Color.grassFill,
    "fill-opacity": 1
  }
}

export const scrub = {
  "id": "landcover-scrub",
  "type": "fill",
  "source": "openmaptiles",
  "source-layer": "landcover",
  "filter": [
    "all",
    ["==", "class", "grass"],
    ["==", "subclass", "scrub"]
  ],
  "paint": {
    "fill-color": Color.scrubFill,
    "fill-opacity": 1
  }
}

export const woodFill = {
  id: "wood_fill",
  type: "fill",
  paint: {
    "fill-color": Color.woodFill
  },
  source: "openmaptiles",
  filter: ["==", ["get", "class"], "wood"],
  "source-layer": "landcover",
};

export const farmland = {
  "id": "landcover-farmland",
  "type": "fill",
  "metadata": {
    "mapbox:group": "1444849388993.3071"
  },
  "source": "openmaptiles",
  "source-layer": "landcover",
  "filter": [
    "all",
    ["==", "class", "farmland"]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": Color.farmlandFill,
    "fill-opacity": 1
  }
}

export const wetland = {
  "id": "landcover-wetland-color",
  "type": "fill",
  "metadata": {
    "mapbox:group": "1444849388993.3071"
  },
  "source": "openmaptiles",
  "source-layer": "landcover",
  "filter": [
    "all",
    ["==", "class", "wetland"]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": Color.wetlandFill,
    "fill-opacity": 0.8
  }
}

export const rock = {
  "id": "landcover-rock",
  "type": "fill",
  "metadata": {
    "mapbox:group": "1444849388993.3071"
  },
  "source": "openmaptiles",
  "source-layer": "landcover",
  "filter": [
    "all",
    ["==", "class", "rock"]
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": Color.rockFill,
    "fill-opacity": 0.7
  }
}

export const glacier = {
  "id": "landcover-glacier",
  "type": "fill",
  "metadata": {
    "mapbox:group": "1444849388993.3071"
  },
  "source": "openmaptiles",
  "source-layer": "landcover",
  "filter": [
    "==",
    "subclass",
    "glacier"
  ],
  "layout": {"visibility": "visible"},
  "paint": {
    "fill-color": "#fff",
    "fill-opacity": {
      "base": 1,
      "stops": [[0, 0.9], [10, 0.3]]
    }
  }
}