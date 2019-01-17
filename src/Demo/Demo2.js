import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import InputAndShow from './InputAndShow'

/*双向数据绑定*/
class Demo2 extends Component {
	
	//state来自Component，可以在次类中使用
	state = {
		persons:[{name:"zzp",count:50},{name:"zzp",count:50},{name:"zzp",count:50}],
		otherState:"anything"
	}
	
	switchNameClick = (newName) => {
		this.setState({
			persons:[{name:newName,count:50},{name:"zzp",count:50},{name:"zzp",count:50}]
		})
	}
	onchange = (event) =>{
		this.setState({
			persons:[{name:event.target.value,count:50},{name:"zzp",count:50},{name:"zzp",count:50}]
		})
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputAndShow name={this.state.persons[0].name} count={this.state.persons[0].count} 
			onchange={this.onchange.bind(this,)}/>
        </header>
      </div>
    );
  }
}

export default Demo2;
