import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App.css'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    arraycomponents:[]
    }
  }

  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  addShape = (e,image) =>{
    e.preventDefault();
    var newArray = this.state.arraycomponents
    newArray.push(image)
    this.setState({arraycomponents:newArray})
  }


  render() {
    return (
      <div id="container">
      <Container>
      <Row>
        <Col lg={3}>
          <div style={{paddingLeft:"2rem"}}>
        <h2>Components</h2>
        <h5>Click on the Component to make it appear on the canvas</h5>
        </div>
        <img src="circle.png" onClick={(e)=>this.addShape(e,"circle.png")}></img>
        <br></br>
        <img src="square.png" onClick={(e)=>this.addShape(e,"square.png")}></img>
        </Col>
        <Col>
        <h2>Canvas</h2>
        <img src="dotted.jpeg" style={{align:"center",width:"60rem",height:"40rem","z-index": "-1"}}>
        </img>
        <div class="parent">
        {this.state.arraycomponents.map((image)=>{
        return(
          <Draggable
        style={{position:"fixed"}}
        handle=".handle"
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="image1 handle"><img src={image} className="image1"></img></div>
        </div>
      </Draggable>)})}
      </div>
        </Col>
      </Row>
      </Container>
      </div>
    );
  }
}

export default App;
