import React from 'react';
import './Step1.css';

const Step1 = () => {
  return (
    <div className="step">
      <div>
      <ul>
  <li><a class="active">Your Profile</a></li>
  <li><a>Business Information</a></li>
  <li><a>Additional User</a></li>
  
</ul>
      </div>
      <h3>Step 1</h3>
      <h2>Your Profile</h2>
      <p className='pp1'>Enter the login information for your account. You will be able to create additional users after registering.</p>
      <form>
        <div className='row'>
          <div className='column'>
            <label>First Name</label>
            <input type="text" placeholder="Input First Name" required />
          </div>
          <div className='column'>
            <label>Last Name</label>
            <input type="text" placeholder="Input Last Name" required />
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <label>Email</label>
            <input type="email" placeholder="Input Email" required />
          </div>
          <div className='column'>
            <label>Phone Number</label>
            <input type="text" placeholder="Input Phone Number" required />
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className='column'>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
          </div>
        </div>
        <button className="next-step-button" type="button">Next Step</button>
      </form>
    </div>
  );
};

export default Step1;
