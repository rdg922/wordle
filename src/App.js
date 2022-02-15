import React from 'react'
import p5 from "p5"
import Sketch from "./sketch/Sketch"

const defaultSettings = {

}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => Sketch(p, this.state || defaultSettings)

  componentDidMount() {
    this.startSketch()
  }

  componentWillUnmount() {
    this.stopSketch();
  }

  componentWillUpdate() {
    this.stopSketch();
  }

  startSketch() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  stopSketch() {
    this.myP5.remove();
  }

  render() {
    return (
      <div className="App">
        <div ref={this.myRef} id='render'/>
      </div>
    );
  }
}

export default App;
