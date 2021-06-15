import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render() {
        return(
            <div className = "resume-back">
               <Grid className = "resume-grid">
                   <Cell className = "resume-lCol" col = {4}>
                       <div>
                           <img className = "resume-img" src = "https://avatars.githubusercontent.com/u/47900205?s=460&u=81949678649606964cff36864a2085b02723e825&v=4" alt = "resumeImg"/>
                       </div>
                       <h2>Kaylyn Egyarto</h2>
                       <h4>Programmer</h4>
                       <hr/>
                       <p>
                       I recently graduated with a bachelors degree in Computer Science at University of Illinois at Chicago. I am focused on giving quality work by asking good questions because I care greatly about doing the best I can always. Also, I'm passionate about making programs that can help change people's lives. Some of the classes I took that could someday hopefully change people's lives for the better are, Human Augmentics, Artificial Intelligence and Video Game Design with Unity.
                       </p>
                       <hr/>
                       <h5>Phone</h5>
                       <p>(708) 218-8465</p>
                       <h5>Email</h5>
                       <p>egyartok@gmail.com</p>
                       <h5>Web</h5>
                       <p>to be determined</p>
                       <hr/>
                   </Cell>
                   <Cell className = "resume-rCol" col = {8}>
                       <h2>Education</h2>
                       <Education
                       startYear = "August 2017"
                       endYear = "May 2020"
                       schoolDegree = "BS Degree in Computer Science"
                       schoolName = "University of Illinois at Chicago"
                       schoolDesc = "Studies included software development skills and fundamentals in  Artificial Intelligence, Human Augmentics, Video Game Design, and Database "
                       />
                       <Education
                       startYear = "June 2015"
                       endYear = "May 2017"
                       schoolDegree = "AS Degree in Science"
                       schoolName = "Moraine Valley Community College"
                       schoolDesc = "General education courses covering math, science, english, and tech electives. Classes including Human Anatomy and Physiology with Cadavers, Psychology, Medical Terminology, and Chemistry " 
                       />
                       <hr/>
                       <h2>Experience</h2>
                       <Experience
                       startYear = "May 10, 2021"
                       endYear = "May 28, 2021"
                       jobName = "Morningstar – Chicago, IL"
                       jobTitle = "Software Engineering Information Security Team Internship"
                       jobDesc = "Part of Agile and Scrum team that developed a REST private API to communicate with AWS. Learned AWS services/AWS Lambda to connect S3 bucket to DynamoDB using API management. Wrote Python scripts to create AWS Lambda and for uploading JSON files. Created and delivered team presentation to management."
                       />
                       <Experience
                       startYear = "Jan - May 2020"
                       endYear = "Jan - May 2019"
                       jobName = "Teaching Assistant (UIC) – Chicago, Illinois"
                       jobTitle = "CS 141 Programming Design II"
                       jobDesc = "Helped students with program execution, debugging, and gave out lab assignments. Applied projects with data abstraction, recursion, list, stacks, and dynamic memory location"
                       />
                       <Experience
                       startYear = "August 2018"
                       endYear = "December 2018"
                       jobName = "Teaching Assistant (UIC) – Chicago, Illinois"
                       jobTitle = "CS 109/110 Programming for Engineers with MATLAB"
                       jobDesc = "Taught how to problem solve using vectors, data analysis, and visualization in MATLAB. Took time to help students learn the material by seeing where they got stuck in their projects. Got students familiar with I/O devices, arrays, Matrices and data types in C++"
                       />
                       <hr/>
                       <h2>Skills</h2>
                       <Skills
                            skill = {"JAVA" + "\xa0" + "\xa0" + "\xa0"}
                            progress = {100}
                       />
                       <Skills
                            skill ={ "C++" + "\xa0" + "\xa0" + "\xa0"}
                            progress = {95}
                       />
                        <Skills 
                            skill = {"C#" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0"}
                            progress = {60}
                            
                        />
                        <Skills 
                            skill = {"C" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" }
                            progress = {90}
                            
                        />
                        <Skills 
                            skill = {"SQL" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" }
                            progress = {100}
                            
                        />
                        <Skills 
                            skill = {"HTML" + "\xa0" + "\xa0"}
                            progress = {80}
                            
                        />
                        <Skills 
                            skill = {"CSS" + "\xa0" + "\xa0"+ "\xa0" + "\xa0" + "\xa0"}
                            progress = {80}
                            
                        />
                        <Skills 
                            skill = {"JS" +"\xa0"+ "\xa0"+"\xa0"+ "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0" + "\xa0"}
                            progress = {60}
                            
                        />
                        <Skills 
                            skill = {"React"  + "\xa0" + "\xa0" + "\xa0" + "\xa0"}
                            progress = {40}
                            
                        />

                   </Cell>
               </Grid>
            </div>
        )
    }
}
export default Resume;