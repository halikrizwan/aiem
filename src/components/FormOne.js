import React from 'react'
import FormStrip from './elements/FormStrip'
import FormStripOne from './elements/FormStripOne'
import FormStripTwo from './elements/FormStripTwo'
import Table from './Table'
import Footer from './elements/Footer'

const FormOne = () => {
  return (
    <div>
      <FormStrip/>
      <FormStripOne/>
      <FormStripTwo title={"Comment 1"}/>
      <FormStripTwo title={"Comment 2"}/>
      <div className='header-green'>Voucher Details</div>
      <Table/>
      <a className='p-3'> Add another voucher details</a>
      <Footer/>
    </div>
  )
}

export default FormOne
