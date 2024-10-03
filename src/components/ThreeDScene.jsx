import React, { useRef, useState } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Box } from '@react-three/drei';
import { Howl } from 'howler';

// Initialize sound effect
const SoundEffect = new Howl({
  src: ['path/to/your/sound.mp3'], // Replace with your sound file path
});

const ThreeDImage = ({ imageSrc }) => {
  const mesh = useRef();
  const texture = useTexture(imageSrc);
  const [clicked, setClicked] = useState(false);

  // Handle click event
  const handleClick = () => {
    setClicked(true);
    SoundEffect.play();
  };

  useFrame(() => {
    if (clicked) {
      mesh.current.rotation.y += 0.01;
      const scale = Math.sin(mesh.current.rotation.y) * 0.5 + 1.5;
      mesh.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Box
      ref={mesh}
      onClick={handleClick}
      args={[1, 1, 1]}
      scale={[1, 1, 1]}
    >
      <meshStandardMaterial map={texture} />
    </Box>
  );
};

const ThreeDScene = ({ imageSrc }) => (
  <Canvas className="w-32 h-32 mx-3">
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <ThreeDImage imageSrc={imageSrc} />
    <OrbitControls />
  </Canvas>
);

export default ThreeDScene;
