import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  console.log(props.sushis);
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi sushiName={sushi.name}
          sushiPrice={sushi.price}
          sushiId={sushi.id}
          sushiImg={sushi.img_url}/>)}
        <MoreButton />
      </div>
    </Fragment>
  )
}
export default SushiContainer
