import "./modal.css";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import imgProfile from "../../assets/images/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileModal = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <div className="modalProfile">
        <div className="h-100 container-fluid d-flex flex-column justify-content-between">
          <div className="row">
            <div className="col">
              <div className="row ">
                <div className="col-3 d-flex align-items-center "  style={{height : "80px", }}>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <div className="row" style={{fontSize : "18px"}}>
                        asd
                    </div>
                    <div className="row" style={{fontSize : "13px"}}>
                        email
                    </div>
                </div>
              </div>
              <div className="row"><a onClick={() => navigate('/user/profile')}>Edit Profile</a></div>
              <div className="row"><a onClick={() => navigate('/user/wallet')}>Wallet</a></div>
              <div className="row"><a onClick={() => navigate('/ourteam')}>Our Team</a></div>
              <div className="row"><a onClick={() => navigate('/about')}>About</a></div>
            </div>
          </div>
          <div className="row"></div>
          <div className="row">
            <Button variant="danger" onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
