import React, {Component} from "react";
import "./stylesheet.css";
import Employee from "./Employee";

export class Form extends Component {
   constructor(data){
       super(data)
       this.state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        addemp:1,
        user:[]
        };
   }

    onChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    FormClick = () => {
        this.setState({clicked:!this.state.clicked})
    };

    onSubmit = (event) => {
        event.preventDefault();
        console.log("done")
        let temp_obj = {
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
            addemp:this.state.addemp
        };

        this.state.user.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            dept:"",
            rating:"",
            addemp:this.state.addemp +1
        }); 
    } 
    

    render(){
        return(
            <div className="conatiner">
                {!this.state.clicked ? 
                <>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form>
                        <label className="elements" htmlFor="name">Name :</label>
                        <input className="input1" type="text" id="name" value={this.state.value} name="name" onChange={this.onChange}/>
                        <br />
                        <label className="elements" htmlFor="dept">Department :</label>
                        <input className="input1" type="text" name="dept" value={this.state.value} id="dept" onChange={this.onChange}/>
                        <br />
                        <label className="elements" htmlFor="rate">Rating :</label>
                        <input className="input1" type="number" id="rate" value={this.state.value} name="rating" onChange={this.onChange}/>
                        <br />
                        <button className="dynamic_button" type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
                    </form>
                </> : 
                    <Employee data={this.state.user} backFunc={this.FormClick} />
                    }
            </div>
        )
    }
}