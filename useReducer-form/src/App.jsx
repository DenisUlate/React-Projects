import React, { useReducer, useState } from "react";

//	Definimos el estado inicial
const initialState = {
	name: "",
	email: "",
	password: "",
	errors: {
		name: "",
		email: "",
		password: "",
	},
	isSubmitting: false,
};

//	Definimos el reducer
function formReducer(state, action) {
	switch (action.type) {
		case "CHANGE_INPUT":
			return {
				...state,
				[action.field]: action.value,
				errors: {
					...state.errors,
					[action.field]: "", // Limpiamos el error al cambiar el input
				},
			};
		case "SET_ERROR":
			return {
				...state,
				errors: {
					...state.errors,
					[action.field]: action.errors,
				},
			};
		case "SET_SUBMITTING":
			return {
				...state,
				isSubmitting: action.isSubmitting,
			};
		case "RESET_FORM":
			return initialState;
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(formReducer, initialState);
	const [showModal, setShowModal] = useState(false);

	const handleChange = (e) => {
		dispatch({
			type: "CHANGE_INPUT",
			field: e.target.name,
			value: e.target.value,
		});
	};

	const validateForm = () => {
		let isValid = true;

		if (state.name.trim() === "") {
			dispatch({
				type: "SET_ERROR",
				field: "name",
				errors: "El nombre es requerido",
			});
			isValid = false;
		}

		if (!/\S+@\S+\.\S+/.test(state.email)) {
			dispatch({
				type: "SET_ERROR",
				field: "email",
				errors: "El email es inválido",
			});
			isValid = false;
		}

		if (state.password.length < 6) {
			dispatch({
				type: "SET_ERROR",
				field: "password",
				errors: "La contraseña debe tener al menos 6 caracteres",
			});
			isValid = false;
		}

		return isValid;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			dispatch({ type: "SET_SUBMITTING", isSubmitting: true });
			// Aquí iría la lógica para enviar el formulario
			console.log("Formulario enviado:", state);
			setTimeout(() => {
				setShowModal(true);
				dispatch({ type: "SET_SUBMITTING", isSubmitting: false });
				dispatch({ type: "RESET_FORM" });
			}, 2000);
		}
	};

	return (
		<div className="bg-gradient-to-b from-emerald-900 to-neutral-950 h-screen w-full text-white flex flex-col items-center justify-center px-8 py-12">
			<h1 className="text-xl tracking-widest mb-8">useReducer Form</h1>
			<form
				onSubmit={handleSubmit}
				className="border border-white/50 rounded-md p-12 max-w-[600px] w-full h-auto">
				<div className="p-4">
					<label htmlFor="name" className="mr-3">
						Nombre:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={state.name}
						onChange={handleChange}
						className="w-full bg-emerald-950 border border-gray-500/30"
					/>
					{state.errors.name && (
						<p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
					)}
				</div>
				<div className="p-4">
					<label htmlFor="email" className="mr-3">
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={state.email}
						onChange={handleChange}
						className="w-full bg-emerald-950 border border-gray-500/30"
					/>
					{state.errors.email && (
						<p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
					)}
				</div>
				<div className="p-4">
					<label htmlFor="password" className="mr-3">
						Contraseña:
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={state.password}
						onChange={handleChange}
						className="w-full bg-emerald-950 border border-gray-500/30"
					/>
					{state.errors.password && (
						<p className="text-red-500 text-sm mt-1">{state.errors.password}</p>
					)}
				</div>
				<button
					type="submit"
					disabled={state.isSubmitting}
					className="bg-white/30 px-8 py-2 ml-4 mt-6 rounded hover:bg-slate-500 transition-all duration-300 ease-in-out cursor-pointer">
					{state.isSubmitting ? "Enviando..." : "Enviar"}
				</button>
			</form>
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
					<div className="bg-emerald-900 p-8 rounded-md flex flex-col items-center justify-center gap-4">
						<h2>Formulario enviado</h2>
						<button
							onClick={() => setShowModal(false)}
							className="bg-emerald-600 rounded px-6 py-2 hover:bg-emerald-800 transition-all duration-300 ease-in-out">
							Cerrar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
