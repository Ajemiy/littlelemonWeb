import React from 'react'

const Form = () => {
  return (
    <div className=''>
        <form className="form-control" >
            <div className='form-group'>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" required className="form-control form-control-lg"/>
            </div>
            <div className='form-group'>
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time" required className="form-control form-control-lg">
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests" className="form-control form-control-lg"/>
            </div>
            <div className='form-group'>
              <label htmlFor="occasion" >Occasion</label>
              <select id="occasion" className="form-control form-control-lg">
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
            </div>
            <br></br>
            <div className='form-group'>
              <input type="submit" value="Make Your reservation" className="btn btn-warning form-control form-control-lg"/>
            </div>
            </form>
    </div>
  )
}

export default Form


