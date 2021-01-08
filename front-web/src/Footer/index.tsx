import './styles.css';

import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
function Footer (){

    return (
        <footer className="main-footer">
            Desenvolvido por Rafael Avelino na Semana DevSuperior
            <div className="">
                <a href="https://www.linkedin.com/in/rafael-avelino-0443ab98/" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/rafaell_juniioor/" target="_new">
                <InstagramIcon/>
                </a>
            </div>
        </footer>

    )

}

export default Footer;