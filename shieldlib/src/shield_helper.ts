import { ShieldDefinition, TextLayout } from "./types";

export function roundedRectTextConstraint(radius: number): TextLayout {
  return {
    constraintFunc: "roundedRect",
    options: {
      radius: radius,
    },
  };
}

export function textConstraint(fxn: string): TextLayout {
  return {
    constraintFunc: fxn,
  };
}

/**
 * Draws a shield with an ellipse background
 *
 * @param {*} fillColor - Color of ellipse background fill
 * @param {*} strokeColor - Color of ellipse outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} rectWidth - Width of ellipse (defaults to variable-width)
 * @returns a shield definition object
 */
export function ovalShield(
  fillColor: string,
  strokeColor: string,
  textColor: string,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  return {
    shapeBlank: {
      drawFunc: "ellipse",
      params: {
        fillColor,
        strokeColor,
        rectWidth,
      },
    },
    textLayout: textConstraint("ellipse"),
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
    textColor,
  };
}

/**
 * Draws a shield with circle background (special case of ovalShield)
 *
 * @param {*} fillColor - Color of circle background fill
 * @param {*} strokeColor - Color of circle outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @returns a shield definition object
 */
export function circleShield(
  fillColor: string,
  strokeColor: string,
  textColor: string
): ShieldDefinition {
  return ovalShield(fillColor, strokeColor, textColor, 20);
}

/**
 * Draws a shield with a rectangle background
 *
 * @param {*} fillColor - Color of rectangle background fill
 * @param {*} strokeColor - Color of rectangle outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} rectWidth - Width of rectangle (defaults to variable-width)
 * @param {*} radius - Corner radius of rectangle (defaults to 2)
 * @returns a shield definition object
 */
export function roundedRectShield(
  fillColor: string,
  strokeColor: string,
  textColor: string,
  rectWidth: number,
  radius: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;
  return {
    shapeBlank: {
      drawFunc: "roundedRectangle",
      params: {
        fillColor,
        strokeColor,
        rectWidth,
        radius,
      },
    },
    textLayout: roundedRectTextConstraint(radius),
    padding: {
      left: 3,
      right: 3,
      top: 3,
      bottom: 3,
    },
    textColor,
  };
}

/**
 * Draws a shield with an escutcheon background, pointed downward
 *
 * @param {*} offset - Height of curved portion
 * @param {*} fillColor - Color of escutcheon background fill
 * @param {*} strokeColor - Color of escutcheon outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of escutcheon (defaults to 0)
 * @param {*} rectWidth - Width of escutcheon (defaults to variable-width)
 * @returns a shield definition object
 */
export function escutcheonDownShield(
  offset: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius = radius ?? 0;
  return {
    shapeBlank: {
      drawFunc: "escutcheon",
      params: {
        offset,
        fillColor,
        strokeColor,
        rectWidth,
        radius,
        outlineWidth: 1,
      },
    },
    textLayout: roundedRectTextConstraint(radius),
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 0 + offset / 2,
    },
    textColor,
  };
}

/**
 * Draws a shield with a fishhead background, pointed downward
 *
 * @param {*} fillColor - Color of fishhead background fill
 * @param {*} strokeColor - Color of fishhead outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} rectWidth - Width of fishhead (defaults to variable-width)
 * @returns a shield definition object
 */
export function fishheadDownShield(
  fillColor: string,
  strokeColor: string,
  textColor: string,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  return {
    shapeBlank: {
      drawFunc: "fishhead",
      params: {
        fillColor,
        strokeColor,
        rectWidth,
        outlineWidth: 1,
      },
    },
    textLayout: textConstraint("roundedRect"),
    padding: {
      left: 3,
      right: 3,
      top: 2,
      bottom: 6,
    },
    textColor,
  };
}

/**
 * Draws a shield with a triangle background, pointed downward
 *
 * @param {*} fillColor - Color of triangle background fill
 * @param {*} strokeColor - Color of triangle outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of triangle (defaults to 2)
 * @param {*} rectWidth - Width of triangle (defaults to variable-width)
 * @returns a shield definition object
 */
