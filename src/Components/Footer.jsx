import FooterStyle from '../styles/Footer.module.css';
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <footer className={`${FooterStyle.footer} ${theme === "dark" ? FooterStyle.darkTheme : ""}`}>
      <div className={FooterStyle.logo}>
        <p>Powered by</p>
        <div className={FooterStyle.containerRedes}>
          <img className={FooterStyle.imgLogo} src="../../public/images/DH.png" alt='DH-logo' />
        </div>
      </div>

      <div className={FooterStyle.redes}>
        <p>Follow us</p>
        <div className={FooterStyle.containerRedes}>
          <img className={FooterStyle.imgRedes} src="../../public/images/ico-facebook.png" alt="ico-facebook" />
          <img className={FooterStyle.imgRedes} src="../../public/images/ico-instagram.png" alt="ico-instagram" />
          <img className={FooterStyle.imgRedes} src="../../public/images/ico-tiktok.png" alt="ico-tiktok" />
          <img className={FooterStyle.imgRedes} src="../../public/images/ico-whatsapp.png" alt="ico-whatsapp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;