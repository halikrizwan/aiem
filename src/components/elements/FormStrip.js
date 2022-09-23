import React from 'react'

const FormStrip = () => {
  return (
    <div>
      <div className="navbar bg-greenL">
        <div className='col-12 p-2'>
          <div class="row">
            <div class="col-4">
              <label className="col-4">Division</label>
              <select className="col-8 form-sel">
                <option>Head Office</option>
                <option>Head Office 1</option>
                <option>Head Office 2</option>
                <option>Head Office 3</option>
              </select>
            </div>
            <div class="col-4">
              <label className="col-4">Vou Type</label>
              <select className="col-8 form-sel">
                <option>Journal Voucher - Journal</option>
                <option>Journal Voucher - Journal 1</option>
                <option>Journal Voucher - Journal 2</option>
                <option>Journal Voucher - Journal 3</option>
              </select>
            </div>
            <div class="col-4">
              <label className="col-4">Vou Curr</label>
              <select className="col-8 form-sel">
                <option>AED</option>
                <option>INR</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FormStrip
