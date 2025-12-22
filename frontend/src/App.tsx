import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	// Example usage inside your AddCardComponent.tsx
	type CardFormData = {
		cardNumber: string;
		expiry: string;
		cvc: string;
	}

	type CardResponse ={
		cardNumber: string;
		expiry: string;
		cvc: string;
		id?: string;
	}

	const handleAddCard = async (formData: CardFormData): Promise<void> => {
		// 1. Call the mock API
		const response = await fetch("/api/cards", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				cardNumber: formData.cardNumber, // e.g., "4242424242424912"
				expiry: formData.expiry,
				cvc: formData.cvc,
			}),
		});

		const newCard: CardResponse = await response.json();

		// 2. Update your local state (or refetch the list)
		// setCards([...cards, newCard]);

		console.log("Card Added to Mock DB:", newCard);
	};

	useEffect(() => {
		handleAddCard({
			cardNumber: "4242424242424912",
			expiry: "12/34",
			cvc: "123",
		});
	}, []);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
