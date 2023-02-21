
import { useState } from 'react';
import 'components/App/styles.css';
import Button from 'components/Button';

function App() {
  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  return (
    <div>
     <h1 className='text-3xl font-bold text-center my-8'>Счетчик</h1>
     <p className='text-8xl font-bold text-center mb-8'>{count}</p>
     <div className='flex justify-center'>
     <Button title="Отнять - 1" changeCount={minus}/>
     <Button title="Прибавить + 1" changeCount={plus}/>
     </div>
    </div>
  );
}

export default App;
