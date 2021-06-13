import React, { Component } from 'react';
import {Grid, Cell,List,ListItem, ListItemContent} from 'react-mdl';
class About extends Component{
    render() {
        return(
            <div className = "about-body">
                <Grid className = "about-grid">
                    <Cell col = {6}>
                        <h2>Kaylyn Egyarto</h2>
                        <img
                            src = "https://avatars.githubusercontent.com/u/47900205?s=460&u=81949678649606964cff36864a2085b02723e825&v=4"
                            alt = "aboutPic"
                            className = "about-img"
                            />
                            
                    </Cell>
                    <Cell col = {6}>
                        <h2>About Me</h2>
                        <hr/>
                        <p> I recently graduated with a bachelors degree in Computer Science at University of Illinois at Chicago. I am focused on giving quality work by asking good questions because I care greatly about doing the best I can always. Also, I'm passionate about making programs that can help change people's lives. Some of the classes I took that could someday hopefully change people's lives for the better are, Human Augmentics, Artificial Intelligence and Video Game Design with Unity.
                            </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;

