import BASE_FONT_FAMILIES from './base/font-families';
import BASE_FONT_WEIGHTS from './base/font-weights';
import BASE_FONT_SIZES from './base/font-sizes';
import BASE_LINE_HEIGHTS from './base/line-heights';

// Export base tokens for direct access if needed
const TYPOGRAPHY_BASE = {
    FAMILIES: BASE_FONT_FAMILIES,
    WEIGHTS: BASE_FONT_WEIGHTS,
    SIZES: BASE_FONT_SIZES,
    LINE_HEIGHTS: BASE_LINE_HEIGHTS,
};

// Define the typography system
export const TYPOGRAPHY = {
    heading: {
        xxlarge: {
            fontFamily: BASE_FONT_FAMILIES.brand.primary,
            fontSize: BASE_FONT_SIZES['200'],
            fontWeight: BASE_FONT_WEIGHTS.bold,
            lineHeight: BASE_LINE_HEIGHTS['800'],
        },
        xlarge: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontSize: BASE_FONT_SIZES['175'],
            fontWeight: BASE_FONT_WEIGHTS.bold,
            lineHeight: BASE_LINE_HEIGHTS['700'],
        },
        large: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['150'],
            lineHeight: BASE_LINE_HEIGHTS['600'],
        },
        medium: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['125'],
            lineHeight: BASE_LINE_HEIGHTS['500'],
        },
        small: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.semibold,
            fontSize: BASE_FONT_SIZES['100'],
            lineHeight: BASE_LINE_HEIGHTS['400'],
        },
        xsmall: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['75'],
            lineHeight: BASE_LINE_HEIGHTS['400'],
        },
        xxsmall: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['50'],
            lineHeight: BASE_LINE_HEIGHTS['300'],
        },
    },
    
    body: {
        large: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: BASE_FONT_SIZES['125'],
            lineHeight: BASE_LINE_HEIGHTS.normal,
        },
        default: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: BASE_FONT_SIZES['100'],
            lineHeight: BASE_LINE_HEIGHTS.normal,
        },
        small: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: BASE_FONT_SIZES['075'],
            lineHeight: BASE_LINE_HEIGHTS.normal,
        },
    },
    
    code: {
        inline: {
            fontFamily: BASE_FONT_FAMILIES.system.mono,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: '0.9em',
            lineHeight: 'inherit',
        },
        block: {
            fontFamily: BASE_FONT_FAMILIES.system.mono,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: BASE_FONT_SIZES['075'],
            lineHeight: BASE_LINE_HEIGHTS.normal,
        },
    },
    
    // Additional text styles
    display: {
        large: {
            fontFamily: BASE_FONT_FAMILIES.brand.display,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['400'],
            lineHeight: BASE_LINE_HEIGHTS.tight,
        },
        medium: {
            fontFamily: BASE_FONT_FAMILIES.brand.display,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['300'],
            lineHeight: BASE_LINE_HEIGHTS.tight,
        },
        small: {
            fontFamily: BASE_FONT_FAMILIES.brand.display,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['200'],
            lineHeight: BASE_LINE_HEIGHTS.tight,
        },
    },
};

// Helper function to create custom typography styles
const createTypographyStyle = ({
    family = BASE_FONT_FAMILIES.system.sans,
    weight = BASE_FONT_WEIGHTS.regular,
    size = BASE_FONT_SIZES['100'],
    lineHeight = BASE_LINE_HEIGHTS.normal,
    ...additionalStyles
}) => ({
    fontFamily: family,
    fontWeight: weight,
    fontSize: size,
    lineHeight,
    ...additionalStyles,
});

// export default TYPOGRAPHY;