export function triangleDownShield(
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;

  return {
    shapeBlank: {
      drawFunc: "triangle",
      params: {
        pointUp: false,
        fillColor,
        strokeColor,
        rectWidth,
        radius,
      },
    },
    textLayout: textConstraint("triangleDown"),
    padding: {
      left: 1,
      right: 1,
      top: 2,
      bottom: 1,
    },
    textColor,
  };
}

/**
 * Draws a shield with a trapezoid background, with the short side on bottom
 *
 * @param {*} angle - Angle (in degrees) at which sides deviate from vertical
 * @param {*} fillColor - Color of trapezoid background fill
 * @param {*} strokeColor - Color of trapezoid outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of trapezoid (defaults to 0)
 * @param {*} rectWidth - Width of trapezoid (defaults to variable-width)
 * @returns a shield definition object
 */
export function trapezoidDownShield(
  angle: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  let angleInRadians = (angle * Math.PI) / 180;
  textColor = textColor ?? strokeColor;
  radius = radius ?? 0;

  return {
    shapeBlank: {
      drawFunc: "trapezoid",
      params: {
        angle: angleInRadians,
        fillColor,
        strokeColor,
        rectWidth,
        radius,
      },
    },
    textLayout: roundedRectTextConstraint(radius),
    padding: {
      left: 2 + 10 * Math.tan(angleInRadians),
      right: 2 + 10 * Math.tan(angleInRadians),
      top: 2,
      bottom: 4,
    },
    textColor,
  };
}

/**
 * Draws a shield with a trapezoid background, with the short side on top
 *
 * @param {*} angle - Angle (in degrees) at which sides deviate from vertical
 * @param {*} fillColor - Color of trapezoid background fill
 * @param {*} strokeColor - Color of trapezoid outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of trapezoid (defaults to 0)
 * @param {*} rectWidth - Width of trapezoid (defaults to variable-width)
 * @returns a shield definition object
 */
export function trapezoidUpShield(
  angle: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  let angleInRadians = (angle * Math.PI) / 180;
  textColor = textColor ?? strokeColor;
  radius = radius ?? 0;
  return {
    shapeBlank: {
      drawFunc: "trapezoid",
      params: {
        shortSideUp: true,
        angle: angleInRadians,
        fillColor,
        strokeColor,
        rectWidth,
        radius,
      },
    },
    textLayout: roundedRectTextConstraint(radius),
    padding: {
      left: 2 + 10 * Math.tan(angleInRadians),
      right: 2 + 10 * Math.tan(angleInRadians),
      top: 4,
      bottom: 2,
    },
    textColor,
  };
}

/**
 * Draws a shield with a diamond background
 *
 * @param {*} fillColor - Color of diamond background fill
 * @param {*} strokeColor - Color of diamond outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of diamond (defaults to 2)
 * @param {*} rectWidth - Width of diamond (defaults to variable-width)
 * @returns a shield definition object
 */
export function diamondShield(
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;
  return {
    shapeBlank: {
      drawFunc: "diamond",
      params: {
        fillColor,
        strokeColor,
        radius,
        rectWidth,
      },
    },
    textLayout: textConstraint("diamond"),
    padding: {
      left: 1,
      right: 1,
      top: 1,
      bottom: 1,
    },
    textColor,
  };
}

/**
 * Draws a shield with a pentagon background, pointed upward
 *
 * @param {*} offset - Height of diagonal edges
 * @param {*} angle - Angle (in degrees) at which sides deviate from vertical
 * @param {*} fillColor - Color of pentagon background fill
 * @param {*} strokeColor - Color of pentagon outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius1 - Corner radius of pointed side of pentagon (defaults to 2)
 * @param {*} radius2 - Corner radius of flat side of pentagon (defaults to 0)
 * @param {*} rectWidth - Width of pentagon (defaults to variable-width)
 * @returns a shield definition object
 */
