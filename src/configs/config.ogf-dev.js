"use strict";

/*
  Locally-run openmaptiles build
*/
const OPENMAPTILES_URL = "http://10.100.26.120:8080/data/openmaptiles.json";
const ATTRIBUTION_LOGO = `
<a href="https://opengeofiction.net">
  <img src="https://opengeofiction.net/assets/osm_logo-d621af7a73a07ad6abb9617a9ab397682b788b9d90221afa998a0f1744b7295a.svg"
  alt="OGF logo"
  width=40
  style="padding: 10px;"
  />
</a>`;
/*
The following two variables override the color of the bounding box and halo of
shield text, respectively. Useful while testing shield design changes.
Both accept an HTML color name, hex code, or other CSS color value.
*/
const SHIELD_TEXT_BBOX_COLOR = null;
const SHIELD_TEXT_HALO_COLOR_OVERRIDE = null;

export default {
  OPENMAPTILES_URL,
  SHIELD_TEXT_BBOX_COLOR,
  SHIELD_TEXT_HALO_COLOR_OVERRIDE,
};
