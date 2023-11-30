import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import styled from 'styled-components';
import "./Global.css";
import Home from "./componentes/Home";
import Main from "./componentes/Main";
import Cookies from "./componentes/Cookies";
import Licencia from "./componentes/Licencia";
import Nodebes from "./componentes/Nodebes";
import Responsabilidad from "./componentes/Responsabilidad";
import Derechos from "./componentes/Derechos";
import Enlaces from "./componentes/Enlaces";
import Modal from './componentes/Modal';
import audioPath from './sounds/musica-de-fondo.mp3';
import useSound from 'use-sound';
import boopSfx from './sounds/click.mp3'
import tc from './assets/general/tc.png'
import parlante_mute from './assets/general/parlante mute.png'
import parlante_on from './assets/general/parlante.png'
import parlante_hover from './assets/general/parlante over.png'
import reinicio from './assets/general/reinicio.png'
import reinicio_hover from './assets/general/reinicio over.png'


function App() {
  const [estadoLogo, cambiarEstadoLogo] = useState(0);

  const [play] = useSound(boopSfx);

  const [audio] = useState(new Audio(audioPath))
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    setPlaying(!playing)
  }

  const cambioLogo = () => {
    cambiarEstadoLogo(1)
  }


useEffect(() => {
  audio.addEventListener('ended', () => {
	audio.currentTime = 0
	audio.play()
	setPlaying(true)
  })
}, [audio])

  useEffect(() => {
      playing ? audio.play() : audio.pause()
    },
    [playing, audio]
  )

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      audio.play()
      setPlaying(true)
    })
  }, [audio])



  return (
    <BrowserRouter>
      <div className="App" >
          <div style={{display:'flex', flexDirection:'row', backgroundColor:'#bbc1d6', width:'100vw', height:'100vh', position:'absolute'}}>
          <img src={playing ? parlante_on: parlante_mute}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'5vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play(),toggle())} ></img>
          <img src={tc} alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'90vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play(),cambiarEstadoLogo(1))} ></img>
          </div>
        <Routes >
			<Route exact path="/" element={<Main func={setPlaying} logo={cambioLogo} />} /> 
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/cookies" element={<Cookies />}/>
          <Route exact path="/licencia" element={<Licencia/>}/>
          <Route exact path="/nodebes" element={<Nodebes />}/>
          <Route exact path="/responsabilidad" element={<Responsabilidad />}/>
          <Route exact path="/derechos" element={<Derechos />}/>
          <Route exact path="/enlaces" element={<Enlaces />}/>

        </Routes>
        <Modal
					estado={estadoLogo}
					cambiarEstado={cambiarEstadoLogo}
					encabezado={(<div style={{display:'flex',flexDirection:'row'}}><b style={{fontSize:'150%', marginLeft:'7.3vw', marginTop:'0.1vh'}}>CRÉDITOS</b>
					<Boton onClick={() => (play(),  cambiarEstadoLogo(0))} style={{marginLeft:'6vw', marginTop:'1%', borderWidth:0, backgroundColor:'transparent'}}>
						<h3>X</h3>
					</Boton>
					</div>)}
					
					>
				<Contenido style={{backgroundColor:'white', }}>
					<b style={{width:'70%', marginTop:'5%', marginLeft:'5vw', fontSize:'100%', letterSpacing:'0.5px'}}>DISEÑO Y PROPOTIPADO :</b>
					<a href="https://elsalon.org/u/pedrosegalerba/"><u   style={{marginTop:'1%'}}>Pedro Segalerba</u></a>
					<a href="https://elsalon.org/u/genarogc/"><u>Genaro Gonzalez Cinto</u></a>
					<a href="https://elsalon.org/u/juanignacio5/ "><u>Juan Ignacio Gonzalez</u></a>
					<a href="https://gabrielapardoroj.myportfolio.com/ "><u>Gabriela Pardo Rojas</u></a>
					<b style={{width:'70%', marginTop:'5%', marginLeft:'10vw', fontSize:'100%', letterSpacing:'0.5px'}}>PROGRAMACIÓN :</b>
					<a href="https://gonzalo-lucero.vercel.app/"><h4 style={{fontSize:'100%', marginTop:'2%', marginBottom:'5%'}}>Gonzalo Lucero</h4></a>
				</Contenido>
			</Modal> 

      </div>
    </BrowserRouter>
  );
}

export default App;

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