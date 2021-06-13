import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main';
import {Link } from 'react-router-dom';



class App extends Component{
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className = "header-color" title = "Kaylyn Egyarto" scroll>
              <Navigation >
                  <Link className = "hover-tabs" to = "/" ><span >Home</span></Link>
                  <Link className = "hover-tabs" to="/resumepage"><span>Resume</span></Link>
                  <Link className = "hover-tabs" to="/aboutme"><span>About Me</span></Link>
                  <Link className = "hover-tabs" to="/contactpage"><span>Contact</span></Link>
              </Navigation>
          </Header>
          <Drawer className = "drawer"  title="Kaylyn Egyarto">
              <Navigation >
                  <Link className = "hover-tabs" to = "/" ><span>Home</span></Link>
                  <Link className = "hover-tabs" to="/resumepage"><span>Resume</span></Link>
                  <Link className = "hover-tabs" to="/aboutme"><span>About Me</span></Link>
                  <Link className = "hover-tabs" to="/contactpage"><span>Contact</span></Link>
              </Navigation>
          </Drawer>
          <Content >
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

    
export default App;
