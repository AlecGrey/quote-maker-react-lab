import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    //set up a controlled form with internal state
    content: '',
    author: ''
  }

  handleOnChange = event => {
    // Handle Updating Component State
    const target = event.target.tagName
    if ( target === 'TEXTAREA' ) {
      this.setState({ content: event.target.value })
    } else if (target === 'INPUT') {
      this.setState({ author: event.target.value })
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addQuote({
      ...this.state,
      id: uuid(),
      votes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onChange={ this.handleOnChange } onSubmit={ this.handleOnSubmit }>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (quoteObject) => dispatch(addQuote(quoteObject))
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
