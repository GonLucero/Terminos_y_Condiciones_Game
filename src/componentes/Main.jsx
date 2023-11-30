import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import tc from '../assets//general/tc.png'
import Modal from './Modal';


const Main = ({func}) => {
	const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [play] = useSound(boopSfx);
  const navigate = useNavigate();





	return (
		<div style={{width:'100%', height:'100%',position:'fixed', zIndex:'100'}}>

<div style={{backgroundColor:'white', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
			<ContenedorTerminos style={{ position:'absolute', marginLeft:'19.2vw'}}>
            <div style={{display:'flex', justifyContent:'flex-end', width:'7vw', marginTop:'15vh',alignItems:'flex-end', marginLeft:'51vw' }}>
					<img src={tc} alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'2vw',cursor: 'pointer'}} onClick={()=>(play(),cambiarEstadoLogo(1))} ></img>
			</div>
				<h1 style={{fontWeight:'700', marginLeft:'6vw', marginTop:'-7vh',fontFamily: 'Source code pro'}}>TÉRMINOS Y CONDICIONES</h1>
				<div style={{height:'55%', width:'43vw', alignSelf:'center', marginLeft:'12vw', marginTop:'5vh'}}>
				<h2 style={{fontFamily: 'Archivo'}}>
					<b>“ELESPACIO.COM”</b> quiere que aceptes todos los <u>términos y condiciones</u>.
					<p>Tu misión final es poder acceder a</p> <b>“ELESPACIO.COM”</b> pasando cada uno de los niveles que se te presentaran. 
				</h2>
				<h2 style={{fontStyle:'italic', marginTop:'7vh', marginLeft:'0vw', fontFamily: 'Archivo'}}>Esto es un contrato, leelo bien.</h2>
				<div style={{backgroundColor:'#dcdef1', width:'45vw', 	border: '3px solid', marginLeft:'-2vw', marginTop:'3vh', height:'15vh' }}>
					<h4 style={{	fontSize:'160%', width:'50vw', marginLeft:'1.5vw', marginTop:'2.3vh', fontWeight:'500'}} >
					Ten cuidado... Hay cosas que están fuera de control
					</h4>
				</div>
				<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'45vw', marginLeft:'-2vw', marginTop:'6vh'}}>
						<Boton2 onClick={() => (play(),func(true), navigate(`/home`))} style={{fontSize:'25px'}}>JUGAR</Boton2>
                </div>
				</div>


			</ContenedorTerminos>
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
		
    h4 {
		font-family: 'Source Code Pro', monospace;

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