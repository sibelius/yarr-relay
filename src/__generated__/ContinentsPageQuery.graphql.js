/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContinentsPageQueryVariables = {||};
export type ContinentsPageQueryResponse = {|
  +continents: $ReadOnlyArray<{|
    +code: string,
    +name: string,
  |}>
|};
export type ContinentsPageQuery = {|
  variables: ContinentsPageQueryVariables,
  response: ContinentsPageQueryResponse,
|};
*/


/*
query ContinentsPageQuery {
  continents {
    code
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Continent",
    "kind": "LinkedField",
    "name": "continents",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "code",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContinentsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContinentsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "90912bfdd5e691011d6bc393bea3040a",
    "id": null,
    "metadata": {},
    "name": "ContinentsPageQuery",
    "operationKind": "query",
    "text": "query ContinentsPageQuery {\n  continents {\n    code\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd113bdbc25fe72eec937b791860a25d7';

module.exports = node;
