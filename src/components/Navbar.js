import Logo from '../images/ttfvlogo.png';


const Navbar = () => {

    // const slogan = 'Family business serving delicious aromatic Thai food since 1995'
 
    return (
        
                <nav className="navbar">
                    <img src={Logo} alt='The Thai Food Van Logo' className='navbar-logo' />
                    {/* <h4 className="slogan">{slogan}</h4> */}
                    <div className="links">
                        <a href="/" className="link-name">Home</a>
                        <a href="/bookus" className="link-name" id='bookUs'>Book us</a>
                        <a href="/about" className="link-name">About</a>
                        <a href="/about" className="link-name">Contact Us</a>
                        
                    </div>
                </nav>
            
    );
}

export default Navbar;