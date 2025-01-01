// Base units for the design system.
// WSP (Wiigit Spacing Unit) - for spacing and layout
// WTP (Wiigit Typography Unit) - for font sizes

const spacing_unit = 8;  // 8px base for spacing
const type_unit = 4;     // 4pt base for typography

// WSP(1) = 8px, or 0.5rem
// WSP(n) = n * 8px, or n * 0.5rem
const WSP = (multiplier) => `${multiplier * spacing_unit}`;

// WTP(1) = 4px or 0.25rem
// WTP(4) = 16px (base font size)
// WTP(n) = n * 4px or n * 0.25rem
const WTP = (multiplier) => `${multiplier * type_unit}`;

export { WSP, WTP };
