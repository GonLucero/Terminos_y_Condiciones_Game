import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import BackVideo from '../sounds/Public.mp4';
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(0);
  const [estadoModal2, cambiarEstadoModal2] = useState(0);
  const [estadoModal3, cambiarEstadoModal3] = useState(3);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [play] = useSound(boopSfx);
  const navigate = useNavigate();
  

//   console.log('coord',coords)
  
//   useEffect(() => {
//     const handleWindowMouseMove = event => {
//       setCoords({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };
//     window.addEventListener('mousemove', handleWindowMouseMove);

//     return () => {
//       window.removeEventListener(
//         'mousemove',
//         handleWindowMouseMove,
//       );
//     };
//   }, []);

//   useEffect(() => {

// 	if(coords.x < 1000 && coords.x > 700 ){
// 		cambiarEstadoModal1(1)
// 	  }if(coords.x > 600 && coords.x < 700 ){
// 		cambiarEstadoModal2(0)
// 	  }
// 	  if(coords.x > 800){
// 		cambiarEstadoModal3(3)
// 	  }else{
// 		cambiarEstadoModal1(0)
// 		cambiarEstadoModal2(0)
// 	  }

//   }, [coords]);


  



	return (
		<div style={{width:'100%', height:'100vh'}}>

<div style={{backgroundColor:'white', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<ContenedorTerminos style={{position:'absolute', marginLeft:'30%'}}>
            <div style={{display:'flex', justifyContent:'flex-end', width:'7vw', marginTop:'3vh',alignItems:'flex-end', marginLeft:'30vw' }}>
								<Boton onClick={() => (play(),cambiarEstadoModal1(1))} style={{fontSize:'40px', fontWeight:'1000', letterSpacing:'-3px'}}>tc</Boton>
                </div>
				<h1 style={{fontWeight:'500'}}>TÉRMINOS Y CONDICIONES</h1>
				<div style={{height:'55%', width:'70%', alignSelf:'center', marginLeft:'10%', marginTop:'5%'}}>
				<h2 >
				<b>“ELESPACIO.COM”</b> quiere que aceptes todos los <u>términos y condiciones</u>.
Tu misión final es poder acceder a <b>“ELESPACIO.COM”</b> pasando cada uno de los niveles que se te presentaran. 
</h2>

<h2 style={{marginTop:'10vh',fontStyle:'italic'}}>Esto es un contrato, leelo bien.</h2>

<div style={{backgroundColor:'#dcdef1',width:'30vw', height:'10vh', 	border: '3px solid', marginTop:'6vh' }}>
<h4 style={{	fontSize:'190%', marginLeft:'5vw', width:'22vw', marginTop:'1vh'}}>
Ten cuidado... Hay cosas que estan fuera de control
</h4>
</div>
<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'10vh', marginLeft:'50%'}}>
								<Boton2 onClick={() => (play(),  navigate(`/home`))} style={{fontSize:'25px'}}>JUGAR</Boton2>
                </div>
				</div>


			</ContenedorTerminos>
			<Modal
					estado={estadoModal1}
					cambiarEstado={cambiarEstadoModal1}
					encabezado={(<div style={{display:'flex',flexDirection:'row'}}><b style={{fontSize:'150%'}}>CRÉDITOS</b><Boton onClick={() => (play(),  cambiarEstadoModal1(0))} style={{marginLeft:'95%', marginTop:'1%', borderWidth:0, backgroundColor:'transparent'}}><h3>X</h3></Boton></div>)}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
							<b style={{width:'70%', marginTop:'5%', marginLeft:'25%', fontSize:'100%', letterSpacing:'0.5px'}}>DISEÑO Y PROPOTIPADO :</b>
							<u style={{marginTop:'1%'}}>Pedro Segalerba</u>
							<u>Genaro Gonzalez Cinto</u>
							<u>Juan Ignacio Gonzalez</u>
							<u>Gabriela Pardo Rojas</u>
							<b style={{width:'70%', marginTop:'5%', marginLeft:'40%', fontSize:'100%', letterSpacing:'0.5px'}}>PROGRAMACIÓN :</b>
							<h4 style={{fontSize:'100%', marginTop:'2%', marginBottom:'5%'}}>Gonzalo Lucero</h4>
							</Contenido>
					</Modal> 

			

		</div>
		</div>
	);
}
 
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const ContenedorTerminos = styled.div`

	margin: auto;
	width: 40%;
	height: 100%;
	background: #bbc1d6;
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;

	h1 {
		font-size: 350%;
		font-weight: 600;
		padding-inline: 10%;
		padding-top:5%

	}
	h2 {
		font-size: 150%;
		font-weight: 200;
		
	}
`;



const Boton = styled.button`
	display: block;
	padding: 2% 10%;
	color: black;
	border: none;
	background: white;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	transition: .3s ease all;
	border: 3px solid;

	&:hover {
		border-color: #c850d1;
	}
`;

const Boton2 = styled.button`
	display: block;
	padding: 2% 10%;
	color: #fff;
	background: black;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	transition: .3s ease all;
	border: 3px solid;
	border-color: white;
	&:hover {
		border-color: #c850d1;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 32px;
		font-weight: 400;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	
    h4 {
        font-weight: 400;
        font-size: 2.7vh;
        color: black,

    }
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;