import {useRef} from 'react'; 
// create DOM reference 
function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef() 

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
        // get value of current ref 
        inputRef.current.value = 'Hello' 
        // change style of ref 
        inputRef.current.style.backgroundColor = 'red' 
        // 객체 참조이기 때문에 컴포넌트를 상태 변경할 때처럼 리렌더링되지 않음 
        paraRef.current.innerText = 'Goodbye' 
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" ref={inputRef} id='name' className="form-control mb-2" />
                <button type='submit' className='btn btn-primary'>Submit</button>
                 <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
            </form>
        </div>
    )
}

export default UseRefExample1
