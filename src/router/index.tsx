import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import { Home, Details } from '../pages';

const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" index element={<Home />} />
				<Route path="/:id" element={<Details />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default Router;
