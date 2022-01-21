import CountriesPageQuery from "./__generated__/CountriesPageQuery.graphql";
import ContinentsPageQuery from "./__generated__/ContinentsPageQuery.graphql";
import { RelayEnvironment } from "./relay/RelayEnvironment";
import { loadQuery } from "react-relay/hooks";

export const routes = [
  {
    component: async () => {
      const module = await import("./pages/Continents");

      return module.ContinentsPage;
    },
    path: "/continents",
    preload: () => ({
      query: loadQuery(RelayEnvironment, ContinentsPageQuery, {})
    })
  },
  {
    component: async () => {
      const module = await import("./pages/Countries");

      return module.CountriesPage;
    },
    path: "/continent/:continentCode/countries",
    preload: ({ continentCode }) => ({
      query: loadQuery(RelayEnvironment, CountriesPageQuery, { continentCode })
    })
  },
  {
    component: async () => {
      const module = await import("./pages/Languages");

      return module.LanguagesPage;
    },
    path: "/languages"
  },
  {
    component: async () => {
      const module = await import("./pages/Home");

      return module.HomePage;
    },
    path: "/"
  },
  {
    component: async () => {
      const module = await import("./pages/NotFound");

      return module.NotFoundPage;
    },
    path: "*"
  }
];
