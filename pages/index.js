import Head from 'next/head'
import Link from 'next/link'
import classNames from 'classNames'
import Layout, { siteTitle } from '../components/layout'
import styles from './index.module.css'
import utilStyles from '../styles/utils.module.css'
import { List } from 'react-bulma-components/dist'


export default function Home() {
	return (
		<Layout>
			<Head>
			<title>{siteTitle}</title>
			</Head>
			<section className={styles.container}>
				<List hoverable>
					<Link href="/data-structure/hashmap"><List.Item className={styles.item}>HashMap</List.Item></Link>
					<Link href="/data-structure/hashmap"><List.Item className={styles.item}>HashMap 1</List.Item></Link>
					<Link href="/data-structure/hashmap"><List.Item className={styles.item}>HashMap 2</List.Item></Link>
					<Link href="/data-structure/hashmap"><List.Item className={styles.item}>HashMap 3</List.Item></Link>
					<Link href="/data-structure/hashmap"><List.Item className={styles.item}>HashMap 4</List.Item></Link>
				</List>
				 
			</section>
		</Layout>
	)
}