import {useState,useEffect} from 'react';

function Example() {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: '学习 Hook' }]);

    function handleChange(){
        setFruit('apple');
        setTodos([{text:'学习react'}]);
    }
    useEffect(() => {
        document.title = ` ${count} times`;
      });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <p>{fruit}</p>
        <p>{todos[0].text}</p>
        <button onClick={handleChange} ></button>
      </div>
    );
  }
  export default Example;