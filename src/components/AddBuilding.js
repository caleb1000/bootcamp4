import React from 'react';

class AddBuilding extends React.Component {
	
	addBuilding() {
		
		this.props.addBuilding()

	render() {
		//there might be an error with how i implemented addBuilding
		//keep getting error here
		const { addBuilding } = this.props;
		return (
			<div>
				<i>Enter information to add a new building to list</i>
				<p></p>
				<form>
					<input
					type="text"
					placeholder="Enter code"
					ref={ (code) => this.code = code }
					/>
				</form>
		
		
				<form>
					<input
					type="text"
					placeholder="Enter building name"
					ref={ (name) => this.name = name }
					/>
				</form>
		
		
				<form>
					<input
					type="text"
					placeholder="Enter its latitude"
					ref={ (latitude) => this.latitude = latitude }
					/>
				</form>
		
		
				<form>
					<input
					type="text"
					placeholder="Enter its longitude"
					ref={ (longitude) => this.longitude = longitude }
					/>
				</form>
		
		
				<form>
					<input
					type="text"
					placeholder="Enter its address"
					ref={ (address) => this.address = address }
					/>
				</form>
				<p>
					{' '}
					<button onClick={() => addBuilding(
						this.code.value,
						this.name.value,
						this.latitude.value,
						this.longitude.value,
						this.address.value
					)}>
					<i>Add Building</i>
					</button>
				</p>
			</div>
		
		);
	}
}

export default AddBuilding;
