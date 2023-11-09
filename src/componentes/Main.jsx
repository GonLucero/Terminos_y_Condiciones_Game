import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import BackVideo from '../sounds/Public.mp4';
import { useNavigate } from 'react-router-dom'

const App = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(1);
  const [estadoModal2, cambiarEstadoModal2] = useState(0);
  const [estadoModal3, cambiarEstadoModal3] = useState(3);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [play] = useSound(boopSfx);
  const navigate = useNavigate();
  

  console.log('coord',coords)
  
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

	if(coords.x < 1000 && coords.x > 700 ){
		cambiarEstadoModal1(1)
	  }if(coords.x > 600 && coords.x < 700 ){
		cambiarEstadoModal2(0)
	  }
	  if(coords.x > 800){
		cambiarEstadoModal3(3)
	  }else{
		cambiarEstadoModal1(0)
		cambiarEstadoModal2(0)
	  }

  }, [coords]);


  



	return (
		<div style={{width:'100%', height:'100vh'}}>

<div style={{backgroundColor:'white', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<ContenedorTerminos style={{position:'absolute', marginLeft:'30%'}}>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'3vh'}}>
								<Boton onClick={() => (play())} style={{fontSize:'25px'}}>Aceptar</Boton>
                </div>
				<h1>SIN LEER</h1>
				<div style={{height:'55%', width:'70%', alignSelf:'center', marginLeft:'10%', marginTop:'5%'}}>
				<h2 >
				Te invitamos  a jugar. ¿Te animas?
Es sencillo, tu misión es leer de principio a fin un contrato de términos y condiciones.
Sí, como los muchos otros que has aceptado sin leer.
</h2>
<h2 style={{fontStyle:'italic'}}>
No puedes aceptar los términos y condiciones sin antes leerlos por completo
</h2>
<h3 style={{width:'100%', fontSize:'300%', marginTop:'20%', marginLeft:'5%'}}>
¡ANIMATE obtendras una gran recompensa!
</h3>
<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'20vh', marginLeft:'50%'}}>
								<Boton2 onClick={() => (play(),  navigate(`/home`))} style={{fontSize:'25px'}}>JUGAR</Boton2>
                </div>
				</div>


			</ContenedorTerminos>

			

		</div>
		</div>
	);
}
 
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const ContenedorTerminos = styled.div`

	margin: auto;
	width: 40%;
	height: 100%;
	background: #bbc1d6;
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;

	h1 {
		font-size: 350%;
		font-weight: 600;
		padding-inline: 20%;
		padding-top:5%

	}
	h2 {
		font-size: 150%;
		font-weight: 200;
		
	}
`;



const Boton = styled.button`
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
	padding: 2% 10%;
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