import { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial,Html, Sky, Cloud } from '@react-three/drei'
//import * as AirlineConfiguration from "./AirlineConfiguration/Airbus-A320.json"
import {Config} from "./AirlineConfiguration/Airbus-A320.js";
import UserProfile from './components/UserProfile/UserProfile.js';
import SeatProfile from './components/SeatProfile/SeatProfile.js';

function Aircraft({data}) {
  const ref = useRef()
  const scroll = useScroll()
  //const [cabin, seat] = useGLTF(['/cabin-transformed.glb', '/seat-transformed.glb'])
  //const meshes = useMemo(() => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat }), [cabin, seat])
  const [ seat] = useGLTF(['/seat-transformed.glb'])
  const meshes = useMemo(() => ({  Seat: seat.nodes.seat }), [seat])
  useFrame(() => (ref.current.position.z = scroll.offset * 120))
  // Merged creates THREE.InstancedMeshes out of the meshes you feed it
  // All in all we end up with just 5 draw-calls for the entire scene

  // console.log("Meshes ",meshes);
  

  return (
    <Merged castShadow receiveShadow meshes={meshes}>
      {(models) => (
        <group ref={ref}>
          {data.map((cabin, index) => ( 
              < Cabin key={cabin.SeatingClass + "-" + index} 
              models={models} 
              color={cabin.color} 
              seatColor={cabin.seatColor} 
              name={cabin.seatingClass} 
              position={[0,0,index*-8]} 
              rowConfig={cabin.rowConfig}
              index = {index} />
          ))}        
        </group>
      )}
    </Merged>
  )
}

const Quarter = ({ models, color, rowConfig = [], ...props }) => (
  
  <group {...props}>
    {rowConfig.seats.map((seat, rowIndex) => (
      <SeatComponent color={color} seat={seat} models={models} key={rowConfig.row + "-" + seat.seatNumber} rowNumber={rowConfig.row}/>
    ))}


    
    {/* <models.Seat color={color} position={[-0.35, 0, 0.5]} rotation={[0, Math.PI, 0]} onPointerOver={()=>(console.log("Pointer over." + rowConfig.row + rowConfig.seats[0].seatNumber))}/> */}
    {/* <models.Seat color={color} position={[0.35, 0, 0.5]} rotation={[0, Math.PI, 0]}/> */}
    {/* <models.Seat color={color} position={[-0.35, 0, -0.5]} rotation={[0, Math.PI, 0]} /> */}
    {/* <models.Seat color={color} position={[0.35, 0, -0.5]} rotation={[0, Math.PI, 0]} /> */}
  </group>
)



function SeatComponent ({models, color = 'white', seat, rowNumber,...props}) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <models.Seat color={seat.occupied?"#80F0FF":selected?"green":color} 
                 position={seat.position} 
                 rotation={seat.rotation} 
                 scale = {seat.scale} 
                 onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
                 onPointerOut={(e) => setHovered(false)}
                 onClick={(e) => setSelected(!selected)}
      >
        {seat.occupied && <Html  scaleFactor={5}  style={{ pointerEvents: "none", display: hovered ? "block" : "none" }} position={[0,2,0]} >
            <UserProfile />
        </Html>}

        {!seat.occupied && hovered  && <Html  scaleFactor={5}  style={{ pointerEvents: "none", display: hovered ? "block" : "none" }} position={[0,0,0]}>
            <SeatProfile />
        </Html>}

        <Text fontSize={.2} color="#000000" position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>{rowNumber + seat.seatNumber}</Text>
      </models.Seat>
  )
}

// {hovered && <Text fontSize={1} color="#FF0000" position={[1, 2, 0]} rotation={[0, Math.PI, 0]}>{rowNumber + seat.seatNumber}</Text>}


const Row = ({ models, color, rowConfig, ...props }) => (
  <group {...props}>
    {/* <Text fontSize={1} color="#FF0000" position={[0, 3, 10]} rotation={[-Math.PI / 2, 0, 0]}>Seats {rowConfig.seats.length}</Text> */}
    <Quarter models={models} color={color} position={[-1.1, -0.45, 7.5]} rowConfig={rowConfig} />
    {/* <Quarter models={models} color={color} position={[1.1, -0.45, 7.5]}  rowConfig={rowConfig}/> */}
  </group>
)

const Cabin = ({ models, color = 'white', seatColor = 'white', name = "Not provided", rowConfig = [], index = 0, ...props }) => (
  <group {...props}>
    <Text fontSize={.5} color="#808080" position={[0, 3, 10]} rotation={[-Math.PI / 2, 0, 0]}>
      {name}
    </Text>
    {rowConfig.map((row, rowIndex) => ( 
        <Row 
            models={models} 
            color={seatColor} 
            position={[0,0, rowIndex * -2]} 
            key={row.row} rowConfig ={row} />
            ))}


    {/* <models.Cabin color={color} /> */}
   
     {/* <Row models={models} color={seatColor} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -2]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -4]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -6]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -8]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -10]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -12]} /> */}
    {/* <Row models={models} color={seatColor} position={[0, 0, -14]} /> */}
  </group>
)

export default function App() {
  return (
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-15, 15, 18], fov: 35 }} gl={{ alpha: false }}>
      {/* <fog attach="fog" args={['#17171b', 30, 40]} /> */}
      <color attach="background" args={['#17171b']} />
      <ambientLight intensity={0.25} />
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>
      <Suspense fallback={null}>
      <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.5} />
        <Cloud position={[4, -2, 15]} speed={0.2} opacity={0.5} />
        {/* <Cloud position={[-4, 2, -10]} speed={0.2} opacity={1} /> */}
        {/* <Cloud position={[4, -2, -5]} speed={1} opacity={0.5} /> */}
        {/* <Cloud position={[6, 2, 0]} speed={1.2} opacity={0.55} /> */}
        <ScrollControls pages={3}>
          <Aircraft data={Config} />
        </ScrollControls>
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.5, 20, 10]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            //color="skyblue"
            metalness={0.6}
            roughness={1}
          />
        </mesh>

        
        {/* <Sky azimuth={0.1} turbidity={0.1} rayleigh={0.5} inclination={0.9} distance={1000} /> */}
        {/* <Environment preset="dawn" /> */}
      </Suspense>
    </Canvas>
  )
}
