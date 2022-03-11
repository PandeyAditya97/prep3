import React,{Component} from "react";

class Employee extends Component{
    constructor(data){
        super(data)
        this.state = {}
    }
    render(){
        return (<>
            <h1 className="one">EMPLOYEE FEEDBACK FORM</h1>
            <div id="container1">
                {this.props.data.map( (element) => {
                    return (
                        <div className="datas">
                            <h3> {element.name} || {element.dept} || {element.rating} </h3>
                        </div>
                    );
                    })
                }
            </div>
            <button className="back-button" onClick={this.props.backFunc}>Go back</button>
        </>
    )
    }
}

export default Employee;