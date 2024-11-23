import './App.css'
import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, OrbitControls} from "@react-three/drei";
import Cube from "./components/models/Cube";
import ControlsUI from "./components/UI/Controls";
function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }}>
            <ControlsUI/>
            <OrbitControls/>
            <Cube />
            <ContactShadows
                position-y={-2}
                opacity={0.5}
                blur={2}
                color={"pink"}
                scale={10}
            />
            <Environment preset={"apartment"} />
        </Canvas>
    )
}

export default App
