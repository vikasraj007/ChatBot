import banklogo from "./images/banklogo.jpg"
const Header = () => {
    return <div className="Headercomp">
        <div>
        <img className="BankLogoImg" alt="banklogo" src={banklogo}></img>
            <h1>Royal Bank Of India</h1>
            </div>
        <div className="listdiv">
            <ul className="licomp">
                <li>
                    sign-in  
                </li>
                <li>
                    My-profile  
                </li>
                <li>
                   logout 
                </li>
                
            </ul>
        </div>
        </div>
}

export default Header;