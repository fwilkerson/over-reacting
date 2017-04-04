import React from 'react'

import Header from './Header'

const Root = () => (
	<div className="container">
		<div className="row">
			<div className="eight columns offset-by-two">
				<Header title="Components" />
				<Header title="Stateless" />
				<Header title="Stateful?" />
			</div>
		</div>
	</div>
)

export default Root