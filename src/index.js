import flattenPatch from './flatten-patch';
import objects2columns from './objects2columns';
import convertJsonLdToNQuads from './convertJsonLdToNQuads';

export default {
    flattenPatch,
    objects2columns,
    convertJsonLdToNQuads,
    // aliases
    fixFlatten: flattenPatch.flattenPatch,
};
