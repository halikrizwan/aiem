import React from 'react'

const Table = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Vou Coa</th>
          <th scope="col">Vou Subledger</th>
          <th scope="col">Bcurr Debit</th>
          <th scope="col">Bcurr Credit</th>
          <th scope="col">Narration</th>
          <th scope="col">Vou line ref</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <select className="col-8 form-sel">
              <option>Please select vou coa</option>
              <option>1</option>
              <option>2</option>
            </select>
          </th>
          <td>
            <select className="col-8 form-sel">
              <option>Please select vou subledger</option>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
        </tr>
        <tr>
          <th>
            <select className="col-8 form-sel">
              <option>Please select vou coa</option>
              <option>1</option>
              <option>2</option>
            </select>
          </th>
          <td>
            <select className="col-8 form-sel">
              <option>Please select vou subledger</option>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
        </tr>
        <tr>
          <th>
            <select className="col-8 form-sel">
              <option>Please select vou coa</option>
              <option>1</option>
              <option>2</option>
            </select>
          </th>
          <td>
            <select className="col-8 form-sel">
              <option>Please select vou subledger</option>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
        </tr>
        <tr>
          <th>
            <select className="col-8 form-sel">
              <option>Please select vou coa</option>
              <option>1</option>
              <option>2</option>
            </select>
          </th>
          <td>
            <select className="col-8 form-sel">
              <option>Please select vou subledger</option>
              <option>1</option>
              <option>2</option>
            </select>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="number" value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
          <td>
            <input type="text" class="form-sel"/>
          </td>
        </tr>
        <tr>
          <th>
           
          </th>
          <td>
            Total
          </td>
          <td>
            <input type="number" disabled value={'0.00'} class="form-sel"/>
          </td>
          <td>
            <input type="number" disabled value={'0.00'} class="form-sel"/>
          </td>
          <td>
            
          </td>
          <td>
            
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table