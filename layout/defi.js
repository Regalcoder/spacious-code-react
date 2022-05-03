import styles from '../styles/defi.module.css'
import NavBar from '../component/defi/NavBar';
const DeFiLayout = ({ children }) => {
    return ( 
        <>
         <NavBar/>
        <div>
        { children }
        </div>
        </>
     );
}
 
export default DeFiLayout;