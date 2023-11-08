import React from "react";
import styled from "styled-components";

const Modal = ({children, estado, cambiarEstado}) => {
    console.log('estad',estado)
    return (
        <>
        {estado != 0 &&
        <Overlay estado={estado}>
            <ContenedorModal estado={estado}>
                <EncabezadoModal>
                    <h3>Ventana Emergente</h3>
                </EncabezadoModal>
                <div style={{paddingTop:'3vh', width:'14vw', marginLeft:'7vw'}}>
                {children}
                </div>

                
            </ContenedorModal>

        </Overlay>
        }
        </>
    )
}

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.3);
    padding: 40px;
    display: flex;
    align-items: ${props => props.estado === 1 ? "center" : "end"};
    zIndex: ${props => props.estado === 2 ? 100 : 10};
    justify-content: ${props => props.estado === 1 ? "center" : "end"};
`;

const ContenedorModal = styled.div`
    width: 350px;
    min-height: 100px;
    background: #dcdef1;
    position: relative;
    border-radius: 5px;
    border: 2px solid;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px


    h4 {
        font-weight: 400;
        font-size: 15px;
        color: black
    }

`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-bottom: 2px solid black;

    h3 {
        font-weight: 300;
        font-size: 16px;
        color: black
    }
`;