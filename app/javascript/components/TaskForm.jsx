import React, { Component } from 'react';
import axios from 'axios'


class TaskForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: this.props.task.title,
			body: this.props.task.body
		}
	}


	  handleInput = (event) => {
	  	this.props.resetNotification()
    	this.setState({[event.target.name]: event.target.value})
      }

      // handleBlur(){	
      // 	const task = {title: this.state.title, body: this.state.body}

      // 	axios.put(
      // 		`http://localhost:5000/api/v1/tasks/${this.props.task.id}`,
      // 		{task: task}
      // 		)
      // 	.then(response => {
      // 		console.log(response)
      // 		this.props.updateTask(response.data)
      // 	})
      // 	.catch(error => console.log(error))
      // }



	render(){
		return(
			<div className="task-component-tile">
				<form>
					<input
						type='text'
						className="input"
						placeholder='Enter a title'
						name="title"
					 />
					<textarea
						type='text'
						className="input"
						placeholder="Enter your task"
						name="body"
					> 
					</textarea>
				</form>
			</div>
			)
	}
}

export default TaskForm;