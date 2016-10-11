import React, {Component} from 'react';
import {Link} from 'react-router';


class About extends Component {

  render() {
    return (
      <div className='page-about'>
        <div>Page: About<hr /></div>
        <Link to='/'>Home</Link>
      </div>
    );
  }

}

export default About;
