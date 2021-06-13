import React, { Component } from 'react';
import {Grid, Cell,List,ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
    render() {
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <h2>Kaylyn Egyarto</h2>
                        <img
                            src = "https://avatars.githubusercontent.com/u/47900205?s=460&u=81949678649606964cff36864a2085b02723e825&v=4"
                            alt = "contactPic"
                            className = "contact-img"
                            />
                            <p>Thank you for taking the time to view my website.<br/>
                            If you have any questions about the website or <br/>want
                               to contact me, feel free to respond in whatever way 
                               you like best!
                            </p>
                    </Cell>
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className = "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent >
                                        <a href="tel:+7082188465">
                                            <i className = "fa fa-phone-square" aria-hidden = "true"/>
                                       </a>
                                       <span>(708) 218-8465</span>
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent >
                                        <a href="mailto:egyartok@gmail.com" >

                                        <i className = "fa fa-envelope" aria-hidden = "true"/>
                                        </a>
                                        <span>egyartok@gmail.com</span>
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent>
                                        <a href = "https://www.linkedin.com/in/kaylyn-egyarto/" rel = "noopener noreferrer" target = "_blank">
                                            <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
                                        </a>
                                        <span>kaylyn-egyarto</span>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent>
                                        <a href = "https://github.com/kegyarto" rel = "noopener noreferrer" target = "_blank">
                                            <i className = "fa fa-github-square" aria-hidden = "true"/> 
                                        </a>
                                        <span>On Github</span>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;