import React, { Component } from 'react';

class Newsletter extends Component {
  render() {
    return (
        <form>
            <div className="form-group">
                <input className="form-control grayBg" type="text"/>
            </div>
            <button className="btn btn-primary btn-lg">Subscribe!</button>
        </form>
    );
  }
}


export default Newsletter;
