import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
}
