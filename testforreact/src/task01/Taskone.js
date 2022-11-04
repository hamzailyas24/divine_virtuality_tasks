import React from "react";
import { Button, Container } from "react-bootstrap";

function Taskone() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Container>

        <h1 className="text-center mt-4">TASK 01</h1>

        <h1 className="text-danger text-center">{count}</h1>
        <div className="d-flex justify-content-center align-items-center">
          {count < 10 ? (
            <Button variant="primary" className="m-2" onClick={() => setCount(count + 1)}>
              Increment
            </Button>
          ) : null}

          {count > 0 ? (
            <Button variant="danger" onClick={() => setCount(count - 1)}>
              Decrement
            </Button>
          ) : null}
        </div>
      </Container>
    </>
  );
}

export default Taskone;
