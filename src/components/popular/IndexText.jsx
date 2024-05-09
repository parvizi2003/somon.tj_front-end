import React from 'react'
import './indexText.css'
function IndexText() {
    const popular = ['popular1', 'popular2', 'popular3', 'popular4', 'popular5'].join(', ');
    return <div className="indexText">
        <div className="container">
            <h3 className="indexText__title">Популярные запросы</h3>
            <div className="indexText__text">
                {popular}
            </div>
            <hr></hr>
            <p>Somon.tj – это доска объявлений в Таджикистане. Более 360 тысяч объявлений от частных лиц о продаже товаров или предоставлении услуг. Все объявления актуальны. C помощью Somon вы можете: купить или продать машину, мебель, бытовую технику, электронику, снять, купить, сдать в аренду или продать квартиру или дом, купить одежду, косметику, найти или разместить необходимую вакансию. <br /><br />
                Somon.tj – это удобно. Мы позаботились об удобстве пользователей и компьютеров, и мобильных телефонов. Здесь вы найдете то, что искали. <br /><br />
                Somon.tj – это ваша возможность бесплатно разместить объявление на интересующую тематику. Для этого нажмите на кнопку «Подать объявление», и заполните форму. <br /><br />
                Продавайте, покупайте, обменивайтесь и заказывайте услуги с Somon.tj
            </p>
        </div>
    </div>
}

export default IndexText;