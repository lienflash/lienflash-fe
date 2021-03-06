import React from 'react'

const Loader = () => {
  return (
    <section className='loader' aria-label='loading the page'>
      <i className='fa fa-5x fa-cog fa-spin' />
      <h2>Loading... Please wait</h2>
    </section>
  )
}

export default Loader