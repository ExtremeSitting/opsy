'use strict';
import React from 'react';
import * as Monitoring from 'opsy-monitoring';


class Topnav extends React.Component {

  render() {
    //const pluginlinks = this.props.pluginlinks.map((item) => <li key={item.name}><a href={item.url}>{item.name}</a></li>);
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
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
          <div>
          <ul className="nav navbar-nav">
            <li>
              <a href="/">About</a>
            </li>
            <Monitoring.Topnav />
          </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Topnav;
