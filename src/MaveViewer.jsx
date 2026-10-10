
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';

function MaveModel() {
    const { scene } = useGLTF('/models/mave.glb');

    return (
        <Center>
            <primitive object={scene} scale={1} />
        </Center>
    );
}

export default function MaveViewer() {
    return (
        <div className="mave-viewer">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />

                <directionalLight
                    position={[3, 4, 5]}
                    intensity={2}
                />

                <Suspense fallback={null}>
                    <MaveModel />
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    minDistance={2}
                    maxDistance={8}
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    );
}
