import './App.css'
import {Canvas} from "@react-three/fiber";
import {ContactShadows, Environment, OrbitControls} from "@react-three/drei";
import ControlsUI from "./components/UI/Controls";
import MainScene from "./components/scenes/main";
function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }}>
            <ControlsUI/>
            <OrbitControls/>
            <MainScene />
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
