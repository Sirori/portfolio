import router from "./routes/route";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<div className="App">
						<Suspense fallback="..loading">
							<RouterProvider router={router} />
						</Suspense>
					</div>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</HelmetProvider>
		</>
	);
}

export default App;
