import React, {useState} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import boopSfx3 from '../sounds/reiniciar.mp3';
import { useNavigate } from 'react-router-dom'
import reinicio from '../assets/general/reinicio.png'


const Licencia = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [checkbox, setCheckbox] = useState(0);
  const [checkbox2, setCheckbox2] = useState(0);
  const [play] = useSound(boopSfx);
  const [play3] = useSound(boopSfx3);

return (
		<div>
			          <img src={reinicio}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'12vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play3(),navigate(`/`))} ></img>
				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'20%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
						<h1 style={{marginBottom:'15px',fontFamily: 'Source code pro'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'11%', marginTop:'0%',}}>
						<h1 style={{fontSize:'200%',fontFamily: 'Source code pro'}}><b>LICENCIA</b></h1>
						<h2 style={{marginTop:'5%', width:'90%', textAlign:'center', paddingLeft:'0%', fontSize:'2.3vw',fontFamily: 'Archivo'}}>
                        Poseemos los derechos de propiedad intelectual de todo el material del sitio. Puedes acceder al mismo bajo las restricciones establecidas. Estos  <del>términos y condiciones</del> son un contrato entre usted y el sitio. Se le otorga una licencia  <del>irrevocable</del>para descargar, instalar y utilizarlo bajo un acuerdo esctricto con los términos de este acuerdo.						</h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-4%', height:'10vh',alignItems:'center', marginLeft:'75%'}}>
									<Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
				<ContenedorTerminos style={{position:'absolute', marginLeft:'20%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
				<h1 style={{marginLeft:'0.5vw',fontFamily: 'Source code pro'}}>LICENCIA</h1>

                        <div style={{marginTop:'1vh'}}>
                            <u style={{fontWeight:'bold', marginLeft:'13.5vw',fontFamily: 'Archivo'}}>DALE CLICK A LOS CUADRADOS PARA ACEPTAR</u>
                        </div>

  
                        <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={checkbox} onChange={()=> (play(),setCheckbox(!checkbox))}  style={{width:'4vw', height:'3vw',fontFamily: 'Archivo'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'1.5vw', width:'100%'}}> Te comprometes a no realizar ingeniería inversa, descompilación, ni modificar de ninguna manera nuestros productos y servicios. </h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={checkbox2} onChange={()=> (play(),setCheckbox2(!checkbox2))} style={{width:'4vw', height:'3vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'1.5vw', width:'100%'}}>  Reconoces que la propiedad intelectual sigue siendo propiedad exclusiva nuestra.</h3>
                            </div>
                            {
                                checkbox && checkbox2 ?
                                <div>
                                <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={true} style={{width:'4vw', height:'3vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'1.5vw', width:'100%'}}> No sabemos donde podrian terminar tus datos personales, pero quien sabe, quizas puedan ayudar a que un candidato a presidente gane las elecciones de su pais.</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={true} style={{width:'4vw', height:'3vw'}} />
                                <h3 style={{marginLeft:'0.5vw', fontSize:'1.5vw', width:'100%'}}> Rastrearemos cada click, movimiento y suspiro digital que emitas. Tu vida en linea sera analizada tanto como una pelicula de culto.</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={true} style={{width:'4vw', height:'3vw'}}/>
                                <h3 style={{marginLeft:'0.5vw', fontSize:'1.5vw', width:'100%'}}> Venta de datos: Tus datos personales son tan valiosos que los venderemos al mejor postor en un mercado digital clandestino.</h3>
                            </div>
                            <div style={{backgroundColor:'#dcdef1', width:'40vw', height:'10vh', marginTop:'3vh', border:'2px solid', marginLeft:'17.5%'}}>
                                <h2 style={{marginLeft:'1vw', fontSize:'1.3vw', paddingTop:'1.7vh', fontWeight:'600', textAlign:'center',fontFamily: 'Archivo'}}>Este documento establece las bases para una relación de uso respetuosa y de protección de datos, reforzando nuestro compromiso con la privacidad y la seguridad digital.</h2>
                            </div>
							<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-7%', height:'10vh',alignItems:'center', marginLeft:'72%'}}>
									<Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(),navigate(`/nodebes`))}> {'>'} </Boton2>
						</div>
                            </div>
                            : null
                            }

                       </div>
					
				</ContenedorTerminos>
				}

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
	width: 65%;
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