import './Form.css';
import React from 'react';

class Form extends React.Component {

   state = { term: '' };

   onFormSubmit = (event, props) => {
      event.preventDefault();
      this.props.parent_addTodo(this.state.term);
      this.setState({ term: '' });
   }

   render() {
      return (
         <div className="mt-4">
            <form className="text-center" onSubmit={this.onFormSubmit}>
               <input
                  type="text"
                  placeholder=" Add a todo item"
                  value={this.state.term}
                  onChange={e => this.setState({ term: e.target.value })} />
               <button id="add-button" className="btn btn-primary btn-sm ml-1">Add</button>
            </form>
         </div>
      );
   }
}

export default Form;
