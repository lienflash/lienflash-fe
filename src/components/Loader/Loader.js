import React from 'react'

const Loader = () => {
  return (
    <section className='loader' aria-label='loading the page'>
      <i className='fa fa-5x fa-cog fa-spin' />
      <h2>Please wait while we load your dashboard</h2>
    </section>
  )
}

export default Loader