import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // react-icons 아이콘 사용! 아이콘 이름을 컴포넌트처럼 사용하면 됨
import './TodoInsert.scss';

const TodoInsert = () => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return (
        <form className="TodoInsert">
            <input
                placeholder="할 일을 입력하시오!"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;

