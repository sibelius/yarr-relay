import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { RouteRenderer } from "yarr";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { createBrowserRouter, RouterProvider } from "yarr";
import { RelayEnvironment } from "./relay/RelayEnvironment";
import { routes } from "./routes";

const { Suspense } = React;

const router = createBrowserRouter({
  routes,
  awaitComponent: true
});

export function App() {
  return (
    <div className="App">
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={"App loading..."}>
          <RouterProvider router={router}>
            <RouteRenderer
              routeWrapper={({ Route }) => (
                <>
                  <Navbar />
                  <div className="route">{Route}</div>
                </>
              )}
            />
          </RouterProvider>
        </Suspense>
      </RelayEnvironmentProvider>
    </div>
  );
}
