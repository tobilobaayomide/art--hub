import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';

export const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/Marketplace', element: <Marketplace /> },
  { path: '/Auctions', element: <Auctions /> },
  { path: '/Drop', element: <Drop /> },
];
