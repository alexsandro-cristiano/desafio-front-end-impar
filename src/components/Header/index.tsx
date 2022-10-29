import styles from './Header.module.scss'
import Logo from '../../assets/logo.png'
export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo do teste ímpar" />
      </header>
    </>
  )
}
