import styles from '../styles/defi.module.css'
import NavBar from '../component/defi/NavBar';
const DeFiLayout = ({ children }) => {
    return ( 
        <>
        <div>
            <NavBar/>
        </div>
        <div>
        { children }
        </div>
        </>
     );
}
 
export default DeFiLayout;