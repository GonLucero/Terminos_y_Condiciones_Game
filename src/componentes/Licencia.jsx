import React, {useState} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'

const Licencia = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [checkbox, setCheckbox] = useState(0);
  const [checkbox2, setCheckbox2] = useState(0);
  const [play] = useSound(boopSfx);


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
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'3%',}}>
						<h1 style={{fontSize:'200%'}}><b>LICENCIA</b></h1>
						<h2 style={{marginTop:'5%'}}>
                        Poseemos los derechos de propiedad intelectual de todo el material en el sitio. Puedes acceder al sitio bajo las restricciones establecidas. Estos <del>términos y condiciones</del> son un contrato entre usted y el sitio (“nosotros”, “nuestro” o “nos”) le otorga una licencia <del>irrevocable</del>, no exclusiva, intransferible y limitada para descargar, instalar y utilizar el sitio web estrictamente de acuerdo con los términos de este acuerdo.						</h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-2vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'20vw'}}>
									<Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						<h1>LICENCIA</h1>
                        {
                            checkbox && checkbox2 ?
                            null
                            :
                        <div style={{marginTop:'1vh'}}>
                            <u style={{fontWeight:'bold', marginLeft:'10vw'}}>DALE CLICK A LOS CUADRADOS PARA ACEPTAR</u>
                        </div>
                        }
  
                        <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={checkbox} onChange={()=> setCheckbox(!checkbox)}  style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'0.8vw', fontWeight:'bold'}}> Recibe una licencia limitada, no exclusiva y no transferible para utilizar nuestros servicios de acuerdo con las disposiciones establecidas en este documento.</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={checkbox2} onChange={()=> setCheckbox2(!checkbox2)} style={{width:'4vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'0.8vw', fontWeight:'bold'}}> Te comprometes a no realizar ingeniería inversa, descompilación, ni modificar de ninguna manera nuestros productos y servicios. Además, reconoce que la propiedad intelectual, sigue siendo propiedad exclusiva nuestra.</h3>
                            </div>
                            {
                                checkbox && checkbox2 ?
                                <div>
                                <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={true} style={{width:'3.3vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'0.8vw', fontWeight:'bold'}}> Usuario Incógnito, Edición Especial:  Tus datos personales se convertiran en un juego de aventuras donde, quién sabe, podrían terminar en manos de una agencia de inteligencia.</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={true} style={{width:'3.8vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'0.8vw', fontWeight:'bold'}}> Rastrearemos cada clic, movimiento y suspiro digital que emites. Después de todo, ¿quién no querría que su vida en línea sea analizada como un capítulo emocionante de una novela digital interactiva?.</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={true} style={{width:'2.4vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'0.8vw', fontWeight:'bold'}}> Venta de datos: Tus datos personales son tan valiosos que los venderemos al mejor postor en un mercado digital clandestino.</h3>
                            </div>
                            <div style={{backgroundColor:'#dcdef1', width:'30vw', height:'10vh', marginTop:'2vh', border:'2px solid'}}>
                                <h2 style={{marginLeft:'1vw', fontSize:'0.8vw', paddingTop:'2vh', fontWeight:'500'}}>Este documento establece las bases para una relación de uso respetuosa y protección de datos, reforzando nuestro compromiso con la privacidad y la seguridad digital.</h2>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-10vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'22vw'}}>
									<Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),navigate(`/nodebes`))}> {'>'} </Boton2>
						</div>
                            </div>
                            : null
                            }

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
 
export default Licencia;

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