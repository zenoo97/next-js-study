import React from 'react';
import styles from './ProductInfo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
	const router = useRouter();
	// 함수 표현식
	const { id, name, price, imageUrl } = productDetail;
	// 1. 장바구니에 아이템을 담는 API 함수 호출
	const addCart = async () => {
		// parameter 순서를 기억해야 하는 경우 발생 -> 객체로 감싸주는게 좋다.
		// 객체는 키, 값이 순서가 없기 때문
		let response = await createCartItem({ id, name, price, imageUrl });

		console.log(response);
		alert('장바구니에 추가됨');
		// 2. 장바구니 페이지로 이동
		router.push('/cart');
	};
	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} alt={name} width={250} height={250} />
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니에 담기</button>
			</div>
		</div>
	);
}
