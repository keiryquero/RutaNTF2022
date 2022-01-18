// Vista de la pregunta inicial, ¿Tienes conocimientos en programación?
import React from 'react';
import { useNavigate } from 'react-router-dom';
const InitialTest = () => {
    const navigate = useNavigate();
    return (
        <section className='section-initial-test'>
            <div>
                <p>
                    Con este test tendrás al alcance de tu mano nuestras sugerencias para formarte como talento en el área de tecnología.
                </p>
            </div>
            <div className='question-programmer'>
                <p>
                    ¿Tienes conocimientos en programación?
                </p>
                <div className='sect-buttons'>
                    <button onClick={() => navigate('/TestProgrammer')}>
                        SI
                    </button>
                    <button onClick={() => navigate('/TestUser')}>
                        NO
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InitialTest;