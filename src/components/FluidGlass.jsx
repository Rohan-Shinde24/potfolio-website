/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, memo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens', lensProps = {}, cubeProps = {} }) {
  const Wrapper = mode === 'cube' ? Cube : Lens;
  const modeProps = mode === 'cube' ? cubeProps : lensProps;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 15 }} 
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Wrapper modeProps={modeProps} />
      </Canvas>
    </div>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  geometry,
  followPointer = true,
  modeProps = {},
  ...props
}) {
  const ref = useRef();

  useFrame((state, delta) => {
    const { pointer, camera } = state;
    const v = state.viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
    
    // Smooth rotation
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.3;
    }
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <mesh ref={ref} scale={scale ?? 1.5} {...props}>
      {geometry}
      <MeshTransmissionMaterial
        ior={ior ?? 1.2}
        thickness={thickness ?? 1.5}
        anisotropy={anisotropy ?? 0.1}
        chromaticAberration={chromaticAberration ?? 0.1}
        transmission={1}
        roughness={0.1}
        backside={true}
        color="#ffffff"
        {...extraMat}
      />
    </mesh>
  );
});

function Lens({ modeProps, ...p }) {
  return (
    <ModeWrapper 
      geometry={<sphereGeometry args={[1, 64, 64]} />} 
      followPointer 
      modeProps={modeProps} 
      {...p} 
    />
  );
}

function Cube({ modeProps, ...p }) {
  return (
    <ModeWrapper 
      geometry={<boxGeometry args={[1, 1, 1]} />} 
      followPointer 
      modeProps={modeProps} 
      {...p} 
    />
  );
}
