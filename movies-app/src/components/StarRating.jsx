/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";

import Star from "./Star";

const containerStyles = {
	display: "flex",
	alignItems: "center",
	gap: "1rem",
};

const starContainerStyles = {
	display: "flex",
	alignItems: "center",
};

const StarRating = ({
	maxRating = 5,
	color = "#fcc419",
	size = 48,
	onSetRating,
}) => {
	const [rating, setRating] = useState(0);
	const [tempRating, setTempRating] = useState(0);

	StarRating.propTypes = {
		maxRating: PropTypes.number,
		color: PropTypes.string,
		size: PropTypes.number,
	};

	function handleRating(rating) {
		setRating(rating);
		onSetRating(rating);
	}

	const textStyle = {
		lineHeight: "1",
		margin: "0",
		color,
		fontSize: size / 1.5,
	};

	return (
		<div style={containerStyles}>
			<div style={starContainerStyles}>
				{Array.from({ length: maxRating }, (_, i) => (
					<span key={i}>
						<Star
							onRate={() => handleRating(i + 1)}
							full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
							onHoverIn={() => setTempRating(i + 1)}
							onHoverOut={() => setTempRating(0)}
							color={color}
							size={size}
						/>
					</span>
				))}
			</div>
			<p style={textStyle}>{tempRating || rating || ""}</p>
		</div>
	);
};

export default StarRating;
