import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const Home = () => {
  return (  
    <>
       <div className={styles.background}>
          <div className= {styles.swapContainerFlexColumn}>
             <div className= {styles.swapSettingsFlex}>
                <div className= {styles.swap}> <p>Swap</p> </div>
                <div> <img className= {styles.settingsLogo} src="settings-button.png" alt="" /></div>
             </div>

             <div className= {styles.inputFlex}>
                <input className= {styles.inputBox} value= "0.0" type= "number" />
                <button className= {styles.ethButton} type="button"> 
                <img className= {styles.ethLogo} src="eth-logo.png" /> Ethereum 
                <img className= {styles.downButton} src="down-button.png" /> 
                </button>
             </div>
             <div>
               <button className= {styles.recContainer}> <img className= {styles.recImage} src="rectangle.png" alt="" /> </button>
             </div>

             <div className= {styles.inputFlex}>
                <input className= {styles.inputBox} value= "0.0" type= "number" />
                <button className= {styles.selectButton} type="button"> Select 
                <img className= {styles.downButton} src="down-button.png" /> 
                </button>
             </div>

             <div className= {styles.connectContainer}>
               <button className= {styles.connectButton} type='button'>Connect Wallet </button>
             </div>
             

          </div>
      </div>  
      
    </>
  );
}

Home.layout = "DeFi"
export default Home;