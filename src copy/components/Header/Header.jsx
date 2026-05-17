import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header_nav-list">
                    <li className="header_nav-link">
                        <Link 
                            to="/"
                            className="header_nav-link-item"
                        >
                            Новости
                        </Link>
                    </li>
                    <li className="header_nav-link">
                        <Link 
                            to="/about"
                            className="header_nav-link-item"
                        >
                            О проекте
                        </Link>
                    </li>
                    <li className="header_nav-link">
                        <Link 
                            to="/contacts"
                            className="header_nav-link-item"
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
