import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	return (
		<>
			<Header />
			<div className="ShoppingCart-container">
				<div>
					<ProductList />
					<ProductList />
					<ProductList />
				</div>
				<ShoppingCart />
			</div>
		</>
	);
}

export default App;
