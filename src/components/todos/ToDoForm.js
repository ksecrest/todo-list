import { Component } from 'react';
class TodoForm extends Component {
  state = { title: "", complete: false }
  // take what the user input and save to state
  handleChange = (e) => {
    const { name, value } = e.target
    // const is a presentation variable?  you are parsing out certain elements of that variable
    // of "e" you are taking the name, value from e.target and saving it value, pulling the value of name
    this.setState({ [name]: value })
    // this.setState({ title: "a" })
    // this.setState({ age: "a" })
  }
  handleSubmit = (e) => {
// e.prevent code prevents default handle submit, to show in browser and delete
    e.preventDefault()
    // function to add the items in state to the list of todos
    this.props.addTodo(this.state)
    this.setState({ title: "", complete: false })
  }
  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name='title'
          value={title}
          onChange={this.handleChange}
          // required 
        />
        <button type='submit'>Add</button>
      </form>
    )
  }
}
export default TodoForm;