import React, {useState} from 'react';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import { useNavigate } from 'react-router-dom'
import mujerperfil from '../assets/mujerperfil.png'
import hombreperfil from '../assets/hombreperfil.png'
import reinicio from '../assets/general/reinicio.png'


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
					          <img src={reinicio}  alt='Luna' style={{width:'5vw', position:'fixed', marginLeft:'12vw',cursor: 'pointer', backgroundColor:'red', marginTop:'3vh', border:'2px solid'}} onClick={()=>(play(),navigate(`/`))} ></img>
	
				{
					continuar === 0
					?
					<ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					
					<div style={{backgroundColor:'#dcdef1', borderBottom: '2px solid',borderTopLeftRadius:'10px'}}>
						<h1 style={{marginBottom:'15px'}}>TÉRMINOS Y CONDICIONES</h1>
					</div>
					<div style={{ height:'55%', width:'120%', alignSelf:'center', marginLeft:'-6vw', marginTop:'0%',}}>
						<h1 style={{fontSize:'200%'}}><b>RESERVA DE DERECHOS</b></h1>
						<h2 style={{marginTop:'3%', width:'53vw', marginLeft:'12vw', textAlign:'center',fontSize:'150%'}}>
                        Nos reservamos el derecho a modificar o eliminar los datos ingresados, almacenarlos y utilizarlos para diversos fines. También nos reservamos el derecho a modificar estos términos y condiciones en cualquier momento.                     </h2>
						<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'6%', height:'10vh',alignItems:'center', marginLeft:'68%'}}>
									<Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => (play(),cambiarContinuar(1))}> {'>'} </Boton2>
						</div>
					</div>
				</ContenedorTerminos>
				:
                continuar2 === 0 ?
				<ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
				<div style={{marginTop:'6vh'}}>
                        <b><u style={{fontSize:'3vw', marginLeft:'17vw'}}>INGRESÁ TUS DATOS</u></b>
                        </div>
						<div style={{display:'flex', flexDirection:'row', marginTop:'13%'}}>
                        <div style={{width:'28vw', marginLeft:'4vw', justifyContent:'center', marginTop:'2%'}}>    
                            <h3 style={{alignSelf:'center', fontSize:'2.8vw'}}>Nombre:</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue } 
                        onChange={ handleInputChange } 
                        style={{height:'5vh', width:'25vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', paddingLeft:'1vw', fontSize:'1.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>

                        <div style={{width:'28vw', marginLeft:'4vw', justifyContent:'center', marginTop:'2%'}}>    
                            <h3 style={{alignSelf:'center', fontSize:'2.8vw'}}>Email:</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue2 } 
                        onChange={ handleInputChange2 } 
                        style={{height:'5vh', width:'25vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', paddingLeft:'1vw', fontSize:'1.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>
						</div>
						<div style={{display:'flex', flexDirection:'row'}}>

                        <div style={{ width:'28vw', marginTop:'5vh', marginLeft:'4vw'}}>    
                            <h3 style={{alignSelf:'center', fontSize:'2.8vw'}}>Nacionalidad:</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue4 } 
                        onChange={ handleInputChange4 } 
                        style={{height:'5vh', width:'25vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', paddingLeft:'1vw', fontSize:'1.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>

						<div style={{ width:'28vw', marginTop:'5vh', marginLeft:'4vw'}}>    
                            <h3 style={{alignSelf:'center', fontSize:'2.8vw'}}>Edad:</h3>                    
                        <input 
                        type="text" 
                        value={ inputValue3 } 
                        onChange={ handleInputChange3 } 
                        style={{height:'5vh', width:'25vw', borderRadius:'0.6vw', backgroundColor:'#dcdef1', border:'1px solid', paddingLeft:'1vw', fontSize:'1.5vw'}}

                        className="SearchbarInput"
                         />
                        </div>
						</div>
                        <div className="topping" style={{display:'flex', flexDirection:'column', marginLeft:'1vw'}}>

                       </div>
					   <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'10%', height:'10vh',alignItems:'center', marginLeft:'72%'}}>
                       	<Boton2  disabled={inputValue3 === ''} style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={()=>cambiarContinuar2(1)}> {'>'} </Boton2>
					   </div>
				</ContenedorTerminos>
                :
				<ContenedorTerminos style={{position:'absolute', marginLeft:'18%', marginTop:'12%', borderRadius:'10px', border:'3px solid', borderBottomWidth:'7px',borderRightWidth:'7px',borderBottomRightRadius:'15px',borderBottomLeftRadius:'15px'}}>
					<div style={{ width:'30vw', height:'68.6vh', marginTop:'0vh', display:'flex', flexDirection:'column', borderRight:'2px solid'}}>

					
						<div style={{position:'absolute', marginTop:'2vh', marginLeft:'7vw'}}>
							<img src={perfil === 2 || perfil === 3 ? hombreperfil : mujerperfil } style={{width:'15vw'}}></img>
						</div>
						<div style={{ width:'25vw', height:'28vh', backgroundColor:'#dcdef1', marginLeft:'2.3vw', marginTop:'25vh'}}>
							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'1vh'}}>Nombre:  </h3>
							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'0vh'}}>{perfil === 0 ? 'Juana Chispa' : perfil === 1 ? 'Isabella Espejo': perfil === 2 ? 'Carlos Burbujez' : perfil === 3 ?'Oscar Malabar' : 'Renata Vallejos'}</h3>

							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'2vh'}} >Email: </h3>
							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'0vh'}} >{perfil === 0 ?'juanachispita@gmail.com': perfil === 1 ? 'isabellajimenez@hotmail.com' : perfil === 2 ?'carlosburbujez@gmail.com': perfil === 3 ? 'oscarmalab@gmail.com' : 'renuvallejos@gmail.com'}</h3>

							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'2vh'}} >Edad: </h3>
							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'0vh'}} >{perfil === 0 ? '21 años' : perfil === 1 ? 'Inmortal' : perfil === 2 ?  '28 años': perfil === 3 ? '37 años' : '19 años'}</h3>

							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'2vh'}} >Nacionalidad: </h3>
							<h3 style={{fontSize:'1.6vw', marginLeft:'1vw', marginTop:'0vh'}} >{perfil === 0 ?'MEXICANA': perfil === 1 || perfil === 4 ? 'ARGENTINA' : perfil === 2 ? 'BOLIVIANO' : 'DEL MUNDO'}</h3>

						</div>
					</div>
					<div style={{width:'33vw', height:'68vh', marginTop:'-70vh', marginLeft:'30vw'}}>
						<div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{ width:'30vw', height:'30vh', marginLeft:'2vw', marginTop:'5vh'}}>
                        <p style={{fontSize:'1.8vw', padding:'10px', textAlign:'center'}}>
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

                    <div style={{backgroundColor:'#dcdef1', width:'23vw', height:'25vh', marginLeft:'8vh', marginTop:'-1vh', border:'1px solid'}}>
                        <p style={{padding:'12px', width:'23vw',textAlign:'center', fontSize:'1.5vw'}}>
                        ¡Gracias por tus datos!. Estos son tus datos modificados para que tu uso en esta web sea mas optimo y todo pueda fluir mejor. Tus verdaderos datos nos aportan un granito de arena para que podamos venderlos y que esta pagina web pueda subsistir.
                        </p>
                    </div>
					</div>
					</div>
					<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'-10%', height:'10vh',alignItems:'center', marginLeft:'72%'}}>
									<Boton2  style={{fontSize:'2vw', width:'6vw', height:'6vw', fontSize:'250%'}} onClick={() => navigate(`/enlaces`)}> {'>'} </Boton2>
						</div>
                </ContenedorTerminos>
				}

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