import React from 'react'
const URL_BASE = "http://www.sciencekids.co.nz/images/pictures/flags680/"
const Flag = ({country, className}) => {
    return (
        <div>
            {/* les deux appels url des imgs sont identiques seule la version du js differe */}
                {/* <img className={className} src={'${URL_BASE}${country}.jpg'}/> */}
                <img className={className} src={URL_BASE + country + '.jpg'}/>
        </div>
    )
}

export default Flag