import flattenPatch from './flatten-patch';
import objects2columns from './objects2columns';
import convertJsonLdToNQuads from './convertJsonLdToNQuads';
import convertToAtom from './convertToAtom';

export default {
    flattenPatch,
    objects2columns,
    convertJsonLdToNQuads,
    convertToAtom,
    // aliases
    fixFlatten: flattenPatch.flattenPatch,
};
