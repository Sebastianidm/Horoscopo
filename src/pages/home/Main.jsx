import React from 'react';

const GridComponent = () => {
    const colorComun = '#c24df0';

    const signosZodiacales = [
        'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
        'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center" style={{ maxHeight: '85vh', overflowY: 'auto', margin: '20px 40px 20px' }}>
            {signosZodiacales.map((signo, index) => (
                <div key={index} className='border rounded-lg h-80' style={{ backgroundColor: colorComun }}>
                    <h1 className="text-white">{signo}</h1>
                </div>
            ))}
        </div>
    );
};

export default GridComponent;
