import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import padlockImage from '../../assets/images/padlock.png';


const ForgotPasswordPage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card text-center">
        <div className="card-header h5 text-white bg-primary">Forgot Password?</div>
        <div className="card-body px-5">
          <img src={padlockImage} alt="padlock" style={{ width: '30%', height: '30%' }} />
          <p className="card-text py-2">
            Masukkan Email, Nomor Telepon, atau Username, dan kami akan mengirimkan link untuk kembali ke akun Anda
          </p>
          <div className="form-outline">
            <input type="email" id="typeEmail" className="form-control my-3" placeholder="Email" />
          </div>
          <button className="btn btn-primary w-100">Reset password</button>
          <div className="d-flex justify-content-between mt-4">
            <a href="/">Login</a>
            <a href="/registerPage">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
