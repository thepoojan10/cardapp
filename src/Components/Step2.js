import React from 'react';
import './Step2.css';

const Step2 = () => {
  return (
    <div className="step">
      <div>
      <ul>
  <li><a class="active">Your Profile</a></li>
  <li><a>Business Information</a></li>
  <li><a>Additional User</a></li>
  
</ul>
      </div>
      <h3>Step 2</h3>
      <h2>Business Information</h2>
      <p className='pp1'>Please, enter information about your company.</p>
      
      <div>
      <lable className='rr4'>GENERAL INFORMATION</lable>
      </div>
      <form>
      <div className='row'>
        
          <div className='column'>
          
            <label>Brand Name</label>
            <input type="text" placeholder="Brand Name" required />
          </div>
          <div className='column'>
            <label>Brand Type</label>
            <select>
              <option value="">Select Type of Your Brand</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <label>Street Address</label>
            <input type="text" placeholder="Street Address" required />
          </div>
          <div className='column'>
            <label>City</label>
            <input type="text" placeholder="City" required />
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <label>Zip Code</label>
            <input type="text" placeholder="Zip Code" required />
          </div>
          <div className='column'>
            <label>Tax ID Number</label>
            <input type="text" placeholder="Tax ID Number" required />
          </div>
        </div>
        <div className="documents">
        <lable className='rr4'>Document</lable>
        <p>Once the following documents are signed, you'll be ready to get started</p>
        <div className="document">
            <p>Electronically sign the agreement(s)</p>
            <button type="button" className="document-status">&#10003;</button>
          </div>
          <div className="document">
            <p>Non adult beverage Kroger market supplier waiver and release</p>
            <button type="button" className="document-status">X</button>
          </div>
          <lable className='rr4'>COI PDF UPLOAD</lable>
          <p>Once the following documents are signed, you'll be ready to get started</p>
          <div className="document">
            <p>Electronically sign the agreement(s)</p>
            <button type="button" className="document-status">&#10003;</button>
          </div>
          <button className="next-step-button" type="button">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
