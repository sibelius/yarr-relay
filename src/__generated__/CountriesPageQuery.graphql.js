/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountriesPageQueryVariables = {|
  continentCode?: ?string
|};
export type CountriesPageQueryResponse = {|
  +countries: $ReadOnlyArray<{|
    +name: string,
    +code: string,
  |}>
|};
export type CountriesPageQuery = {|
  variables: CountriesPageQueryVariables,
  response: CountriesPageQueryResponse,
|};
*/


/*
query CountriesPageQuery(
  $continentCode: String
) {
  countries(filter: {continent: {eq: $continentCode}}) {
    name
    code
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "continentCode"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "eq",
                "variableName": "continentCode"
              }
            ],
            "kind": "ObjectValue",
            "name": "continent"
          }
        ],
        "kind": "ObjectValue",
        "name": "filter"
      }
    ],
    "concreteType": "Country",
    "kind": "LinkedField",
    "name": "countries",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "code",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CountriesPageQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CountriesPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "54ed218f2f7957373f6a3b9a40fca33a",
    "id": null,
    "metadata": {},
    "name": "CountriesPageQuery",
    "operationKind": "query",
    "text": "query CountriesPageQuery(\n  $continentCode: String\n) {\n  countries(filter: {continent: {eq: $continentCode}}) {\n    name\n    code\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd63019f1a956ca9da9f8cacf5074b97a';

module.exports = node;
