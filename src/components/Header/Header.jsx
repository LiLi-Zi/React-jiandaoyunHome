import HeaderMenu from "./HeaderMenu";
import HeaderRight from './HeaderRight';
import './header.css';
function Header(){

    return (
        <div>
            <div className="header-container">
                <a href="/" className="header-item">
                    <img className="logo" src="	https://blog-assets.jiandaoyun.com/index/logo-pure.png" alt="简道云LOGO"></img>
                </a>
                <HeaderMenu/>
                <HeaderRight/>
            </div>
        </div>
    );
}
export default Header;