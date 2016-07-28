import React from 'react'
import Header from './header'

//<h2>TRACK. PRAYER. BETTER.</h2>
//<p>The world's leading prayer organizer, tracker, & effectiveness platform</p>

const Home = React.createClass({

	render: function(){
		console.log('renderin home view')
		return(
				<div>
					<Header />
					<div>
						<h3>Welcome Home!</h3>
						<p>Start Tracking Your Prayers</p>
					</div>
					<div>
					</div>
				</div>
			)
	}
})

export default Home