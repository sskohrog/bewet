import React, { Component } from 'react';

export class SchedulingPage extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src =
      'https://square.site/appointments/buyer/widget/32nwpnzz5vm5qj/L1C555Q3SYM90.js';
    script.async = true;

    // Check if the script has already been appended
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }
  }

  render() {
    return <></>;
  }
}
