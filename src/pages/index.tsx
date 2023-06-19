import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes as Views } from "./routes";

export const Pages = () => {
  return (
    <Routes>
      {Views.map((view) => (
        <Route
          key={view.path}
          path={view.path}
          element={
            <Suspense fallback={<div>...</div>}>
              <view.element />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
