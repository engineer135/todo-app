import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // react-icons 아이콘 사용! 아이콘 이름을 컴포넌트처럼 사용하면 됨
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value값 초기화

            //submit 이벤트는 브라우저에서 새로고침을 발생시킴. 이를 방지하기 위해 추가
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
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

