import Admin from "./pages/Admin";
import {ADMIN_ROUTE, RENT_ROUTE, TS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ASSORT_ROUTE} from "./utils/consts";
import Rent from "./pages/Rent";
import Assort from "./pages/Assort";
import Auth from "./pages/Auth";
import TransPage from "./pages/TransPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: RENT_ROUTE + '/:id',
        Component: Rent
    },
]

export const publicRoutes = [
    {
        path: ASSORT_ROUTE,
        Component: Assort
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TS_ROUTE + '/:id',
        Component: TransPage
    },
]
