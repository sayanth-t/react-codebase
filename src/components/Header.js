// header component
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/free-vector/sticker-template-with-delivery-man-motor-scooter_1308-76822.jpg?uid=R170678758&ga=GA1.1.282583069.1728974686&semt=ais_hybrid"
            alt="LOGO"
          />
        </div>
        <div className="nav-items-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    );
  };

 export default Header ; 
