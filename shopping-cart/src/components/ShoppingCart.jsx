export default function ShoppingCart({ cartItems, total }) {
	return (
		<div className="ShoppingCart-section">
			{cartItems.map((item) => (
				<div className="ShoppingCart-items" key={item.id}>
					<h2>{item.name}</h2>
					<p>
						{"$"}
						{item.price}
					</p>
					<p>Quantity: {item.quantity}</p>
				</div>
			))}
			<p className="Shopping-total">Total: {total}</p>
		</div>
	);
}
