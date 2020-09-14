import React ,{Component}from 'react';
import { render } from "react-dom";
import BugReport from './lib/index'
class App extends Component {
  render(){
    return(
      <div style={{ width: '100%',height : '100vh', margin: "auto" ,backgroundColor : 'pink'}}>
      <BugReport user = "ronit" app_id = "test"/>
    </div>
    )
  }
}
 

render(<App />, document.getElementById("root"));
