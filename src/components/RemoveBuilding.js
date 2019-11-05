import React from 'react';

class RemoveBuilding extends React.Component {
	
	removeBuilding() {
		
		this.props.removeBuilding()
	
	}
	render() {
		return (
			
			<button onClick={this.removeBuilding.bind(this)}>
				Remove Listing
			//creating an on click button to let you remove building
					</button>
		);
	}
}


export default RemoveBuilding;
