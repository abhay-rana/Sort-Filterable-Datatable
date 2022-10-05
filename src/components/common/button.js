import React from "react";

const Button = ({ children, onClick = () => {}, className }) => {
	return (
		<>
			<button className={`m-1 p-2 bg-warning cursor-pointer rounded-sm hover:bg-red-300 ${className}`} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
