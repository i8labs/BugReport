import React ,{Component}from 'react';
import { render } from "react-dom";
import BugReport from './lib/index'
class App extends Component {
  render(){
    return(
      <div >        
        <div style={{ width: '100%',height : '100vh', backgroundColor : 'pink'}}>    
        <BugReport user = "ronit" app_id = "test"/>
        </div>
      </div>
    )
  }
}
 

render(<App />, document.getElementById("root"));
