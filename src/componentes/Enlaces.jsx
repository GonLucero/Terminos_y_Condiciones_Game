import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import boopSfx2 from '../sounds/boton_dos.mp3';
import boopSfx3 from '../sounds/reiniciar.mp3';
import boopSfx6 from '../sounds/enlace-engañoso.mp3';
import { useNavigate } from 'react-router-dom'
import reinicio from '../assets/general/reinicio.png'
import puz1 from '../assets/puzzle/1.png'
import puz2 from '../assets/puzzle/2.png'
import puz3 from '../assets/puzzle/3.png'
import puz4 from '../assets/puzzle/4.png'
import puz5 from '../assets/puzzle/5.png'
import puz6 from '../assets/puzzle/6.png'
import puz7 from '../assets/puzzle/7.png'
import puz8 from '../assets/puzzle/8.png'
import puz9 from '../assets/puzzle/9.png'
import { MuiKeyboard } from '@autosys/react-mui-keyboard';

const Enlaces = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [continuar2, cambiarContinuar2] = useState(0);
  const [continuar3, cambiarContinuar3] = useState(0);
  const [continuar4, cambiarContinuar4] = useState(0);
  const [box, setbox] = useState(0);
  const [box2, setbox2] = useState(0);
  const [box3, setbox3] = useState(0);
  const [box4, setbox4] = useState(0);
  const [box5, setbox5] = useState(0);
  const [imagen, setImagen] = useState(0);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [play] = useSound(boopSfx);
  const [play2] = useSound(boopSfx2);
  const [play3] = useSound(boopSfx3);
  const [play6] = useSound(boopSfx6);

  const [checked, setChecked] = useState(false);
  const [inputFocused, setInputFocused] = useState(0);
  const [inputValue, setInputValue] = useState('');

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
    (coords.x > 290 && coords.x < 450) && (coords.y > 140 && coords.y < 280) ?
    setImagen(1)
    :
    (coords.x > 450 && coords.x < 610) && (coords.y > 140 && coords.y < 280) ?
    setImagen(2)
    :
    (coords.x > 615 && coords.x < 750) && (coords.y > 140 && coords.y < 280) ?
    setImagen(3)
    :
    (coords.x > 290 && coords.x < 450) && (coords.y > 295 && coords.y < 462) ?
    setImagen(4)
    :
    (coords.x > 450 && coords.x < 610) && (coords.y > 295 && coords.y < 462) ?
    setImagen(5)
    :
    (coords.x > 615 && coords.x < 750) && (coords.y > 295 && coords.y < 462) ?
    setImagen(6)
    :
    (coords.x > 290 && coords.x < 450) && (coords.y > 462 && coords.y < 600) ?
    setImagen(7)
    :
    (coords.x > 450 && coords.x < 610) && (coords.y > 462 && coords.y < 600) ?
    setImagen(8)
    :
    (coords.x > 615 && coords.x < 750) && (coords.y > 462 && coords.y < 600) ?
    setImagen(9)
    :
    setImagen(0)

  }, [coords]);




  const handleUrlChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

const numbers = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'-',
	'.',
	',',
	'?',
	'!',
  ];

const englishButtons = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'j',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
	'.',
	',',
	'@',
	'!',
  ];



  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
}

const codigomal = ( ) => {
  setInputValue('')
  cambiarContinuar3(0)
}


