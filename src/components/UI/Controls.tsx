import {button, useControls} from "leva";
import * as THREE from "three";
import {useCube} from "../../hooks/context/CubeContext";

const Controls = () => {

    const {setColor, ref}: any = useCube();

    useControls({
        colorToWhite: button(() => setColor("white")),
        colorToRed: button(() => setColor("red")),
        colorToGreen: button(() => setColor("green")),
        colorToBlue: button(() => setColor("blue")),
        rotateCube: button(() => ref.current.rotation.y += THREE.MathUtils.degToRad(60))
    })
    return (
        <></>
    );
}

export default Controls;