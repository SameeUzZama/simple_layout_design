import React from "react";
import {
  Container,
  Row,
  Col,
  // DropdownButton,
  // Dropdown,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import "./All.css";

const Layout = () => {
  return (
    <div className="layout">
      <Container className="container">
        <Row className="drop-down">
          <div className="btn_grp">
            <ButtonGroup>
              <div className="buttons">
                <label>Choose...</label>
                <Form.Select
                  aria-label="Default select example"
                  className="button"
                >
                  <option>Open this select menu</option>
                  <option value="1">Choose...One</option>
                  <option value="2">Choose...Two</option>
                  <option value="3">Choose...Three</option>
                </Form.Select>
              </div>
              <div className="buttons">
                <label>Choose...</label>
                <Form.Select
                  aria-label="Default select example"
                  className="button"
                >
                  <option>Open this select menu</option>
                  <option value="1">Choose...One</option>
                  <option value="2">Choose...Two</option>
                  <option value="3">Choose...Three</option>
                </Form.Select>
              </div>
              <div className="buttons">
                <label>Choose...</label>
                <Form.Select
                  aria-label="Default select example"
                  className="button"
                >
                  <option>Open this select menu</option>
                  <option value="1">Choose...One</option>
                  <option value="2">Choose...Two</option>
                  <option value="3">Choose...Three</option>
                </Form.Select>
              </div>
              <div className="buttons">
                <label>Choose...</label>
                <Form.Select
                  aria-label="Default select example"
                  className="button"
                >
                  <option>Open this select menu</option>
                  <option value="1">Choose...One</option>
                  <option value="2">Choose...Two</option>
                  <option value="3">Choose...Three</option>
                </Form.Select>
              </div>
              <div className="buttons">
                <label>Choose...</label>
                <Form.Select
                  aria-label="Default select example"
                  className="button"
                >
                  <option>Open this select menu</option>
                  <option value="1">Choose...One</option>
                  <option value="2">Choose...Two</option>
                  <option value="3">Choose...Three</option>
                </Form.Select>
              </div>
            </ButtonGroup>
          </div>
          {/* <div className="btn_grp">
          <ButtonGroup>
            <div className="buttons">
              <label>Choose...</label>
              <DropdownButton className="button" title="Drop-1">
                <Dropdown.Item href="#/action-1">Choose...1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Choose...2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Choose...3</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="buttons">
              <label>Choose...</label>
              <DropdownButton className="button" title="Drop-2">
                <Dropdown.Item href="#/action-1">Choose...1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Choose...2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Choose...3</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="buttons">
              <label>Choose...</label>
              <DropdownButton className="button" title="Drop-3">
                <Dropdown.Item href="#/action-1">Choose...1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Choose...2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Choose...3</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="buttons">
              <label>Choose...</label>
              <DropdownButton className="button" title="Drop-4">
                <Dropdown.Item href="#/action-1">Choose...1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Choose...2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Choose...3</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="buttons">
              <label>Choose...</label>
              <DropdownButton className="button" title="Drop-5">
                <Dropdown.Item href="#/action-1">Choose...1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Choose...2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Choose...3</Dropdown.Item>
              </DropdownButton>
            </div>
          </ButtonGroup>
        </div> */}
        </Row>
        <Row className="row1">
          <Col className="col1">Row 1 Column 1</Col>
          <Col className="col2">Row 1 Column 2</Col>
          <Col className="col3">Row 1 Column 3</Col>
          <Col className="col4">Row 1 Column 4</Col>
        </Row>
        <Row className="row2">
          <Col className="col5">Row 2 Column 1</Col>
          <Col className="col6">Row 2 Column 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