export function pentagonUpShield(
  offset: number,
  angle: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius1: number,
  radius2: number,
  rectWidth: number
): ShieldDefinition {
  let angleInRadians = (angle * Math.PI) / 180;
  textColor = textColor ?? strokeColor;
  radius1 = radius1 ?? 2;
  radius2 = radius2 ?? 0;
  return {
    shapeBlank: {
      drawFunc: "pentagon",
      params: {
        offset: offset,
        angle: angleInRadians,
        fillColor: fillColor,
        strokeColor: strokeColor,
        radius1,
        radius2,
        rectWidth,
      },
    },
    textLayout: {
      constraintFunc: "rect",
    },
    padding: {
      left: 2 + ((20 - offset) * Math.tan(angleInRadians)) / 2,
      right: 2 + ((20 - offset) * Math.tan(angleInRadians)) / 2,
      top: 1 + offset / 2,
      bottom: 3,
    },
    textColor,
  };
}

/**
 * Draws a shield with a home plate background, pointed downward
 *
 * @param {*} offset - Height of diagonal edges
 * @param {*} fillColor - Color of home plate background fill
 * @param {*} strokeColor - Color of home plate outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius1 - Corner radius of pointed side of home plate (defaults to 2)
 * @param {*} radius2 - Corner radius of flat side of home plate (defaults to 2)
 * @param {*} rectWidth - Width of home plate (defaults to variable-width)
 * @returns a shield definition object
 */
export function homePlateDownShield(
  offset: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius1: number,
  radius2: number,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius1 = radius1 ?? 2;
  radius2 = radius2 ?? 2;
  return {
    shapeBlank: {
      drawFunc: "pentagon",
      params: {
        pointUp: false,
        offset,
        angle: 0,
        fillColor,
        strokeColor,
        radius1,
        radius2,
        rectWidth,
      },
    },
    textLayout: roundedRectTextConstraint(radius2),
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 1 + offset,
    },
    textColor,
  };
}

/**
 * Draws a shield with a home plate background, pointed upward
 *
 * @param {*} offset - Height of diagonal edges
 * @param {*} fillColor - Color of home plate background fill
 * @param {*} strokeColor - Color of home plate outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius1 - Corner radius of pointed side of home plate (defaults to 2)
 * @param {*} radius2 - Corner radius of flat side of home plate (defaults to 2)
 * @param {*} rectWidth - Width of home plate (defaults to variable-width)
 * @returns a shield definition object
 */
export function homePlateUpShield(
  offset: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius1: number,
  radius2: number,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius1 = radius1 ?? 2;
  radius2 = radius2 ?? 2;
  return {
    shapeBlank: {
      drawFunc: "pentagon",
      params: {
        pointUp: true,
        offset: offset,
        angle: 0,
        fillColor,
        strokeColor,
        radius1,
        radius2,
        rectWidth,
      },
    },
    textLayout: roundedRectTextConstraint(radius2),
    padding: {
      left: 2,
      right: 2,
      top: 1 + offset,
      bottom: 2,
    },
    textColor,
  };
}

/**
 * Draws a shield with a vertically-aligned hexagon background
 *
 * @param {*} offset - Height of diagonal edges
 * @param {*} fillColor - Color of hexagon background fill
 * @param {*} strokeColor - Color of hexagon outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of hexagon (defaults to 2)
 * @param {*} rectWidth - Width of hexagon (defaults to variable-width)
 * @returns a shield definition object
 */
export function hexagonVerticalShield(
  offset: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;
  return {
    shapeBlank: {
      drawFunc: "hexagonVertical",
      params: {
        offset,
        fillColor,
        strokeColor,
        radius,
        rectWidth,
      },
    },
    textLayout: roundedRectTextConstraint(radius),
    padding: {
      left: 2,
      right: 2,
      top: 1 + offset,
      bottom: 1 + offset,
    },
    textColor,
  };
}

/**
 * Draws a shield with a horizontally-aligned hexagon background
 *
 * @param {*} angle - Angle (in degrees) at which sides deviate from vertical
 * @param {*} fillColor - Color of hexagon background fill
 * @param {*} strokeColor - Color of hexagon outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of hexagon (defaults to 2)
 * @param {*} rectWidth - Width of hexagon (defaults to variable-width)
 * @returns a shield definition object
 */
