import "bootstrap/dist/css/bootstrap.css"
import DeleteUser from "../Delete/Delete"
import '../Header/Header.css'
import Logout from "../Logout/Logout"

const Header = ({ userInfo, setUserInfo }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top" id='nav'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#user-name">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#start-blog">Blog</a>
          </li>
          
        </ul>
        <div className='d-flex' id='link'>
          <a href='/change' className='nav-link'>Change Password</a>
          <DeleteUser userInfo={userInfo} setUserInfo={setUserInfo} />
          <Logout />
        </div>
      </nav>
    </div>
  )
};
export default Header;