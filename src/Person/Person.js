import React,{Component} from 'react'

const person = (props) => {
	return <div>
	<p>大家好，我是{props.name}我有{props.count}个豆豆！</p>
	{/*向子组件中传递一个事件*/}
	<p onClick={props.myclick}>{props.children}</p>
	</div>
}
export default person;
	