return (
		<div style={{width:'100%', height:'100vh'}}>
			<img src={reinicio}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'12vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play3(),navigate(`/`))} ></img>

				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px', fontFamily:'Source code pro'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'80%', alignSelf:'center', marginLeft:'1%', marginTop:'0%',}}>
						<h1 style={{fontSize:'200%', width:'65vw', fontFamily:'Source code pro'}}><b>ELIMINACIÓN DE ENLACES DE NUESTRA WEB</b></h1>
						<h2 style={{marginTop:'2%', textAlign:'center', fontSize:'130%', marginLeft:'17%', width:'90%', fontFamily:'Archivo'}}>
						Si encuentras algún enlace en nuestro sitio que sea ofensivo por cualquier motivo, puedes contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para eliminar enlaces, pero no estamos obligados a hacerlo ni a responder directamente.
						No nos aseguramos de que la información de este sitio web sea correcta. Tampoco garantizamos su integridad o precisión, ni podemos asegurar que el sitio web permanecerá disponible en el futuro.

                        </h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-8%', height:'10vh',alignItems:'center', marginLeft:'88%'}}>
									<Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
                continuar2 === 0
                ?
				<ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						<h1 style={{fontSize:'200%', width:'70vw', marginLeft:'-3%', fontFamily:'Source code pro'}}><b>ELIMINACIÓN DE ENLACES DE NUESTRA WEB</b></h1>

                        <div style={{marginTop:'1vh'}}>
                            <a style={{display:'flex', marginLeft:'16vw', fontSize:'110%', fontFamily:'Archivo'}}>Identifica los enlaces engañosos para avanzar.</a>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'1vh', marginLeft:'3.5%'}}>
                        <div onClick={()=> (play6(),setbox(1))} style={{cursor:'pointer', width:'27vw', border:box === 0 ? '2px solid' : 'none', height:'12vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'25vw', fontSize:'2vw', textAlign:'center', marginLeft:'1.5%', marginTop:'1.3vh'}}>{box === 0 ? <u>¡Desbloquea el potencial oculto de tu computadora!</u> : <del>¡Desbloquea el potencial oculto de tu computadora!</del>} </h2>
                        </div>
                        <div onClick={()=>(play2(),setbox2(1))} style={{cursor:'pointer',width:'27vw', border:box2 === 0 ? '2px solid' : 'none', height:'12vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'25vw', fontSize:'2vw', textAlign:'center', marginLeft:'1.5%', marginTop:'1.3vh'}}>{box2 === 0 ?<u>CINE: el top 15 de las mejores películas de terror</u> : <u style={{color:'lightgrey'}}>Este enlace no es engañoso</u>}</h2>
                        </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'2vh', marginLeft:'3.5%'}}>
                        <div onClick={()=>(play2(),setbox3(1))} style={{cursor:'pointer',width:'27vw', border:box3 === 0 ? '2px solid' : 'none', height:'12vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'25vw', fontSize:'2vw', textAlign:'center', marginLeft:'1.5%', marginTop:'0.5vh'}}>{box3 === 0 ?<u>Viernes con alertas: el clima en la ciudad de Buenos Aires</u>: <u style={{color:'lightgrey'}}>Este enlace no es engañoso</u>}</h2>
                        </div>
                        <div  onClick={()=>(play6(),setbox4(1))} style={{cursor:'pointer',width:'27vw', border:box4 === 0 ? '2px solid' : 'none', height:'12vh', padding:'5px', marginTop:'3vh', marginLeft:'2vw'}}>
                            <h2 style={{width:'25vw', fontSize:'2vw', textAlign:'center', marginLeft:'1.5%', marginTop:'0.5vh'}}>{box4 === 0 ? <u>¿Cuánto vale mi coche? Eche un vistazo aquí (quizás se sorprenda)</u> : <del>¿Cuánto vale mi coche? Eche un vistazo aquí (quizás se sorprenda)</del>}</h2>
                        </div>
                        </div>
                        <div  onClick={()=>(play6(),setbox5(1))} style={{cursor:'pointer',width:'27vw', border:box5 === 0 ? '2px solid' : 'none', height:'12vh', padding:'5px', marginTop:'3vh', marginLeft:'18.5vw'}}>
                            <h2 style={{width:'25vw', fontSize:'2vw', textAlign:'center', marginLeft:'1.5%', marginTop:'0.5vh'}}>{box5 === 0 ? <u>¿Lo recuerdas? Respira profundo antes de ver como luce ahora</u> : <del>¿Lo recuerdas? Respira profundo antes de ver como luce ahora</del>}</h2>
                        </div>
                        {
                            box === 1 && box4 === 1 && box5 === 1 ?
							<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-9%', height:'10vh',alignItems:'center', marginLeft:'70%'}}>
                            <Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(),cambiarContinuar2(1))}> {'>'} </Boton2>
                            </div>
                            : null
                        }

					
				</ContenedorTerminos>
				:
        continuar3 === 0
        ?
 				<ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                <div style={{display:'flex', flexDirection:'row', marginLeft:'15%'}}>
                <img src={puz1} style={{width:'16vw', visibility:imagen != 1 ? 'hidden' : 'visible',}}></img>
                <img src={puz2} style={{width:'16vw', visibility:imagen != 2 ? 'hidden' : 'visible', marginLeft:'0%'}}></img>
                <img src={puz3} style={{width:'16vw', visibility:imagen != 3 ? 'hidden' : 'visible', marginLeft:'0.52%'}}></img>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginLeft:'15%', marginTop:'1%'}}>
                <img src={puz4} style={{width:'16vw', visibility:imagen != 4 ? 'hidden' : 'visible'}}></img>
                <img src={puz5} style={{width:'16vw', visibility:imagen != 5 ? 'hidden' : 'visible', marginLeft:'0%'}}></img>
                <img src={puz6} style={{width:'16vw', visibility:imagen != 6 ? 'hidden' : 'visible', marginLeft:'0.52%'}}></img>
                </div>
                <div style={{display:'flex', flexDirection:'row', marginLeft:'15%', marginTop:'0%'}}>
                <img src={puz7} style={{width:'16vw', visibility:imagen != 7 ? 'hidden' : 'visible'}}></img>
                <img src={puz8} style={{width:'16vw', visibility:imagen != 8 ? 'hidden' : 'visible', marginLeft:'0%'}}></img>
                <img src={puz9} style={{width:'16vw', visibility:imagen != 9 ? 'hidden' : 'visible', marginLeft:'0.52%'}}></img>
                </div>
                         
                <div style={{position:'fixed', width:'40%', height:'10%', backgroundColor:'rgba(220,222,241,0.3)', marginTop:'-27%', marginLeft:'12%'}}>
                        <h2 style={{paddingTop:'6%', paddingLeft:'12%', fontFamily:'Archivo'}}>Lee el texto para poder seguir</h2>
              </div>
              <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-6%', height:'10vh',alignItems:'center', marginLeft:'45%', position:'fixed'}}>
									<Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(),cambiarContinuar3(1))}> {'>'} </Boton2>
						</div>
          </ContenedorTerminos>
          :
          continuar4 === 0
          ?
          <ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
          <div style={{marginTop:'2vh', width:'100%'}}>
                          <h1 style={{fontSize:'4vw', textAlign:'center', fontFamily:'Source code pro'}}>EXENCIÓN DE RESPONSABILIDAD</h1>
                          </div>
              <div style={{display:'flex', flexDirection:'row', marginTop:'1%'}}>
                          <div style={{width:'38vw', marginLeft:'10vw', justifyContent:'center', marginTop:'4%'}}>    
                              <h3 style={{alignSelf:'center', fontSize:'3vw', marginLeft:'11vw', fontFamily:'Archivo'}}>Escriba el código:</h3>                    
                          <input 
              onFocus={() => (setChecked(true),setInputFocused(1))}
                          type="text" 
                          value={ inputValue } 
                          onChange={ handleInputChange } 
                          style={{height:'10vh', width:'45vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', paddingLeft:'14vw', fontSize:'3vw', marginTop:'3%', fontFamily:'Archivo'}}
  
                          className="SearchbarInput"
                           />
                          </div>
  
                          </div>
           

                          <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>
  
                         </div>
              <div style={{marginLeft:'7%', marginTop:'5%'}}>
               <MuiKeyboard
              
              slide
              direction="up"
              checked={checked}
              setInputValue={setInputValue }
              numbers={numbers}
              secondLangLabel="EN"
              firstLangLabel="RU"
              keyboardWidth={'100%'}
              
              buttonSize="medium"
              labelLangButton
              reverseButton
              sx={{ display: 'flex' }}
              />
              </div>
              {
              inputValue != '' ?
               <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-70%', height:'10vh',alignItems:'center', marginLeft:'72%'}}>
               <Boton2  disabled={inputValue === ''} style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={()=> {inputValue === '1505016105' ? cambiarContinuar4(1) : codigomal()} }> {'>'} </Boton2>
                 </div>
              :
              null
              }
  
          </ContenedorTerminos>
          :
          <ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
          <h1 style={{fontSize:'4vw', width:'70vw', marginLeft:'-2vw'}}><b style={{ fontFamily:'Source code pro'}}>GRACIAS POR JUGAR</b></h1>
          <div style={{backgroundColor:'#dcdef1', width:'45vw', height:'20vh', marginLeft:'9.5vw', marginTop:'5vh', borderRadius:'1.5vw'}}>
             <h2 style={{textAlign:'center', width:'40vw', marginLeft:'2.8vw', paddingTop:'5vh', fontSize:'130%', fontFamily:'Archivo'}}> Te pedimos disculpas, “ELESPACIO.COM” ha sido dado de baja por algunos inconvenientes con la ley.  </h2>
          </div>
          <div style={{backgroundColor:'#dcdef1', width:'45vw', height:'20vh', marginLeft:'9.5vw', marginTop:'5vh', borderRadius:'1.5vw'}}>
          <h2 style={{textAlign:'center', width:'40vw', marginLeft:'2.8vw', paddingTop:'6vh', fontSize:'130%', fontFamily:'Archivo'}}>De todas formas, clickea en el link si te interesaba <a style={{color:'blue'}} href="https://elespacio.cargo.site/ "> “ELESPACIO.COM”</a></h2>

          </div>

    </ContenedorTerminos>


     }

				
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