import React, { useEffect, useState, type JSX } from "react";

type UserMode = {
	registeredUser: boolean;
};

function Registration() {
	const [intentToRegister, setIntent] = useState<boolean>(true);

	return intentToRegister ? (
		<RegistrationInterface setIntent={setIntent} />
	) : (
		<LoginInterface setIntent={setIntent} />
	);
}

function LoginInterface({
	setIntent,
}: {
	setIntent: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
	return (
		<>
			<div>Login interface </div>
			<button className="border-1 rounded" onClick={() => setIntent(true)}>Go to Register</button>
		</>
	);
}

function RegistrationInterface({
	setIntent,
}: {
	setIntent: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
	return (
		<>
			<div>Registration interface</div>
			<button onClick={() => setIntent(false)}>Go to Login</button>
		</>
	);
}

export default Registration;
