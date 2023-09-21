// Public Pages
import Dashboard from '../pages/Dashboard';
import Sow from '../pages/Sow';
import Inputs from '../pages/Inputs';

// Auth Protected Pages
// N/A

export const NAV_ITEMS = [
	{ path: '/dashboard', name: 'Dashboard' },
	{ path: '/sow', name: 'Sow' },
	{ path: '/sow', name: 'Sow' },
];

export const publicRoutes = [
	{ path: '/dashboard', component: Dashboard, name: 'Dashboard' },
	{ path: '/sow', component: Sow, name: 'Sow' },
	{ path: '/inputs', component: Inputs, name: 'Inputs' },
];

export const authProtectedRoutes = [];
