"use strict";

import * as ShieldDef from "./js/shield_defs.js";
import * as maplibregl from "maplibre-gl";
import { ShieldRenderer } from "@americana/maplibre-shield-generator";
import {
  shieldPredicate,
  networkPredicate,
  routeParser,
} from "./js/shield_format.js";
import { debugOptions } from "./debug_config.js";

var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname;

window.maplibregl = maplibregl;
export const map = (window.map = new maplibregl.Map({
  container: "map", // container id
  antialias: true,
  style: {
    version: 8,
    layers: [],
    sources: {},
    sprite: new URL("sprites/sprite", baseUrl).href,
  },
}));

const shields = ShieldDef.loadShields();

const shieldRenderer = new ShieldRenderer(shields, routeParser)
  .debugOptions(debugOptions)
  .filterImageID(shieldPredicate)
  .filterNetwork(networkPredicate)
  .renderOnMaplibreGL(map);

const once = (emitter, name, { signal } = {}) =>
  new Promise((resolve, reject) => {
    emitter.once(name, resolve);
    signal?.addEventListener("abort", reject);
  });

await once(map, "load");

let networks = [
  "default",

  // FSA
  "FSA:FS",
  "FSA:TM",
  "FSA:S",
  "FSA:AW",
  "FSA:ME",
  "FSA:M",
  "FSA:AL",
  "FSA:CL",
  "FSA:RS",
  "FSA:WM",
  "FSA:MK",
  "FSA:MC",
  "FSA:WI",
  "FSA:WIS",
  "FSA:PQ",
  "FSA:PQ:ALT",
  "FSA:Z",
  "FSA:HY",
  "FSA:HYC",
  "FSA:HYE",
  "FSA:HYW",
  "FSA:RP",
  "FSA:IL",
  "FSA:WY",
  "FSA:AC"
];

// Uncomment for a list of all supported networks.  This makes for a very long page.
//networks = Object.keys(shields);

let refs = [
  "1",
  "5",
  "11",
  "81",
  "69",
  "95",
  "111",
  "281",
  "980",
  "H201",
  "480N",
  "A 562",
  "1138-2",
  "A26/A7",
  "GUA 10D",
  "SS18var",
];

export function getShieldCanvas(network, ref, name) {
  let ctx = shieldRenderer.getGraphicForRoute(network, ref, name);
  if (ctx == null) {
    // Want to return null here, but that gives a corrupted display. See #243
    console.warn("Didn't produce a shield for", JSON.stringify(shield_id));
    ctx = shieldRenderer.emptySprite();
  }
  return ctx.canvas;
}

function getShieldImage(network, ref, name) {
  let shieldCanvas = getShieldCanvas(network, ref, name);
  let img = document.createElement("img");
  img.srcset = `${shieldCanvas.toDataURL("image/png")} ${pxr}x`;
  return img;
}

const pxr = shieldRenderer.pixelRatio();

const iterShields = function* () {
  for (const network of networks) {
    yield { network, refs };
  }
  yield {
    network: "US:PA:Allegheny:Belt",
    refs: [
      "Red Belt",
      "Orange Belt",
      "Yellow Belt",
      "Green Belt",
      "Blue Belt",
      "Purple Belt",
    ],
  };
  yield {
    network: "US:MO:Taney:Branson",
    refs: ["Red Route", "Yellow Route", "Blue Route"],
  };
  yield {
    network: "CA:ON:primary",
    refs: ["QEW"],
  };
  yield {
    network: "CA:ON:Hamilton:Expressway",
    names: ["Lincoln M. Alexander Parkway", "Red Hill Valley Parkway"],
  };
  yield {
    network: "CA:ON:Toronto:Expressway",
    refs: ["DV", "G"],
  };
  yield {
    network: "GLCT",
    refs: ["LECT", "LHCT", "LMCT", "LSCT"],
  };
  yield {
    network: "GLCT:Loop",
    refs: ["LMCT"],
  };
  yield {
    network: "US:PA:Turnpike",
    refs: [""],
  };
  yield {
    network: "US:NE:Scenic",
    refs: [""],
  };
  yield {
    network: "US:NY:STE",
    refs: [""],
  };
  yield {
    network: "US:NY:Thruway",
    refs: [""],
  };
  yield {
    network: "US:KY:Parkway",
    names: [
      "Audubon Parkway",
      "Bluegrass Parkway",
      "Cumberland Parkway",
      "Hal Rogers Parkway",
      "Mountain Parkway",
      "Purchase Parkway",
      "Western Kentucky Parkway",
    ],
  };
  yield {
    network: "US:CT:Parkway",
    names: ["Wilbur Cross Parkway", "Milford Parkway", "Merritt Parkway"],
  };
  yield {
    network: "US:NH:Turnpike",
    names: ["Blue Star Turnpike", "Everett Turnpike", "Spaulding Turnpike"],
  };
  yield {
    network: "US:NY:Inner_Loop",
    names: ["Inner Loop"],
  };
};

const renderAllShields = async () => {
  const allShields = Array.from(iterShields());
  const progress = document.querySelector("#progress-overlay progress");
  progress.max = allShields.flatMap((d) => mergeArrays(d.refs, d.names)).length;
  const columns = Math.max(
    ...allShields.flatMap((d) => mergeArrays(d.refs, d.names).length)
  );
  const table = document.querySelector("#shield-table").createTBody();
  for (const { network, refs, names } of allShields) {
    const tr = table.insertRow();
    tr.insertCell().append(`${network}`);
    if (refs) {
      for (const ref of refs) {
        renderAndRecordPerformance(
          tr,
          performance,
          progress,
          () => getShieldImage(network, ref),
          network
        );
      }
    } else if (names) {
      for (const name of names) {
        renderAndRecordPerformance(
          tr,
          performance,
          progress,
          () => getShieldImage(network, "", name),
          network
        );
      }
    }
    let perfEntries = performance.getEntriesByName(`${network}`);
    var perfDuration = 0;
    for (let perf of perfEntries) {
      perfDuration += perf.duration;
    }
    let shieldRate = Math.round((1000 * perfEntries.length) / perfDuration);
    if (tr.cells.length < 1 + columns) {
      const gap = columns - tr.cells.length + 1;
      tr.insertCell().colSpan = gap;
    }
    tr.insertCell().append(`${shieldRate} shields/sec`);

    await Promise.all(
      Array.from(tr.querySelectorAll("img"), (img) =>
        img.decode().catch(
          () =>
            /* occasionally fails for no reason */
            new Promise(requestAnimationFrame)
        )
      )
    );
  }
};

function renderAndRecordPerformance(
  tr,
  performance,
  progress,
  shieldFunc,
  network
) {
  performance.mark(`start-${network}`);
  tr.insertCell().append(shieldFunc());
  progress.value += 1;
  performance.mark(`stop-${network}`);
  performance.measure(`${network}`, `start-${network}`, `stop-${network}`);
}

function mergeArrays(arr1, arr2) {
  let ret = [];
  if (arr1) {
    ret = ret.concat(arr1);
  }
  if (arr2) {
    ret = ret.concat(arr2);
  }
  return ret;
}

await renderAllShields().finally(() =>
  document.querySelector("#progress-overlay").remove()
);
