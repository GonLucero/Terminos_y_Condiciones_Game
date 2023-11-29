import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import reinicio from '../assets/general/reinicio.png'


const Home = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [continuar2, cambiarContinuar2] = useState(0);
  const [continuar3, cambiarContinuar3] = useState(0);
  const [estadoModalValor, cambiarEstadoModalValor] = useState(0);
  const [estadoModal2, cambiarEstadoModal2] = useState(0);


  const [play] = useSound(boopSfx);

    
    const refreshPage = () => {
        window.location.reload(false)
    }


return (
		<div style={{width:'100%', height:'100vh'}}>
        <img src={reinicio}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'12vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play(),navigate(`/`))} ></img>

				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'20%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'1%', }}>
						<h1 style={{fontSize:'200%'}}><b>NO DEBES</b></h1>
						<h2 style={{marginTop:'5%', fontSize:'2.3vw', textAlign:'center'}}>
                        No debes <b>copiar o republicar</b> el material de este sitio. Puedes proporcionar información falsa o engañosa al registrarte o al utilizar nuestros servicios. No debes vender, alquilar o sublicenciar material de esta web. No debes intentar acceder o recopilar datos de manera no autorizada. Puedes compartir contenido <del>sea obsceno</del>, o que <del>viole</del> los derechos de privacidad del otro usuario. 						</h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-5%', height:'10vh',alignItems:'center', marginLeft:'78%'}}>
                            <Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(), cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
                continuar2 === 0 ?
                <ContenedorTerminos style={{position:'absolute', marginLeft:'20%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                <h1>NO DEBES...</h1>
                        <div style={{marginTop:'1vh'}}>
                            <u style={{fontWeight:'bold', marginLeft:'14vw'}}>DALE CLICK A LOS CUADRADOS PARA ACEPTAR</u>
                        </div>
                        <div style={{marginLeft:'8vw'}}>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <Boton3 onClick={() => (play(),cambiarContinuar2(1))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Copiar material de esta web</Boton3>
                                <Boton3 onClick={() => (play(),cambiarEstadoModal2(1),cambiarEstadoModalValor(0))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh', marginTop:'10vh', marginLeft:'4vw'}}>Compartir contenido obsceno</Boton3>
                            </div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                                <Boton3 onClick={() => (play(),cambiarEstadoModal2(1),cambiarEstadoModalValor(1))} style={{fontSize:'1.6vw', fontWeight:'100', width:'18vw',padding:'2px', marginTop:'10vh', marginLeft:'4vw', height:'9vh'}}>Causar molestias o daños a otros usuarios a través de la web</Boton3>
                                <Boton3 onClick={() => (play(), cambiarEstadoModal2(1),cambiarEstadoModalValor(2))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh', marginTop:'10vh', marginLeft:'4vw'}}>Proporcionar información falsa</Boton3>
                            </div>
                            
                        </div>
				</ContenedorTerminos>
                :
                continuar3 === 0 ?
                <ContenedorTerminos style={{position:'absolute', marginLeft:'20%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                                    <h1>PUEDES...</h1>
                                    <div style={{marginTop:'1vh'}}>
                                        <u style={{fontWeight:'bold', marginLeft:'14vw'}}>DALE CLICK A LOS CUADRADOS PARA ACEPTAR</u>
                                    </div>
                                    <div style={{marginLeft:'8vw'}}>
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                            <Boton3 onClick={() => (play(),cambiarEstadoModal2(1),cambiarEstadoModalValor(3))} style={{fontSize:'1.6vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Alquilar o vender contenido propio de esta web</Boton3>
                                            <Boton3 onClick={() => (play(),cambiarEstadoModal2(1),cambiarEstadoModalValor(4))} style={{fontSize:'1.6vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Intentar acceder o recopilar datos de manera no autorizada</Boton3>
                                        </div>
                                        <div style={{display:'flex', flexDirection:'row'}}>
                                            <Boton3 onClick={() => (play(),cambiarContinuar3(1))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Proporcionar informacion falsa</Boton3>
                                            <Boton3 onClick={() => (play(), cambiarEstadoModal2(1),cambiarEstadoModalValor(5))} style={{fontSize:'1.6vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Tener contacto con nuestro equipo de asistencia</Boton3>
                                        </div>
                                        
                                    </div>
                            </ContenedorTerminos>
                            :
                            <ContenedorTerminos style={{position:'absolute', marginLeft:'20%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                            <h1> NO DEBES...</h1>
                            <div style={{marginTop:'1vh'}}>
                            <u style={{fontWeight:'bold', marginLeft:'14vw'}}>DALE CLICK A LOS CUADRADOS PARA ACEPTAR</u>
                            </div>
                            <div style={{marginLeft:'8vw'}}>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <Boton3 onClick={() => (play(),cambiarEstadoModal2(1),cambiarEstadoModalValor(6))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Violar la privacidad de otros usuarios</Boton3>
                                    <Boton3 onClick={() => (play(), navigate(`/responsabilidad`))} style={{fontSize:'1.6vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Intentar acceder o recopilar datos de manera no autorizada</Boton3>
                                </div>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <Boton3 onClick={() => (play(),cambiarEstadoModal2(1),cambiarEstadoModalValor(7))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Agredir o insultar a otros usuarios</Boton3>
                                    <Boton3 onClick={() => (play(), cambiarEstadoModal2(1),cambiarEstadoModalValor(8))} style={{fontSize:'1.7vw', fontWeight:'100', width:'18vw', height:'9vh',padding:'2px', marginTop:'10vh', marginLeft:'4vw'}}>Compartir contenido obsceno</Boton3>
                                </div>
                                
                            </div>
                    </ContenedorTerminos> 
				}
                                <Modal
					estado={estadoModal2}
					cambiarEstado={cambiarEstadoModal2}
					encabezado={(
                        <div style={{display:'flex',flexDirection:'row'}}>
                            
                            <h3 style={{fontSize:'100%', width:'15vw', marginTop:'0.3vh', display:'flex',justifyContent:'center', fontWeight:'bold'}}>
                               ERROR
                            </h3>
                            <div style={{width:'3vw', marginLeft:'17vw', position:'absolute'}}>
                                <Boton onClick={() => (play(),cambiarEstadoModal2(0))} style={{marginLeft:'5vw', borderWidth:'0px', backgroundColor:'transparent', marginTop:'0.2vh'}}>
                                    <h3 style={{width:'0.2vw'}}>X</h3>
                                </Boton>
                            </div>
                        </div>
                    )}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
  
                            {
                            estadoModalValor === 1 ?
                            <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                            <h3 style={{fontWeight:'500'}}>  
                                    Asegurate de dominar las artes oscuras de la irritación digital. Los comentarios sin piedad, los insultos a los que te caen mal, ¡y no te olvides de las estafas!                                    </h3>
                                </div>
                            :
                            estadoModalValor === 0  ?
            
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                    <h3 style={{fontWeight:'500'}}>  
                                    <b>¡Advertimos!</b> que compartir contenido obsceno puede tener <u>consecuencias inesperadas</u> en tu reputación impecable. Pero, ¿quién necesita reputación cuando puedes tener la gratificación instantánea de unos pocos clicks atrevidos?
                                    </h3>
                                </div>
                                : 
                                estadoModalValor === 2  ?
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                <h3 style={{fontWeight:'500'}}>  
                                <b>¡Advertimos!</b> que proporcionar información falsa puede tener <u>efectos secundarios</u>, como la pérdida momentánea de credibilidad y el riesgo de que te etiqueten como "conspiranoicx" en tus círculos sociales. </h3>
                                </div>
                            :
                                estadoModalValor === 3  ?
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                <h3 style={{fontWeight:'500'}}>  
                                Nuestro contenido exclusivo es como una joya rara y preciosa... o al menos eso nos gustaría pensar. Por esta razón <u>no te atrevas a monetizar</u> con nuestro contenido.
                                </h3>
                                </div>
                            :
                                estadoModalValor === 4  ?
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                <h3 style={{fontWeight:'500'}}>  
                                Ese es nuestro trabajo, no te atrevas a quitarnoslo, no necesitas de tomarte la molestia  de recopilar datos de manera no autorizada.
                                </h3>
                            </div>
                            :
                                estadoModalValor === 5  ?
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                <h3 style={{fontWeight:'500'}}>  
                                Nuestros asistentes tienen una asombrosa capacidad de recuperar información. Pero no siempre estan disponibles. De hecho, ahora estan de huelga.                                       </h3>
                            </div>
                                :
                                estadoModalValor === 6  ?
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                <h3 style={{fontWeight:'500'}}>  
                                No necesitas de violar la privacidad de nuestros usuarios, al final ellos te brindarás sus datos voluntariamente.
                                </h3>
                            </div>
                                :
                                estadoModalValor === 7  ?
                                <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                                <h3 style={{fontWeight:'500'}}>  
                                Conviértanse en verdaderos guerreros del teclado. Desarrollen la habilidad de escribir mensajes ofensivos sin tocar una tecla dos veces. ¡Los ninjas de la provocación en línea nacen, no se hacen!
                                </h3>
                            </div>
                              :
                              estadoModalValor === 8  ?
                              <div style={{ width:'32vw', marginBottom:'3vh', marginTop:'2vh', marginLeft:'1vw', textAlign:'center'}}>
                              <h3 style={{fontWeight:'500'}}>  
                              Recuerda siempre considerar el momento y el lugar para compartir contenido obsceno.                               </h3>
                          </div>
                            : null
                            }                           

                        

                            </Contenido>
				</Modal> 


				<Modal
					estado={estadoLogo}
					cambiarEstado={cambiarEstadoLogo}
					encabezado={(<div style={{display:'flex',flexDirection:'row'}}><b style={{fontSize:'150%'}}>CRÉDITOS</b><Boton onClick={() => (play(),  cambiarEstadoLogo(0))} style={{marginLeft:'95%', marginTop:'1%', borderWidth:0, backgroundColor:'transparent'}}><h3>X</h3></Boton></div>)}
					
					>
						<Contenido style={{backgroundColor:'white', }}>
							<b style={{width:'70%', marginTop:'5%', marginLeft:'25%', fontSize:'100%', letterSpacing:'0.5px'}}>DISEÑO Y PROPOTIPADO :</b>
							<a href="https://elsalon.org/u/pedrosegalerba/"><u   style={{marginTop:'1%'}}>Pedro Segalerba</u></a>
							<a href="https://elsalon.org/u/genarogc/"><u>Genaro Gonzalez Cintoo</u></a>
							<a href="https://elsalon.org/u/juanignacio5/ "><u>Juan Ignacio Gonzalez</u></a>
							<a href="https://elsalon.org/u/gabriela+/ "><u>Gabriela Pardo Rojas</u></a>
							<b style={{width:'70%', marginTop:'5%', marginLeft:'40%', fontSize:'100%', letterSpacing:'0.5px'}}>PROGRAMACIÓN :</b>
							<a href="https://gonzalo-lucero.vercel.app/"><h4 style={{fontSize:'100%', marginTop:'2%', marginBottom:'5%'}}>Gonzalo Lucero</h4></a>
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
	transition: .3s ease all;
	border: 3px solid;
	border-color: black;
	&:hover {
        background: #e0dcf4;
        color:black;
        font-weight:900;
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