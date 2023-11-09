import React, {useState, useEffect} from 'react';
import Modal from '../componentes/Modal';
import styled from 'styled-components';
import useSound from 'use-sound';
import boopSfx from '../sounds/click.mp3';
import BackVideo from '../sounds/Public.mp4';

const App = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(0);
  const [estadoModal2, cambiarEstadoModal2] = useState(0);
  const [estadoModal3, cambiarEstadoModal3] = useState(0);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [play] = useSound(boopSfx);
  

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

//   useEffect(() => {

// 	if(coords.x > 700 && coords.x < 1000 && coords.y > 300 ){
// 		cambiarEstadoModal1(1)
// 	  }if(coords.x > 1000 && coords.x < 1200 ){
// 		cambiarEstadoModal2(0)
// 	  }
// 	  if(coords.x > 300 && coords.x < 700 ){
// 		cambiarEstadoModal3(3)
// 	  }else{
// 		cambiarEstadoModal1(0)
// 		cambiarEstadoModal2(0)
// 	  }

//   }, [coords]);

  useEffect(() => {

	if(coords.x > 700 && coords.x < 1000 && coords.y > 300 ){
		cambiarEstadoModal1(1)
        cambiarEstadoModal2(0)
    }if(coords.x > 1000 && coords.x < 1500 && coords.y > 300 ){
        cambiarEstadoModal2(2)
        cambiarEstadoModal1(0)
	  }

  }, [coords]);


  



	return (
		<div style={{width:'100%', height:'100vh'}}>

<div style={{backgroundColor:'#e0dcf4', height:'100vh', width:'100vw', display:'flex', position:'absolute'}}>
<video className='VideoTag' autoPlay loop muted style={{width:'100%', height:'100%', objectFit:'cover'}}>
      <source src={BackVideo} type='video/mp4'/>
</video>
			<ContenedorTerminos style={{position:'absolute', marginLeft:'30%', marginTop:'10%'}}>
				<h1>TÉRMINOS Y CONDICIONES</h1>
				<div style={{overflowY:'scroll', height:'55%', width:'80%', alignSelf:'center', marginLeft:'10%', marginTop:'3%'}}>
				<h2 >
				Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando El sitio si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
Cookies:
El sitio web utiliza cookies para ayudar a personalizar tu experiencia en línea. Al acceder a El sitio, aceptaste utilizar las cookies necesarias.
Una cookie es un archivo de texto que un servidor de páginas web coloca en tu disco duro. Las cookies no se pueden utilizar para ejecutar programas o enviar virus a tu computadora. Las cookies se te asignan de forma exclusiva y solo un servidor web en el dominio que emitió la cookie puede leerlas.
Podemos utilizar cookies para recopilar, almacenar y rastrear información con fines estadísticos o de marketing para operar nuestro sitio web. Tienes la capacidad de aceptar o rechazar cookies opcionales. Hay algunas cookies obligatorias que son necesarias para el funcionamiento de nuestro sitio web. Estas cookies no requieren tu consentimiento ya que siempre funcionan. Ten en cuenta que al aceptar las cookies requeridas, también aceptas las cookies de terceros, que podrían usarse a través de servicios proporcionados por terceros si utilizas dichos servicios en nuestro sitio web, por ejemplo, una ventana de visualización de video proporcionada por terceros e integrada en nuestro sitio web.
Licencia:
A menos que se indique lo contrario, Elsitio y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en El sitio. Todos los derechos de propiedad intelectual son reservados. Puedes acceder desde El sitio para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
No debes:
Copiar o volver a publicar material de El sitio
Vender, alquilar o sublicenciar material de El sitio
Reproducir, duplicar o copiar material de El sitio
Redistribuir contenido de El sitio
Este acuerdo comenzará el fecha presente.
Partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e información en determinadas áreas. Elsitio no filtra, edita, publica ni revisa los comentarios antes de su presencia en el sitio web. Los comentarios no reflejan los puntos de vista ni las opiniones de Elsitio, sus agentes y/o afiliados. Los comentarios reflejan los puntos de vista y opiniones de la persona que publica. En la medida en que lo permitan las leyes aplicables, Elsitio no será responsable de los comentarios ni de ninguna responsabilidad, daños o gastos causados ​​o sufridos como resultado de cualquier uso o publicación o apariencia de comentarios en este sitio web.
Elsitio se reserva el derecho de monitorear todos los comentarios y eliminar los que puedan considerarse inapropiados, ofensivos o que incumplan estos Términos y Condiciones.
Garantizas y declaras que:
Tienes derecho a publicar comentarios en nuestro sitio web y tienes todas las licencias y consentimientos necesarios para hacerlo;
Los comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, los derechos de autor, patentes o marcas comerciales de terceros;
Los comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal de otro modo, que sea una invasión de la privacidad.
Los comentarios no se utilizarán para solicitar o promover negocios o actividades comerciales personalizadas o presentes o actividades ilegales.
Por la presente, otorgas a Elsitio una licencia no exclusiva para usar, reproducir, editar y autorizar a otros a usar, reproducir y editar cualquiera de tus comentarios en todas y cada una de las formas, formatos, o medios.
Hipervínculos a nuestro contenido:
Las siguientes organizaciones pueden vincularse a nuestro sitio web sin aprobación previa por escrito:
Agencias gubernamentales;
Motores de búsqueda;
Organizaciones de noticias;
Los distribuidores de directorios en línea pueden vincularse a nuestro sitio web de la misma manera que hacen hipervínculos a los sitios web de otras empresas que figuran en la lista; y
Empresas acreditadas en todo el sistema, excepto que soliciten organizaciones sin fines de lucro, centros comerciales de caridad y grupos de recaudación de fondos de caridad que no pueden hacer hipervínculos a nuestro sitio web.
Estas organizaciones pueden enlazar a nuestra página de inicio, a publicaciones o a otra información del sitio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos y/o servicios; y (c) encaja en el contexto del sitio de la parte vinculante.
Podemos considerar y aprobar otras solicitudes de enlaces de los siguientes tipos de organizaciones:
fuentes de información de consumidores y/o empresas comúnmente conocidas;
sitios de la comunidad .com;
asociaciones u otros grupos que representan organizaciones benéficas;
distribuidores de directorios en línea;
portales de Internet;
firmas de contabilidad, derecho y consultoría; y
instituciones educativas y asociaciones comerciales.
Aprobaremos las solicitudes de enlace de estas organizaciones si: (a) el enlace no nos haría vernos desfavorablemente a nosotros mismos ni a nuestras empresas acreditadas; (b) la organización no tiene registros negativos con nosotros; (c) el beneficio para nosotros de la visibilidad del hipervínculo compensa la ausencia de Elsitio; y (d) el enlace está en el contexto de información general de recursos.
Estas organizaciones pueden enlazar a nuestra página de inicio siempre que el enlace: (a) no sea engañoso de ninguna manera; (b) no implique falsamente patrocinio, respaldo o aprobación de la parte vinculante y sus productos o servicios; y (c) encaja en el contexto del sitio de la parte vinculante.
Si eres una de las organizaciones enumeradas en el párrafo 2 y estás interesada en vincularte a nuestro sitio web, debes informarnos enviando un correo electrónico a Elsitio. Incluye tu nombre, el nombre de tu organización, la información de contacto, así como la URL de tu sitio, una lista de las URL desde las que tienes la intención de vincular a nuestro sitio web y una lista de las URL de nuestro sitio a las que te gustaría acceder. Espera 2-3 semanas para recibir una respuesta.
Las organizaciones aprobadas pueden hacer hipervínculos a nuestro sitio web de la siguiente manera:
Mediante el uso de nuestro nombre corporativo; o
Mediante el uso del localizador uniforme de recursos al que se está vinculando; o
Usar cualquier otra descripción de nuestro sitio web al que está vinculado que tenga sentido dentro del contexto y formato del contenido en el sitio de la parte vinculante.
No se permitirá el uso del logotipo de Elsitio u otro material gráfico para vincular sin un acuerdo de licencia de marca comercial.
Responsabilidad del contenido:
No seremos responsables de ningún contenido que aparezca en tu sitio web. Aceptas protegernos y defendernos contra todas las reclamaciones que se presenten en tu sitio web. Ningún enlace(s) debe aparecer en ningún sitio web que pueda interpretarse como difamatorio, obsceno o criminal, o que infrinja, de otra manera viole o defienda la infracción u otra violación de los derechos de terceros.
Reserva de derechos:
Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web cuando se solicite. También nos reservamos el derecho de modificar estos términos y condiciones y su política de enlaces en cualquier momento. Al vincular continuamente a nuestro sitio web, aceptas estar vinculado y seguir estos términos y condiciones de vinculación.
Eliminación de enlaces de nuestro sitio web:
Si encuentras algún enlace en nuestro sitio que sea ofensivo por cualquier motivo, puedes contactarnos e informarnos en cualquier momento. Consideraremos las solicitudes para eliminar enlaces, pero no estamos obligados a hacerlo ni a responder directamente.
No nos aseguramos de que la información de este sitio web sea correcta. No garantizamos su integridad o precisión, ni prometemos asegurarnos de que el sitio web permanezca disponible o que el material en el sitio se mantenga actualizado.
Exención de responsabilidad:
En la medida máxima permitida por la ley aplicable, excluimos todas las representaciones, garantías y condiciones relacionadas con nuestro sitio web y el uso de este. Nada en este descargo de responsabilidad:
limitará o excluirá nuestra responsabilidad o la tuya por muerte o lesiones personales;
limitará o excluirá nuestra responsabilidad o la tuya por fraude o tergiversación fraudulenta;
limitará cualquiera de nuestras responsabilidades o las tuyas de cualquier manera que no esté permitida por la ley aplicable; o
excluirá cualquiera de nuestras responsabilidades o las tuyas que no puedan estar excluidas según la ley aplicable.
Las limitaciones y prohibiciones de responsabilidad establecidas en esta sección y en otras partes de este descargo de responsabilidad: (a) están sujetas al párrafo anterior; y (b) regirá todas las responsabilidades que surjan en virtud de la exención de responsabilidad, incluidas las responsabilidades que surjan en el contrato, en agravio y por incumplimiento de la obligación legal.
Siempre que el sitio web y la información y los servicios en el sitio se proporcionen de forma gratuita, no seremos responsables de ninguna pérdida o daño de cualquier naturaleza.
</h2>
				</div>


			</ContenedorTerminos>


			{
				coords.x > 700 && coords.x < 1000 && coords.y > 300 ?
					<Modal
					estado={estadoModal1}
					cambiarEstado={cambiarEstadoModal1}

					>
						<Contenido>
							<h4 style={{width:'70%', marginTop:'5%', marginLeft:'15%'}}>¿Aceptas los términos y condiciones?</h4>
							{/* <p>Reutilizable y con opciones de personalizacion</p> */}
							<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'3vh', marginBottom:'3vh'}}>
								<Boton onClick={() => (play(),cambiarEstadoModal1(0))}>No</Boton>
								<Boton2 onClick={() => (play(),cambiarEstadoModal2(estadoModal1 === 2 ? 0 : 2))}>Si</Boton2>
							</div>
						</Contenido>
					</Modal> 
				: null
			}
						{
				coords.x > 1000 && coords.x < 1500 && coords.y > 300?
					<Modal
					estado={estadoModal2}
					cambiarEstado={cambiarEstadoModal2}
                    
					>
						<Contenido>
							<h4 style={{width:'70%', marginTop:'5%', marginLeft:'15%'}}>Tu información será comercializada por terceros… ¿aceptas?</h4>
							{/* <p>Reutilizable y con opciones de personalizacion</p> */}
							<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'3vh', marginBottom:'3vh'}}>
								<Boton onClick={() => (play(),cambiarEstadoModal2(0))}>No</Boton>
								<Boton2 onClick={() => (play(),cambiarEstadoModal2(estadoModal1 === 2 ? 0 : 2))}>Si</Boton2>
							</div>
						</Contenido>
					</Modal> 
				: null
			}
						{
				coords.x > 100 ?
					<Modal
					estado={estadoModal1}
					cambiarEstado={cambiarEstadoModal1}
					>
						<Contenido>
							<h4 style={{width:'70%', marginTop:'5%', marginLeft:'15%'}}>¿Aceptas los términos y condiciones?</h4>
							{/* <p>Reutilizable y con opciones de personalizacion</p> */}
							<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', width:'25vw', marginTop:'3vh', marginBottom:'3vh'}}>
								<Boton onClick={() => (play(),cambiarEstadoModal1(0))} style={{fontSize:'16px'}}>No</Boton>
								<Boton2 onClick={() => (play(),cambiarEstadoModal2(estadoModal1 === 2 ? 0 : 2))} style={{fontSize:'16px'}}>Si</Boton2>
							</div>
						</Contenido>
					</Modal> 
				: null
			}

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