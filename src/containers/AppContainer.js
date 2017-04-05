import React, { Component } from 'react'

import Tabs from '../components/Tabs'
import Tab from '../components/Tab'

class AppContainer extends Component {
	state = {
		topics: [],
		topicDetail: null
	}

	onTopicChanged = (index) => {
		fetch(`/api/topics/${index}`)
			.then(resp => resp.json())
			.then(topicDetail => this.setState({ topicDetail }))
			.catch(err => console.error(err))
	}

	componentDidMount () {
		fetch('/api/topics')
			.then(resp => resp.json())
			.then(topics => this.setState({ topics }))
			.catch(err => console.error(err))
	}

	render () {
		return (
			<div className="eight columns offset-by-two">
				<Tabs selectedTabChanged={this.onTopicChanged}>
					{this.state.topics.map((topic, index) =>
						<Tab key={index} text={topic} />
					)}
				</Tabs>
				{this.state.topicDetail && (
					<div>
						<h4>{this.state.topicDetail.title}</h4>
						<p>{this.state.topicDetail.description}</p>
					</div>
				)}
			</div>
		)
	}
}

export default AppContainer