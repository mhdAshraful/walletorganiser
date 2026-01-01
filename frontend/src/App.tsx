// import { Outlet } from "react-router";
// import { ComponentExample } from "./components/component-example";
import Navigation from "./components/Navigation";

export function App() {
	return (
		<div>
			<Navigation />
			{/* 
			I want dashboard here. 
			under protected route "/" => home page with a header that has sidebar and profile management and empty dashboard area
			when i click /dashboard it should display /dashboard component inside the homepage dashboard area 
			when i click /cards it should display /cards component inside the homepage dashboard area 
			so basically i want to keep the header and sidebar static and only change the dashboard area based on the route

			*/}
		</div>
	);
}

export default App;
