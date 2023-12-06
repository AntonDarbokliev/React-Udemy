import { useEffect, useState } from "react"

export default function QuestionTimer ({timeout , onTimeout,mode}) {
    const [progressTime,setProgressTime ] = useState(timeout)
    useEffect(() => {
        console.log('SEtting timeout');
        const timer =  setTimeout(onTimeout,timeout)

        return () => {
            clearTimeout(timer)
        }

    },[timeout,onTimeout])

    useEffect(() => {
        console.log('SEtting interval');

        const interval = setInterval(() => {
            setProgressTime(state => state - 100 )
        },100)

        return () => {
            clearInterval(interval)
        }

    },[])
    
    return (
        <>
        <progress id="question-time" value={progressTime} max={timeout} className={mode} />
        </>
    )
}