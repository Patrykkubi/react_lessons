import { useState } from "react";

const Test = () => {
    const [test,setTest] = useState();
    const testing = () => { setTest('xd'); console.log(test); }

    
    return <p onClick={()=>testing()}>test</p> }

export default Test;