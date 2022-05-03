const NavBar = () => {
    return ( 
    <>
        <nav >
            <div className="headerFlex">
                <div className="logoStyle">
                <p> Logo here </p> 
                </div>

                <div class="buttonContainer"> 
                    <button className="button1" type="button"> swap </button>
                    <button className="button1" type="button"> pool </button>
                    <button className="button1" type="button"> Vote </button>
                    <button className="button1" type="button"> Charts <img class="vector" src="Vector.png" /> </button>
                </div>

                <div className="buttonContainer2"> 
                    <button className="ethButton" type="button"> <img className="ethLogo" src="eth-logo.png" /> Ethereum <img className="downButton" src="down-button.png" /> </button>
                    <button className="connectButton" type="button"> Connect Wallet </button>
                    <button className="moreButton"> ... </button>
                </div>
            </div>
        </nav>
    </>


     );
}
 
export default NavBar;