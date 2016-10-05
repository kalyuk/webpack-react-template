import React, {Component, PropTypes} from 'react';

if (global.IS_BROWSER) {
  require('./app.styl');
}

const propTypes = {
  children: PropTypes.node
};

class App extends Component {

  render() {
    return (
      <div>
        App {this.props.children}
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
