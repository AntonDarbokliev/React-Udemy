import { useEffect, useState } from "react"

export default function QuestionTimer ({timeout , onTimeout}) {
    const [progressTime,setProgressTime ] = useState(timeout)
    useEffect(() => {
        console.log('SEtting timeout');
        setTimeout(onTimeout,timeout)

    },[onTimeout,timeout])

    useEffect(() => {
        setInterval(() => {
            setProgressTime(state => state - 100 )
        },100)

    },[])
    
    return (
        <>
        <progress id="question-time" value={progressTime} max={timeout} />
        </>
    )
}