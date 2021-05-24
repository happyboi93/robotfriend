import React from 'react'

const Card = ({name,email,id}) => {
	return (
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 w5 h6 grow'>
            <img alt='robots' src={`https:robohash.org/${id}`} />
              <div>
                 <h2>{name}</h2>
                 <p>{email}</p>
              </div>
        </div>
	);
}

export default Card;