import React from 'react'
import PostLoginHeader from './postloginheader'


const DashBoard = React.createClass({
	render: function(){
		return (
				<div>
					<PostLoginHeader />
					<h3>Your Pryr Dashboard</h3>
					<div>
						<p>170 Prayers have been answered since your last login</p>
						<p>30 Prayers have been unanswered since your last login</p>
					</div>
				</div>
			)
	}
		
})
	

export default DashBoard