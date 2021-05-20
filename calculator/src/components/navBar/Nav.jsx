import logo from '../assets/calc.png'

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-logo">
                <a href="/">
                    <img src={logo} alt="" width="38" height="38" />
                </a>
            </div>
        </nav>
    );
}

export default Nav;