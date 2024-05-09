import React from 'react'
import './footer.css';

function Footer() {
  const lines = '__ ___ ____'
  const [phone, setPhone] = React.useState(lines)
  return <footer className="footer">
    <div className="container">
        <div className="footer__top">
            <a href="/" className="footer__logo">
                <img src="https://somon.tj/static/images/footer/somon_logo.png?_=201215" alt="" />
            </a>
            <div className="socials">
                <a href="/"><img src="https://somon.tj/static/images/share/fb2.png" alt="" /></a>
                <a href="/"><img src="https://somon.tj/static/images/share/ok.png" alt="" /></a>
                <a href="/"><img src="https://somon.tj/static/images/share/vk.png" alt="" /></a>
                <a href="/"><img src="https://somon.tj/static/images/share/insta.png" alt="" /></a>
            </div>
            <div className="add-post-wrapper">
                <a href='/add-post' className="add-post">Подать объявление</a>
                <div className="menu-lang">
                <a href="/" className='lang-ru'>RU</a>
                <a href="/tg" className='lang-tj'>TJ</a>
                </div>
            </div>
            <div className="footer__app">
                <a href="/">
                    <img src="https://somon.tj/static/images/store/rus_google.e55e3da8d96f.png" alt="" />
                </a>
                <a href="/">
                    <img src="https://somon.tj/static/images/store/rus_apple.3c6a09095a9c.png" alt="" />
                </a>
            </div>
        </div>
        <div className="footer__main">
            <ul className="footer__list">
                <li className="footer__list-item"><a href="" style={{fontWeight: 'bold'}}>Мобильная версия</a></li>
                <li className="footer__list-item"><a href="" >Карта сайта</a></li>
                <li className="footer__list-item"><a href="" >Карта районов</a></li>
                <li className="footer__list-item"><a href="" >Оферта</a></li>
                <li className="footer__list-item"><a href="" >Правила сайта</a></li>
                <li className="footer__list-item"><a href="" >Лицензионный договор</a></li>
            </ul>
            <ul className="footer__list">
                <li className="footer__list-item"><a href="" >Безопасность</a></li>
                <li className="footer__list-item"><a href="" >Помощь</a></li>
                <li className="footer__list-item"><a href="" >Наши вакансии</a></li>
                <li className="footer__list-item"><a href="" >Прейскурант</a></li>
                <li className="footer__list-item"><a href="" >Оплата через Tcell</a></li>
                <li className="footer__list-item"><a href="" >Оплата через МегаФон-Таджикистан</a></li>
                <li className="footer__list-item"><a href="" >Оплата через Babilon-Mobile</a></li>
            </ul>
            <div className="install-app">
                <h3 className='install-app__title'>Установи приложение Somon.tj</h3>
                <p className="install-app__label">Получи ссылку на приложение по SMS</p>
                <form className="install-app__form">
                    <input type="text" className="install-app__form-input" value={phone} onKeyDown={(event) => {
                        if (event.key == 'Backspace') {
                            console.log('1')
                        } else if (event.key.length == 1 && event.key !== ' ') {
                            console.log('2')
                        }
                    }}/>
                    <input type="submit" className="install-app__form-submit" value="‣" />
                </form>
            </div>
        </div>
    </div>
  </footer>
}

export default Footer;