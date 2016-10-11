import React, {Component} from 'react';
import {Link} from 'react-router';

if (global.IS_BROWSER) {
  require('./homepage.styl');
}


class Homepage extends Component {

  render() {
    return (
      <div className='page-homepage'>
        <div>Page: Homepage<hr /></div>
        <Link to='/about'>About</Link>
      </div>
    );
  }

}

export default Homepage;
