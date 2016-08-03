import React from 'react'
import Header from './preloginheader'

//<h2>TRACK. PRAYER. BETTER.</h2>
//
const Home = React.createClass({

	render: function(){
		return(
				<div>
					<Header />
					<div className="Home">

						<h2>PRAY. SHARE. TRACK.</h2>	
						<p>The world's leading prayer organizer, sharing and tracking platform</p>
						<a className="button button-primary SignUp" href="#signup">Get Started</a>

					</div>
					<div>
					</div>
				</div>
			)
	}
})

export default Home