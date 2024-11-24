import {memo, useEffect, useMemo} from "react";
import * as THREE from "three";
import {useCube} from "../../hooks/context/CubeContext";

const Cube = memo((props: any) => {
    console.log("Cube rendered");
    const {ref}: any = useCube();
    const {color}: any = useCube();
    const material = useMemo(() => {
        return (
            <meshStandardMaterial color={color}/>
        );
    }, [color]);
    useEffect(() => {
        const colorsPosition: any = {
            "white": [0, 0, 0],
            "red": [0, -1, 0],
            "green": [-1, 0, 0],
            "blue": [0, 0, -1]
        }
        const newPosition = colorsPosition[color];
        ref.current.position.set(...newPosition);
        const rotation = setInterval(() => ref.current.rotation.y += THREE.MathUtils.degToRad(60), 500);
        return () => {
            clearInterval(rotation);
        }
    }, [color]);
    return (
        <mesh {...props} ref={ref}>
            <boxGeometry/>
            {material}
        </mesh>
    );
});

export default Cube;