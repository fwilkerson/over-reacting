import React, { Component, PropTypes } from 'react'

class Tabs extends Component {
	state = {
		activeIndex: -1
	}

	onTabSelected = (index) => {
		this.setState({ activeIndex: index })
		this.props.selectedTabChanged(index)
	}

	componentWillMount () {
		const tabs = React.Children.toArray(this.props.children)
		let activeIndex = tabs.findIndex(tab => tab.props.active)
		if (activeIndex === -1 && tabs.length > 0) {
			activeIndex = 0;
		}
		this.onTabSelected(activeIndex)
	}

	render () {
		return (
			<ul className="tabs">
				{React.Children.map(this.props.children, (child, index) =>
					React.cloneElement(child, {
						active: index === this.state.activeIndex,
						tabSelected: () => this.onTabSelected(index)
					})
				)}
			</ul>
		)
	}
}

Tabs.propTypes = {
	selectedTabChanged: PropTypes.func
}

Tabs.defaultProps = {
	selectedTabChanged: () => {}
}

export default Tabs