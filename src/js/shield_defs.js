
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

  //FS Routes

  shields["FSA:FS"] = {
    spriteBlank: ["shield_fsa_fs_2", "shield_fsa_fs_3"],
    textLayout: textConstraint("ellipse"),
    textColor: "#880000",
    padding: {
      left: 2,
      right: 2,
      top: 3,
      bottom: 2,
    },
  };

  shields["FSA:FS:Bus"] = {
    spriteBlank: ["shield_fsa_fsbus_2", "shield_fsa_fsbus_3"],
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 3,
      bottom: 2,
    },
    //"banners": ["BUS"],
    //"bannerTextColor": Color.shields.green,
    //"bannerTextHaloColor": "#FFF",
  };

  shields["FSA:FS:Toll"] = banneredShield(shields["FSA:FS"], ["TOLL"]);


  // Tempache
  shields["FSA:TM"] = homePlateDownShield(
    5,
    Color.shields.white,
    Color.shields.black
  );
  shields["FSA:TM:Spur"] = banneredShield(shields["FSA:TM"], ["SPUR"]);
  shields["FSA:TM:Bus"] = banneredShield(shields["FSA:TM"], ["BUS"]);
  shields["FSA:TM:Turnpike"] = {
    spriteBlank: "shield_fsa_tm_tp",
    notext: true,
  };


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
  shields["FSA:ME:HMR"] = {
    spriteBlank: "shield_fsa_me_hmr",
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 10,
      bottom: 1,
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
  shields["FSA:Makaska State Highways"] = {
    spriteBlank: "shield_fsa_mk",
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 5,
      bottom: 4,
    },
  };
  shields["FSA:MK:ALT"] = banneredShield(shields["FSA:MK"], ["ALT"]);

  //Michisaukee
  shields["FSA:MC"] = {
    spriteBlank: "shield_fsa_mc",
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 6,
      bottom: 3,
    },
  };
  shields["FSA:MC:Bus"] = banneredShield(shields["FSA:MC"], ["BUS"]);

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
  shields["FSA:WIS"] = homePlateDownShield(
    5,
    Color.shields.white,
    Color.shields.black
  );

  //Penquisset
  shields["FSA:PQ"] = {
    spriteBlank: "shield_fsa_pq",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 2,
      bottom: 6,
    },
  };
  shields["FSA:PQ:ALT"] = {
    spriteBlank: "shield_fsa_pq_alt",
    textLayout: textConstraint("ellipse"),
    textColor: Color.shields.white,
    padding: {
      left: 4,
      right: 4,
      top: 2,
      bottom: 6,
    },
    "banners": ["ALT"],
    "bannerTextColor": "#000",
    "bannerTextHaloColor": "#FFF",
  };

  //Zakahigan
  shields["FSA:Z"] = {
    spriteBlank: "shield_fsa_z",
    textColor: "#00292d",
    padding: {
      left: 3,
      right: 3,
      top: 14,
      bottom: 4,
    },
  };

  //Hyde
  shields["FSA:HY"] = {
    spriteBlank: "shield_fsa_hy",
    textColor: "#000000",
    padding: {
      left: 6,
      right: 8,
      top: 6,
      bottom: 8,
    },
  };
  shields["FSA:TI"] = {
    spriteBlank: "shield_fsa_hy",
    textColor: "#000000",
    padding: {
      left: 6,
      right: 8,
      top: 6,
      bottom: 8,
    },
  };
  shields["FSA:HYC"] = {
    spriteBlank: "shield_fsa_hy_cty",
    textColor: "#000000",
    padding: {
      left: 2,
      right: 2,
      top: 8,
      bottom: 2,
    },
  };
  shields["FSA:HYE"] = {
    spriteBlank: "shield_fsa_hy_exp",
    textColor: "#00894b",
    padding: {
      left: 6,
      right: 8,
      top: 6,
      bottom: 8,
    },
  };
  shields["FSA:HYW"] = {
    spriteBlank: "shield_fsa_hy_hydeway",
    textColor: "#938b33",
    padding: {
      left: 6,
      right: 8,
      top: 6,
      bottom: 8,
    },
  };
  shields["FSA:HY:ALT"] = banneredShield(shields["FSA:HY"], ["ALT"]);


  //Ruppacke
  shields["FSA:AG"] = {
    spriteBlank: ["shield_fsa_ag_2", "shield_fsa_ag_3"],
    textColor: "#004a7f",
    padding: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 2,
    },
  };
  shields["FSA:RP"] = {
    spriteBlank: ["shield_fsa_ag_2", "shield_fsa_ag_3"],
    textColor: "#004a7f",
    padding: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 2,
    },
  };

  //Illuvia
  shields["FSA:IL"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:IL:Bus"] = banneredShield(shields["FSA:IL"], ["BUS"]);


  //Wychelle 
  shields["FSA:WY"] = {
    spriteBlank: "shield_fsa_wy",
    textColor: "#d4aa00",
    padding: {
      left: 4,
      right: 4,
      top: 2,
      bottom: 8,
    },
  };
  shields["FSA:AQ"] = {
    spriteBlank: "shield_fsa_wy",
    textColor: "#d4aa00",
    padding: {
      left: 4,
      right: 4,
      top: 2,
      bottom: 8,
    },
  };

  //Alcortez
  shields["FSA:AC"] = {
    spriteBlank: "shield_fsa_ac",
    textColor: "#00894b",
    padding: {
      left: 2,
      right: 1,
      top: 9,
      bottom: 1,
    },
  };

  //Minnonigan
  shields["FSA:MINN"] = {
    spriteBlank: ["shield_fsa_mn_2", "shield_fsa_mn_3"],
    textColor: Color.shields.white,
    padding: {
      left: 6,
      right: 2,
      top: 6,
      bottom: 3,
    },
  };
  shields["FSA:MINN:Toll"] = {
    spriteBlank: "shield_fsa_mn_tp",
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 6,
      bottom: 2.5,
    },
  };

  //Eustacia as Oregon
  shields["FSA:EU"] = {
    spriteBlank: ["shield_us_or_2", "shield_us_or_3"],
    textColor: Color.shields.blue,
    colorLighten: Color.shields.blue,
    textLayout: textConstraint("ellipse"),
    padding: {
      left: 1,
      right: 1,
      top: 1,
      bottom: 4,
    },
  };

  //Tennewa
  shields["FSA:TE"] = {
    spriteBlank: "shield_fsa_te",
    textColor: "#203d1c",
    padding: {
      left: 2,
      right: 7,
      top: 6,
      bottom: 8,
    },
  };
  shields["FSA:TN"] = {
    spriteBlank: "shield_fsa_te",
    textColor: "#203d1c",
    padding: {
      left: 2,
      right: 7,
      top: 6,
      bottom: 8,
    },
  };

  //Oakley
  shields["FSA:OA"] = {
    spriteBlank: "shield_fsa_oa",
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 10,
      bottom: 10,
    },
  };

  //New Carnaby
  shields["FSA:NC"] = {
    spriteBlank: ["shield_fsa_nc"],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 4,
      bottom: 4,
    }
  };

  //Passitania
  shields["FSA:PS"] = {
    spriteBlank: ["shield_fsa_ps", "shield_fsa_ps_3"],
    textColor: Color.shields.black,
    padding: {
      left: 3,
      right: 3,
      top: 10,
      bottom: 10,
    }
  };
  shields["FSA:PS:TOLL"] = banneredShield(shields["FSA:PS"], ["TOLL"]);  

  //Rougemont
  shields["FSA:RM"] = diamondShield(
    Color.shields.white,
    Color.shields.black,
    Color.shields.black,
    2,
    24
  );
  shields["FSA:RM:Alt"] = banneredShield(shields["FSA:RM"], ["ALT"]);

  //Des Plaines
  shields["FSA:DP"] = {
    spriteBlank: ["shield_fsa_dp_2", "shield_fsa_dp_3"],
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 3,
      bottom: 8,
    },
  };

  //Opelika
  shields["FSA:OP"] = {
    spriteBlank: ["shield_fsa_op_2", "shield_fsa_op_3"],
    textColor: Color.shields.black,
    padding: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 2,
    },
  };
  
  //Pass 
  shields["FSA:PA"] = {
    spriteBlank: "shield_fsa_pa",
    textColor: Color.shields.black,
    padding: {
      left: 4,
      right: 4,
      top: 2,
      bottom: 10,
    },
  };

    //Orange Coast
  shields["FSA:OC"] = {
    spriteBlank: "shield_fsa_oc",
    textColor: Color.shields.white,
    padding: {
      left: 2,
      right: 2,
      top: 6,
      bottom: 2,
    },
  };




  // Other states as circles for now
  shields["FSA:WA"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:TA"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:PM"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:SN"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:OQ"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:WS"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:LN"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:FL"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:TJ"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:IR"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:EW"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:DI"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:WH"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:OG"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:OT"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:CN"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:M"] = pillShield(Color.shields.white, Color.shields.black);
  shields["FSA:MG"] = pillShield(Color.shields.white, Color.shields.black);


  // County
  shields["FSA:CR"] = pentagonUpShield(
    3,
    15,
    Color.shields.blue,
    Color.shields.yellow
  )


  // RTC
  shields["FSA:RTC"] = {
    spriteBlank: "shield_fsa_rtc",
    notext: true,
  };

// Deodeca
shields["DEO:TDH"] = {
  spriteBlank: ["shield_deo_tdh_1","shield_deo_tdh_2"],
  textColor: Color.shields.white,
  padding: {
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
  },
};

shields["Deodeca:TDH"] = {
  spriteBlank: ["shield_deo_tdh_1","shield_deo_tdh_2"],
  textColor: Color.shields.white,
  padding: {
    left: 1,
    right: 1,
    top: 1,
    bottom: 1,
  },
};


//Ouanatchkan
shields["DEO:OA"] = {
  spriteBlank: ["shield_deo_oa_1","shield_deo_oa_2","shield_deo_oa_3"],
  textColor: Color.shields.white,
  padding: {
    left: 1,
    right: -2,
    top: 1,
    bottom: -2,
  },
};

//Agawaskway
shields["Deodeca:AA"] = {
  spriteBlank: ["shield_deo_aa"],
  textColor: Color.shields.white,
  padding: {
    left: 1,
    right: 1,
    top: 0,
    bottom: 2,
  },
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

// Navenna

shields["NA:A"] = roundedRectShield(
  "#c20114",
  Color.shields.white
);

shields["NA:N"] = roundedRectShield(
  "#ffbd00",
  Color.shields.black
);

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
