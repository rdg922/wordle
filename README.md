<script>
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

render() {
    return (
      <div className="App">
        <div ref={this.myRef} id='render'/>
      </div>
    );
  }
<script>
