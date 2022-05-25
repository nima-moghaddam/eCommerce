import Home from "../pages/index";
import ProductsPage from "./../pages/ProductsPage";
import Page404 from "./../pages/Page404";
import DetailsPage from "./../pages/DetailsPage";
import FavouritesPage from "./../pages/FavouritesPage";
import CartPage from "./../pages/CartPage";

const allRoutes = [
  { path: "*", element: <Page404 /> },
  { path: "/", element: <Home /> },
  { path: "/category/:category_name", element: <ProductsPage /> },
  {
    path: "/details/:product_detail",
    element: <DetailsPage />,
  },
  {
    path: "/favourites",
    element: <FavouritesPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];

export default allRoutes;
