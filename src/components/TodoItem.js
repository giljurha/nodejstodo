import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, deleteTask, toggleComplete }) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item ${item.isCompleted ? "item-completed" : ""}`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={() => deleteTask(item._id)}>삭제</button>
            <button className="button-delete" onClick={() => toggleComplete(item._id, item.isCompleted)}>
              {item.isCompleted ? "되돌리기" : "끝남"}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
