import React , {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar.js';
import './components/Toolbar/Toolbar.css';
import SideDrawer from './components/SideDrawer/SideDrawer.js';
import BackDrop from './components/Backdrop/Backdrop.js';
// Importing Pages 
import About from './components/Pages/About.js'
import Header from './components/Pages/Header.js';
import Contact from './components/Pages/Contact.js';
import Skills from './components/Pages/Skills.js';

class App extends Component{
  state ={
     sideDrawerOpen:false
  };
  drawerToggleClickHandler = ()=>{
      this.setState((prevState)=>{
          return {sideDrawerOpen: !prevState.sideDrawerOpen}
      });
  };

  backdropClickHandler =()=>{
      this.setState({sideDrawerOpen:false})
  };

  render(){
    let backdrop;

    if (this.state.sideDrawerOpen) {
       
       backdrop=<BackDrop click={ this.backdropClickHandler}/>;
    }
    return(
       <div style={{style:'height:100%;'}}>
         <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
         {/* Pages  */}
         <Header/>
         <About/>
         <Skills/>
       </div>
    );
  }
}

export default App;
