import React, {useState} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import mujerperfil from '../assets/mujerperfil.png'
import hombreperfil from '../assets/hombreperfil.png'

const Derechos = () => {
  const navigate = useNavigate();
  const [estadoLogo, cambiarEstadoLogo] = useState(0);
  const [continuar, cambiarContinuar] = useState(0);
  const [continuar2, cambiarContinuar2] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [perfil, cambiarPerfil] = useState(Math.floor(Math.random() * 5));
  const [play] = useSound(boopSfx);

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
}
const handleInputChange2 = ( e ) => {
    setInputValue2( e.target.value );
}
const handleInputChange3 = ( e ) => {
    setInputValue3( e.target.value );
}
const handleInputChange4 = ( e ) => {
    setInputValue4( e.target.value );
}


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
					<div style={{ height:'55%', width:'90%', alignSelf:'center', marginLeft:'2.5vw', marginTop:'0%',}}>
						<h1 style={{fontSize:'200%'}}><b>RESERVA DE DERECHOS</b></h1>
						<h2 style={{marginTop:'8%', width:'28vw', marginLeft:'3vw'}}>
                        Nos reservamos el derecho a modificar o eliminar los datos ingresados, almacenarlos y utilizarlos para diversos fines. También nos reservamos el derecho a modificar estos términos y condiciones <p style={{marginLeft:'8vw'}}>en cualquier momento. </p>                       </h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'3vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'20vw'}}>
									<Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
                continuar2 === 0 ?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
						<div style={{marginTop:'3vh'}}>
                        <b><u style={{fontSize:'1.5vw', marginLeft:'12vw'}}>INGRESÁ TUS DATOS</u></b>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'28vw', marginTop:'10vh', marginLeft:'4vw'}}>    
                            <h3 style={{alignSelf:'center'}}>NOMBRE</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue } 
                        onChange={ handleInputChange } 
                        style={{height:'4vh', width:'11vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', marginLeft:'6vw', paddingLeft:'0.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'28vw', marginTop:'5vh', marginLeft:'4vw'}}>    
                            <h3 style={{alignSelf:'center'}}>EMAIL</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue2 } 
                        onChange={ handleInputChange2 } 
                        style={{height:'4vh', width:'11vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', marginLeft:'7.3vw', paddingLeft:'0.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'28vw', marginTop:'5vh', marginLeft:'4vw'}}>    
                            <h3 style={{alignSelf:'center'}}>EDAD</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue3 } 
                        onChange={ handleInputChange3 } 
                        style={{height:'4vh', width:'11vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', marginLeft:'7.4vw', paddingLeft:'0.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'28vw', marginTop:'5vh', marginLeft:'4vw'}}>    
                            <h3 style={{alignSelf:'center'}}>NACIONALIDAD</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue4 } 
                        onChange={ handleInputChange4 } 
                        style={{height:'4vh', width:'11vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', marginLeft:'2.7vw', paddingLeft:'0.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>
  
                        <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>

                       </div>
                       <Boton2  disabled={inputValue4 === ''} style={{fontSize:'2vw', width:'3vw', height:'3vw', marginLeft:'34vw', marginTop:'5vh'}} onClick={()=>cambiarContinuar2(1)}> {'>'} </Boton2>

				</ContenedorTerminos>
                :
                <ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
                    <div style={{ width:'25vw', height:'35vh'}}>
                    <h3 style={{fontSize:'1.2vw', marginLeft:'2vw', marginTop:'5vh'}}>NOMBRE:  {perfil === 0 ? 'JUANA CHISPA' : perfil === 1 ? 'ISABELLA ESPEJO': perfil === 2 ? 'CARLOS BURBUJEZ' : perfil === 3 ?'OSCAR MALABAR' : 'RENATA VALLEJOS'}</h3>
                    <h3 style={{fontSize:'1.2vw', marginLeft:'2vw', marginTop:'6vh'}} >EMAIL: {perfil === 0 ?'juanachispita@gmail.com': perfil === 1 ? 'isabellajimenez@hotmail.com' : perfil === 2 ?'carlosburbujez@gmail.com': perfil === 3 ? 'oscarmalab@gmail.com' : 'renuvallejos@gmail.com'}</h3>
                    <h3 style={{fontSize:'1.2vw', marginLeft:'2vw', marginTop:'6vh'}} >EDAD: {perfil === 0 ? '21 años' : perfil === 1 ? 'Inmortal' : perfil === 2 ?  '28 años': perfil === 3 ? '37 años' : '19 años'}</h3>
                    <h3 style={{fontSize:'1.2vw', marginLeft:'2vw', marginTop:'6vh'}} >NACIONALIDAD: {perfil === 0 ?'MEXICANA': perfil === 1 || perfil === 4 ? 'ARGENTINA' : perfil === 2 ? 'BOLIVIANO' : 'DEL MUNDO'}</h3>
                    </div>
                    <div style={{ width:'22vw', height:'20vh', border:'2px solid', marginLeft:'2vw'}}>
                        <p style={{fontSize:'1.1vw', padding:'10px'}}>
                            {
                                perfil === 0 ?
                                'Juanita Chispa, destaca por su obsesión desenfrenada por la moda y las prendas lujosas. Su guardarropa rebosa de coloridos trajes tropicales y accesorios llamativos que reflejan su amor por la elegancia extravagante.'
                                :
                                perfil === 1 ?
                                'Isabella Espejismo,se destaca no solo por su enigmática personalidad, sino también por su particular enfoque en el consumismo. Siendo una consumidora ávida, tiene una predilección por adquirir objetos que sabe que dejara de usar en meses.'
                                :
                                perfil === 2 ?
                                'Carlos Burbujez es un joven de 28 años lleno de alegría y vitalidad. Su personalidad efervescente y su amor por la diversión reflejan en cada burbujeante risa que comparte con amigos y en su enfoque creativo de la vida.'
                                :
                                perfil === 3 ?
                                'Oscar Malabar, tiene una peculiar adicción: comprar compulsivamente todo lo que ve en anuncios en la web. Su bandeja de entrada está llena de confirmaciones de compras de productos que van desde lo novedoso hasta lo ridículamente extravagante.'
                                :
                                'Renata Vallejos, a pesar de su juventud y encanto, ha ganado una reputación positiva (dentro de esta pagina) por estar involucrada en estafas. Se ha descubierto que estafa a traves de paginas web a personas, vendiendo entradas falsas para recitales. '
                            }
                        </p>
                    </div>
                    <div style={{position:'absolute', marginTop:'-55vh', marginLeft:'27vw'}}>
                        <img src={perfil === 2 || perfil === 3 ? hombreperfil : mujerperfil } style={{width:'8vw'}}></img>
                    </div>
                    <div style={{backgroundColor:'#dcdef1', width:'13vw', height:'30vh', marginLeft:'52vh', marginTop:'-35vh', border:'1px solid'}}>
                        <p style={{padding:'15px', width:'13vw',textAlign:'center', fontSize:'1vw'}}>
                        ¡Gracias por tus datos!. Estos son tus datos modificados para que tu uso en esta web sea mas optimo y todo pueda fluir mejor. Tus verdaderos datos nos aportan un granito de arena para que podamos venderlos y que esta pagina web pueda subsistir.
                        </p>
                    </div>
                    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-1vh', marginBottom:'3vh', height:'10vh',alignItems:'center', marginLeft:'24vw'}}>
									<Boton2  style={{fontSize:'2vw', width:'3vw', height:'3vw'}} onClick={() => navigate(`/enlaces`)}> {'>'} </Boton2>
						</div>
                </ContenedorTerminos>
				}

			</div>
		</div>
);
}
 
export default Derechos;

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