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
        <div>App: <hr /></div>
        {this.props.children}
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
