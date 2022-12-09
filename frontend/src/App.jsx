import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class App extends React.Component {

  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <>
      <Container>
      <Row>
        <Col lg={3}>
          <div style={{paddingLeft:"2rem"}}>
        <h2>Components</h2>
        </div>
        <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle"><img src="square.png"></img></div>
        </div>
      </Draggable>

      <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle"><img src="circle.png"></img></div>
        </div>
      </Draggable>
        
        </Col>
        <Col>
        <h2>Canvas</h2>
        <Card style={{align:"center",width:"50rem",height:"20rem","z-index": "-1"}}>
        <img src="dotted.jpeg"></img>
        </Card>
        </Col>
      </Row>
      </Container>
      </>
    );
  }
}
// function App() {
  // const [offsetTop, setOffsetTop] = React.useState(0);
  // React.useEffect(() => {
  // }, []);

  // const [{ opacity }, dragRef] = useDrag(
  //   () => ({
  //     type: ItemTypes.CARD,
  //     item: { text },
  //     collect: (monitor) => ({
  //       opacity: monitor.isDragging() ? 0.5 : 1
  //     })
  //   }),
  //   []
  // )

  // return (
  //   <div>
  //     <div ref={dragRef} style={{ opacity }}>
  //   {text}
  // </div>

  //   </div>
  // );
// }

export default App;
