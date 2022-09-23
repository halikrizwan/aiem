import React from 'react'

const FormStripTwo = ({title}) => {
  return (
    <div>
      <div className="navbar bg-greenL">
        <div className='col-12 p-2'>
          <div class="row">
            <div class="col-8">
              <label className="col-2">{title}</label>
              <input type="text" class="form-inp col-10"/>
            </div>
            <div class="col-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormStripTwo
