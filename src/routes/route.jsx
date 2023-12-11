import { lazy } from "react";
import {
	Route,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";
const RootLayout = lazy(() => import("./../layout/RootLayout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Works = lazy(() => import("../pages/Works"));

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route
				index
				element={
						<Home />
				}
			/>
			<Route path="/about" element={<About />} />
			<Route path="/works" element={<Works />} />
		</Route>
	)
);

export default router;

