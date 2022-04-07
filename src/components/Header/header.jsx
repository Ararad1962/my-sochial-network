import s from'./header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
         <div>
            <img src='https://seeklogo.com/images/C/company-name-logo-743AD64FA0-seeklogo.com.png' alt='company'></img>
         </div>

      </header>
   );
}
export default Header;