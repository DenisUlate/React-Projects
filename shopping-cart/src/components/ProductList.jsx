import "../index.css";
import products from "../products";

export default function ProductList({ products, onAddToCart }) {
	return (
		<section>
			<div className="product-section">
				{products.map((product) => (
					<div className="product-container" key={product.id}>
						<img src={product.image} alt={product.name} />
						<div>
							<h2>{product.name}</h2>
							<p>{product.description}</p>
						</div>
						<p>
							{"$"}
							{product.price}
						</p>
						<button onClick={() => onAddToCart(product)}>Add to cart</button>
						{/* Remove from cart */}
					</div>
				))}
			</div>
		</section>
	);
}
