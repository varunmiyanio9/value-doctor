// Public Pages
import Dashboard from '../pages/Dashboard';
import Sow from '../pages/Sow';

// Auth Protected Pages
// N/A

export const NAV_ITEMS = [
	{ path: '/dashboard', name: 'Dashboard' },
	{ path: '/sow', name: 'Sow' },
];

export const publicRoutes = [
	{ path: '/dashboard', component: Dashboard, name: 'Dashboard' },
	{ path: '/sow', component: Sow, name: 'Sow' },
];

export const authProtectedRoutes = [];
