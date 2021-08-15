import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Showcase from './Showcase';

const Layout = ({ title, description, keywords, children }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			{router.pathname === '/' && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
};
Layout.defaultProps = {
	title: 'DJ Events|check for the latest dj events',
	description: 'Find the latest DJ & other events',
	keywords: 'music,DJ,drums'
};

export default Layout;
