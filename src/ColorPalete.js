import React from "react";
import ReactDOM from "react-dom";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import './button.css'

var c = "";
class ColorPalete extends React.Component {

    constructor(props){
        super(props);
        this.state={
            color:"red"
        }

    }

	handleChange(event) {
        console.log("New Color: " + event.detail.value)
        c = event.detail.value;
        
        console.log("c: "  + c);
        return c;
    }
    
    changeColor = () => {
        this.setState({color: c});
      }

	componentDidMount() {
        
	}

	render() {
        let myColor = this.state.color;
		return (
			<div>
				<div class="demo-description">
					<h1>Color Legend</h1>
				</div>
				<ColorPicker onChange={this.handleChange}  enableCustomColors></ColorPicker>
                
                {console.log("c in form: " + myColor)}
                <form>
                    <label style={{backgroundColor:myColor}}>
                        {myColor}
                    </label>
                    < button
                        type = "button" onClick = {this.changeColor} style={{color:"blue"}}>
                        BLUE  - INSPECTION 

                    </button>

                    <div class="button-demo button-n-45">
			        <div class="demo-buttons-group">
			            <div class="container">
			                <div class="center">
			                    <Button  class="btn">
			                        <svg width="180px" height="60px" viewBox="0 0 180 60">
			                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
			                            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
			                        </svg> <span>HOVER ME</span>
			                    </Button>
			                </div>
			            </div>
			        </div>
			    </div>
  
                </form>
			</div>
		);
	}
}

export default ColorPalete;
