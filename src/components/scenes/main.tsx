import {useCallback, useState} from "react";
import Cube from "../models/Cube";

const MainScene = () => {
    const [count, setCount] = useState(0);
    const onCubeClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);
    console.log(count);
    return (
        <>
            <Cube onClick={() => onCubeClick()} />
        </>
    )
}

export default MainScene;