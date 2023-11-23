import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import puz1 from '../assets/puzzle/puz1.png'
import puz2 from '../assets/puzzle/puz2.png'
import puz3 from '../assets/puzzle/puz3.png'
import puz4 from '../assets/puzzle/puz4.png'
import puz5 from '../assets/puzzle/puz5.png'
import puz6 from '../assets/puzzle/puz6.png'
import puz7 from '../assets/puzzle/puz7.png'
import puz8 from '../assets/puzzle/puz8.png'
import puz9 from '../assets/puzzle/puz9.png'
import puz10 from '../assets/puzzle/puz10.png'
import puz11 from '../assets/puzzle/puz11.png'
import puz12 from '../assets/puzzle/puz12.png'
import puz13 from '../assets/puzzle/puz13.png'
import puz14 from '../assets/puzzle/puz14.png'
import puz15 from '../assets/puzzle/puz15.png'
import puz16 from '../assets/puzzle/puz16.png'
import puz17 from '../assets/puzzle/puz17.png'
import puz18 from '../assets/puzzle/puz18.png'
import puz19 from '../assets/puzzle/puz19.png'
import puz20 from '../assets/puzzle/puz20.png'
import puz21 from '../assets/puzzle/puz21.png'
import puz22 from '../assets/puzzle/puz22.png'
import puz23 from '../assets/puzzle/puz23.png'

