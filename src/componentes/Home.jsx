import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import reinicio from '../assets/general/reinicio.png'

const Home = ({logo}) => {
  const navigate = useNavigate();
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
			
			<div >
          <img src={reinicio}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'12vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play(),navigate(`/`))} ></img>

				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'25%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'0%', }}>
						<h1 style={{fontSize:'160%'}}><b>INICIO</b></h1>
						<h2 style={{marginTop:'5%', width:'100%', textAlign:'center', marginLeft:'0%'}}>
							Al acceder a este sitio web, asumimos que <b><u>aceptas</u></b> estos <i>términos y condiciones</i>. <del>No</del> continúes usando el sitio si no estás de acuerdo con todos los <b><i>términos y condiciones</i></b> establecidos en esta página.
						</h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'3vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'3vw'}}>
									<Boton onMouseOver={()=>cambiarhoverBoton(1)} onMouseOut={()=>cambiarhoverBoton(0)} style={{fontSize:'1vw', width:'15vw', height:'75%', fontSize:'140%'}} onClick={() => (play(),cambiarContinuar(1))}>{hoverBoton === 1 ? 'Continuar':'Salir'} </Boton>
									<Boton2 onMouseOver={()=>cambiarhoverBoton2(1)} onMouseOut={()=>cambiarhoverBoton2(0)} style={{fontSize:'1vw', width:'15vw', height:'80%', fontSize:'140%', marginRight:'-45%'}} onClick={() => (play(),navigate(`/`))}>{hoverBoton2 === 0 ? 'Continuar':'Salir'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
				<ContenedorTerminos style={{position:'absolute', marginLeft:'25%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'0%', }}>
						<h1 style={{fontSize:'160%'}}><b>¿CON HAMBRE...?</b></h1>
						{
							continuar2 === 0
							?
							<h2 style={{marginTop:'5%'}}>
							Este sitio web utiliza cookies web para personalizar tu experiencia según el tipo de contenido que consumes. Las cookies de esta página se pueden utilizar para ejecutar programas <del>y enviar virus a tu computadora.</del> 						
						</h2>
						:
						<div style={{marginLeft:'6%'}}>
							<h2 style={{marginTop:'5%'}}>
							Podemos utilizar cookies para recopilar, almacenar y rastrear tu información  con fines estadísticos o de marketing <del>para obtener más margen de ganancia.</del> 
							<p style={{width:'25vw', height:'3vh', marginLeft:'4vw', paddingTop:'2vh'}}><i>¡Gracias a las cookies podrás obtener publicidad específica para el consumo específico que precises!</i>		</p>				
							</h2>
						</div>
						}


						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'5%', height:'10vh',alignItems:'center', marginLeft:'70%'}}>
									<Boton2 onMouseOver={()=>cambiarhoverBoton2(1)} onMouseOut={()=>cambiarhoverBoton2(0)} style={{fontSize:'2vw', width:'22%', height:'90%', fontSize:'200%'}} onClick={() => (play(), continuar2 === 0 ?cambiarContinuar2(1) : navigate(`/cookies`))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				}


			</div>

);
}
 
export default Home;

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
	width: 55%;
	height: 70%;
	background: white;
	border-radius: 3%;
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;

	h1 {
		font-size: 250%;
		font-weight: 600;
		text-align: center;
		padding-inline: 20%;
		padding-top:5%

	}
	h2 {
		font-size: 130%;
		font-weight: 10;
		margin-left: 5%;
		
	}
`;



const Boton = styled.button`
	width:10%
	display: block;
	padding: 2% 10%;
	color: black;
	border: none;
	background: white;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 300%;
	font-size:13px;
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
	font-size: 200%;
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