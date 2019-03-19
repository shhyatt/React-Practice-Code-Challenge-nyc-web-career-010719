import React, { Fragment } from 'react'
import SushiContainer from '../containers/SushiContainer.js'


const Sushi = (props) => {
  console.log(props);

  return (


    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
         {
          /* Tell me if this sushi has been eaten! */
           true ?
             null
           :
           <img src={props.sushiImg} width="100%" />
         }
      </div>
      <h4 className="sushi-details">
        {props.sushiName} - ${props.sushiPrice}
      </h4>
    </div>
  )
}
export default Sushi
