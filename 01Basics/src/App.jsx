import React,{ useState } from 'react';
import './index.css';
import './App.css';

function App(){
    let [cnt,SetCnt] = useState(0);

    // this will however change the value as all the 
    // fucntion will return values all the times so
    // batching wont work 

    // const AddValue = () => {
    //     SetCnt((cnt) => cnt + 1);
    //     SetCnt((cnt) => cnt + 1);
    //     SetCnt((cnt) => cnt + 1);
    //     SetCnt((cnt) => cnt + 1);
    // }

    // this wont increase the value by 4 because of
    // batching ,as SetCnt will always extract values 
    // from original function only.
    
    // const AddValue = () => {
    //     SetCnt(cnt + 1);
    //     SetCnt(cnt + 1);
    //     SetCnt(cnt + 1);
    //     SetCnt(cnt + 1);
    // }
    
    const AddValue = () => {
        SetCnt(cnt + 1);
    }

    const SubValue = () => {
        SetCnt(cnt - 1);
    }
    
    return(
        <>
            <h1>Whats the count : {cnt}</h1>
            <h1>The count is : {cnt}</h1>
            <button onClick={AddValue}> Add Value </button>
            <button onClick={SubValue}> Sub Value </button>
        </>
    );
}

export default App;