
 import React from 'react'
import Cuisine from '../cuisines/Cuisine'
 import "./home.css"

 const Home = () => {
   
//  const getcuisin = function(){

//   axios.get("cuisines")
//  }
   

   return (
     <div className='home'>
      
      <div   className='start-home-img'> 
   
       <h4>Your Favourite Restaurant At Your Home</h4>

          <button>Order Now</button>
      </div>


      <div className='cuisine-div-inhome'> 
 
       <Cuisine />

      </div>

{/* .limit( 5 )
 */}
      <div className=''>


      </div>
     </div>
   )
 }
 
 export default Home