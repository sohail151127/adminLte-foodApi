import React from 'react'

const PreLoader = () => {
  return (
    <div>
        {/* Preloader */}
<div className="preloader flex-column justify-content-center align-items-center">
  <img className="animation__shake" src={require('./img/AdminLTELogo.png')} alt={"Welcome"} height={60} width={60} />
</div>
    </div>
  )
}

export default PreLoader