import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer' >
        <div className="journal__entry-picture"
             style={{
                 backgroundSize: 'cover',
                 backgroundImage: 'url(https://elrellano.com/wp-content/uploads/2020/02/elrellano.com-fondos-de-pantalla-para-tu-movil-25-img-472162-648x1024.jpg)'
             }}
        ></div>

        <div className='journal__entry-body' >
            <p className='journal__entry-title' >Un nuevo día</p>
            <p className='journal__entry-content' > Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
        </div>

    </div>
  )
}
