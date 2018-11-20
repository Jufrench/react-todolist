import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
   constructor(props) {
      super(props);

      this.state = { checked: false };

      this.inputRef = React.createRef();
   }

   toggleCheckbox = () => {
      this.setState({ checked: !this.state.checked });
   }

   pStyle = () => {
      return this.state.checked ? 'line-through' : 'none';
   }

   render() {
      return (
         <li className="row list-group-item border mb-1">
            <div className="row align-items-center">
               <input
                  className="col-sm-1"
                  type="checkbox"
                  ref={this.inputRef}
                  onChange={this.toggleCheckbox}
                  checked={this.state.checked} />
               <p
                  className="col-sm-9"
                  style={{ textDecoration: this.pStyle() }}>
                  {this.props.todo}
               </p>
               <span id="delete"
                  onClick={() => this.props.parent_RemoveTodo(this.props.todo)}
                  className="btn offset-sm-1 col-sm-1 float-right">X</span>
            </div>
         </li>
      );
   }
}

export default TodoItem;
