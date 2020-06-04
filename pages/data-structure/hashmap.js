import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import { Panel, Form, Icon, Button } from 'react-bulma-components/dist'

import styles from './hashmap.module.css'
import compStyles from './structure.module.css'

export default class HashMap extends React.Component {
	constructor() {
		super()

		this.state = {'panel': 'create'}
	}

	changePanel(panel) {
		this.setState({'panel': panel});
	}

	renderPanel() {
		switch(this.state.panel) {
		case 'create':
			return (
				<div>
				<Panel.Block> <Form.Field>
					<Form.Control>
						<Form.Label>Size of Array (initial):</Form.Label>
						<Form.Input placeholder="Default: 8" value="" type="number"/>
					</Form.Control>
				</Form.Field> </Panel.Block>

				<Panel.Block> <Form.Field>
					<Form.Control>
						<Form.Label>Load Factor: </Form.Label>
						<Form.Input placeholder="Default: 1/2" value=".5" type="number"/>
					</Form.Control>
				</Form.Field> </Panel.Block>
				</div>
				);
		case 'modify':
			return (
				<div>
				<Panel.Block> <Form.Field>
					<Form.Control>
						<Form.Label>Add (key/value):</Form.Label>
						<Form.Input placeholder="Default: 8" value="" type="number"/>
						<Form.Input placeholder="Default: 8" value="" type="number"/>
					</Form.Control>
				</Form.Field> </Panel.Block>
				<Panel.Block> <Form.Field>
					<Form.Control>
						<Form.Label>Delete (key):</Form.Label>
						<Form.Input placeholder="Default: 8" value="" type="number"/>
					</Form.Control>
				</Form.Field> </Panel.Block>

				<Panel.Block> <Form.Field>
					<Form.Control>
						<Form.Label>Search (key):</Form.Label>
						<Form.Input placeholder="Default: 1/2" value=".5" type="number"/>
					</Form.Control>
				</Form.Field> </Panel.Block>
				</div>
				);
		case 'destroy':
			return (
				<Panel.Block>
					<Button className="is-fullwidth" color="danger"> Destroy </Button>
				</Panel.Block>
				);
		default:
			return <div></div>;
		}
	}

	render() {
		return (
			<Layout>
				<Head>
					<title>HashMap</title>
				</Head>

				<div className={compStyles.viewport}>


					<Panel className={compStyles.control}>

						
						{this.renderPanel()}

						<Panel.Tabs className="panel-tabs">
							<Panel.Tabs.Tab active={this.state.panel == 'create'} onClick={() => this.changePanel('create')}>create</Panel.Tabs.Tab>
							<Panel.Tabs.Tab active={this.state.panel == 'modify'} onClick={() => this.changePanel('modify')}>modify</Panel.Tabs.Tab>
							<Panel.Tabs.Tab active={this.state.panel == 'destroy'} onClick={() => this.changePanel('destroy')}>destroy</Panel.Tabs.Tab>
							<Panel.Tabs.Tab onClick={() => this.changePanel('close')}>close</Panel.Tabs.Tab>
						</Panel.Tabs>
						
					</Panel>
				</div>
			</Layout>
		)
	}
		
}
