import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            completed: this.props.completed,
            startTime: this.props.startTime
        };
    }

    onChange = () => {
        this.setState({
            completed: !this.state.completed
        });
    }

    onDelete = () => {
      this.props.onDelete(this.props.id);
    }

    render() {
      const style = {
        color: '#aaa'
      };
      const btnStyle = {
        border: 'none',
        position: 'absolute',
        right: '5px',
        top: '5px',
        color: '#ff5c8f',
        fontSize: '1em'
      };
      const text = (
        <span>
          <span>{this.state.text}</span>
          <br/>
          <span style={style}>{this.state.startTime}</span>
        </span>
      );
        return (
          <MuiThemeProvider>
            <li style={{
              textDecoration: this.state.completed ? "line-through" : "none",
              listStyle: "none",
              marginTop: '16px',
              backgroundColor: '#fff',
              padding: '15px 18px',
              maxWidth: '336px',
              position: 'relative'
            }}>
              <Checkbox checked={this.state.completed} label={text} onCheck={this.onChange} />
              <button style={btnStyle} onClick={this.onDelete}>x</button>
            </li>
          </MuiThemeProvider>
        )
    }
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  startTime: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;