import React, {useState} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import imagen1 from '../assets/imagen1.png'
import imagen11 from '../assets/imagen11.png'
import imagen2 from '../assets/imagen2.png'
import imagen22 from '../assets/imagen22.png'
import imagen3 from '../assets/imagen3.png'
import imagen33 from '../assets/imagen33.png'
import imagen4 from '../assets/imagen4.png'
import imagen5 from '../assets/imagen5.png'
import imagen6 from '../assets/imagen6.png'
import imagen7 from '../assets/imagen7.png'
import imagen8 from '../assets/imagen8.png'
import iconeye from '../assets/icon_eye.png'

const Responsabilidad = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [continuar2, cambiarContinuar2] = useState(0);
  const [estado_imagen, cambiarestado_imagen] = useState(0);
  const [play] = useSound(boopSfx);

  console.log('oco',continuar2)


return (
		<div style={{width:'100%', height:'100vh'}}>
			
			<div style={{backgroundColor:'#e0dcf4', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<div style={{ width:'10vw', marginLeft:'90vw', marginTop:'5vh' }}>
								<Boton onClick={() => (play(),cambiarEstadoLogo(1))} style={{fontSize:'40px', fontWeight:'1000', letterSpacing:'-3px', width:'3.5vw', paddingLeft:'0.8vw'}}>tc</Boton>
								<Boton3 onClick={() => (play(),navigate(`/`))} style={{fontSize:'25px', fontWeight:'200', width:'8vw', height:'6vh', marginTop:'75vh', marginLeft:'-3vw'}}>REINICIAR</Boton3>

			</div>
				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'1%',}}>
						<h1 style={{fontSize:'200%', width:'40vw', marginLeft:'-4vw'}}><b>RESPONSABILIDAD DEL CONTENIDO</b></h1>
						<h2 style={{marginTop:'5%', width:'25vw', marginLeft:'3vw'}}>
                        <p style={{marginLeft:'2vw'}}>No seremos responsables de ningún</p> contenido que aparezca en tu sitio web. Tú y solo tú eres responsable de lo que publiques y compartas.Cualquier tipo de contenido podrá ser subido a esta web. No contamos                         
                        <p style={{marginLeft:'4vw'}}>con censura de ningún tipo.  </p>
                        </h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-2vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'20vw'}}>
									<Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
                continuar2 === 0  ?
				
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						<h2 style={{width:'28vw', marginLeft:'6vw', marginTop:'4vh'}}>Sé un guardián de la moralidad digital y has de este sitio web un lugar predecible y libre de sorpresas. Haz click en la imagen más apropiada.</h2>
                        <div style={{display:'flex', flexDirection:'row', marginLeft:'2vw', marginTop:'3vh'}}>
                        <img onClick={()=>cambiarestado_imagen(1)} src={estado_imagen != 1 ? imagen1 : imagen11} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'2vh', marginLeft:'2vw'}} ></img>
                        <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'5vh', marginLeft:'6.5vw', visibility:estado_imagen != 1 ? 'visible' : 'hidden'}} ></img>

                        <img onClick={()=>cambiarestado_imagen(2)} src={estado_imagen != 2 ? imagen2 : imagen22} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'2vh', marginLeft:'20vw'}} ></img>
                        <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'5vh', marginLeft:'24.5vw', visibility:estado_imagen != 2 ? 'visible' : 'hidden'}} ></img>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginLeft:'2vw'}}>
                        <img onClick={()=>cambiarestado_imagen(3)} src={estado_imagen != 3 ? imagen3 : imagen33} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'20vh', marginLeft:'2vw'}} ></img>
                        <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'24vh', marginLeft:'6.5vw', visibility:estado_imagen != 3 ? 'visible' : 'hidden'}}></img>
                        <div  >
                        <img onClick={()=>cambiarContinuar2(1)} src={imagen4} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'20vh', marginLeft:'20vw'}} ></img>

                        </div>
                        <img  src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'24vh', marginLeft:'24.5vw'}} ></img>

                        </div>
				</ContenedorTerminos>
                :

                <ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                <h2 style={{width:'28vw', marginLeft:'6vw', marginTop:'4vh'}}>Sé un guardián de la moralidad digital y has de este sitio web un lugar predecible y libre de sorpresas. Haz click en la imagen más apropiada.</h2>
                <div style={{display:'flex', flexDirection:'row', marginLeft:'2vw', marginTop:'3vh'}}>
                <img src={imagen5} onClick={()=> navigate(`/derechos`)} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'2vh', marginLeft:'2vw'}} ></img>
                <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'5vh', marginLeft:'6.5vw'}} ></img>

                <img onClick={()=>cambiarestado_imagen(6)} src={estado_imagen != 6 ? imagen6 : imagen22} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'2vh', marginLeft:'20vw'}} ></img>
                <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'5vh', marginLeft:'24.5vw', visibility:estado_imagen != 6 ? 'visible' : 'hidden'}} ></img>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginLeft:'2vw'}}>
                <img onClick={()=>cambiarestado_imagen(7)} src={estado_imagen != 7 ? imagen7 : imagen11} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'20vh', marginLeft:'2vw'}} ></img>
                <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'24vh', marginLeft:'6.5vw', visibility:estado_imagen != 7 ? 'visible' : 'hidden'}} ></img>

                <img onClick={()=>cambiarestado_imagen(8)} src={estado_imagen != 8 ? imagen8 : imagen33} alt='Luna' style={{width:'13vw', position:'fixed', marginTop:'20vh', marginLeft:'20vw'}} ></img>
                <img src={iconeye} alt='Luna' style={{width:'4vw', position:'fixed', marginTop:'24vh', marginLeft:'24.5vw', visibility:estado_imagen != 8 ? 'visible' : 'hidden'}} ></img>

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
 
export default Responsabilidad;

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