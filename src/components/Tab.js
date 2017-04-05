import React, { PropTypes } from 'react'

const Tab = (props) => (
	<li onClick={props.tabSelected}>
		<a className={props.active ? "button active" : "button"}>
			{props.children || props.text}
		</a>
	</li>
)

Tab.propTypes = {
	active: PropTypes.bool,
	text: PropTypes.string,
	tabSelected: PropTypes.func
}

Tab.defaultProps = {
	active: false,
	text: "",
	tabSelected: () => {}
}

export default Tab