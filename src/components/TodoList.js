import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

// 지금 당장은 영향도가 제로
// 왜냐면 TodoList 컴포넌트의 부모 컴포넌트인 App 컴포넌트가 리렌더링되는 유일한 이유가
// todos 배열이 업데이트될때이기 때문. 하지만 App 컴포넌트에 다른 state가 추가되면! 불필요한 리렌더링 발생. 그때를 위해 React.memo 추가.
export default React.memo(TodoList);