import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import tc from '../assets//general/tc.png'


const Main = ({func, logo}) => {
  const [estadoModal1, cambiarEstadoModal1] = useState(0);
  const [play] = useSound(boopSfx);
  const navigate = useNavigate();





	return (
		<div style={{width:'100%', height:'100%',position:'fixed', zIndex:'100'}}>

<div style={{backgroundColor:'white', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<ContenedorTerminos style={{ position:'absolute', marginLeft:'20vw'}}>
            <div style={{display:'flex', justifyContent:'flex-end', width:'7vw', marginTop:'15vh',alignItems:'flex-end', marginLeft:'51vw' }}>
					<img src={tc} alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'2vw',cursor: 'pointer'}} onClick={()=>(play(),logo(1))} ></img>
			</div>
				<h1 style={{fontWeight:'500', marginLeft:'13vw', marginTop:'-10vh'}}>TÉRMINOS Y CONDICIONES</h1>
				<div style={{height:'55%', width:'43vw', alignSelf:'center', marginLeft:'12vw', marginTop:'5vh'}}>
				<h2 >
					<b>“ELESPACIO.COM”</b> quiere que aceptes todos los <u>términos y condiciones</u>.
					<p>Tu misión final es poder acceder a</p> <b>“ELESPACIO.COM”</b> pasando cada uno de los niveles que se te presentaran. 
				</h2>
				<h2 style={{fontStyle:'italic', marginTop:'4vh', marginLeft:'2vw'}}>Esto es un contrato, leelo bien.</h2>
				<div style={{backgroundColor:'#dcdef1', width:'45vw', 	border: '3px solid', marginLeft:'-2vw', marginTop:'3vh', height:'15vh' }}>
					<h4 style={{	fontSize:'200%', width:'40vw', marginLeft:'4vw', marginTop:'1vh'}}>
					Ten cuidado... Hay cosas que estan fuera de control
					</h4>
				</div>
				<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'45vw', marginLeft:'-2vw', marginTop:'6vh'}}>
						<Boton2 onClick={() => (func(true), navigate(`/home`))} style={{fontSize:'25px'}}>JUGAR</Boton2>
                </div>
				</div>


			</ContenedorTerminos>


			

		</div>
		</div>
	);
}
 
export default Main;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const ContenedorTerminos = styled.div`

	margin: auto;
	width: 63vw;
	height: 100%;
	background: #bbc1d6;
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;

	h1 {
		font-size: 260%;
		font-weight: 600;
		padding-inline: 10%;
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
		font-size: 32px;
		font-weight: 400;
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