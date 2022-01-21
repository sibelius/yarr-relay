import { loadQuery } from "react-relay/hooks";
import { RelayEnvironment } from "./RelayEnvironment";

export const loadQueryWithEnvironment = async (query, variables) => {
  return loadQuery(RelayEnvironment, query, variables);
};
