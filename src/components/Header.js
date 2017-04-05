import React, { PropTypes } from 'react'

const Header = (props) => (
	<h1 className="center">
		{props.title}
	</h1>
)

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header