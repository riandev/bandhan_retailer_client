import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Row,
} from "react-bootstrap";

const ActiveStatus = () => {
  const [activeWeek, setActiveWeek] = useState("");
  const [status, setStatus] = useState({});
  useEffect(() => {
    fetch("http://67.21.32.75:6011/getStatus")
      .then((res) => res.json())
      .then((data) => setStatus(data[0]));
  }, []);
  const handleStatus = () => {
    fetch("http://67.21.32.75:6011/setstatus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activeWeek: activeWeek }),
    })
      .then((res) => res.json())
      .then((data) => data === true && window.location.reload());
  };
  return (
    <div>
      <div>
        <Card style={{ width: "35rem" }}>
          <Card.Header className="fw-bold fs-5">Active Week</Card.Header>
          <Card.Body>
            <Form.Label column md={4}>
              Set Active Week
            </Form.Label>
            <select
              className="form-select"
              id="inputGroupSelect07"
              required
              aria-label="Example select with button addon"
              onChange={(e) => setActiveWeek(e.target.value)}
            >
              <option value="0" selected>
                Choose...
              </option>
              <option value="week_1">Week One</option>
              <option value="week_2">Week Two</option>
              <option value="week_3">Week Three</option>
              <option value="week_4">Week Four</option>
            </select>
          </Card.Body>
          <Button
            onClick={handleStatus}
            className="w-25 mb-3 ml-5"
            variant="primary"
          >
            Set
          </Button>
        </Card>
        <div className="mt-3">
          <h4>Active Week: {status.activeWeek}</h4>
        </div>
      </div>
    </div>
  );
};

export default ActiveStatus;
