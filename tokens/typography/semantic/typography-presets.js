import BASE_FONT_FAMILIES from './base/font-families';
import BASE_FONT_WEIGHTS from './base/font-weights';
import BASE_FONT_SIZES from './base/font-sizes';
import BASE_LINE_HEIGHTS from './base/line-heights';

// Example of how to create different typography presets
export const TYPOGRAPHY_PRESETS = {
    // Heading presets
    heading: {
        hero: {
            fontFamily: BASE_FONT_FAMILIES.brand.display,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['500'],
            lineHeight: BASE_LINE_HEIGHTS.tight,
        },
        display: {
            fontFamily: BASE_FONT_FAMILIES.brand.primary,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['400'],
            lineHeight: BASE_LINE_HEIGHTS.tight,
        },
        h1: {
            fontFamily: BASE_FONT_FAMILIES.system.sans,
            fontWeight: BASE_FONT_WEIGHTS.bold,
            fontSize: BASE_FONT_SIZES['300'],
            lineHeight: BASE_LINE_HEIGHTS['800'],
        },
        // ... other heading levels
    },
    
    // Body text presets
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
    
    // Special use cases
    code: {
        inline: {
            fontFamily: BASE_FONT_FAMILIES.system.mono,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: '0.9em', // Relative to parent
            lineHeight: 'inherit',
        },
        block: {
            fontFamily: BASE_FONT_FAMILIES.system.mono,
            fontWeight: BASE_FONT_WEIGHTS.regular,
            fontSize: BASE_FONT_SIZES['075'],
            lineHeight: BASE_LINE_HEIGHTS.normal,
        },
    },
};

// Helper function to create custom typography styles
export const createTypographyStyle = ({
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
