# over-reacting

### Components - Stateful?

#### Touch on these topics

* What is application state
* Classic active tab/link example
* Give users options with flexible components
* Introduce default props (prevent runtime errors)
* Lifecycle methods
* React.Children and React.cloneElement

#### TODO

* Build naive tab container
	```javascript
	<ul className="center tabs">
	  <li>
	    <a className="button">stateful</a>
	  </li>
	  <li>
	    <a className="button active">stateless</a>
	  </li>
	</ul>
	```

	```css
	ul.tabs {
	  list-style: none;
	}

	ul.tabs li {
	  display: inline;
	  margin-right: 1rem;
	}

	ul.tabs li a.button {
	  border: none;
	  border-bottom: .3rem solid #bbb;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	ul.tabs li a.active.button {
	  border-bottom-color: #33C3F0;
	  -webkit-transition: border-bottom-color 700ms ease-out;
	  -moz-transition: border-bottom-color 700ms ease-out;
	  transition: border-bottom-color 700ms ease-out;
	}
	```

* Write Tab component (flexible props)
	```javascript
	import React, { PropTypes } from 'react'

	const Tab = (props) => (
	  <li>
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
	  text: ""
	}

	export default Tab
	```

* Write stateful Tabs component (demonstrate required members of a class that inherits from Component)
	```javascript
	import React, { Component } from 'react'

	class Tabs extends Component {
	  state = {
	    activeIndex: -1
	  }

	  render () {
	    return (
	      <ul className="tabs">
	        {this.props.children}
	      </ul>
	    )
	  }
	}
	```

* Introduce component life cycle methods and React.Children to set default active tab
	```javascript
	componentWillMount () {
	  const tabs = React.Children.toArray(this.props.children)
	  let activeIndex = tabs.findIndex(tab => tab.props.active)
	  if (activeIndex === -1 && tabs.length > 0) {
	    activeIndex = 0;
	  }
	  this.setState({ activeIndex: index })
	}
	```

* Add tabSelected method to Tab component and bind to onClick

* Replace naive rendering of children and apply Tabs props
	```javascript
	{React.Children.map(this.props.children, (child, index) =>
	  React.cloneElement(child, {
	    active: index === this.state.activeIndex,
	    tabSelected: () => this.onTabSelected(index)
	  })
	)}
	```

* Refactor tabs local state update into onTabSelected and buble tag selection up
	```javascript
	onTabSelected = (index) => {
	  this.setState({ activeIndex: index })
	  this.props.selectedTabChanged(index)
	}
	```

* Define propTypes and default props for stateful component
	```javascript
	Tabs.propTypes = {
	  selectedTabChanged: PropTypes.func
	}

	Tabs.defaultProps = {
	  selectedTabChanged: () => {}
	}
	```