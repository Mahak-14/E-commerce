
import React from 'react';
// keeping the data in different component
const  ShopsList = ({shopData}) => {
    
//using map function to run the  function  for array elements in loop
   

    return (
        <>
        
           <section className="main-card--container">
            {shopData.map((currElem) => {  

                //destructuring so that we dont have to repeat  currElem  everytime
                const {id,image, name ,description,category} = currElem;
                return ( 
                
                <>
                    <div className="card-container" key={id}>{/*map method need to have a key */}
                    <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">{id}</span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-tite">{name}</h2>
                        <span className="card-description subtle">
                            {description}

                        </span>
                        <div className="crad-read">Read</div>
                        </div>

                        <img src={currElem.image} alt="images" className="card-media" />

                        <span className="card-tag subtle">Order Now</span>



                    </div>
                </div>
                </>

                );
            } ) }  
           </section>
        
        </>
    );
};

export default ShopsList;
