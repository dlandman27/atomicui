import BASE_SPACING from './base-spacing';

const SEMANTIC_SPACING = {
    xxs: BASE_SPACING['025'],   // Extra Extra Small
    xs: BASE_SPACING['050'],    // Extra Small
    xs_sm: BASE_SPACING['075'], // Extra Small Small
    sm: BASE_SPACING['100'],    // Small
    sm_md: BASE_SPACING['125'], // Small Medium
    md: BASE_SPACING['150'],    // Medium
    md_sm: BASE_SPACING['175'], // Medium Small
    lg: BASE_SPACING['200'],    // Large
    md_lg: BASE_SPACING['225'], // Medium Large
    xl: BASE_SPACING['250'],    // Extra Large
    xxl: BASE_SPACING['300'],   // Extra Extra Large

    negative: {
        xxs: BASE_SPACING['-025'],
        xs: BASE_SPACING['-050'],
        sm: BASE_SPACING['-100'],
        md: BASE_SPACING['-150'],
        lg: BASE_SPACING['-200'],
        xl: BASE_SPACING['-250'],
        xxl: BASE_SPACING['-300'],
    },
};

export default SEMANTIC_SPACING;