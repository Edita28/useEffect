import { useEffect, useState} from 'react'


export default function count() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `count: ${count}`
    }, [count])

    return(
        <>
            <button onClick={() => setCount((count) => count + 1)}></button>
            <h1>Count: {count}</h1>
        </>
    )
}