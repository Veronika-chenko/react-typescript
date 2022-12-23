import React, {FC, useState, useRef} from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
        console.log('DROP')
    }
  return (
      <div>
          <div style={{marginBottom: 15}}>
              <input type="text" value={value} onChange={changeHandler} placeholder="Controlled"/>
            <input ref={inputRef} type="text" placeholder="Uncontrolled"/>
            <button onClick={clickHandler}>EventsExample Button</button>
          </div>
          <div onDrag={dragHandler} draggable style={{width: 200, height: 100, background: 'red'}}>Drag this to the box below</div>
          <div
              onDrop={dropHandler}
              onDragLeave={leaveHandler}
              onDragOver={dragWithPreventHandler}
              style={{
                  width: 200,
                  height: 100,
                  background: isDrag ? 'blue' : 'red',
                  marginTop: 15
              }}>
            </div>
    </div>
  )
}

export default EventsExample;

// 1. comtrolled input
// 2. event type /типізація події