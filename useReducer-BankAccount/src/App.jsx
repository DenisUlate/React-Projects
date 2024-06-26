import React, { useReducer } from "react";

// Estado inicial de la cuenta bancaria
const initialState = {
	balance: 0,
	loan: 0,
	isActive: false,
};

// Reducer para manejar las acciones de la cuenta bancaria
function bankReducer(state, action) {
	// Evita operaciones si la cuenta no está activa, excepto para abrirla
	if (!state.isActive && action.type !== "OPEN_ACCOUNT") {
		return state;
	}
	switch (action.type) {
		case "OPEN_ACCOUNT":
			return { ...state, balance: 500, isActive: true };
		case "DEPOSIT":
			return { ...state, balance: state.balance + action.payload };
		case "WITHDRAW":
			// Previene retiros que exceden el balance
			if (state.balance < action.payload) return state;
			return { ...state, balance: state.balance - action.payload };
		case "REQUEST_LOAN":
			// Permite solo un préstamo a la vez
			if (state.loan > 0) return state;
			return {
				...state,
				loan: action.payload,
				balance: state.balance + action.payload,
			};
		case "PAY_LOAN":
			// Paga el préstamo solo si existe uno
			if (state.loan === 0) return state;
			return {
				...state,
				loan: 0,
				balance: state.balance - state.loan,
			};
		case "closeAccount":
			// Cierra la cuenta solo si no hay préstamo y el balance es cero
			if (state.loan > 0 || state.balance !== 0) return state;
			return initialState;
		default:
			return state;
	}
}

function App() {
	// Usa useReducer para manejar el estado de la cuenta
	const [{ balance, loan, isActive }, dispatch] = useReducer(
		bankReducer,
		initialState
	);

	return (
		<div className="bg-gradient-to-br from-slate-900 to-green-900 w-full h-screen flex flex-col justify-center items-center text-white">
			<div className="border-2 border-neutral-600 rounded p-8 text-center flex flex-col gap-6">
				<h1 className="uppercase tracking-widest mb-8">
					useReducer Bank Account
				</h1>
				<p>
					Balance: <strong>{balance}</strong>
				</p>
				<p>
					Loan: <strong>{loan}</strong>
				</p>

				{/* Botones para las operaciones bancarias */}
				{/* Cada botón despacha una acción al reducer */}
				{/* Los botones se desactivan según el estado de la cuenta */}
				<p>
					<button
						className="w-full border border-neutral-400 rounded px-6 py-2 hover:bg-teal-700"
						onClick={() => dispatch({ type: "OPEN_ACCOUNT" })}
						disabled={isActive}>
						Open account
					</button>
				</p>
				<p>
					<button
						className={`w-full border border-neutral-400 rounded px-6 py-2 hover:bg-teal-700 ${
							!isActive && "opacity-50 hover:bg-none cursor-not-allowed"
						}`}
						onClick={() => dispatch({ type: "DEPOSIT", payload: 150 })}
						disabled={!isActive}>
						Deposit 150
					</button>
				</p>
				<p>
					<button
						className={`w-full border border-neutral-400 rounded px-6 py-2 hover:bg-teal-700 ${
							(!isActive || balance < 50) &&
							"opacity-50 hover:bg-none cursor-not-allowed"
						}`}
						onClick={() => dispatch({ type: "WITHDRAW", payload: 50 })}
						disabled={!isActive || balance < 50}>
						Withdraw 50
					</button>
				</p>
				<p>
					<button
						className={`w-full border border-neutral-400 rounded px-6 py-2 hover:bg-teal-700 ${
							(!isActive || loan > 0) &&
							"opacity-50 hover:bg-none cursor-not-allowed"
						} loan > 0 "opacity-50 hover:bg-none cursor-not-allowed"`}
						onClick={() => dispatch({ type: "REQUEST_LOAN", payload: 5000 })}
						disabled={!isActive || loan > 0}>
						Request a loan of 5000
					</button>
				</p>
				<p>
					<button
						className={`w-full border border-neutral-400 rounded px-6 py-2 hover:bg-teal-700 ${
							(!isActive || loan === 0) &&
							"opacity-50 hover:bg-none cursor-not-allowed"
						}`}
						onClick={() => dispatch({ type: "PAY_LOAN" })}
						disabled={!isActive || loan === 0}>
						Pay loan
					</button>
				</p>
				<p>
					<button
						className={`w-full border bg-red-800 rounded px-6 py-2 hover:bg-red-500 ${
							(!isActive || loan > 0 || balance !== 0) &&
							"opacity-50 hover:bg-none cursor-not-allowed bg-neutral-400"
						}`}
						onClick={() => dispatch({ type: "closeAccount" })}
						disabled={!isActive || loan > 0 || balance !== 0}>
						Close account
					</button>
				</p>
			</div>
		</div>
	);
}

export default App;
