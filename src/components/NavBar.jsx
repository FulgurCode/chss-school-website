import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/NavBar.module.css"
import userImg from "/imgs/User-40.svg"
import msgImg from "/imgs/msg_icon.svg"
import menuButton from "/imgs/menu_button.svg"
import bellIcon from "/imgs/bell_icon.svg"

function NavBar() {
    const navigate = useNavigate()
    return (
        <div className={styles.navBar}>
            <img className={`${styles.navImg} ${styles.userImg}`} src={userImg} />
            <label className={styles.schlName}>CHSS CHATTANCHAL</label>
            <div className={styles.vl1} />
            <img className={`${styles.navImg} ${styles.msgImg}`} src={msgImg} />
            <img className={`${styles.navImg} ${styles.menuButton}`} src={menuButton} onClick={() => {
                navigate("/admin");
              }}/>
            <img className={`${styles.navImg} ${styles.bellIcon}`} src={bellIcon} />
        </div>
    )
}

export default NavBar