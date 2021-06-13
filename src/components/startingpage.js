import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Starting extends Component{
    render() {
        return(
            <div style = {{width: '100%',margin:  'auto'}}>
                <Grid className = "starting-grid">
                    <Cell col = {12}>
                        <img
                            src = "https://avatars.githubusercontent.com/u/47900205?s=460&u=81949678649606964cff36864a2085b02723e825&v=4"
                            alt = "profileImg"
                            className = "profile-img"
                        />
                        <div className = "banner-text">
                            <h1>Entry Level Developer</h1>

                            <hr></hr>
                            <p> C | C++ | Java | SQL | HTML5 | CSS3 | Javascript</p>
                        <div className = "social-icons">

                            <a href = "https://www.linkedin.com/in/kaylyn-egyarto/" rel = "noopener noreferrer" target = "_blank">
                                <i className = "fa fa-linkedin-square" aria-hidden = "true"/> 
                            </a>
                            <a href = "https://github.com/kegyarto" rel = "noopener noreferrer" target = "_blank">
                                <i className = "fa fa-github-square" aria-hidden = "true"/> 
                            </a>

                        </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}
export default Starting;