import React from "react";
import "./greeting.css";
import logo2 from "../../assets/images/logo_normal.png";
import logo1 from "../../assets/images/logo01.png";

const AboutPage = () => {
  return (
    <div className="container mt-5 about-page">
      <h1 className="mb-4">About Us</h1>
      <div>
        <img className="img-logo1 mb-5" src={logo2} alt="" />
      </div>
      <p>
        Laundry Space adalah layanan laundry yang berkomitmen untuk memberikan
        pelayanan terbaik kepada pelanggan kami. Dengan pengalaman
        bertahun-tahun, kami menawarkan solusi pencucian yang efisien dan
        berkualitas tinggi.
      </p>
      <img className="mb-4 mt-4" src={logo1} alt="Laundry Service " style={{width : '300px'}} />
      <p>
        Tim profesional kami selalu siap memberikan layanan yang memenuhi
        standar tertinggi. Kami menggunakan peralatan modern dan bahan pembersih
        ramah lingkungan untuk memastikan kebersihan dan keamanan pakaian Anda.
      </p>
      <h2 className="mt-5 mb-5">Tim Kami</h2>
      <p>
        Tim kami terdiri dari profesional berpengalaman di bidang laundry. Kami
        percaya bahwa pelayanan pelanggan yang ramah dan hasil pencucian yang
        sempurna adalah kunci kesuksesan kami.
      </p>
      <p>
        Kami senang dapat melayani Anda dan berharap dapat membuat pengalaman
        pencucian Anda lebih mudah dan menyenangkan.
      </p>
    </div>
  );
};

export default AboutPage;
