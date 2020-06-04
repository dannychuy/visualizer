import { Navbar } from 'react-bulma-components/dist'

export default function NavBar() {
	return (

		<Navbar>
			<Navbar.Brand>
				<Navbar.Item renderAs="a" href="#">
				<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
				</Navbar.Item>
				<Navbar.Burger />
			</Navbar.Brand>
			<Navbar.Menu >
				<Navbar.Container>
					<Navbar.Item href="#">
						Home
					</Navbar.Item>
					<Navbar.Item dropdown hoverable href="#">
						<Navbar.Link>
							Algorithms
						</Navbar.Link>
						<Navbar.Dropdown>
							<Navbar.Item href="#">Not Done 1</Navbar.Item>
							<Navbar.Item href="#">Not Done 2</Navbar.Item>
							<Navbar.Item href="#">Not Done 3</Navbar.Item>
							<Navbar.Item href="#">Not Done 4</Navbar.Item>
						</Navbar.Dropdown>
					</Navbar.Item>
					<Navbar.Item dropdown hoverable href="#">
						<Navbar.Link>
							Data Structures
						</Navbar.Link>
						<Navbar.Dropdown>
							<Navbar.Item href="/data-structure/hashmap">HashMap</Navbar.Item>
							<Navbar.Item href="#">Not Done 2</Navbar.Item>
							<Navbar.Item href="#">Not Done 3</Navbar.Item>
							<Navbar.Item href="#">Not Done 4</Navbar.Item>
						</Navbar.Dropdown>
					</Navbar.Item>
				</Navbar.Container>
				<Navbar.Container position="end">
					<Navbar.Item href="https://dannychu.com">
						About
					</Navbar.Item>
				</Navbar.Container>
			</Navbar.Menu>
		</Navbar>
	)
}