import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react';

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ message, productInfo }) {
	const headerTitle = '상품 상세 정보 페이지';
	// console.log(productInfo);

	return (
		<div>
			{/* ProductHeader 컴포넌트를 등록하고, title 프롭스에 "상세 정보 페이지"라고 데이터를 전달해 보세요.*/}
			<ProductHeader title={headerTitle} />
			<div>ProductDetailPage : {message}</div>
			<p>{productInfo.name}</p>
		</div>
	);
}

export async function getServerSideProps(context) {
	// products/1 == id
	// console.log(`productId: ${context.params.id}`);
	const id = context.params.productId;
	const response = await axios.get(`http://localhost:4000/products/${id}`);

	console.log(response);

	http: return {
		props: {
			message: '서버에서 보내준 메시지',
			productInfo: response.data,
		},
	};
}
