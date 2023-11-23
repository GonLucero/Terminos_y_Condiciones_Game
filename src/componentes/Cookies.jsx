import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import luna from '../assets/luna.png'
import cookie from '../assets/cookie.png'
import cookieentera from '../assets/cookie-entera2.png'

const Home = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [estadoModal, cambiarEstadoModal] = useState(0);
  const [estadoModal2, cambiarEstadoModal2] = useState(0);
  const [tipoModal, cambiarTipoModal] = useState(0);
  const [ultimoCheckbox, cambiarUltimocheckbox] = useState(0);
  const [estadoCookie, cambiarEstadoCookie] = useState(0);
  const [estadoCookie2, cambiarEstadoCookie2] = useState(0);
  const [estadoCookie3, cambiarEstadoCookie3] = useState(0);
  const [estadoCookie4, cambiarEstadoCookie4] = useState(0);
  const [estadoCookie5, cambiarEstadoCookie5] = useState(0);
  const [estadoCookie6, cambiarEstadoCookie6] = useState(0);
  const [estadoCookie7, cambiarEstadoCookie7] = useState(0);
  const [estadoCookie8, cambiarEstadoCookie8] = useState(0);
  const [estadoCookie9, cambiarEstadoCookie9] = useState(0);
  const [estadoCookie10, cambiarEstadoCookie10] = useState(0);
  const [estadoCookie11, cambiarEstadoCookie11] = useState(0);
  const [estadoCookie12, cambiarEstadoCookie12] = useState(0);
  const [estadoCookie13, cambiarEstadoCookie13] = useState(0);
  const [estadoCookie14, cambiarEstadoCookie14] = useState(0);
  const [estadoCookie15, cambiarEstadoCookie15] = useState(0);
  const [estadoCookie16, cambiarEstadoCookie16] = useState(0);
  const [estadoCookie17, cambiarEstadoCookie17] = useState(0);
  
  


  const [play] = useSound(boopSfx);
  

