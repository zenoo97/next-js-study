const { create } = require('axios');
const axios = require('axios');

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
	// 조회한다고 할 때, fetch 이름을 많이 씀
	return instance.get('/products');
}
// 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}
// 파일 안에서 함수, 변수를 정의했을 때, export로 꺼내게 된다.
export { fetchProducts, fetchProductById };

// CRUD(Craete, Read, Update, Delete)

// create - 생성
// delete - 삭제
// update - 수정
// get - 조회

// instance.get()
// axios.get()
// axios.delete
