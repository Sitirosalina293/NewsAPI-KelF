import Covid from "../../pages/Covid";
import Home from "../../pages/Home";
import Programming from "../../pages/Programming";
import Saved from "../../pages/Saved";
import Cari from "../../pages/Search";
import SearchDetail from "../../pages/Search/searchDetail";

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/programming',
        element: <Programming />,
    },
    {
        path: '/covid',
        element: <Covid />,
    },
    {
        path: '/saved',
        element: <Saved />,
    },
    {
        path: '/search',
        element: <Cari />,
        children: [
            {
                path: ':input',
                element: <SearchDetail />,

            }
        ]
    },
]

export default routes;