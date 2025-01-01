/*
Title: semantic-colors.js
Description: Semantic colors are a set of colors that are used to convey meaning and context in a user interface. 
            They are often used to represent different states, such as success, error, warning, and info. 
            These colors are typically used consistently throughout an application to provide a clear and intuitive visual language.
*/

import BASE_COLORS from './base-colors';

/* 
    Step 1: Define the color palletes for the semantic colors.
    
    Base Colors are the colors that are used to create the design system.
    By defining the Base Colors, we can create the Semantic Colors.
    Adding a color to the Base Colors will automatically add the color to the Semantic Colors.
    The Colors are:
    ________________________________________________________________
    | BRAND    | The Main Brand Color
    | ACCENT   | The Main Accent Color
    | INFO     | Represents information or a neutral state
    | SUCCESS  | Indicates a successful action or outcome
    | WARNING  | Alerts the user to a potential issue or caution
    | ERROR    | Highlights an error or critical issue
    | NEUTRAL  | Used for backgrounds and text elements
    | TEXT     | The primary color for text content
    |__________|____________________________________________________
*/
    // Step 1.1: Define the color pallete for the brand color.
    // These colors will be mapped to the UI elements.
    const BRAND_COLOR_PALLETE = BASE_COLORS.brandPrimary; // Primary brand color, used for more important UI elements like links, buttons, etc.
    const ACCENT_COLOR_PALLETE = BASE_COLORS.brandSecondary; // Secondary brand color, used for buttons, navigation, etc.
    const INFO_COLOR_PALLETE = BASE_COLORS.blue; // Info color
    const SUCCESS_COLOR_PALLETE = BASE_COLORS.green; // Success color
    const WARNING_COLOR_PALLETE = BASE_COLORS.orange; // Warning color
    const ERROR_COLOR_PALLETE = BASE_COLORS.red;
    
    // Step 1.2: Define the color pallete for the neutral color.
    // This will not be mapped to any UI elements, but will be used for its own purposes.
    const NEUTRAL_COLOR_PALLETE = BASE_COLORS.beige;

    const SEMANTIC_COLOR_PALLETES = {
        brand: BRAND_COLOR_PALLETE,
        accent: ACCENT_COLOR_PALLETE,
        info: INFO_COLOR_PALLETE,
        success: SUCCESS_COLOR_PALLETE,
        warning: WARNING_COLOR_PALLETE,
        error: ERROR_COLOR_PALLETE,
        neutral: NEUTRAL_COLOR_PALLETE,
    }


/*
    Step 2: Define the semantic colors for the UI elements and contextual roles.
    In this section, we will define the semantic colors for the UI elements and contextual roles.
    By adding a new UI Element here, it will automatically add the color to the semantic color pallete.
    For example if you were to make a new element called "accordion"
        You would be able to access colors such as:
        TOKENS.COLORS.accordion.default
        TOKENS.COLORS.accordion.primary
        TOKENS.COLORS.accordion.secondary
        TOKENS.COLORS.accordion.brand
    The mapping includes:
    ________________________________________________________________
    | UI ELEMENT  | CONTEXTUAL ROLE
    | Buttons     | Primary actions, secondary actions, and disabled states
    | Links       | Navigation, calls-to-action, and informational links
    | Alerts      | Success, error, warning, and info notifications
    | Backgrounds | Page backgrounds, section backgrounds, and hover states
    | Text        | Primary text, secondary text, and disabled text
    |_____________|__________________________________________________
*/
    // const UI_ELEMENTS = ['button', 'link', 'alert', 'background', 'text'];

/*
    Step 3: Generate the Semantic Colors.
    This is the section where all the magic happens.
    By using the color palletes and the UI elements, we can generate the semantic colors.
    This will be the final output of the semantic colors.
        Formula:
        const SEMANTIC_COLOR_PALLETE = COLOR_PALLETES(UI_ELEMENTS);
*/
    // const SEMANTIC_COLORS = {};
    
    // for (const element of UI_ELEMENTS) {
    //     for (const color in COLOR_PALLETES) {
    //         SEMANTIC_COLORS[element] = COLOR_PALLETES[color][500];
    //     }
    // }

export default SEMANTIC_COLOR_PALLETES;