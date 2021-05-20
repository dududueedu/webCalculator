import logo from '../assets/calc.png'

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-logo">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="40" height="40" />
                </a>
            </div>
        </nav>
    );
}

export default Nav;