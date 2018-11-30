import flattenPatch from './flatten-patch';
import objects2columns from './objects2columns';
import convertJsonLdToNQuads from './convertJsonLdToNQuads';
import convertToAtom from './convertToAtom';
import convertToExtendedJsonLd from './convertToExtendedJsonLd';
import convertToJson from './convertToJson';
import convertToSitemap from './convertToSitemap';
import extractIstexQuery from './extractIstexQuery';
import filterContributions from './filterContributions';
import filterVersions from './filterVersions';

export default {
    flattenPatch,
    objects2columns,
    convertJsonLdToNQuads,
    convertToAtom,
    convertToExtendedJsonLd,
    convertToJson,
    convertToSitemap,
    extractIstexQuery,
    filterContributions,
    filterVersions,
    // aliases
    fixFlatten: flattenPatch.flattenPatch,
};
