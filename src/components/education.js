import { Component } from "react"
import {Grid,Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return (
            <Grid>
                <Cell className = "education-rCol" col = {4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell className = "education-lCol" col = {8}>
                    <h4>{this.props.schoolName}</h4>
                    <h5>{this.props.schoolDegree}</h5>
                    <hr/>
                    <p>{this.props.schoolDesc}</p>
                </Cell>
            </Grid>
        )
    }
}
export default Education;