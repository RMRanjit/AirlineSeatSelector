import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial } from '@react-three/drei'
//import * as AirlineConfiguration from "./AirlineConfiguration/Airbus-A320.json"
import {Config} from "../AirlineConfiguration/Airbus-A320.js";

function Train() {
  const ref = useRef()
  const scroll = useScroll()
  const [cabin, seat] = useGLTF(['/cabin-transformed.glb', '/seat-transformed.glb'])
  const meshes = useMemo(() => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat }), [cabin, seat])
  useFrame(() => (ref.current.position.z = scroll.offset * 120))
  // Merged creates THREE.InstancedMeshes out of the meshes you feed it
  // All in all we end up with just 5 draw-calls for the entire scene
  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => (
        <group ref={ref}>
          <Cabin models={models} color="#252525" seatColor="sandybrown" name="First Class" position={[0, 0, -6]} />
          <Cabin models={models} color="#454545" seatColor="gray" name="Business Class" position={[0, 0, -14]} />
          <Cabin models={models} color="#252525" seatColor="lightskyblue" name="Premium Economy" position={[0, 0, -22]} />
          <Cabin models={models} color="#454545" seatColor="gray" name="Economy" position={[0, 0, -30]} />
          <Cabin models={models} color="#252525" seatColor="sandybrown" name="Flex" position={[0, 0, -38]} />
        </group>
      )}
    </Merged>
  )
}

const Quarter = ({ models, color, ...props }) => (
  <group {...props}>
    <models.Seat color={color} position={[-0.35, 0, 0.5]} rotation={[0, 4, 0]} name="M1"/>
    <models.Seat color={color} position={[0.35, 0, 0.5]} rotation={[0, Math.PI, 0]} name="M1"/>
    <models.Seat color={color} position={[-0.35, 0, -0.5]} rotation={[0, Math.PI, 0]} name="M1" />
    <models.Seat color={color} position={[0.35, 0, -0.5]} rotation={[0, Math.PI, 0]} name="M1"/>
  </group>
)



const Row = ({ models, color, ...props }) => (
  <group {...props}>
    <Quarter models={models} color={color} position={[-1.1, -0.45, 7.5]} />
    <Quarter models={models} color={color} position={[1.1, -0.45, 7.5]} />
  </group>
)

const Cabin = ({ models, color = 'white', seatColor = 'white', name, ...props }) => (
  <group {...props}>
    <Text fontSize={1} color="#808080" position={[0, 5, 10]} rotation={[-Math.PI / 2, 0, 0]}>
      {name}
    </Text>
    {/* <models.Cabin color={color} /> */}
    <Row models={models} color={seatColor} />
    <Row models={models} color={seatColor} position={[0, 0, -2]} />
    <Row models={models} color={seatColor} position={[0, 0, -4]} />
    <Row models={models} color={seatColor} position={[0, 0, -6]} />
    {/* <Row models={models} color={seatColor} position={[0, 0, -8]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -10]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -12]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -14]} /> */}
  </group>
)

export default function App() {
  const FlyingClass = Config[0].class


  return (
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-15, 15, 18], fov: 35 }} gl={{ alpha: false }}>
      <fog attach="fog" args={['#17171b', 30, 40]} />
      <color attach="background" args={['#17171b']} />
      <ambientLight intensity={0.25} />
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
      <Suspense fallback={null}>
        <ScrollControls pages={3}>
          <Train />
        </ScrollControls>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
        <Environment preset="dawn" />
      </Suspense>
    </Canvas>
  )
}
