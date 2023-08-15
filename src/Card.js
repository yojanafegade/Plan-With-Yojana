import React ,{useState}from "react";


function Card({id,image,info,price,name,removeTour})
{
    const[readmore,setReadmore]=useState(false)

 
    let description = readmore ? `${info}....` : `${info.substring(0, 200)}....`
   function readmoreHandler()
   {
     setReadmore(!readmore)
   }
   
     return(
        <div className="card">
            <img src={image} className="image" alt="img" />
            <div className="tour-info">
              
                 <div className="tour-details">
                     <h4 className="tour-price">₹{price}</h4>
                     <h4 className="tour-name">{name}</h4>

                 </div>
                 <div className="description">
                     {description}
                     <span className="read-more" onClick={readmoreHandler}>{readmore ? 'show less' : 'Read more'}</span>
                 </div>
             </div>
            
        
         <button className="btn-red " type="button" onClick={()=>removeTour(id)}>
            Not Intrested
         </button>

        </div>
     )
}

export default Card;