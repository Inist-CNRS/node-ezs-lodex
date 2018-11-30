import flattenPatch from './flatten-patch';
import objects2columns from './objects2columns';
import convertJsonLdToNQuads from './convertJsonLdToNQuads';
import convertToAtom from './convertToAtom';
import convertToExtendedJsonLd from './convertToExtendedJsonLd';

export default {
    flattenPatch,
    objects2columns,
    convertJsonLdToNQuads,
    convertToAtom,
    convertToExtendedJsonLd,
    // aliases
    fixFlatten: flattenPatch.flattenPatch,
};
