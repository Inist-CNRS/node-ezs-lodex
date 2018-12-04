# A collection of `ezs` functions for Lodex.

This package cannot be used alone. [ezs](https://www.npmjs.com/package/ezs) has to be installed

## Usage

```js
import ezs from 'ezs';
import lodex from 'ezs-lodex';

ezs.use(lodex);

process.stdin
    .pipe(ezs('flattenPatch'))
    .pipe(process.stdout);
```

# Statements

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [convertJsonLdToNQuads](#convertjsonldtonquads)
-   [convertToAtom](#converttoatom)
    -   [Parameters](#parameters)
-   [getContext](#getcontext)
    -   [Parameters](#parameters-1)
-   [convertToExtendedJsonLd](#converttoextendedjsonld)
    -   [Parameters](#parameters-2)
-   [flattenPatch](#flattenpatch)
-   [objects2columns](#objects2columns)

## convertJsonLdToNQuads

Take a JSON-LD object and transform it into NQuads triples.

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## convertToAtom

Generate an atom XML feed from a resources feed, the LODEX configuration and
model.

### Parameters

-   `fields` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** LODEX model (optional, default `{}`)
-   `atomFeed` **Feed** A feed of resources, see [feed](https://github.com/jpmonette/feed) (optional, default `{}`)
-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** LODEX configuration (with `perPage`) (optional, default `{}`)

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## getContext

Create a JSONLD context with prefixes and istexQuery informations in config.json

### Parameters

-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** LODEX configuration (`istexQuery`: `{linked, context}`)
-   `prefixes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Semantic web prefixes (`bibo`, `dcterms`, etc.)

Returns **any** JSONLD context with properties URI

## convertToExtendedJsonLd

Convert the result of an ISTEX query to an extended JSON-LD

### Parameters

-   `data`  
-   `feed`  
-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** LODEX configuration (with `istexQuery`) (optional, default `{}`)
-   `prefixes` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** LOD prefixes (optional, default `{bibo,dbpedia,dcterms,..}`)

## flattenPatch

Take `Object` and transform all key ending byu number on array.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## objects2columns

Take `Object` and ...

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
