import React from 'react';
import imgMe from '../img/me.jpg';
import './AppBody.css'

class AppBody extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='photo'> 
                    <div>
                        <img className='foto-size' src={imgMe} /> 
                    </div>
                </div>
                <div className='profile'>
                    <h1> Давлетшин Артур Данилович</h1>
                    <div className='info phone'> Телефон: +7 996 105 99 76 </div>
                    <div className='info email'> E-mail: smiteartur01@mail.ru </div>
                </div>
            </div>
        )
    }
}

export default AppBody