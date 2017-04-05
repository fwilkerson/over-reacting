import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

render(
	<div className="container">
		<div className="row">
			<div className="eight columns offset-by-two">
				<h1 className="center">
					Hello, JSX
				</h1>
			</div>
		</div>
	</div>,
	document.getElementById('root')
)