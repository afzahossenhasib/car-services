import React from 'react';
import exparts from '../../../image/repair-1.jpg'
import Expart from '../Expart/Expart';

const ourExparts= [
    {id: 1, name: 'Will Smit', img: exparts},
    {id: 2, name: 'Will Smit', img: exparts},
    {id: 3, name: 'Will Smit', img: exparts},
    {id: 4, name: 'Will Smit', img: exparts},
    {id: 5, name: 'Will Smit', img: exparts},
    {id: 6, name: 'Will Smit', img: exparts},
]

const Exparts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-primary text-center mt-5'>Our Exparts</h2>
            <div className="row">
                {
                    ourExparts.map (expart => <Expart
                        key={expart.id}
                        expart = {expart}
                    >

                    </Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;