import React from 'react'

import Header from './Header'
import Tabs from './Tabs'
import Tab from './Tab'

const Root = () => (
	<div className="container">
		<div className="row">
			<div className="eight columns offset-by-two">
				<Header title="Components" />
				<Tabs selectedTabChanged={(index) => console.log(index)}>
					<Tab>stateless</Tab>
					<Tab text="stateful" active />
				</Tabs>
			</div>
		</div>
	</div>
)

export default Root