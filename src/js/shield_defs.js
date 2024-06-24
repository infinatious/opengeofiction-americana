"use strict";

import * as Color from "../constants/color.js";
import {
  textConstraint,
  homePlateDownShield,
  octagonVerticalShield,
  hexagonHorizontalShield,
  hexagonVerticalShield,
  homePlateUpShield,
  ovalShield,
  circleShield,
  roundedRectShield,
  pillShield,
  trapezoidUpShield,
  trapezoidDownShield,
  pentagonUpShield,
  diamondShield,
  triangleDownShield,
  escutcheonDownShield,
  fishheadDownShield,
  banneredShield,
  paBeltShield,
  bransonRouteShield,
} from "@americana/maplibre-shield-generator";

export function loadShields() {
  const shields = {};

  // Multi-use shields

  // Triangle shields
  let triangleConvexDownShield = {
    spriteBlank: ["shield_tri_convex_2", "shield_tri_convex_3"],
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 1,
      bottom: 5,
    },
  };

  let triangleConvexDownShieldBlue = {
    ...triangleConvexDownShield,
    textColor: Color.shields.white,
    colorLighten: Color.shields.white,
    colorDarken: Color.shields.blue,
  };

  let triangleConvexDownShieldRedBlue = {
    ...triangleConvexDownShieldBlue,
    colorLighten: Color.shields.blue,
    colorDarken: Color.shields.red,
  };

  let triangleConvexUpShield = {
    ...triangleConvexDownShield,
    verticalReflect: true,
    padding: {
      left: 2,
      right: 2,
      top: 5,
      bottom: 1,
    },
  };

  // Other common shield shapes
  let badgeShield = {
    spriteBlank: ["shield_badge_2", "shield_badge_3"],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 4,
      bottom: 5,
    },
  };

  let badgeShieldCrossbar = {
    spriteBlank: ["shield_badge_crossbar_2", "shield_badge_crossbar_3"],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 6,
      bottom: 4,
    },
  };

  // Default
  shields["default"] = roundedRectShield(
    Color.shields.white,
    Color.shields.black
  );


  shields["FSA:FS"] = {
    spriteBlank: "shield_fsa_fs",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.fsa_fs,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
  };

  // Tempache
  shields["FSA:TM"] = homePlateDownShield(
    5,
    Color.shields.white,
    Color.shields.black
  );

  // Sierra
  shields["FSA:S"] = diamondShield(
    Color.shields.black,
    Color.shields.white,
    Color.shields.white,
    2,
    24
  );

  //Apawiland
  shields["FSA:AW"] = diamondShield(
    "hsl(359, 43%, 19%)",
    "hsl(45, 89%, 63%)",
    "hsl(45, 89%, 63%)",
    2,
    24
  );

  // Mennowa
  shields["FSA:ME"] = {
    spriteBlank: "shield_fsa_me",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
  };
  shields["FSA:M"] = {
    spriteBlank: "shield_fsa_me",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
  };

  //Alormen
  shields["FSA:AL"] = {
    spriteBlank: "shield_fsa_al",
    textColor: Color.shields.black,
    padding: {
      left: 5,
      right: 2,
      top: 2,
      bottom: 2,
    },
  };

  //Clamash
  shields["FSA:CL"] = {
    spriteBlank: "shield_fsa_cl",
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 2,
      bottom: 2,
    },
  };

  //Riopoderos
  shields["FSA:RP"] = {
    spriteBlank: "shield_fsa_rp",
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 4,
      bottom: 2,
    },
  };
  shields["FSA:RS"] = {
    spriteBlank: "shield_fsa_rp",
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 4,
      bottom: 2,
    },
  };

  //W Massodeya
  shields["FSA:WM"] = {
    spriteBlank: "shield_fsa_wm",
    textColor: Color.shields.black,
    padding: {
      left: 5,
      right: 2,
      top: 1,
      bottom: 5,
    },
  };

  //Makaska
  shields["FSA:MK"] = {
    spriteBlank: "shield_fsa_mk",
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 5,
      bottom: 4,
    },
  };

  //Michisaukee
  shields["FSA:MC"] = {
    spriteBlank: "shield_fsa_mc",
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 5,
      bottom: 3,
    },
  };

  //Wisecota
  shields["FSA:WI"] = {
    spriteBlank: "shield_fsa_wi",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 5,
      bottom: 3,
    },
  };

  //Penquisset
  shields["FSA:PQ"] = {
    spriteBlank: "shield_fsa_pq",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.black,
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 3,
    },
  };
  // Other states as circles for now
  shields["FSA:Z"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:WA"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:TA"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:TN"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:AC"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:HY"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:IL"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:OA"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:PM"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:TI"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:SN"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:NC"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:OQ"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:AG"] = pillShield(Color.shields.white, Color.shields.black);


  // RTC
  shields["FSA:RTC"] = {
    spriteBlank: "shield_fsa_rtc",
    notext: true,
  };
  

// Lutang
shields["Lutang Trunks"] = {
  spriteBlank: "shield_lutang_n",
  textLayout: textConstraint("ellipse"),
  textColor: Color.shields.white,
  padding: {
    left: 2,
    right: 2,
    top: 5,
    bottom: 2,
  },
};

shields["Lutang:N"] = {
  spriteBlank: "shield_lutang_n",
  textLayout: textConstraint("ellipse"),
  textColor: Color.shields.white,
  padding: {
    left: 2,
    right: 2,
    top: 5,
    bottom: 2,
  },
};

shields["Lutang:E"] = hexagonHorizontalShield(
  30,
  Color.shields.yellow,
  Color.shields.black
);

shields["Lutang:WS"] = {
  spriteBlank: "shield_lutang_ws",
  textLayout: textConstraint("ellipse"),
  textColor: Color.shields.black,
  padding: {
    left: 1,
    right: 1,
    top: 1,
    bottom: 4,
  },
};

shields['Lutang:KT'] = {
  spriteBlank: "shield_lutang_kt",
  textLayout: textConstraint("ellipse"),
  textColor: Color.shields.black,
  padding: {
    left: 1,
    right: 10,
    top: 10,
    bottom: 1,
  },
};

shields['Lutang:BB'] = {
  spriteBlank: "shield_lutang_bb",
  textLayout: textConstraint("ellipse"),
  textColor: Color.shields.black,
  padding: {
    left: 2,
    right: 2,
    top: 3,
    bottom: 3,
  },
}

// This needs to be at the bottom

  return {
    networks: shields,
    options: {
      bannerTextColor: Color.palette.black,
      bannerTextHaloColor: Color.backgroundFill,
      bannerHeight: 9,
      bannerPadding: 1,
      shieldFont:
        '"Noto Sans Condensed", "Noto Sans Armenian Condensed", sans-serif-condensed, "Arial Narrow", sans-serif',
      shieldSize: 20,
    },
  };
}