return (
		<div style={{width:'100%', height:'100vh'}}>
			
			<div style={{backgroundColor:'#e0dcf4', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<div style={{ width:'10vw', marginLeft:'90vw', marginTop:'5vh' }}>
								<Boton onClick={() => (play(),cambiarEstadoLogo(1))} style={{fontSize:'40px', fontWeight:'1000', letterSpacing:'-3px', width:'3.5vw', paddingLeft:'0.8vw'}}>tc</Boton>
								<Boton3 onClick={() => (play(),navigate(`/`))} style={{fontSize:'25px', fontWeight:'200', width:'8vw', height:'6vh', marginTop:'75vh', marginLeft:'-3vw'}}>REINICIAR</Boton3>

			</div>

					<ContenedorTerminos style={{backgroundColor:'#dcdef1', position:'absolute', marginLeft:'19%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px',display:'flex',flexDirection:'row' }}>
					<div style={{width:'65%', backgroundColor:'white', height:'90%', marginTop:'3.5vh', marginLeft:'1vw', border: '2px solid', borderRadius:'0.5vw'}}>
                        <div style={{marginTop:'20px'}}>
                            <u style={{fontWeight:'bold', marginLeft:'10vw'}}>HAZ CLICK EN LAS GALLETITAS PARA COMERLAS</u>
                        </div>
                        <img src={estadoCookie === 0  ? cookieentera : cookie} alt='Luna' style={{width:'6vw', position:'fixed', marginTop:'2vh', marginLeft:'2vw'}} onClick={()=>(cambiarEstadoCookie(1),cambiarEstadoModal(1),cambiarTipoModal(1))}></img>
                        <img src={estadoCookie2 === 0  ? cookieentera : cookie} alt='Luna' style={{width:'6vw', marginLeft:'25vw', marginTop:'20%'}} onClick={()=>(cambiarEstadoCookie2(1),cambiarEstadoModal(1),cambiarTipoModal(2))}></img>
                        <img src={estadoCookie3 === 0  ? cookieentera : cookie} alt='Luna' style={{width:'6vw', marginLeft:'10vw', marginTop:'1%'}} onClick={()=>(cambiarEstadoCookie3(1),cambiarEstadoModal(1),cambiarTipoModal(3))}></img>
                        <img src={estadoCookie4 === 0  ? cookieentera : cookie} alt='Luna' style={{width:'6vw', marginLeft:'3vw', marginBottom:'15vh'}} onClick={()=>(cambiarEstadoCookie4(1),cambiarEstadoModal(1),cambiarTipoModal(4))}></img>
                        <img src={estadoCookie5 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'3vw', marginBottom:'15vh'}} onClick={()=>(cambiarEstadoCookie5(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie6 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-23vw',marginTop:'-21vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie6(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie7 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-15vw',marginTop:'-15vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie7(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie8 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-30vw',marginTop:'-10vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie8(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie9 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-32vw',marginTop:'3vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie9(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie10 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-22vw',marginTop:'-8vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie10(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie11 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-20vw',marginTop:'0vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie11(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie12 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-15vw',marginTop:'15vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie12(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie13 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-10vw',marginTop:'15vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie13(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie14 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-10vw',marginTop:'-28vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie14(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie15 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'-3vw',marginTop:'-24vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie15(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie16 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'1vw',marginTop:'-12vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie16(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie17 === 0  ? cookieentera : luna} alt='Luna' style={{width:'6vw', marginLeft:'1vw',marginTop:'-1vh', position:'absolute'}} onClick={()=>(cambiarEstadoCookie17(1),cambiarEstadoModal2(1))}></img>

                        {/* <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img>
                        <img src={cookieentera} alt='Luna'></img> */}


                    </div>
                    <div style={{width:'30%', backgroundColor:'white', height:'90%', marginTop:'3.5vh', marginLeft:'1vw', border: '2px solid', borderRadius:'0.5vw'}}>
                        <h2 style={{fontSize:'2vw', marginTop:'2vh', marginLeft:'1vw'}}>GALLETITAS</h2>
                        <div style={{width:'17vw', marginLeft:'1vw', marginTop:'3vh'}}>
                            <p style={{fontSize:'1.2vw'}}>Come todas las galletitas para poder seguir, No te olvides de  marcar las que tienes.</p>
                        </div>
                        <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1vw'}}> Invasión de la privacidad</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie2 != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1vw'}}>Adicción a la personalización</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie3 != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1vw'}}>Control mental digital</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie4 != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1vw'}}>Pérdida de la identidad digital</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" value="Paneer" onChange={()=>cambiarUltimocheckbox(1)} style={{width:'3vw'}} disabled={estadoCookie != 1 || estadoCookie2 != 1 || estadoCookie3 != 1 || estadoCookie4 != 1} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1vw'}}>Esclavitud de la publicidad</h3>
                            </div>
                            {
                                ultimoCheckbox === 1 ?
                                <Boton3 onClick={() => (play(),navigate(`/licencia`))} style={{fontSize:'25px', fontWeight:'200', width:'8vw', height:'6vh', marginTop:'5vh', marginLeft:'5vw'}}>Seguir</Boton3>
                                : null
                            }

                       </div>
                    </div>
				</ContenedorTerminos>
			
	
				<Modal
					estado={estadoModal}
					cambiarEstado={cambiarEstadoModal}
					encabezado={(
                        <div style={{display:'flex',flexDirection:'row'}}>
                            
                            <h3 style={{fontSize:'120%', width:'15vw', marginTop:'0.3vh', display:'flex',justifyContent:'center'}}>
                                {tipoModal === 1 ? 'Invasión de la privacidad' : tipoModal === 2 ? 'Adicción a la personalización' : tipoModal === 3 ? 'Control mental digital' : 'Pérdida de identidad digital'} 
                            </h3>
                            <div style={{width:'3vw', marginLeft:'17vw', position:'absolute'}}>
                                <Boton onClick={() => (cambiarEstadoModal(0))} style={{marginLeft:'1vw', borderWidth:'0px', backgroundColor:'transparent', marginTop:'0.5vh'}}>
                                    <h3 style={{width:'0.2vw'}}>X</h3>
                                </Boton>
                            </div>
                        </div>
                    )}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
                        <div style={{display:'flex',flexDirection:'row', marginRight:'7vw'}}>
                        <img src={cookie} alt='Luna' style={{width:'7vw'}}></img>
							<b style={{marginTop:'6vh'}}>Mmmmm.....</b>
                        </div>
                        <div style={{ width:'18vw', marginBottom:'3vh'}}>
							<h3>                               
                            {tipoModal === 1 ? 'Las cookies son como pequeños espías que registran hasta tu último click, observandote como si fueran una versión digital de Gran Hermano.': tipoModal === 4 ?'Estas permitiendo que tu perfil digital sea tan detallado que hasta los agentes secretos se sorprenderán.' : tipoModal === 2 ?'Las cookies convertirán a esta web en un amigo cercano que siempre sabrá lo que quieras, limitando tu exposición a nuevas ideas y experiencias.' : 'Las cookies no solo rastrearán tu historial, sino que también parecen conocer tus pensamientos antes de lo que pienses. ¿Quien necesita libre albedrío cuando las cookies te dicen que querer?'} 
                            </h3>
                        
                        </div>
                            </Contenido>
				</Modal> 
                <Modal
					estado={estadoModal2}
					cambiarEstado={cambiarEstadoModal2}
					encabezado={(
                        <div style={{display:'flex',flexDirection:'row'}}>
                            
                            <h3 style={{fontSize:'120%', width:'15vw', marginTop:'0.3vh', display:'flex',justifyContent:'center'}}>
                               Luna
                            </h3>
                            <div style={{width:'3vw', marginLeft:'17vw', position:'absolute'}}>
                                <Boton onClick={() => (cambiarEstadoModal2(0))} style={{marginLeft:'1vw', borderWidth:'0px', backgroundColor:'transparent', marginTop:'0.5vh'}}>
                                    <h3 style={{width:'0.2vw'}}>X</h3>
                                </Boton>
                            </div>
                        </div>
                    )}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
                        <div style={{display:'flex',flexDirection:'row', marginRight:'7vw'}}>
                        <img src={luna} alt='Luna' style={{width:'10vw'}}></img>
							<b style={{marginTop:'6vh', fontSize:'5vh'}}>Upps!</b>
                        </div>
                        <div style={{ width:'18vw', marginBottom:'3vh', marginTop:'-2vh', marginLeft:'5vw'}}>
							<h3>                               
                                Te estás comiendo una Luna
                            </h3>
                        
                        </div>
                            </Contenido>
				</Modal> 
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
	width: 65%;
	height: 70%;
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