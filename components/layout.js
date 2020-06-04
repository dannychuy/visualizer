import Head from 'next/head'
import Link from 'next/link'
import NavBar from './navbar.js'

const name = 'James Chu'
export const siteTitle = 'Visualizer'

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NavBar />
			<main>{children}</main>
		</div>
	)
}