import flattenPatch from './flatten-patch';
import objects2columns from './objects2columns';
import convertJsonLdToNQuads from './convertJsonLdToNQuads';
import convertToAtom from './convertToAtom';
import convertToExtendedJsonLd from './convertToExtendedJsonLd';
import convertToJson from './convertToJson';
import convertToSitemap from './convertToSitemap';

export default {
    flattenPatch,
    objects2columns,
    convertJsonLdToNQuads,
    convertToAtom,
    convertToExtendedJsonLd,
    convertToJson,
    convertToSitemap,
    // aliases
    fixFlatten: flattenPatch.flattenPatch,
};
