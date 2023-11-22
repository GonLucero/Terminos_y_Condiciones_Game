import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import BackVideo from '../sounds/Public.mp4';

const App = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(0);
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [continuar2, cambiarContinuar2] = useState(0);
  const [hoverBoton, cambiarhoverBoton] = useState(0);
  const [hoverBoton2, cambiarhoverBoton2] = useState(0);

  const [play] = useSound(boopSfx);
  

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

// 	if(coords.x > 700 && coords.x < 1000 && coords.y > 300 ){
// 		cambiarEstadoModal1(1)
// 	  }if(coords.x > 1000 && coords.x < 1200 ){
// 		cambiarEstadoModal2(0)
// 	  }
// 	  if(coords.x > 300 && coords.x < 700 ){
// 		cambiarEstadoModal3(3)
// 	  }else{
// 		cambiarEstadoModal1(0)
// 		cambiarEstadoModal2(0)
// 	  }

//   }, [coords]);

//   useEffect(() => {

// 	if(coords.x > 700 && coords.x < 1000 && coords.y > 300 ){
// 		cambiarEstadoModal1(1)
//         cambiarEstadoModal2(0)
//     }if(coords.x > 1000 && coords.x < 1500 && coords.y > 300 ){
//         cambiarEstadoModal2(2)
//         cambiarEstadoModal1(0)
// 	  }

//   }, [coords]);


  



return (
		<div style={{width:'100%', height:'100vh'}}>
			
			<div style={{backgroundColor:'#e0dcf4', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<div style={{ width:'10vw', marginLeft:'90vw', marginTop:'5vh' }}>
								<Boton onClick={() => (play(),cambiarEstadoLogo(1))} style={{fontSize:'40px', fontWeight:'1000', letterSpacing:'-3px', width:'3.5vw', paddingLeft:'0.8vw'}}>tc</Boton>
								<Boton3 onClick={() => (play(),cambiarEstadoLogo(1))} style={{fontSize:'25px', fontWeight:'200', width:'8vw', height:'6vh', marginTop:'75vh', marginLeft:'-3vw'}}>REINICIAR</Boton3>

			</div>
				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'3%', }}>
						<h1 style={{fontSize:'200%'}}><b>INICIO</b></h1>
						<h2 style={{marginTop:'5%'}}>
							Al acceder a este sitio web, asumimos que <b><u>aceptas</u></b> estos <i>términos y condiciones</i>. <del>No</del> continúes usando el sitio si no estás de acuerdo con todos los <b><i>términos y condiciones</i></b> establecidos en esta página.
						</h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'5vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'3vw'}}>
									<Boton onMouseOver={()=>cambiarhoverBoton(1)} onMouseOut={()=>cambiarhoverBoton(0)} style={{fontSize:'1vw', width:'10vw', height:'5.8vh'}} onClick={() => (play(),cambiarContinuar(1))}>{hoverBoton === 1 ? 'Continuar':'Salir'} </Boton>
									<Boton2 onMouseOver={()=>cambiarhoverBoton2(1)} onMouseOut={()=>cambiarhoverBoton2(0)} style={{fontSize:'1vw', width:'10vw', height:'6vh'}} onClick={() => (play())}>{hoverBoton2 === 0 ? 'Continuar':'Salir'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'3%', }}>
						<h1 style={{fontSize:'200%'}}><b>¿CON HAMBRE...?</b></h1>
						{
							continuar2 === 0
							?
							<h2 style={{marginTop:'5%'}}>
							Este sitio web utiliza cookies web para personalizar tu experiencia según el tipo de contenido que consumes. Las cookies de esta página se pueden utilizar para ejecutar programas <del>y enviar virus a tu computadora.</del> 						
						</h2>
						:
						<h2 style={{marginTop:'5%'}}>
						Podemos utilizar cookies para recopilar, almacenar y rastrear tu información  con fines estadísticos o de marketing <del>para obtener más margen de ganancia.</del> 
						<p style={{width:'25vw', height:'3vh', marginLeft:'4vw', paddingTop:'2vh'}}><i>¡Gracias a las cookies podrás obtener publicidad específica para el consumo específico que precises!</i>		</p>				
						</h2>
						}


						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'7vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'20vw'}}>
									<Boton2 onMouseOver={()=>cambiarhoverBoton2(1)} onMouseOut={()=>cambiarhoverBoton2(0)} style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),cambiarContinuar2(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				}


				<Modal
					estado={estadoLogo}
					cambiarEstado={cambiarEstadoLogo}
					encabezado={(<div style={{display:'flex',flexDirection:'row'}}><b style={{fontSize:'150%'}}>CRÉDITOS</b><Boton onClick={() => (play(),  cambiarEstadoLogo(0))} style={{marginLeft:'95%', marginTop:'1%', borderWidth:0, backgroundColor:'transparent'}}><h3>X</h3></Boton></div>)}
					
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

	border: 2px solid;
	margin: auto;
	width: 40%;
	height: 65%;
	background: white;
	border-radius: 1%;
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;

	h1 {
		font-size: 320%;
		font-weight: 500;
		text-align: center;
		padding-inline: 20%;
		padding-top:5%

	}
	h2 {
		font-size: 150%;
		font-weight: 10;
		
	}
`;



const Boton = styled.button`
	width:10vw
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

const Boton3 = styled.button`
	display: block;
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
		font-size: 82px;
		font-weight: 700;
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