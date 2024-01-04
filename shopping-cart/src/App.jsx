import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import products from "./products";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const handleAddToCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);
			if (existingItem) {
				// If the item already exists in the cart, update the quantity
				return prevItems.map((item) => {
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item;
				});
			} else {
				// If the item doesn't exist in the cart, add it
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	const total = cartItems.reduce((acc, item) => {
		return acc + item.price * item.quantity;
	}, 0);

	return (
		<>
			<Header />
			<div className="ShoppingCart-container">
				<div>
					<ProductList products={products} onAddToCart={handleAddToCart} />
				</div>
				<ShoppingCart cartItems={cartItems} total={total} />
			</div>
		</>
	);
}

export default App;
