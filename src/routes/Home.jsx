import contentimg from '../assets/img/content-img.jpg'
import logo from '../assets/img/W..svg';
import { Link } from "react-router-dom";
import '../App.css'
import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/f2.png'
import f3 from '../assets/img/f3.png'
import hambrg from '../assets/img/hamburger.svg'
import close from '../assets/img/close.svg'
import { useState } from 'react';


export default function Home() {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <img src={logo} alt="" />
                    <div className="h-links orangehover">
                        <Link to="/">Anasayfa</Link>
                        <Link to="/new">Haber</Link>
                        <Link to="/popular">Popüler</Link>
                        <Link to="/trend">Trend</Link>
                        <Link to="/categories">Kategoriler</Link>
                    </div>
                    <div className="mobile-header">
                        <a href="#"><img src={hambrg} alt="" onClick={handleClick}/></a>
                    
                        {isActive && 

                            <div className="mobile-menu">
                                
                                <ul>
                                    <li><Link to="/">Anasayfa</Link></li>
                                    <li><Link to="/new">Haber</Link></li>
                                    <li><Link to="/popular">Popüler</Link></li>
                                    <li><Link to="/trend">Trend</Link></li>
                                    <li><Link to="/categories">Kategoriler</Link></li>
                                </ul>
                                <a href="#"><img src={close} alt="" onClick={handleClick}/></a>
                            </div> 
                        }
                    </div> 
                </div>
                <div className="content">
                    <div className="right-sc">
                        <img src={contentimg} alt="" />
                        <div className="r-title">
                            <h1>Web 3.0'ın Parlak Geleceği?</h1>
                            <div className="r-btn">
                                <p>Platformların gücünü tekrar insanların eline verme iddiasında olan webin bir sonraki evrimine dalıyoruz. Peki gerçekten vaadini yerine getiriyor mu?</p>
                                <Link to={"/"}>DEVAMINI OKU</Link>
                            </div>
                        </div>
                    </div>
                    <div className="left-sc">
                        <div className="l-title mb20">
                            <h1>Yeni</h1>
                        </div>
                        <div className="left-one mb20">
                            <Link to={"/"}>Hidrojen ve Elektrikli Arabalar</Link>
                            <p>Hidrojen yakıtlı arabalar elektrikli araçları yakalayabilecek mi?</p>
                            <hr />
                        </div>
                        <div className="left-one mb20">
                            <Link to={"/"}>Yapay Zeka Sanatının Dezavantajları</Link>
                            <p>İsteğe bağlı yapay zeka görüntü oluşturmanın olası olumsuz etkileri nelerdir?</p>
                            <hr />
                        </div>
                        <div className="left-one mb20">
                            <Link to={"/"}>Risk Sermayesi Finansmanı Kuruyor mu?</Link>
                            <p>Risk sermayesi firmalarının özel finansmanı yıldan yıla %50 azaldı. Bunun ne anlama geldiğine bir göz atıyoruz.</p>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="top-one">
                        <img src={f1} alt="" />
                        <div className="n-content orangehover">
                            <h1>01</h1>
                            <Link to={"/"}>Retro Bilgisayarlar Yeniden Canlandırılıyor</Link>
                            <p>Eski bilgisayarlara modern yükseltmeler yapıldığında ne olur?</p>
                        </div>
                    </div>
                    <div className="top-one">
                        <img src={f2} alt="" />
                        <div className="n-content orangehover">
                            <h1>02</h1>
                            <Link to={"/"}>2022'nin En İyi 10 Dizüstü Bilgisayarı</Link>
                            <p>Çeşitli ihtiyaçlar ve bütçeler için en iyi seçimlerimiz.</p>
                        </div>
                    </div>
                    <div className="top-one">
                        <img src={f3} alt="" />
                        <div className="n-content orangehover">
                            <h1>04</h1>
                            <Link to={"/"}>Oyunun Büyümesi</Link>
                            <p>Pandemi nasıl yeni fırsatlar yarattı?</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}