import React from 'react'

 //creating navbar

const Navbar = ({filterItem,shopList}) => {
  return (
    <>

    <nav className="navbar">
        <div className="btn-group">
            {
                shopList.map((currElem)=>{
                    return(
                        <button 
                        className="btn-group__item" 
                        onClick={()=>filterItem(currElem)}>
                           {currElem}
                        </button>
                    );

                })
            }   
        
        </div>
     </nav>
      
    </>
  );
};

export default Navbar;
