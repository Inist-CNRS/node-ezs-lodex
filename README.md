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
-   [convertToExtendedJsonLd](#converttoextendedjsonld)
    -   [Parameters](#parameters-1)
-   [Field](#field)
    -   [Properties](#properties)
-   [extractIstexQuery](#extractistexquery)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples)
-   [getParam](#getparam)
-   [flattenPatch](#flattenpatch)
-   [LodexGetCharacteristics](#lodexgetcharacteristics)
    -   [Parameters](#parameters-3)
    -   [Examples](#examples-1)
-   [LodexGetFields](#lodexgetfields)
    -   [Parameters](#parameters-4)
-   [getLastCharacteristic](#getlastcharacteristic)
    -   [Examples](#examples-2)
-   [keyMapping](#keymapping)
    -   [Parameters](#parameters-5)
    -   [Examples](#examples-3)
-   [objects2columns](#objects2columns)
-   [parseNQuads](#parsenquads)
-   [writeTurtle](#writeturtle)
    -   [Examples](#examples-4)

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

## convertToExtendedJsonLd

Convert the result of an ISTEX query to an extended JSON-LD.

Every hit must contain the URI of original lodex resource, linked to the
query.

### Parameters

-   `schemeForIstexQuery` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URI to put between document and resource

## Field

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), any>

### Properties

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The identifier of the field.
-   `scheme` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The semantic property of the field.

## extractIstexQuery

Extract an ISTEX API query.

### Parameters

-   `fields` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Field](#field)>** list of LODEX fields (optional, default `[]`)

### Examples

Output:


```javascript
{
   content: 'fake query',
   lodex: {
      uri: 'http://resource.uri',
  },
}
```

## getParam

## flattenPatch

Take `Object` and transform all key ending byu number on array.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## LodexGetCharacteristics

Return the last characteristics (the dataset covering fields) of a LODEX.

### Parameters

-   `connectionStringURI` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** MongoDB connection string

### Examples

Output:


```javascript
[
  {
    "characteristics": {
      "_id": "5d289071340bb500201b5146",
      "qW6w": "Catégories WOS",
      "ImiI": "Cette table correspond aux catégories Web Of Science.",
      "alRS": "/api/run/syndication",
      "aDLT": "Dans le cadre de l'enrichissement des documents du...",
      "SFvt": "https://enrichment-process.data.istex.fr/ark:/67375/R0H-PWBRNFQ8-H",
      "RzXW": "https://docs.google.com/drawings/d/1LzjO-oD6snh0MYfqxfPB7q-LU6Dev1SRmJstXFGzgvg/pub?w=960&h=720",
      "E4jH": "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
      "MvkG": "Plateforme ISTEX",
      "m7G5": "Inist-CNRS",
      "1TvM": "2016-05-12",
      "WcNl": "2019-01-16",
      "publicationDate": "2019-07-12T13:51:45.129Z"
    }
  }
]
```

## LodexGetFields

Return the fields (the model) of a LODEX.

### Parameters

-   `connectionStringURI` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** MongoDB connection string

## getLastCharacteristic

Get last characteristic (list of all dataset covering fields).

### Examples

Input:


```javascript
[
  {
    "_id" : ObjectId("5ca32c64019f45001d2b602d"),
    "publicationDate" : ISODate("2019-04-02T09:33:24.463Z")
  },
  {
    "_id" : ObjectId("5cee50bb019f45001d2b602f"),
    "publicationDate" : ISODate("2019-05-29T09:28:27.773Z")
  },
  {
    "_id" : ObjectId("5cee5119019f45001d2b6031"),
    "publicationDate" : ISODate("2019-05-29T09:30:01.319Z")
  },
  {
    "_id" : ObjectId("5cee5153019f45001d2b6032"),
    "publicationDate" : ISODate("2019-05-29T09:30:59.770Z")
  },
  {
    "_id" : ObjectId("5cee5160019f45001d2b6033"),
    "publicationDate" : ISODate("2019-05-29T09:31:12.503Z")
  },
  {
    "_id" : ObjectId("5cee530e3e9676001909ba24"),
    "publicationDate" : ISODate("2019-05-29T09:38:22.569Z")
  }
]
```

Output:


```javascript
{
  "_id" : ObjectId("5cee530e3e9676001909ba24"),
  "publicationDate" : ISODate("2019-05-29T09:38:22.569Z")
}
```

Returns **any** 

## keyMapping

Take an object and map its keys to the one in mapping parameters.
Keep keys absent in `from` parameter.

### Parameters

-   `from` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** keys of the input
-   `to` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** matching keys for the output

### Examples

Input:


```javascript
[{
  "dFgH": "Value",
  "AaAa": "Value 2"
}]
```

EZS:


```javascript
[keyMapping]
from = dFgH
to = Title
from = AaAa
to = Description
```

Output


```javascript
[{
  "Title": "Value",
  "Description": "Value 2"
}]
```

Returns **any** Same object with modified keys

## objects2columns

Take `Object` and ...

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## parseNQuads

Take N-Quads string and transform it to Objects.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## writeTurtle

Take quad or prefixes object and return turtle string.

### Examples

Input:


```javascript
[{
   quad: {
     subject: { id: 'http://uri/janedoe' },
     predicate: { id: 'http://schema.org/jobTitle' },
     object: { id: '"Professor"' }
   }
 }, {
     quad: {
     subject: { id: 'http://uri/janedoe' },
     predicate: { id: 'http://schema.org/name' },
     object: { id: '"Jane Doe"' }
   }
 }, {
     quad: {
     subject: { id: 'http://uri/janedoe' },
     predicate: { id: 'http://schema.org/telephone' },
     object: { id: '"(425) 123-4567"' }
     }
 }, {
     quad: {
     subject: { id: 'http://uri/janedoe' },
     predicate: { id: 'http://schema.org/url' },
     object: { id: 'http://www.janedoe.com' }
     }
 }, {
     quad: {
     subject: { id: 'http://uri/janedoe' },
     predicate: { id: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' },
     object: { id: 'http://schema.org/Person' }
     }
 }, { prefixes: {} }
 ]
```

Output:


```javascript
'@prefix schema: <http://schema.org/>.\n'
'@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n'
'\n'
'<http://uri/janedoe> schema:jobTitle "Professor";\n'
'    schema:name "Jane Doe";\n'
'    schema:telephone "(425) 123-4567";\n'
'    schema:url <http://www.janedoe.com>;\n'
'    a schema:Person.\n"'
```

Returns **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** turtle