export function hexagonHorizontalShield(
  angle: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  let angleInRadians = (angle * Math.PI) / 180;
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;
  return {
    shapeBlank: {
      drawFunc: "hexagonHorizontal",
      params: {
        angle: angleInRadians,
        fillColor: fillColor,
        strokeColor: strokeColor,
        radius: radius,
        rectWidth: rectWidth,
      },
    },
    textLayout: textConstraint("ellipse"),
    padding: {
      left: 3,
      right: 3,
      top: 2,
      bottom: 2,
    },
    textColor,
  };
}

/**
 * Draws a shield with an octagon background
 *
 * @param {*} offset - Height of diagonal edges
 * @param {*} angle - Angle (in degrees) at which sides deviate from vertical
 * @param {*} fillColor - Color of octagon background fill
 * @param {*} strokeColor - Color of octagon outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} radius - Corner radius of octagon (defaults to 2)
 * @param {*} rectWidth - Width of octagon (defaults to variable-width)
 * @returns a shield definition object
 */
export function octagonVerticalShield(
  offset: number,
  angle: number,
  fillColor: string,
  strokeColor: string,
  textColor: string,
  radius: number,
  rectWidth: number
): ShieldDefinition {
  let angleInRadians = (angle * Math.PI) / 180;
  textColor = textColor ?? strokeColor;
  radius = radius ?? 2;
  return {
    shapeBlank: {
      drawFunc: "octagonVertical",
      params: {
        offset,
        angle: angleInRadians,
        fillColor,
        strokeColor,
        radius,
        rectWidth,
      },
    },
    textLayout: textConstraint("ellipse"),
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
    textColor,
  };
}

/**
 * Draws a shield with a pill-shaped background
 *
 * @param {*} fillColor - Color of pill background fill
 * @param {*} strokeColor - Color of pill outline stroke
 * @param {*} textColor - Color of text (defaults to strokeColor)
 * @param {*} rectWidth - Width of pill (defaults to variable-width)
 * @returns a shield definition object
 */
export function pillShield(
  fillColor: string,
  strokeColor: string,
  textColor: string,
  rectWidth: number
): ShieldDefinition {
  textColor = textColor ?? strokeColor;
  return {
    shapeBlank: {
      drawFunc: "roundedRectangle",
      params: {
        fillColor,
        strokeColor,
        rectWidth,
        radius: 10,
      },
    },
    textLayout: textConstraint("ellipse"),
    padding: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
    textColor,
  };
}

/**
 * Adds banner text above a shield
 *
 * @param {*} baseDef - Shield definition object
 * @param {*} banners - Array of strings to be displayed above shield
 * @returns a shield definition object
 */
export function banneredShield(
  baseDef: ShieldDefinition,
  banners: string[]
): ShieldDefinition {
  return {
    banners,
    ...baseDef,
  };
}

/**
 * Draws a circle icon inside a black-outlined white square shield
 *
 * @param {*} fillColor - Color of circle icon background fill
 * @param {*} strokeColor - Color of circle icon outline
 * @returns a shield definition object
 */
export function paBeltShield(
  fillColor: string,
  strokeColor: string
): ShieldDefinition {
  return {
    notext: true,
    shapeBlank: {
      drawFunc: "paBelt",
      params: {
        fillColor,
        strokeColor,
      },
    },
  };
}

/**
 * Draws a rectangle icon inside a white-outlined green square shield
 *
 * @param {*} fillColor - Color of rectangle icon background fill
 * @param {*} strokeColor - Color of rectangle icon outline
 * @returns a shield definition object
 */
export function bransonRouteShield(
  fillColor: string,
  strokeColor: string
): ShieldDefinition {
  return {
    notext: true,
    shapeBlank: {
      drawFunc: "branson",
      params: {
        fillColor,
        strokeColor,
      },
    },
  };
}
