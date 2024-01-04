import "../index.css";
import products from "../products";
import Product1 from "../assets/images/mnz-1.jpg";

export default function ProductList() {
	return (
		<section>
			<div className="product-section">
				<img src={Product1} alt="img" />
				<div>
					<h2>Product name</h2>
					<p>Product description</p>
				</div>
				<p>Product abount</p>
				<p>Price</p>
				<button>Delete item</button>
			</div>
		</section>
	);
}
