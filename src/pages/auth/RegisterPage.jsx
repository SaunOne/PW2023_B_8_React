import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'; // Sesuaikan dengan struktur aplikasi React Anda

const RegisterPage = () => {
  const [nama, setNama] = useState('');
  const [nim, setNIM] = useState('');
  const [email, setEmail] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [password, setPassword] = useState('');

  const checkCredentials = (event) => {
    event.preventDefault();
    // Tambahkan logika verifikasi disini sesuai kebutuhan Anda
    alert('Registrasi berhasil!');
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={checkCredentials}>
        <div className="container py-3 px-4">
          <h1 className="mb-3 text-center">Register</h1>
          <div className="row mb-2">
            <div className="col-md-8">
              <label>Nama</label>
              <input
                type="text"
                id="namaMahasiswa"
                className="form-control"
                placeholder="First Name"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label style={{ fontWeight: 'bold' }}> </label>
              <input
                type="text"
                id="NIM"
                className="form-control"
                placeholder="Last Name"
                value={nim}
                onChange={(e) => setNIM(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <label>Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="user@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label>Jenis Kelamin</label>
              <div className="mt-3">
                <input
                  type="radio"
                  id="laki"
                  name="jk"
                  value="Laki-laki"
                  checked={jenisKelamin === 'Laki-laki'}
                  onChange={() => setJenisKelamin('Laki-laki')}
                />
                <label htmlFor="laki">Laki-laki</label>
                <input
                  type="radio"
                  id="perempuan"
                  name="jk"
                  value="Perempuan"
                  checked={jenisKelamin === 'Perempuan'}
                  onChange={() => setJenisKelamin('Perempuan')}
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label>Nomor Telepon</label>
              <input
                type="number"
                id="nomorTelepon"
                className="form-control"
                placeholder="08**********"
                value={nomorTelepon}
                onChange={(e) => setNomorTelepon(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label style={{ fontWeight: 'bold' }}>Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="reset" className="btn btn-danger btn-block mb-2">
            Reset
          </button>
          <button type="submit" className="btn btn-primary btn-block mb-2">
            Submit
          </button>
          <Link to="/">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
