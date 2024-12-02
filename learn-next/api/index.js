const { create } = require('axios');
const axios = require('axios');

const Instance = axios.create({
	baseURL: 'http://localhost:4000',
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
	// 조회한다고 할 때, fetch 이름을 많이 씀
	return Instance.get('/products');
}
// 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
	return Instance.get(`/products/${id}`);
}
// 장바구니에 아이템을 추가하는 API 함수
function createCartItem({ id, name, price, imageUrl }) {
	return Instance.post('/carts', {
		id,
		name,
		price,
		imageUrl,
	});
}
// 장바구니 목록을 들고오는 API 함수
function fetchCarts() {
	return Instance.get('/carts');
}
// 특정 아이디에 해당하는 장바구니 아이템을 삭제하는 API 함수
function removeCartItem(id) {
	return Instance.delete(`/carts/${id}`);
}

// 파일 안에서 함수, 변수를 정의했을 때, export로 꺼내게 된다.
export {
	fetchProducts,
	fetchProductById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};

// CRUD(Craete, Read, Update, Delete)

// create - 생성
// delete - 삭제
// update - 수정
// get - 조회

// instance.get()
// axios.get()
// axios.delete
