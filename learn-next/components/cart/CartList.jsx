import Image from 'next/image';
import React from 'react';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';

export default function CartList({ carts }) {
	const router = useRouter();
	const totalPrice = carts.reduce((acc, cur) => {
		return acc + parseFloat(cur.price);
	}, 0);
	const removeCart = async id => {
		// 1. 삭제 API 호출
		const { data } = await removeCartItem(id);
		alert(`${data.name} 삭제가 되었습니다.`);
		// 2. 상품 목록 갱신
		router.replace(router.asPath);
		// replace: 브라우저의 주소를 바꿔치기 하는 것
		// push: 해당 페이지로 이동하겠다는 것
	};
	return (
		<div>
			<div>
				<ul>
					{carts.map(cart => {
						return (
							<li key={cart.id} className={styles.item}>
								<div>
									<Image
										src={cart.imageUrl}
										alt={cart.name}
										width={75}
										height={75}
									/>
								</div>
								<div className={styles.description}>
									<div>{cart.name}</div>
									<div>{cart.price}</div>
									<button onClick={() => removeCart(cart.id)}>삭제하기</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div>
				<p>총 가격: {totalPrice}</p>
				<p>총 수량: {carts.length}</p>
			</div>
		</div>
	);
}
