import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person name="zzp" count="2000"/>
          <Person name={this.state.persons[0].name} count={this.state.persons[0].count}/>
			  {/*向子组件中传递一个事件*/}
          <Person name="kkykuyi" count="200" myclick={this.switchNameClick.bind(this,"大大")}>非常感谢你</Person>
		  {/*第一种方式，使用es6中的匿名函数，点击时传值*/}
			  {/*<button onClick={() => this.switchNameClick("剌剌")}>更改state</button>*/}
			  {/*第二种bind的方式*/}
		  <button onClick={this.switchNameClick.bind(this,"马刺")}>更改state</button>
        </header>
      </div>
    );
  }
}

export default App;
