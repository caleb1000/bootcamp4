import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	render() {

const{listings, selectedBuilding, removeBuilding}=this.props;
var building = listings.find(listing => {return listing.id === selectedBuilding})


if(building)

	return(

		<div>

		<h3>ID:</h3>
		<p>{building.id}</p>
		
		<h3>Code:</h3>
		<p>{building.code}</p>
		
		<h3>Name:</h3>
		<p>{building.name}</p>
		
		{building.coordinates && <p>Coordinates:{' '+building.coordinates.latitude},{' '+building.coordinates.longitude}</p>}
		{building.address && <p>Address:{' ' + building.address}</p>}
		<RemoveBuilding removeBuilding={removeBuilding} />
		</div>

	)



return (
	<div>
		<p>
		{' '}
		<i>Click to get more info/i>
		</p>
		
	</div>
		);
	}
}
export default ViewBuilding;
