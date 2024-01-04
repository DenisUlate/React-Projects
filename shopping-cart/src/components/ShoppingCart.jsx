export default function ShoppingCart({ cartItems, total }) {
	return (
		<div className="ShoppingCart-section">
			{cartItems.map((item) => (
				<div key={item.id}>
					<h2>{item.name}</h2>
					<p>Quantity: {item.quantity}</p>
				</div>
			))}
			<p>Total: {total}</p>
		</div>
	);
}
