// http://localhost:3000/api/carts

import { removeCartItem } from '@/api';

export default function handler(req, res) {
	const id = req.body.id;
	const {data} = await removeCartItem();
	console.log(`id: ${id}`);
	req.res.status(200).send('hi');
}
