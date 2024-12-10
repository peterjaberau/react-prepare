import { BrowserRouter, Routes, Route } from "react-router-dom"
import { availableRoutes } from "./initialConfig.tsx"

const generateRoutes = (routes: any) => {
  return routes.map((route: any, index: any) => {
    if (route.children) {
      return (
        <Route key={index} path={route.path} element={route.element}>
          {generateRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={index} path={route.path} element={route.element} />;
  });
};

export const RoutesGenerator = () => {
  return (
    <BrowserRouter>
      <Routes>
        {generateRoutes(availableRoutes)}
      </Routes>
    </BrowserRouter>
  )
}
