import React from 'react'

import Header from './Header'
import AppContainer from '../containers/AppContainer'

const Root = () => (
	<div className="container">
		<div className="row">
			<Header title="Components" />
			<AppContainer />
		</div>
	</div>
)

export default Root