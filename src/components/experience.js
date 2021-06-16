import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell className = "rCol-exp" col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell className = "lCol-exp" col = {8}>
                    <h4>{this.props.jobName}</h4>
                    <h5>{this.props.jobTitle}</h5>
                    <hr/>
                    <p>{this.props.jobDesc}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;