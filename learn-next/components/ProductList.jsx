import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';

export default function ProductList() {
	let [products, setProducts] = useState();
	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			setProducts(response.data);
		});
	}, []);
	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li key={product.id} className={styles.item}>
							<Link href={`/products/${product.id}`}>
								<div>
									{/* <img src={product.imageUrl} alt="x" /> */}
									<Image
										src={product.imageUrl}
										alt={product.name}
										width={300}
										height={250}
									></Image>
								</div>
								<div>{product.name}</div>
							</Link>
						</li>
					);
				})}
		</ul>
	);
}
