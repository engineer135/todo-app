import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  console.log('createBulkTodos run...');
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 이렇게 함수형 update를 하면(앞에 todos=>를 추가) todos 배열이 바뀌어도 onRemove와 onToggle 함수 새롭게 바뀌지 않음!
      // todos 배열이 업데이트되면 onRemove와 onToggle 함수는 최신 상태의 todos를 참조하기 때문에 todos 배열이 바뀔때마다 함수가 새로 만들어짐.
      // 이걸 피하려면 함수형 update를 사용한다.
      // 그리고 두번째 인자인 배열에 [todos]를 빼서 빈 배열 넘겨야함
      setTodos(todos => todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        )
      )
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate >
  );
};

export default App;