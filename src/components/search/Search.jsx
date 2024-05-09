import React from 'react'
import './search.css'

function Search() {
  let num = '123456789';  
  num = num.replace(/\B(?=(?:\d{3})*$)/g, ' ');
  return <div className="search">
    <div className="container">
        <form action="/" className='search__form'>
            <div className="inputs-wrapper">
                <input type="text" placeholder={num + ' объявлений радом'}/>
                <select name="cities" id="cities">
                    <option value="Все">Все города</option>
                    <option value="Душанбе">Душанбе</option>
                    <option value="Худжанд">Худжанд</option>
                    <option value="Абдурахмони Джоми">Абдурахмони Джоми</option>
                    <option value="Айни">Айни</option>
                    <option value="Ашт">Ашт</option>
                    <option value="Бальджуван">Бальджуван</option>
                    <option value="Бободжон Гафуров">Бободжон Гафуров</option>
                    <option value="Бохтар">Бохтар (Курган-Тюбе)</option>
                    <option value="Вандж">Вандж</option>
                    <option value="Варзоб">Варзоб</option>
                    <option value="Вахдат">Вахдат</option>
                    <option value="Вахш">Вахш</option>
                    <option value="Восе">Восе</option>
                    <option value="Гиссар">Гиссар</option>
                    <option value="Горная Матча">Горная Матча</option>
                    <option value="Гулистон">Гулистон (Кайраккум)</option>
                    <option value="Дангара">Дангара</option>
                    <option value="Дарваз">Дарваз</option>
                    <option value="Деваштич">Деваштич (Ганчи)</option>
                    <option value="Джаббор Расулов">Джаббор Расулов</option>
                    <option value="Джайхун">Джайхун (Кумсангир)</option>
                    <option value="Джаллоллидина Балхи">Джаллоллидина Балхи (Руми)</option>
                    <option value="Джами">Джами</option>
                    <option value="Дусти">Дусти (Джиликуль)</option>
                    <option value="Зафарабад">Зафарабад</option>
                    <option value="Истаравшан">Истаравшан</option>
                    <option value="Истиклол">Истиклол</option>
                    <option value="Исфара">Исфара</option>
                    <option value="Ишкашим">Ишкашим</option>
                    <option value="Кабодиён">Кабодиён</option>
                    <option value="Канибадам">Канибадам</option>
                    <option value="Куляб">Куляб</option>
                    <option value="Кушониён">Кушониён (Бохтар)</option>
                    <option value="Лахш">Лахш (Джиргиталь)</option>
                    <option value="Леваканд">Леваканд (Сарбанд)</option>
                    <option value="Матча">Матча</option>
                    <option value="Мехнатобод">Мехнатобод</option>
                    <option value="Муминабад">Муминабад</option>
                    <option value="Мургаб">Мургаб</option>
                    <option value="Носири Хусрав">Носири Хусрав</option>
                    <option value="Нурабад">Нурабад</option>
                    <option value="Нурек">Нурек</option>
                    <option value="Пенджикент">Пенджикент</option>
                    <option value="Пяндж">Пяндж</option>
                    <option value="Рашт">Рашт</option>
                    <option value="Рогун">Рогун</option>
                    <option value="Рошткала">Рошткала</option>
                    <option value="Рудаки">Рудаки</option>
                    <option value="Рушан">Рушан</option>
                    <option value="Сангвор">Сангвор (Тавильдара)</option>
                    <option value="Спитамен">Спитамен</option>
                    <option value="Таджикабад">Таджикабад</option>
                    <option value="Темурмалик">Темурмалик</option>
                    <option value="Турсунзаде">Турсунзаде</option>
                    <option value="Файзабад">Файзабад</option>
                    <option value="Фархор">Фархор</option>
                    <option value="Хамадани">Хамадани</option>
                    <option value="Ховалинг">Ховалинг</option>
                    <option value="Хорог">Хорог</option>
                    <option value="Хуросон">Хуросон</option>
                    <option value="Шамсиддин Шохин">Шамсиддин Шохин (Шуроабад)</option>
                    <option value="Шахринав">Шахринав</option>
                    <option value="Шахристон">Шахристон</option>
                    <option value="Шахритус">Шахритус</option>
                    <option value="Шугнан">Шугнан</option>
                    <option value="Яван">Яван</option>
                </select>
            </div>
            <input type="submit" value={'Найти'} className='search__form-button'/>
        </form>
    </div>
  </div>
}

export default Search;