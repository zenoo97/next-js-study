// '/'에 해당하는 페이지 컴포넌트

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '@/components/product-list/ProductList';
import ProductHeader from '@/components/ProductHeader';
function ProductPage() {
	return (
		<div>
			<ProductHeader title="상품 목록 페이지" />
			<ProductList />
		</div>
	);
}

// 1. 상품 목록 페이지 - '/'
// 2. 상품 상세 페이지 - '/products/productId'
// 3. 장바구니 페이지 - '/carts'
export default ProductPage;
