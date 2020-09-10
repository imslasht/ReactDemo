import React from 'react';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import {Smart, Grid } from 'smart-webcomponents-react/grid';

const TrackList = (props) =>{
	const trackHeader =[];
	const y = [];
	//const z =[];
	const t1 = [];
	const k1 =[];
	var count = 1;
	//columns header
	props.tracks.forEach(element => {
		// z.push(element.trackName);
		trackHeader.push({label: element.trackName,
		dataField: element.trackName});
		y.push(`${element.trackName}: string`);
		/* props.cars.forEach(c1 =>{
			if(element._id === c1.trackAlloted ){
				t1.push([element.trackName,c1.carName]); 
				if(z[element.trackName] === t1[element.trackName,0] ){
					k1.push(c1.carName)
				} 
			}
			
	  
		});  */
		
		
	});
	
	 
	  //for(let i=0;){
			
	//}
	 

	
/* 	const carData = () =>{
		props.tracks.forEach(element => {
			z.push(element.trackName);
		   props.cars.forEach(c1 =>{
			   if(element._id === c1.trackAlloted ){
				   t1.push([element.trackName,c1.carName]); 
				   if(z[element.trackName] === t1[element.trackName,0] ){
					  // data = k1.push(c1.carName)
				   } 
			   }
			   
		 
		   }); 
		   
		   
	   });

	} */

	
	props.cars.forEach(c1 =>{
		//if(element._id === c1.trackAlloted ){
			//y.push(c1.carName)  
		//}
		props.tracks.forEach(tk =>{
			if(c1.trackAlloted === tk._id){
				c1.trackName = tk.trackName;
			}
			
		});
  
	}); 
	
	var groupBy = function(xs, key) {
		return xs.reduce(function(rv, x) {
		  (rv[x[key]] = rv[x[key]] || []).push(x);
		  return rv;
		}, {});
	  };
	  const grouped = groupBy(props.cars, 'trackName');
	  const z = []; 
	 Object.keys(grouped).forEach((key) => {
		  grouped[key].forEach((val, i) => {
			  //console.log(grouped[i]);
			  if (z[i])
				  z[i][key] = val.carName;
			  else {
				  z[i] = {};
				  z[i][key] = val.carName;
			  }
		  });
	  }); 

	  console.log("z");
	  console.log(z);
	const dataSource = new Smart.DataAdapter({
		/* dataSource:{'trackName': props.carName},
		dataFields:['trackName:string']  */
		dataSource: z ,
			dataFields:y
	 }); 

	return(
	  <div>
		
		  {/*<a href="#!" key={item._id} onClick = {props.updateCurrentTrack.bind(this,item)}>
			{item.trackNumber} {item.trackName}
		  </a>*/
		    /* <div key={item._id}>
			    {item.trackName} {item.trackCapacity}
	</div> */}
	
	{console.log(grouped)}
	

			<Grid 
					dataSource={ dataSource}

					columns = {trackHeader}
				>
				</Grid>
			
		
        
	  </div>
	);
  }

  export default TrackList;