import React ,{useState,useEffect} from 'react'


export default function TestState({prudhvi}) {
    const [value , setValue] = useState(0);
    console.log(prudhvi);
    useEffect(() => {
         setValue( value + 1);
    }, [])
    
  return (
    <div>testState</div>
  )
}
