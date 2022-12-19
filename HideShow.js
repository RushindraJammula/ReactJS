import React, { Component } from 'react' 
import Comp1 from "./Comp1";  
export class HideShow extends Component {  
    constructor() {  
        super();  
        this.state = {  
            name: "ReactJS",  
            showHideComp1: false,  
        };  
        this.hideComponent = this.hideComponent.bind(this);  
    }  
    hideComponent(name) {  
        console.log(name);  
        switch (name) {  
            case "show":  
                this.setState({ showHideComp1: true });  
                break;  
            case "hide":  
                this.setState({ showHideComp1: false });  
                break;  
            default:  

        }  
    }  
    render() {  
        const { showHideComp1 } = this.state;  
        return (  
            <div>  
                {showHideComp1 && <Comp1 />}  
                <hr />  
                <div>  
                    <button className="btn btn-info" onClick={() => this.hideComponent("show")}>  
                        Show
              </button>  
                    <button className="btn btn-info" onClick={() => this.hideComponent("hide")}>  
                       Hide
              </button>  
                </div>  
            </div>  
        );  
    }  
}  
   
   
export default HideShow