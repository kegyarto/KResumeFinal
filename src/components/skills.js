import React, {Component} from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell className = "skills-progress"  col = {12}>
                    <div> 
                        {this.props.skill}
                        <ProgressBar  className = "progBar"
                            progress = {this.props.progress}
                           
                        />{this.props.progress + "%"}
                    </div>
                </Cell>

            </Grid>
        )
    }
}
export default Skills;