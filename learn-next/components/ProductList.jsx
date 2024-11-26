import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
	let [products, setProducts] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			setProducts(response.data);
		});
	}, []);
	return (
		<ul>
			{products &&
				products.map(product => {
					return <li key={product.id}>{product.name}</li>;
				})}
		</ul>
	);
}
