import { create } from "zustand";

export interface SignupData {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

export interface SignupState {
	// Form data
	email: string;
	password: string;
	firstName: string;
	lastName: string;

	// Current step (1, 2, or 3)
	currentStep: number;

	// Loading and error states
	isLoading: boolean;
	error: string | null;

	// Actions
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
	setFirstName: (firstName: string) => void;
	setLastName: (lastName: string) => void;
	nextStep: () => void;
	prevStep: () => void;
	setStep: (step: number) => void;
	reset: () => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	getFormData: () => SignupData;
}

const initialState = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	currentStep: 1,
	isLoading: false,
	error: null,
};

export const useSignupStore = create<SignupState>((set, get) => ({
	...initialState,

	setEmail: (email) => set({ email }),
	setPassword: (password) => set({ password }),
	setFirstName: (firstName) => set({ firstName }),
	setLastName: (lastName) => set({ lastName }),

	nextStep: () =>
		set((state) => ({
			currentStep: Math.min(state.currentStep + 1, 3),
		})),

	prevStep: () =>
		set((state) => ({
			currentStep: Math.max(state.currentStep - 1, 1),
		})),

	setStep: (step) => set({ currentStep: step }),

	reset: () => set(initialState),

	setLoading: (isLoading) => set({ isLoading }),

	setError: (error) => set({ error }),

	getFormData: () => {
		const state = get();
		return {
			email: state.email,
			password: state.password,
			firstName: state.firstName,
			lastName: state.lastName,
		};
	},
}));
