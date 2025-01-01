const BASE_LINE_HEIGHTS = {
    // Multiplier values
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
    
    // Fixed values (in pixels)
    '300': 16,    // For xxsmall (12px font -> 16px line height)
    '400': 20,    // For xsmall/small (14px/16px font -> 20px line height)
    '500': 24,    // For medium (20px font -> 24px line height)
    '600': 28,    // For large (24px font -> 28px line height)
    '700': 32,    // For xlarge (28px font -> 32px line height)
    '800': 36,    // For xxlarge (32px font -> 36px line height)
    '900': 36     // Keeping this as is, could be removed if not needed
};

export default BASE_LINE_HEIGHTS;
