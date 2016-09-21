'use strict';
import React from 'react';

class Topnav extends React.Component {

  render() {
    return (
      <nav>
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">{this.props.pagename}</a>
          </div>
        </div>
      </nav>
    );
  }

}

export default Topnav;
