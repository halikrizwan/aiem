import React from 'react'

const FormStripOne = () => {
  return (
    <div>
      <div className="navbar bg-greenL">
        <div className='col-12 p-2'>
          <div class="row">
            <div class="col-4">
              <label className="col-4">Vou Date</label>
              <input type="date" class="form-sel col-8"/>
            </div>
            <div class="col-3">
              <label className="col-4">Vou Num</label>
              <input type="number" disabled value={0} class="form-sel"/>
            </div>
            <div class="col-3">
              <label className="col-4">Vou Hdr Ref</label>
              <input type="text" class="form-sel"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormStripOne
