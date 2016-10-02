import React, {Component} from 'react';
import {Link} from 'react-router';

if (global.IS_BROWSER) {
  require('./homepage.styl');
}


class Homepage extends Component {

  render() {
    return (
      <div>
        Homepage

        <Link to='/catalog'>Go catalog</Link>
      </div>
    );
  }

}

export default Homepage;
