import { useEffect, useState } from "react";


function Task (props) {
    
    const [classp, setClassp] = useState('');

    useEffect(
        (
            () => {props.status === 'feito' ? setClassp('line-through') : setClassp('')}
        ), [props.tarefa]
    );

    return (
        <>
            <p className={classp}>
                <input type="checkbox" className="mr-2"></input>
                {props.tarefa}
            </p>
        </>
    )
}

export default Task;