const Enlaces = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [continuar2, cambiarContinuar2] = useState(0);
  const [box, setbox] = useState(0);
  const [box2, setbox2] = useState(0);
  const [box3, setbox3] = useState(0);
  const [box4, setbox4] = useState(0);
  const [box5, setbox5] = useState(0);
  const [imagen, setImagen] = useState(0);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [play] = useSound(boopSfx);

    useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);


  useEffect(() => {
    (coords.x > 675 && coords.x < 841) && (coords.y > 330 && coords.y < 380) ?
    setImagen(1)
    :
    (coords.x > 860 && coords.x < 1010) && (coords.y > 330 && coords.y < 380) ?
    setImagen(2)
    :
    (coords.x > 860 && coords.x < 1010) && (coords.y > 330 && coords.y < 380) ?
    setImagen(3)
    :
    setImagen(0)

  }, [coords]);


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
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'0%',}}>
						<h1 style={{fontSize:'200%',    width:'35vw', marginLeft:'-2vw'}}><b>ELIMINACIÓN DE ENLACES DE NUESTRA WEB</b></h1>
						<h2 style={{marginTop:'5%', textAlign:'center'}}>
                        Si encuentras algún enlace en nuestro sitio que sea ofensivo por cualquier motivo, puedes contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para eliminar enlaces, pero no estamos obligados a hacerlo ni a responder directamente.
                        No nos aseguramos de que la información de este sitio web sea correcta. Tampoco garantizamos su integridad o precisión, ni podemos asegurar que el sitio web permanecerá disponible en el futuro.
                        </h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-5vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'20vw'}}>
									<Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
                continuar2 === 0
                ?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						<h1 style={{fontSize:'1.8vw', width:'50vw', marginLeft:'-5vw'}}><b>ELIMINACIÓN DE ENLACES DE NUESTRA WEB</b></h1>

                        <div style={{marginTop:'1vh'}}>
                            <a style={{display:'flex',fontWeight:'bold', marginLeft:'10vw'}}>Identifica los enlaces engañosos para avanzar.</a>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'5vh'}}>
                        <div onClick={()=>setbox(1)} style={{cursor:'pointer', width:'17vw', border:box === 0 ? '2px solid' : 'none', height:'6vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'16vw', fontSize:'1vw', textAlign:'center'}}>{box === 0 ? <u>¡Desbloquea el potencial oculto de tu computadora!</u> : <del>¡Desbloquea el potencial oculto de tu computadora!</del>} </h2>
                        </div>
                        <div onClick={()=>setbox2(1)} style={{cursor:'pointer',width:'17vw', border:box2 === 0 ? '2px solid' : 'none', height:'6vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'16vw', fontSize:'1vw', textAlign:'center'}}>{box2 === 0 ?<u>CINE: el top 15 de las mejores películas de terror</u> : <u style={{color:'lightgrey'}}>Este enlace no es engañoso</u>}</h2>
                        </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'2vh'}}>
                        <div onClick={()=>setbox3(1)} style={{cursor:'pointer',width:'17vw', border:box3 === 0 ? '2px solid' : 'none', height:'6vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'16vw', fontSize:'1vw', textAlign:'center'}}>{box3 === 0 ?<u>Viernes con alertas: el clima en la ciudad de Buenos Aires</u>: <u style={{color:'lightgrey'}}>Este enlace no es engañoso</u>}</h2>
                        </div>
                        <div  onClick={()=>setbox4(1)} style={{cursor:'pointer',width:'17vw', border:box4 === 0 ? '2px solid' : 'none', height:'6vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'16vw', fontSize:'1vw', textAlign:'center'}}>{box4 === 0 ? <u>¿Cuánto vale mi coche? Eche un vistazo aquí (quizás se sorprenda)</u> : <del>¿Cuánto vale mi coche? Eche un vistazo aquí (quizás se sorprenda)</del>}</h2>
                        </div>
                        </div>
                        <div  onClick={()=>setbox5(1)} style={{cursor:'pointer',width:'17vw', border:box5 === 0 ? '2px solid' : 'none', height:'6vh', padding:'5px', marginTop:'5vh', marginLeft:'11.5vw'}}>
                            <h2 style={{width:'16vw', fontSize:'1vw', textAlign:'center'}}>{box5 === 0 ? <u>¿Lo recuerdas? Respira profundo antes de ver como luce ahora</u> : <del>¿Lo recuerdas? Respira profundo antes de ver como luce ahora</del>}</h2>
                        </div>
                        {
                            box === 1 && box4 === 1 && box5 === 1 ?
                            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'1vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'24vw'}}>
                            <Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),cambiarContinuar2(1))}> {'>'} </Boton2>
                            </div>
                            : null
                        }

					
				</ContenedorTerminos>
                :
                <ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                <h1 style={{fontSize:'1.8vw', width:'50vw', marginLeft:'-5vw'}}><b>EXENCIÓN DE RESPONSABILIDAD</b></h1>
                <div style={{backgroundColor:'#dcdef1', width:'15vw', height:'4vh', marginLeft:'12.5vw',marginTop:'22vh'}}>
                    <h2 style={{paddingTop:'1vh', paddingLeft:'1.5vw', fontSize:'0.9vw'}}>Lee el texto para poder seguir</h2>
                </div>
  
                <img src={puz1} style={{width:'10vw', position:'fixed', marginTop:'-22vh', marginLeft:'4vw', visibility:imagen != 1 ? 'hidden' : 'visible'}}></img>
                <img src={puz2} style={{width:'8.8vw', position:'fixed', marginTop:'-21.8vh', marginLeft:'14vw',visibility:imagen != 2 ? 'hidden' : 'visible'}}></img>
                <img src={puz3} style={{width:'9.5vw', position:'fixed', marginTop:'-21.8vh', marginLeft:'23vw', visibility:imagen != 3 ? 'hidden' : 'visible'}}></img>
                <img src={puz4} style={{width:'5vw', position:'fixed', marginTop:'-21.8vh', marginLeft:'32.7vw', visibility:imagen != 4 ? 'hidden' : 'visible'}}></img>
                <img src={puz5} style={{width:'12vw', position:'fixed', marginTop:'-13vh', marginLeft:'4vw', visibility:imagen != 5 ? 'hidden' : 'visible'}}></img>
                <img src={puz6} style={{width:'11vw', position:'fixed', marginTop:'-13vh', marginLeft:'16vw',visibility:imagen != 6 ? 'hidden' : 'visible'}}></img>
                <img src={puz7} style={{width:'9vw', position:'fixed', marginTop:'-13vh', marginLeft:'27vw', visibility:imagen != 7 ? 'hidden' : 'visible'}}></img>
                <img src={puz8} style={{width:'11vw', position:'fixed', marginTop:'-9vh', marginLeft:'4vw', visibility:imagen != 8 ? 'hidden' : 'visible'}}></img>
                <img src={puz9} style={{width:'9vw', position:'fixed', marginTop:'-9vh', marginLeft:'15vw', visibility:imagen != 9 ? 'hidden' : 'visible'}}></img>
                <img src={puz10} style={{width:'8vw', position:'fixed', marginTop:'-9vh', marginLeft:'24vw',visibility:imagen != 10 ? 'hidden' : 'visible'}}></img>
                <img src={puz11} style={{width:'5.7vw', position:'fixed', marginTop:'-8.7vh', marginLeft:'32vw',visibility:imagen != 11 ? 'hidden' : 'visible'}}></img>
                <img src={puz12} style={{width:'9vw', position:'fixed', marginTop:'-2vh', marginLeft:'4vw'}}></img>
                <img src={puz13} style={{width:'6.3vw', position:'fixed', marginTop:'-2.1vh', marginLeft:'13vw'}}></img>
                <img src={puz14} style={{width:'7vw', position:'fixed', marginTop:'-2vh', marginLeft:'19.2vw'}}></img>
                <img src={puz15} style={{width:'11vw', position:'fixed', marginTop:'-1.9vh', marginLeft:'26.2vw'}}></img>
                <img src={puz16} style={{width:'6.5vw', position:'fixed', marginTop:'8vh', marginLeft:'4vw'}}></img>
                <img src={puz17} style={{width:'12vw', position:'fixed', marginTop:'7.9vh', marginLeft:'10.4vw'}}></img>
                <img src={puz18} style={{width:'11vw', position:'fixed', marginTop:'7.9vh', marginLeft:'22.4vw'}}></img>
                <img src={puz19} style={{width:'5.5vw', position:'fixed', marginTop:'7.5vh', marginLeft:'33.4vw'}}></img>
                <img src={puz20} style={{width:'9vw', position:'fixed', marginTop:'17.2vh', marginLeft:'4vw'}}></img>
                <img src={puz21} style={{width:'9vw', position:'fixed', marginTop:'17.2vh', marginLeft:'13vw'}}></img>
                <img src={puz22} style={{width:'9vw', position:'fixed', marginTop:'17.2vh', marginLeft:'22vw'}}></img>
                <img src={puz23} style={{width:'7.2vw', position:'fixed', marginTop:'17.3vh', marginLeft:'30vw'}}></img>
                        <p style={{marginTop:'250PX'}}>x:{coords.x}, {coords.y}</p>
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
 
export default Enlaces;

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