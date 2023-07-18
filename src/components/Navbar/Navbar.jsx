import { Fragment, useState } from "react"
import MobileMenuOpen from '../../assets/images/icon-hamburger.svg'
import { useMediaQuery } from "react-responsive"
import mobileMenuClose from '../../assets/images/icon-close.svg'
import style from './Navbar.module.css'
const Navbar = () =>{
    const isMobile = useMediaQuery({
        query: '(max-width:800px)'
    })
    const [isOpen,setIsOpen] = useState(false)
    const mobileMenuChangeHandler = () =>{
        setIsOpen(prev=>!prev)
    }
    return (
        <Fragment>
          {!isMobile && <div className={style.Desktop__Navbar}>
            {/* navigation  */}
            <div className={style.Desktop_Logo}>
            <p role="logo">room</p>
            </div>
            <ul>
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">shop</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
            </ul>
        </div>}
        {isMobile && <div className={style.Mobile__Navbar}>
            {/* navigation  */}
            <div className={`${style.Mobile__Menu} ${isOpen ? style.Hide : style.Show}`}>
                <div>
                    <img src={MobileMenuOpen} alt="" onClick={mobileMenuChangeHandler}/>
                </div>
                <div className={style.Mobile__Menu__Name}>
                    <p role="logo">room</p>
                </div>
            </div>
            <ul className={`${style.Mobile__Menu_Opened} ${isOpen ? style.Show : style.Hide}`}>
            <li>
                <img src={mobileMenuClose} alt="menu close button" onClick={mobileMenuChangeHandler} />
            </li>
            <li>
                <a href="#">home</a>
            </li>
            <li>
                <a href="#">shop</a>
            </li>
            <li>
                <a href="#">about</a>
            </li>
            <li>
                <a href="#">contact</a>
            </li>
            </ul>
        </div>}
      </Fragment>
    )
}
export default Navbar