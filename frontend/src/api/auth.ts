

export const getUser = async () => {
	const user = await fetch("https://dummyjson.com/auth/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			username: "michaelw",
			// email: "michael.williams@x.dummyjson.com",
			password: "michaelwpass",
		}),
	})
		.then((response) => {
			console.log("Response status:", response);
			return response.json();
		})
		.catch((error) => {
			console.error("Error fetching user:", error);
			return null;
		});

	return user;
};

