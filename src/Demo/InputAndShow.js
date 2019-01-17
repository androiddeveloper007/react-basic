import React,{Component} from 'react'

const InputAndShow = (props) => {
	return <div>
	<p>大家好，我是{props.name}我有{props.count}个豆豆！</p>
	
	<input type="text" onChange={props.onchange}></input>
	</div>
}
export default InputAndShow;
	