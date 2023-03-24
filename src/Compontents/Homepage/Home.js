
import React, {useEffect, useState} from 'react';
import Navbar from '../Shared/Navbar/Navbar';


const Home = () => {
    const [country, setCountry] = useState([]);


    useEffect (() =>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then (data =>{
        
           setCountry(data)
        })
    },[])
    return (

        <div>
            <Navbar></Navbar>
            <div className='container'>
                <h1 className='text-center text-primary mt-5'>
                    Total Countries: {country.length}
                </h1>
                <div className='row'>
                    {
                       country.length > 0?
                       country.map ((country, index) =>
                        <div key={index} className='col-md-4'>
                       <div style={{height:'300px'}} className='card mt-3'>
                           <div className='card-body'>
                               <img width={100} className='mx-auto d-block' src={country?.flags.svg} alt=''/>
                               <h5 className='card-title'>{country?.name}</h5>
                               <p className='card-text'>Capital:<span className='fw-bold'>{country?.capital}</span></p>
                               <p className='card-text'>Population: {country?.population}</p>
                           <p className='card-text'>Currencies: </p>

                           </div>
                         </div>
                       </div>
                    ):<div className="spinner-border" role="status">
                       <span className="visually-hidden">Loading...</span>
                       </div>
                
                }
            
        </div>
        </div>
        </div>
     
                       
                    
        
    );
};

export default Home;