import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./utils/api";
import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const getTasks = async () => {
    const response = await api.get("/tasks");
    setTodoList(response.data.data);
  };
  const addTask = async () => {
    try{
      const response = await api.post("/tasks", {
        task: todoValue, isCompleted: false
      });
      if(response.status === 200) {
        console.log('성공')
        getTasks();
      }
    }
    catch (error) {
      console.error("Error adding task:", error);
    }}
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const toggleComplete = async (id, isCompleted) => {
    try {
      await api.put(`/tasks/${id}`, { isCompleted: !isCompleted });
      getTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value  )}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>추가</button>
        </Col>
      </Row>

      <TodoBoard todoList={todoList} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </Container>
  );
}

export default App;
