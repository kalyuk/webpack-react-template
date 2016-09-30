import React, {Component} from 'react';

if (global.IS_BROWSER) {
  require('./app.styl');
}


class App extends Component {

  render() {
    return (
      <div>
        App {this.props.children}
      </div>
    )
  }

}

export default App