
/*
mapping.js
    Maps the semantic color palletes to the UI elements.
    This is the section where all the magic happens.
    By using the color palletes and the UI elements, we can generate the semantic colors.
    This will be the final output of the semantic colors.
*/

import SEMANTIC_COLOR_PALLETES from './semantic-colors'; // Our semantic color palletes

/*
    Step 1: Initialize the MAPPING object.
    This will be the final output of the semantic colors.
*/
const MAPPING = {};

/*
    Step 2: Define the UI elements.
    This will be the UI elements that we will be mapping the semantic colors to.
*/
const UI_ELEMENTS = ['text', 'background', 'elevation', 'button', 'shadow', 'border'];

/*
    Step 3: Dynamically generate mappings for the UI elements.
    This will be the final output of the semantic colors.
    Update the MAPPING object with the semantic colors you want to use.
*/
for (const element of UI_ELEMENTS) {
    MAPPING[element] = {};

    if (element === 'text') {
        MAPPING[element].default = SEMANTIC_COLOR_PALLETES.neutral['700'] || '#000000'; // Fallback color
        MAPPING[element].dark = SEMANTIC_COLOR_PALLETES.neutral['950'] || '#000000'; // Fallback color
        MAPPING[element].brand = SEMANTIC_COLOR_PALLETES.brand['500'] || '#007BFF'; // Fallback color
        MAPPING[element].accent = SEMANTIC_COLOR_PALLETES.accent['600'] || '#007BFF'; // Fallback color
        MAPPING[element].danger = SEMANTIC_COLOR_PALLETES.error?.['500'] || '#FF0000'; // Fallback color
        MAPPING[element].warning = SEMANTIC_COLOR_PALLETES.warning?.['500'] || '#FFA500'; // Fallback color
        MAPPING[element].success = SEMANTIC_COLOR_PALLETES.success?.['500'] || '#008000'; // Fallback color
        MAPPING[element].info = SEMANTIC_COLOR_PALLETES.info?.['500'] || '#0000FF'; // Fallback color
        MAPPING[element].disabled = SEMANTIC_COLOR_PALLETES.neutral?.['500'] || '#000000'; // Fallback color
    } else if (element === 'background') {
        MAPPING[element].default = SEMANTIC_COLOR_PALLETES.neutral?.['50'] || '#FFFFFF'; // Fallback color
        MAPPING[element].default = SEMANTIC_COLOR_PALLETES.neutral?.['50'] || '#FFFFFF'; // Fallback color
        MAPPING[element].danger = SEMANTIC_COLOR_PALLETES.error?.['500'] || '#FF0000'; // Fallback color
        MAPPING[element].warning = SEMANTIC_COLOR_PALLETES.warning?.['500'] || '#FFA500'; // Fallback color
        MAPPING[element].success = SEMANTIC_COLOR_PALLETES.success?.['500'] || '#008000'; // Fallback color
        MAPPING[element].info = SEMANTIC_COLOR_PALLETES.info?.['500'] || '#0000FF'; // Fallback color
    } else if (element === 'button') {
        MAPPING[element].default = SEMANTIC_COLOR_PALLETES.brand?.['700'] || '#007BFF'; // Fallback color
        MAPPING[element].dark = SEMANTIC_COLOR_PALLETES.brand?.['900'] || '#007BFF'; // Dark color
        MAPPING[element].brand = SEMANTIC_COLOR_PALLETES.brand?.['400'] || '#007BFF'; // Fallback color
        MAPPING[element].accent = SEMANTIC_COLOR_PALLETES.accent?.['600'] || '#007BFF'; // Fallback color
        MAPPING[element].danger = SEMANTIC_COLOR_PALLETES.error?.['500'] || '#FF0000'; // Fallback color
        MAPPING[element].warning = SEMANTIC_COLOR_PALLETES.warning?.['500'] || '#FFA500'; // Fallback color
        MAPPING[element].success = SEMANTIC_COLOR_PALLETES.success?.['500'] || '#008000'; // Fallback color
        MAPPING[element].info = SEMANTIC_COLOR_PALLETES.info?.['500'] || '#0000FF'; // Fallback color
        
    } else if (element === 'shadow') {
        MAPPING[element].default = SEMANTIC_COLOR_PALLETES.brand?.['500'] || '#007BFF'; // Fallback color
        MAPPING[element].dark = SEMANTIC_COLOR_PALLETES.brand?.['500'] || '#007BFF'; // Fallback color
        MAPPING[element].brand = SEMANTIC_COLOR_PALLETES.brand?.['500'] || '#007BFF'; // Fallback color
        MAPPING[element].accent = SEMANTIC_COLOR_PALLETES.accent?.['600'] || '#007BFF'; // Fallback color
        MAPPING[element].danger = SEMANTIC_COLOR_PALLETES.error?.['500'] || '#FF0000'; // Fallback color
        MAPPING[element].warning = SEMANTIC_COLOR_PALLETES.warning?.['500'] || '#FFA500'; // Fallback color
        MAPPING[element].success = SEMANTIC_COLOR_PALLETES.success?.['500'] || '#008000'; // Fallback color
        MAPPING[element].info = SEMANTIC_COLOR_PALLETES.info?.['500'] || '#0000FF'; // Fallback color
    } else if (element === 'elevation') {
        MAPPING[element].level0 = SEMANTIC_COLOR_PALLETES.neutral?.['50'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level1 = SEMANTIC_COLOR_PALLETES.neutral?.['100'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level2 = SEMANTIC_COLOR_PALLETES.neutral?.['200'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level3 = SEMANTIC_COLOR_PALLETES.neutral?.['300'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level4 = SEMANTIC_COLOR_PALLETES.neutral?.['400'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level5 = SEMANTIC_COLOR_PALLETES.neutral?.['500'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level6 = SEMANTIC_COLOR_PALLETES.neutral?.['600'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level7 = SEMANTIC_COLOR_PALLETES.neutral?.['700'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level8 = SEMANTIC_COLOR_PALLETES.neutral?.['800'] || '#FFFFFF'; // Fallback color
        MAPPING[element].level9 = SEMANTIC_COLOR_PALLETES.neutral?.['900'] || '#FFFFFF'; // Fallback color
    } else if (element === 'border') {
        MAPPING[element].default = SEMANTIC_COLOR_PALLETES.neutral?.['400'] || '#FFFFFF'; // Fallback color
        MAPPING[element].dark = SEMANTIC_COLOR_PALLETES.neutral?.['600'] || '#FFFFFF'; // Fallback color
        MAPPING[element].light = SEMANTIC_COLOR_PALLETES.neutral?.['300'] || '#FFFFFF'; // Fallback color
        MAPPING[element].brand = SEMANTIC_COLOR_PALLETES.brand?.['500'] || '#007BFF'; // Fallback color
        MAPPING[element].accent = SEMANTIC_COLOR_PALLETES.accent?.['600'] || '#007BFF'; // Fallback color
        MAPPING[element].danger = SEMANTIC_COLOR_PALLETES.error?.['500'] || '#FF0000'; // Fallback color
        MAPPING[element].warning = SEMANTIC_COLOR_PALLETES.warning?.['500'] || '#FFA500'; // Fallback color
        MAPPING[element].success = SEMANTIC_COLOR_PALLETES.success?.['500'] || '#008000'; // Fallback color
        MAPPING[element].info = SEMANTIC_COLOR_PALLETES.info?.['500'] || '#0000FF'; // Fallback color
    }
}






export default MAPPING;