import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';

import React from 'react';

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetail({ productDetail }) {
	const headerTitle = '상품 상세 페이지';

	return (
		<div>
			{/* ProductHeader 컴포넌트를 등록하고, title 프롭스에 "상세 정보 페이지"라고 데이터를 전달해 보세요.*/}
			<ProductHeader title={headerTitle} />
			<ProductInfo productDetail={productDetail} />
		</div>
	);
}

export async function getServerSideProps(context) {
	// products/1 == id
	// console.log(`productId: ${context.params.id}`);
	const id = context.params.productId;
	// const response = await axios.get(`http://localhost:4000/products`)
	const { data } = await fetchProductById(id);

	http: return {
		props: {
			productDetail: data,
		},
	};
}
