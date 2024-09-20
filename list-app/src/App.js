import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './component/UserList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
      <Row>
        <Col><UserList /></Col>
      </Row>
    </Container>
      
      <br />
      <hr />
      {/* 맛집 리스트 추가 */}
      {/* 월미당(쌀국수집) */}
    </div>
  );
}

export default App;
