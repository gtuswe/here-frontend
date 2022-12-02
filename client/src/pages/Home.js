
import styles from './Home.module.css';
import Logo from '../images/logo.png';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

function LogoHeader() {
    return (
        <div className={styles["logo-header"]}>
            <Image src={Logo} alt="Logo" className={styles["logo"]}/>
            <h1 className={styles["header"]}>Here!</h1>
        </div>
    );
}

function Description() {
    return (
        <div>
            <h1>Enjoy to Tracking your</h1>
            <h1>Attendances</h1>
            <p className={styles["description"]}>Take your participants attendance in the twinkle of an eye, faster than your shadow</p>
        </div>
    );
}

function SignUpButton() {
    return (
        <div >
        <Link to="/register">
        <button className={styles["register"]}>Register</button>
        </Link>
        </div>
    );
}

function LoginButton() {
    return (
        <div>
        <Link to="/login"> 
        <button className={styles["login"]}>Log in</button>
        </Link>
        </div>
    );
}


const Home = () => {
    return (
        <div className={styles["home"]}>
        <div>
            <LogoHeader />
            <Description />
            <SignUpButton />
            <LoginButton />
        </div>
    </div>
);
}

export default Home;
