import { useEffect, useState } from 'react';
import { keyEventOptions } from './utils/utils';
import { ButtonEvent } from './utils/types';

function App() {
  const [valueA, setValueA] = useState<number | null>(null)
  const [valueB, setValueB] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)


  const handleMouseDown = (e: ButtonEvent) => {
    e.target.style.backgroundImage = 'url(/src/assets/button_pressed.png)';
    e.target.style.transform = 'translate(0px, 7px)';
    new Audio(`/src/assets/audio/click1.mp3`).play();
  };

  const handleUp = (e: ButtonEvent) => {
    e.target.style.backgroundImage = 'url(/src/assets/button.png)';
    e.target.style.transform = 'translate(0px, 0px)';
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.btns button')
    const objFromBtns = Array.from(buttons).map((el) => ({
      element: el,
      keyTriggers: el.getAttribute("data-key-triggers") || "",
    }))

    const handleKeyDown = (event: KeyboardEvent) => {
      const button = objFromBtns.find(btn => btn.keyTriggers.includes(event.key));

      if (button) {
        button.element.dispatchEvent(new MouseEvent('mousedown', keyEventOptions));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const button = objFromBtns.find(btn => btn.keyTriggers.includes(event.key));

      if (button) {
        button.element.dispatchEvent(new MouseEvent('mouseup', keyEventOptions));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <main>
      <div id='calculator'>
        <input
          type='text'
          placeholder='Hello!'

        />
        <div className='btns'>
          <div className='row-1 row'>
            <button
              data-key-triggers={['1']}
              data-value='1'
              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              1
            </button>
            <button
              data-key-triggers={['2']}
              data-value='2'
              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              2
            </button>
            <button
              data-key-triggers={['3']}
              data-value='3'
              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              3
            </button>
            <button
              data-key-triggers={['/']}
              data-value='/'

              data-key-type='calc'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              /
            </button>
          </div>
          <div className='row-2 row'>
            <button
              data-key-triggers={['4']}
              data-value='4'

              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              4
            </button>
            <button
              data-key-triggers={['5']}
              data-value='5'

              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              5
            </button>
            <button
              data-key-triggers={['6']}
              data-value='6'

              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              6
            </button>
            <button
              data-key-triggers={['-']}
              data-value='-'

              data-key-type='calc'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              -
            </button>
          </div>
          <div className='row-3 row'>
            <button
              data-key-triggers={['7']}
              data-value='7'

              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              7
            </button>
            <button
              data-key-triggers={['8']}
              data-value='8'

              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              8
            </button>
            <button
              data-key-triggers={['9']}
              data-value='9'

              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              9
            </button>
            <button
              data-value='+'
              data-key-triggers={['+']}
              data-key-type='calc'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              +
            </button>
          </div>
          <div className='row-4 row'>
            <button
              data-key-triggers={['0']}
              data-value='0'
              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              0
            </button>
            <button
              data-key-triggers={[',', '.']}
              data-value='.'
              data-key-type='num'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              ,
            </button>
            <button
              data-key-triggers={['=', 'Enter']}
              data-value='='
              data-key-type='action'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              =
            </button>
            <button
              data-key-triggers={['*']}
              data-value='*'
              data-key-type='calc'
              onMouseDown={handleMouseDown}
              onMouseUp={handleUp}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
