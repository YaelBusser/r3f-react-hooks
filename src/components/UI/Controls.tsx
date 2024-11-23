import {button, useControls} from "leva";
import * as THREE from "three";
import {useCube} from "../../hooks/useTheme";

const Controls = () => {

    const {setColor, ref}: any = useCube();

    useControls({
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