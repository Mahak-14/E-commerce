import React, { useState } from "react";
//in order to include css in react.
import "./style.css"; 
//import api
import Shops from "./shopApi.js";
//import shoplist
import Shopslist from "./shoplist";
//import navbar
import Navbar from "./Navbar"


//to get all the unique categories // if we add a new category in future bcz of this it will automatically get or fetch.
//kept it inside square brackets to convert object to array
//in order to get pure data inside array we will use Spread Operator
const uniqueList = [
   ...new Set (
    Shops.map((currElem) => {
    return currElem.category;
})
),
"ALL",
];




//functional component
const Shop = () => {
   

    //useState or React hooks
    const [shopData, setshopData] = useState(Shops);
    //adding this array uniqueList in State Variable 
    const [shopList, setshopList] = useState(uniqueList);
    //in order to get the those items whose category matches when clicked on that section in navbar
    const filterItem = (Category) => {

        //in order to display all the elements in ALL section
        if(Category ==="ALL")
        {
            //now updated function in use state ka value will be shopData ka current value
            // ans this shopData is what we are running in loop
            setshopData(Shops);
            return;
        }




        // we are using Shops.filter () method -> Shops is our API ,it has all the cards
        const updatedList = Shops.filter((currElem)=>{
             // if  this filter argument matches with the data passed which is present in API Shops then return those elements only.
             return currElem.category===Category;

        });
        // so basically filter method wll filter the data based on category and store it in UpdatedList variable and then that same data gets added back to updated function which is setshopData
        //and whenevr the setshopData value gets updated it changes the current state variable value i.e shopData gets changed and only those elements are shown that matches the category.
        setshopData(updatedList);
        
    };
   
     return( 
     <>
    
     
     {/*nested component :passing data from  one component to  another using props  */}
     <Navbar filterItem ={filterItem} shopList={shopList} />{/*need to pass filterItem data, passing 2 props in the same component*/}
    <Shopslist shopData = {shopData}/>
    </>
     );

};
 export default Shop;