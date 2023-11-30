import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import boopSfx3 from '../sounds/reiniciar.mp3';
import boopSfx4 from '../sounds/luna.mp3';
import boopSfx5 from '../sounds/galletita.mp3';
import { useNavigate } from 'react-router-dom'
import luna from '../assets/luna.png'
import cookie from '../assets/cookie.png'
import cookieentera from '../assets/cookie-entera2.png'
import reinicio from '../assets/general/reinicio.png'

const Home = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [hoverBoton, cambiarhoverBoton] = useState(0);
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
  const [estadoCookie18, cambiarEstadoCookie18] = useState(0);
  
  


  const [play] = useSound(boopSfx);
  const [play3] = useSound(boopSfx3);
  const [play4] = useSound(boopSfx4);
  const [play5] = useSound(boopSfx5);


return (
		<div>
                <img src={reinicio}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'12vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play3(),navigate(`/`))} ></img>


					<ContenedorTerminos style={{position:'absolute', backgroundColor:'#dcdef1', marginLeft:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px',display:'flex',flexDirection:'row', marginTop:'13%' }}>
					<div style={{width:'65%', backgroundColor:'white', height:'90%', marginTop:'3.5vh', marginLeft:'1vw', border: '2px solid', borderRadius:'0.5vw'}}>
                        <div style={{marginTop:'20px'}}>
                            <u style={{fontWeight:'bold', marginLeft:'14%',fontFamily: 'Archivo'}}>HAZ CLICK EN LAS GALLETITAS PARA COMERLAS</u>
                        </div>
                        <img src={estadoCookie === 0  ? cookieentera : cookie} alt='Luna' style={{width:'9vw', position:'fixed', marginTop:'4vh', marginLeft:'3vw'}} onClick={()=>(play5(),cambiarEstadoCookie(1),cambiarEstadoModal(1),cambiarTipoModal(1))}></img>
                        <img src={estadoCookie2 === 0  ? cookieentera : cookie} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'32vw', marginTop:'9%'}} onClick={()=>(play5(),cambiarEstadoCookie2(1),cambiarEstadoModal(1),cambiarTipoModal(2))}></img>
                        <img src={estadoCookie3 === 0  ? cookieentera : cookie} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'13vw', marginTop:'24%'}} onClick={()=>(play5(),cambiarEstadoCookie3(1),cambiarEstadoModal(1),cambiarTipoModal(3))}></img>
                        <img src={estadoCookie4 === 0  ? cookieentera : cookie} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'20vw', marginTop:'15%'}} onClick={()=>(play5(),cambiarEstadoCookie4(1),cambiarEstadoModal(1),cambiarTipoModal(4))}></img>
                        <img src={estadoCookie5 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'30vw', marginBottom:'15vh'}} onClick={()=>(play4(),cambiarEstadoCookie5(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie6 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'28vw',marginTop:'21vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie6(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie7 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'12vw',marginTop:'3vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie7(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie8 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'3vw',marginTop:'35vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie8(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie9 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'5vw',marginTop:'18vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie9(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie10 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'22vw',marginTop:'7vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie10(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie11 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'10vw',marginTop:'25vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie11(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie12 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'15vw',marginTop:'15vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie12(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie13 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'30vw',marginTop:'38vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie13(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie14 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'22vw',marginTop:'39vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie14(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie15 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'40vw',marginTop:'28vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie15(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie16 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'40vw',marginTop:'12vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie16(1),cambiarEstadoModal2(1))}></img>
                        <img src={estadoCookie17 === 0  ? cookieentera : luna} alt='Luna' style={{width:'9vw',position:'fixed', marginLeft:'37vw',marginTop:'3vh', position:'absolute'}} onClick={()=>(play4(),cambiarEstadoCookie17(1),cambiarEstadoModal2(1))}></img>
                           
                                  {
                                    estadoCookie === 1 && estadoCookie2 === 1 && estadoCookie3 === 1 && estadoCookie4 === 1 ?
                                            
                                    <div onMouseOver={()=> cambiarhoverBoton(1)} onMouseOut={()=>  cambiarhoverBoton(0)} style={{width:'9vw',height:'10vh', marginLeft:'40vw',marginTop:'40vh', position:'fixed'}}>
                                        <img   src={cookieentera} alt='Luna' style={{width:'9vw', marginLeft:'0vw', position:'absolute',visibility: hoverBoton === 0 ?'hidden' : 'visible'}} onClick={()=>(play5(),cambiarEstadoModal(1),cambiarTipoModal(5))}></img>
                                    </div>
                                                            : null

                                  }  


                                              </div>
                    <div style={{width:'30%', backgroundColor:'white', height:'90%', marginTop:'3.5vh', marginLeft:'1vw', border: '2px solid', borderRadius:'0.5vw'}}>
                        <h2 style={{fontSize:'2.5vw', marginTop:'4vh', marginLeft:'4.2vw',fontFamily: 'Archivo'}}>GALLETITAS</h2>
                        <div style={{width:'17vw', marginLeft:'3vw', marginTop:'3vh'}}>
                            <p style={{fontSize:'1.2vw',fontFamily: 'Archivo'}}>Come todas las galletitas para poder seguir.</p>
                        </div>
                        <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'7vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1.3vw',fontFamily: 'Archivo'}}> Invasión de la privacidad</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie2 != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1.3vw',fontFamily: 'Archivo'}}>Adicción a la personalización</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie3 != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1.3vw',fontFamily: 'Archivo'}}>Control mental digital</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" checked={estadoCookie4 != 0 ? true : false} style={{width:'3vw'}} />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1.3vw',fontFamily: 'Archivo'}}>Pérdida de la identidad digital</h3>
                            </div>
                            <div style={{display:'flex',flexDirection:'row', marginTop:'3vh'}}>
                                <input type="checkbox" id="topping" name="topping" value="Paneer"  checked={estadoCookie18 != 0 ? true : false} style={{width:'3vw'}}  />
                                <h3 style={{marginLeft:'0.2vw', fontSize:'1.3vw',fontFamily: 'Archivo'}}>Esclavitud de la publicidad</h3>
                            </div>
                            {
                                estadoCookie18 === 1 ?
                                <Boton3 onClick={() => (play(),navigate(`/licencia`))} style={{fontSize:'25px', fontWeight:'200', width:'10vw', height:'6vh', marginTop:'8vh', marginLeft:'5.8vw'}}>Seguir</Boton3>
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
                            
                            <h3 style={{fontSize:'120%', width:'30vw', marginTop:'0.3vh', display:'flex',justifyContent:'center'}}>
                                {tipoModal === 1 ? 'Invasión de la privacidad' : tipoModal === 2 ? 'Adicción a la personalización' : tipoModal === 3 ? 'Control mental digital' : tipoModal === 4 ?'Pérdida de identidad digital':'Esclavitud de la publicidad'} 
                            </h3>
                            <div style={{width:'3vw', marginLeft:'29vw', position:'absolute'}}>
                                <Boton onClick={() => (tipoModal === 5 ? (play(),cambiarEstadoCookie18(1),cambiarEstadoModal(0)) : play(),cambiarEstadoModal(0))} style={{marginLeft:'1vw', borderWidth:'0px', backgroundColor:'transparent', marginTop:'0.5vh'}}>
                                    <h3 style={{width:'0.2vw'}}>X</h3>
                                </Boton>
                            </div>
                        </div>
                    )}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
                        <div style={{display:'flex',flexDirection:'row', marginRight:'7vw'}}>
                        <img src={cookie} alt='Luna' style={{width:'10vw'}}></img>
							<b style={{marginTop:'6vh', fontSize:'3vh', marginLeft:'1vw'}}>Mmmmm.....</b>
                        </div>
                        <div style={{ width:'30vw', marginBottom:'3vh'}}>
							<h3 style={{textAlign:'center',fontFamily: 'Archivo'}}>                               
                            {tipoModal === 1 ? 'Las cookies son como pequeños espías que registran hasta tu último click, observandote como si fueran una versión digital de Gran Hermano.': tipoModal === 4 ?'Estas permitiendo que tu perfil digital sea tan detallado que hasta los agentes secretos se sorprenderán.' : tipoModal === 2 ?'Las cookies convertirán a esta web en un amigo cercano que siempre sabrá lo que quieras, limitando tu exposición a nuevas ideas y experiencias.' : tipoModal === 3 ?'Las cookies no solo rastrearán tu historial, sino que también parecen conocer tus pensamientos antes de lo que pienses. ¿Quien necesita libre albedrío cuando las cookies te dicen que querer?' : 'Al aceptarlas, estás abriendo las puertas de un paraíso publicitario, donde anuncios persiguen tus deseos hasta en tus pesadillas.'} 
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
                                <Boton onClick={() => (play(),cambiarEstadoModal2(0))} style={{marginLeft:'5vw', borderWidth:'0px', backgroundColor:'transparent', marginTop:'0.5vh'}}>
                                    <h3 style={{width:'0.2vw'}}>X</h3>
                                </Boton>
                            </div>
                        </div>
                    )}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
                        <div style={{display:'flex',flexDirection:'row', marginRight:'9vw'}}>
                        <img src={luna} alt='Luna' style={{width:'13vw'}}></img>
							<b style={{marginTop:'5vh', fontSize:'5vh',fontFamily: 'Archivo'}}>Upps!</b>
                        </div>
                        <div style={{ width:'25vw', marginBottom:'3vh', marginTop:'-2vh', marginLeft:'3vw',fontFamily: 'Archivo'}}>
							<h3>                               
                                Te estás comiendo una Luna
                            </h3>
                        
                        </div>
                            </Contenido>
				</Modal> 

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
	width: 80%;
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
    image:hover {
        visibility: hidden;
      }
`;