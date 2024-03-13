import Home from "./Pages/Home/Home";
import Root from "./Pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cerate from "./Pages/Cerate/Cerate";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Cerate />} />
      <Route path="*" element={<NotFound />} />
      
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
