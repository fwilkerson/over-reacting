import React, { Component, PropTypes } from 'react'

class Tabs extends Component {
	state = {
		activeIndex: -1
	}

	onTabSelected = (index) => {
		this.setState({ activeIndex: index })
		this.props.selectedTabChanged(index)
	}

	initializeActiveIndex = (children) => {
		let activeIndex = children.findIndex(tab => tab.props.active)
		if (activeIndex === -1) {
			activeIndex = 0;
		}
		this.onTabSelected(activeIndex)
	}

	componentWillMount () {
		const children = React.Children.toArray(this.props.children)
		if (children.length > 0) {
			this.initializeActiveIndex(children)
		}
	}

	componentWillReceiveProps (nextProps) {
		if (this.state.activeIndex === -1) {
			const currentChildren = React.Children.toArray(this.props.children)
			const nextChildren = React.Children.toArray(nextProps.children)
			if (currentChildren < nextChildren) {
				this.initializeActiveIndex(nextChildren)
			}
		}
	}

	render () {
		return (
			<ul className="center tabs">
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