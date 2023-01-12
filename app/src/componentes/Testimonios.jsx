import React from 'react';
import '../estilos/test.scss';

function Testimonio(props){
    return(
    <div className='t1'>
        <img 
            className = 'img-t1' 
            src ={require(`../img/${props.imagen}.jpeg`)}
            alt='foto tomas'/>
        <div className='text-t1'>
            <p className='nombre'>
                {props.nombre}
            </p>
            <p className='cargo'>
                {props.cargo}
            </p>
            <p className='testimonio'>
                "{props.testimonio}"
            </p>
        </div>
    </div>
    );
}

export default Testimonio;