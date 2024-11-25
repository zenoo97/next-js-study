import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
	return (
		<div>
			<nav>
				<Link href="/home">홈</Link> | <Link href="/login">로그인</Link>
			</nav>
			<Component {...pageProps} />
		</div>
	);
}
