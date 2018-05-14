import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.count = 1;
  }

  onClickAdd = (e) => {
    e.preventDefault();
    const time = new Date();
    const todos = this.state.todos;
    if(this.refs.myTextField.input.value === '') {
      return;
    }
    else {
      this.count++;
      todos.push({
        id: this.count,
        text: this.refs.myTextField.input.value.trim(),
        startTime: time.toLocaleDateString().split('/').join('-'),
        completed: false
      });
      this.setState({
        todos: todos
      });
      this.refs.myTextField.input.value = "";
    }
  }

  onDelete = (id) => {
    let temp = this.state.todos;
    temp = temp.filter(item => item.id !== id);
    this.setState({
      todos: temp
    });
  }

  componentDidMount() {
    const time = new Date();
    const todos = [{
        id: 0,
        text: '学习',
        startTime: time.toLocaleDateString().split('/').join('-'),
        completed: false
      }, {
      id: 1,
        text: '学习2',
        startTime: time.toLocaleDateString().split('/').join('-'),
        completed: false
      },
    ];
    this.setState({
      todos: todos
    });
  }

    render() {
      const style = {
        marginLeft: '20px',
      };
      return (
        <MuiThemeProvider>
          <div style={{
            display: 'inline-block',
            marginTop: '40px',
            position: 'relative',
            left: '50%',
            marginLeft: '-168px'
          }}>

            <div style={{
              display: 'inline-block',
            }}>
              <h1 style={{textAlign: 'center'}}>TodoList</h1>
              <TextField hintText="Add TODO" ref='myTextField' fullWidth={false} style={{
                ...style,
                Width: '400px'
              }} />
              <FloatingActionButton mini={true} onClick={this.onClickAdd} style={style}><ContentAdd/></FloatingActionButton>
            </div>
            <ul style={{padding: '0'}}>
              {this.state.todos.length === 0 ? "没有" : this.state.todos.map((item) =>
                  <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} startTime={item.startTime} onDelete={this.onDelete}/>
              )}
            </ul>
          </div>
        </MuiThemeProvider>
        )
    }
}

export default TodoList;