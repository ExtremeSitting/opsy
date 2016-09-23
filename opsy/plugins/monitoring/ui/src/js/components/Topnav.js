'use strict';
var React = require('react');

class MonitoringTopnav extends React.Component {

  render() {
    return (
      <li>
        <a href="/events">Events</a>
      </li>
    );
  }

}

exports.default = MonitoringTopnav;
