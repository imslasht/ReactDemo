
import React from "react";
import ReactDOM from "react-dom";
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import './App.css';


const data = [];
class Map extends React.Component {

	behavior = {
		columnResizeMode: 'growAndShrink'
	}

	appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true
	}

	paging = {
		enabled: true
	}

	pager = {
		visible: false
	}

	sorting = {
		enabled: false
	}

	editing = {
		enabled: true
	}
	

	/* dataSource = new Smart.DataAdapter({
	dataSource: props.tracks,  
		dataFields: [
			'trackName: string',
			'trackCapacity: Number'
		]
	}) */



	init() {

	}

	componentDidMount() {

	}

	render() {
		const track = this.props.track;
		return (
				
				<Grid 
	
					columns = {[
					{
						label:'Track Name',
						dataField: track.trackName
					},
					{
						label: 'Track Capacity',
						dataField: track.trackCapacity
					}
					]}
					appearance={this.appearance}
					behavior={this.behavior}
					paging={this.paging}
					pager={this.pager}
					sorting={this.sorting}
					editing={this.editing}>
				</Grid>
				
				
		);
	}
}
  

ReactDOM.render(<Map/>, document.querySelector("#root"));

export default Map;