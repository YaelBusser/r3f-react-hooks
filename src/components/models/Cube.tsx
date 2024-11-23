import {memo, useCallback, useEffect, useMemo, useState} from "react";
import * as THREE from "three";
import {useCube} from "../../hooks/useTheme";

const Cube = memo((props: any) => {
    console.log("Cube rendered");
    const {ref}: any = useCube();
    const {color}: any = useCube();
    const [count, setCount] = useState(0);
    const onCubeClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [count]);
    const material = useMemo(() => {
        return (
            <meshStandardMaterial color={color}/>
        );
    }, [color]);
    useEffect(() => {
        const colorsPosition: any = {
            "red": [0, -1, 0],
            "green": [-1, 0, 0],
            "blue": [0, 0, -1]
        }
        const newPosition = colorsPosition[color];
        ref.current.position.set(...newPosition)
        const rotation = setInterval(() => ref.current.rotation.y += THREE.MathUtils.degToRad(60), 500);
        return () => {
            clearInterval(rotation);
        }
    }, [color]);
    console.log(count);
    return (
        <mesh {...props} ref={ref} onClick={() => onCubeClick()}>
            <boxGeometry/>
            {material}
        </mesh>
    );
});

export default Cube;