import router from "./routes/route";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<div className="App">
							<RouterProvider router={router} />
					</div>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</HelmetProvider>
		</>
	);
}

export default App;
