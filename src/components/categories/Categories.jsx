import React from 'react';
import './categories.css';
import CategoryItem from '../category-item/CategoryItem.jsx';

const CategoryItemData = [
  {
    imgUrl: 'https://cdn.somon.tj/media/re-sale.png',
    text: 'Недвижимость',
    allPostsUrl: '/nedvizhimost',
    links: [
      {title: 'Аренда комнат', url: '/nedvizhimost/arenda-komnat'},
      {title: 'Аренда квартир', url: '/nedvizhimost/arenda-kvartir'},
      {title: 'Посуточная аренда квартир, домов и дач', url: '/nedvizhimost/arenda-posutochno'},
      {title: 'Аренда домов (хавли) и дач', url: '/nedvizhimost/arenda-domov-havli-i-dach'},
      {title: 'Аренда офисов и помещений', url: '/nedvizhimost/arenda-ofisov-i-pomeschenij'},
      {title: 'Продажа квартир', url: '/nedvizhimost/prodazha-kvartir'},
      {title: 'Продажа домов (хавли) и дач', url: '/nedvizhimost/prodazha-domov-havli-i-dach'},
      {title: 'Продажа, аренда построек с земельным участком', url: '/nedvizhimost/prodazha-zemelnyih-uchastkov'},
      {title: 'Продажа, аренда гаражей и стоянок', url: '/nedvizhimost/prodazha-garazhej-i-stoyanok'},
      {title: 'Продажа офисов и помещений', url: '/nedvizhimost/prodazha-ofisov-i-pomeschenij'},
      {title: 'Продажа отдельно стоящих зданий', url: '/nedvizhimost/otdelno-stoyaschee-zdanie'},
      {title: 'Продажа, аренда вагончиков, бытовок, вагон-домов', url: '/nedvizhimost/vagonchik-bitovka'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/motors.png',
    text: 'Транспорт',
    allPostsUrl: '/transport',
    links: [
      {title: 'Легковые автомобили', url: '/transport/legkovyie-avtomobili'},
      {title: 'Мото транспорт', url: '/transport/moto-transport'},
      {title: 'Коммерческий транспорт', url: '/transport/spetstehnika-i-kommercheskij-transport'},
      {title: 'Прицепы и контейнеры', url: '/transport/pricepi-i-konteineri'},
      {title: 'Запчасти и принадлежности', url: '/transport/avtozapchasti-i-prinadlezhnosti'},
      {title: 'Автосервис и ремонт', url: '/transport/avtoservis-i-remont'},
      {title: 'Другой транспорт', url: '/transport/drugoj-transport'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/jobs.png',
    text: 'Вакансии',
    allPostsUrl: '/vakansii',
    links: [
      {title: 'Административный персонал', url: '/vakansii/cekretariat--aho'},
      {title: 'HR, кадры', url: '/vakansii/hr--kadryi'},
      {title: 'IT, телекомб компьютеры', url: '/vakansii/it--telekom--kompyuteryi'},
      {title: 'Банки, страхование, лизинг', url: '/vakansii/Banki-strahovanie-lizing'},
      {title: 'Бухгалтерия, финансы, юристы', url: '/vakansii/buhgalteriya--yuristyi--finansyi'},
      {title: 'Государственный службы', url: '/vakansii/gosudarstvennie-slujbi'},
      {title: 'Домашний персонал, обслуживание', url: '/vakansii/domashnij-personal--obsluzhivanie'},
      {title: 'Красота, фитнес, спорт', url: '/vakansii/krasota--fitnes--sport'},
      {title: 'Маркетинг, реклама, дизайн', url: '/vakansii/marketing--reklama--dizajn'},
      {title: 'Медицина, фармация', url: '/vakansii/meditsina--farmatsiya'},
      {title: 'Начало карьеры, студенты', url: '/vakansii/nachalo-kareryi--studentyi'},
      {title: 'Образование, культура, искусство', url: '/vakansii/obrazovanie--kultura--iskusstvo'},
      {title: 'Охрана, безопасность', url: '/vakansii/ohrana--bezopasnost'},
      {title: 'Продажи, розничная торговля', url: '/vakansii/prodazhi--roznichnaya-torgovlya'},
      {title: 'Производство, энергетика', url: '/vakansii/proizvodstvo--energetika'},
      {title: 'Рестораторы, повара, официанты', url: '/vakansii/restoratori--povara--ofitsianti'},
      {title: 'Рабочий персонал, разнорабочие', url: '/vakansii/rabochi-personal-raznorabochii'},
      {title: 'Руководители', url: '/rukovoditeli'},
      {title: 'СМИ, издательство', url: '/vakansii/smi--izdatelstvo'},
      {title: 'Строительство, недвижимость', url: '/vakansii/stroitelstvo-nedvizhimost'},
      {title: 'Транспорт, логистика, склад', url: '/vakansii/transport--logistika--sklad'},
      {title: 'Туризм, гостиницы, развлечения', url: '/vakansii/turizm--gostinitsi--razvlecheniya'},
      {title: 'Частичная занятость', url: '/vakansii/chastichnaya-zanyatost'},
      {title: 'Работа за рубежом', url: '/vakansii/rabota-za-rubezhom'},
      {title: 'Кадровые агентства', url: '/vakansii/kadrovie-agenstva'},
      {title: 'Другие сферы занятий', url: '/vakansii/drugie-sferi-zanyatij'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/phones.png',
    text: 'Телефоны и свазь',
    allPostsUrl: '/telefoni-i-svyaz',
    links: [
      {title: 'Мобильные телефоны', url: '/telefoni-i-svyaz/mobilniye-telefoni'},
      {title: 'Аксессуары для телефонов', url: '/telefoni-i-svyaz/aksesuari-dlya-telefonov'},
      {title: 'Ремонт и сервис телефонов', url: '/telefoni-i-svyaz/remont-i-servis-telefonov'},
      {title: 'Запчасти и инструменты для телефонов', url: '/telefoni-i-svyaz/zapchasti-i-instrumenti-dluya-telefonov'},
      {title: 'Стационарные телефоны', url: '/telefoni-i-svyaz/statsionarniye-telefoni'},
      {title: 'Другая техника связи', url: '/telefoni-i-svyaz/drugaya-tehnika-svyazi'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/kids.png',
    text: 'Детский мир',
    allPostsUrl: '/detskij-mir',
    links: [
      {title: 'Детская одежда', url: '/detskij-mir/detskaya-odezhda'},
      {title: 'Детская обувь', url: '/detskij-mir/detskaya-obuv'},
      {title: 'Детская мебель', url: '/detskij-mir/detskaya-mebel'},
      {title: 'Детские коляски, качели', url: '/detskij-mir/detskie-kolyaski--kacheli'},
      {title: 'Детские автокресла', url: '/detskij-mir/detskie-avtokresla'},
      {title: 'Детский транспорт', url: '/detskij-mir/detskiy-transport'},
      {title: 'Детские часы', url: '/detskij-mir/detskie-chasi'},
      {title: 'Игрушки', url: '/detskij-mir/igrushki'},
      {title: 'Товары для мам', url: '/detskij-mir/tovari-dlya-mam'},
      {title: 'Товары для кормления', url: '/detskij-mir/tovari-dlya-kormleniya'},
      {title: 'Товары для школьников', url: '/detskij-mir/tovari-dlya-shkolnikov'},
      {title: 'Другие детские товары', url: '/detskij-mir/drugie-detskiye-tovari'},
      {title: 'Товары для детского купания', url: '/detskij-mir/tovari-dlya-detskovo-kupaniya'},
      {title: 'Постельные принадлежности', url: '/detskij-mir/postelniye-prinadlezhnosti'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/clothes.png',
    text: 'Одежда и личные вещи',
    allPostsUrl: '/odezhda-i-obuv',
    links: [
      {title: 'Мужская одежда', url: '/odezhda-i-obuv/muzhskaya-odezhda'},
      {title: 'Женская одежда', url: '/odezhda-i-obuv/zhenskaya-odezhda'},
      {title: 'Обувь', url: '/odezhda-i-obuv/obuv'},
      {title: 'Аксессуары, шарфы, головные уборы', url: '/odezhda-i-obuv/aksessuari--sharfi--golovniye-ubori'},
      {title: 'Парфюмерия и косметика', url: '/odezhda-i-obuv/parfyumeriya-i-kosmetika'},
      {title: 'Часы и украшения', url: '/odezhda-i-obuv/chasi-i-ukrasheniya'},
      {title: 'Для свадьбы', url: '/odezhda-i-obuv/dlya-svadbi'},
      {title: 'Одежда на прокат', url: '/odezhda-i-obuv/odezhda-na-prokat'},
      {title: 'Другие товары', url: '/odezhda-i-obuv/drugie-tovari'},
      {title: 'Потери и находки', url: '/odezhda-i-obuv/poteri-i-nahodki'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/comps.png',
    text: 'Компютеры и оргтехника',
    allPostsUrl: '/kompyuteri-i-orgtehnika',
    links: [
      {title: 'Ноутбуки', url: '/kompyuteri-i-orgtehnika/noutbuki'},
      {title: 'Персональные компьютеры', url: '/kompyuteri-i-orgtehnika/personalniye-kompyuteri'},
      {title: 'Игровые приставки', url: '/kompyuteri-i-orgtehnika/igroviye-pristavki'},
      {title: 'Программы и игры', url: '/kompyuteri-i-orgtehnika/programmi-i-igri'},
      {title: 'Планшеты и букридеры', url: '/kompyuteri-i-orgtehnika/plansheti-i-bukrideri'},
      {title: 'Принтеры и сканеры', url: '/kompyuteri-i-orgtehnika/printeri-i-skaneri'},
      {title: 'Мониторы и проекторы', url: '/kompyuteri-i-orgtehnika/monitori-i-proektori'},
      {title: 'Модемы и сетевое оборудование', url: '/kompyuteri-i-orgtehnika/modemi-i-setevoe-oboroduvanie'},
      {title: 'Комплектующие и аксессуары', url: '/kompyuteri-i-orgtehnika/komplektuyushie-i-aksessuari'},
      {title: 'Ремонт', url: '/kompyuteri-i-orgtehnika/remont'},
      {title: 'Серверы', url: '/kompyuteri-i-orgtehnika/serveri'},
      {title: 'Другая техника', url: '/kompyuteri-i-orgtehnika/drugaya-tehnika'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/electro.png',
    text: 'Электроника и бытовая техника',
    allPostsUrl: '/elektronika-i-tehnika',
    links: [
      {title: 'Фото и видеокамеры', url: '/elektronika-i-tehnika/foto-i-videokameri'},
      {title: 'TV, DVD и видео', url: '/elektronika-i-tehnika/tv--dvd-i-video'},
      {title: 'Аудио и стерео', url: '/elektronika-i-tehnika/audio-i-stereo'},
      {title: 'Техника для дома и кухни', url: '/elektronika-i-tehnika/tehnika-dlya-doma-i-kuhni'},
      {title: 'Для личного ухода', url: '/elektronika-i-tehnika/dlya-lichnovo-uhoda'},
      {title: 'Принадлежности и аппараты для здоровья', url: '/elektronika-i-tehnika/prinadlezhnosti-i-apparati-dlya-zdorovya'},
      {title: 'Аксессуары и комплектующие', url: '/elektronika-i-tehnika/aksessuari-i-komplektuyushie'},
      {title: 'Электронные компоненты и радиодетали', url: '/elektronika-i-tehnika/elektronnie-komponenti-i-radiodetali'},
      {title: 'Системы видеонаблюдения, охраны, "Умный дом"', url: '/elektronika-i-tehnika/sistema-videonablyudeniya--ohrani--umniy-dom'},
      {title: 'Другая техника', url: '/elektronika-i-tehnika/drugaya-tehnika'},
      {title: 'Климатическая техника', url: '/elektronika-i-tehnika/klimaticheskaya-tehnika'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/house_.png',
    text: 'Все для дома',
    allPostsUrl: '/vse-dlya-doma',
    links: [
      {title: 'Мебель', url: '/vse-dlya-doma/mebel'},
      {title: 'Текстиль и интерьер', url: '/vse-dlya-doma/tekstil-i-interyer'},
      {title: 'Пищевые продукты', url: '/vse-dlya-doma/pisheviye-produkti'},
      {title: 'Посуда и кухонная утварь', url: '/vse-dlya-doma/posuda-i-kuhonnaya-utvar'},
      {title: 'Хозяйственный инвентарь и бытовая химия', url: '/vse-dlya-doma/hozyaystvenniy-inventar-i-ibitovaya-himiya'},
      {title: 'Сад и огород', url: '/vse-dlya-doma/sad-i-ogorod'},
      {title: 'Сейфы', url: '/vse-dlya-doma/seyfi'},
      {title: 'Канцтовары', url: '/vse-dlya-doma/kanstovari'},
      {title: 'Другие товары для дома', url: '/vse-dlya-doma/drugie-tovari-dlya-doma'},
      {title: 'Товары для праздников', url: '/vse-dlya-doma/tovari-dlya-prazdnikov'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/services.png',
    text: 'Строительство, сырье и ремонт',
    allPostsUrl: '/stroitelstvo-syrye-i-remont',
    links: [
      {title: 'Электроинструмент', url: '/stroitelstvo-syrye-i-remont/elektroinstrument'},
      {title: 'Ручной инструмент', url: '/stroitelstvo-syrye-i-remont/ruchnoy-instrument'},
      {title: 'Строительные и отделочные материалы', url: '/stroitelstvo-syrye-i-remont/stroitelniye-i-otdelochniye-materiali'},

    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/hobbies.png',
    text: 'Хобби, музыка и спорт',
    allPostsUrl: '/hobbi',
    links: [
      {title: 'Спорт и инвентарь', url: '/hobbi/sport-i-inventar'},
      {title: 'Велосипеды и принадлежности', url: '/hobbi/velosipedi-i-prinadlezhnosti'},
      {title: 'Музыкальные инструменты', url: '/hobbi/muzikalniye-instrumenti'},
      {title: 'Книги и журналы', url: '/hobbi/knigi-i-zhurnali'},
      {title: 'CD, DVD, пластинки и кассеты', url: '/hobbi/cd--dvd--plastinki-i-kasseti'},
      {title: 'Антиквариат и коллекции', url: '/hobbi/antikvariat-i-kollektsii'},
      {title: 'Билеты', url: '/hobbi/bileti'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/pets.png',
    text: 'Животные и растения',
    allPostsUrl: '/zhivotnyie-i-rasteniya',
    links: [
      {title: 'Собаки', url: '/zhivotnyie-i-rasteniya/sobaki'},
      {title: 'Кошки', url: '/zhivotnyie-i-rasteniya/koshki'},
      {title: 'Кролики', url: '/zhivotnyie-i-rasteniya/kroliki'},
      {title: 'Птицы', url: '/zhivotnyie-i-rasteniya/ptitsi'},
      {title: 'Вязка', url: '/zhivotnyie-i-rasteniya/vyazka'},
      {title: 'Садовые растения', url: '/zhivotnyie-i-rasteniya/sadoviye-rasteniya'},
      {title: 'Сельхоз животные', url: '/zhivotnyie-i-rasteniya/selhoz-zhivotnie'},
      {title: 'Аквариумные', url: '/zhivotnyie-i-rasteniya/akvariumnie'},
      {title: 'Комнатные растения', url: '/zhivotnyie-i-rasteniya/komnatnie-rasteniya'},
      {title: 'Товары для животных', url: '/zhivotnyie-i-rasteniya/tovari-dlya-zhivotnih'},
      {title: 'Другие животные', url: '/zhivotnyie-i-rasteniya/drugie-zhivotnie'},
      {title: 'Отдам даром', url: '/zhivotnyie-i-rasteniya/otdam-darom'},
      {title: 'Утерянные животные', url: '/zhivotnyie-i-rasteniya/uteryannie-zhivotnie'},
      {title: 'Корм для животных', url: '/zhivotnyie-i-rasteniya/korm-dlya-zhivotnih'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/business2.png',
    text: 'Услуги',
    allPostsUrl: '/biznes-i-uslugi',
    links: [
      {title: 'Дезинсекторы', url: '/biznes-i-uslugi/dezinsektori'},
      {title: 'Для праздников и мероприятий', url: '/biznes-i-uslugi/dlya-prazdnikov-i-meropriyatiy'},
      {title: 'Интернет и IT услуги', url: '/biznes-i-uslugi/internet-i-it-uslugi'},
      {title: 'Кулинария', url: '/biznes-i-uslugi/kulinariya'},
      {title: 'Красота', url: '/biznes-i-uslugi/krasota'},
      {title: 'Няни и сиделки', url: '/biznes-i-uslugi/nyani-i-sidelki'},
      {title: 'Перевозки и аренда транспорта', url: '/biznes-i-uslugi/perevozki-i-arenda-transporta'},
      {title: 'Прокат товаров', url: '/biznes-i-uslugi/prokat-tovarov'},
      {title: 'Рекламные услуги и полиграфия', url: '/biznes-i-uslugi/reklamnie-uslugi-i-poligrafiya'},
      {title: 'Ремонт и установка бытовой техники', url: '/biznes-i-uslugi/remont-i-ustanovka-bitovoy-tehniki'},
      {title: 'Риелторские услуги', url: '/biznes-i-uslugi/rieltorskiye-uslugi'},
      {title: 'Строительные и ремонтные услуги', url: '/biznes-i-uslugi/stroitelniye-i-remontnie-uslugi'},
      {title: 'Туризм и отдых', url: '/biznes-i-uslugi/turizm-i-otdih'},
      {title: 'Уборка и чистка', url: '/biznes-i-uslugi/uborka-i-chistka'},
      {title: 'Услуги переводчиков', url: '/biznes-i-uslugi/uslugi-perevodchika'},
      {title: 'Установка оборудования', url: '/biznes-i-uslugi/ustanovka-oboroduvaniya'},
      {title: 'Учебные курсы и обучение', url: '/biznes-i-uslugi/uchebnie-kursi-i-obuchenie'},
      {title: 'Финансы, кредиты', url: '/biznes-i-uslugi/finansi--krediti'},
      {title: 'Фото и видеосъёмка', url: '/biznes-i-uslugi/foto-i-videosyomka'},
      {title: 'Юридические услуги', url: '/biznes-i-uslugi/yuridicheskie-uslugi'},
      {title: 'Handmade и рукоделие', url: '/biznes-i-uslugi/handmade-i-rukodelie'},
      {title: 'Другие услуги', url: '/biznes-i-uslugi/drugie-uslugi'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/business.png',
    text: 'Все для бизнеса',
    allPostsUrl: '/vsyo-dlya-biznesa',
    links: [
      {title: 'Бизнес на продажу', url: '/vsyo-dlya-biznesa/biznes-na-prodazhu'},
      {title: 'Оборудование', url: '/vsyo-dlya-biznesa/oboroduvanie'},
      {title: 'Сырьё и материалы для бизнеса', url: '/vsyo-dlya-biznesa/sirye-i-materiali-dlya-biznesa'},
      {title: 'Готовый бизнес в аренду', url: '/vsyo-dlya-biznesa/gotoviy-biznes-v-arendu'},
    ]
  },
  {
    imgUrl: 'https://cdn.somon.tj/media/free.png',
    text: 'Отдам даром',
    allPostsUrl: '/otdam-darom',
    links: []
  },
]
export default function Categories() {
  const [active, setActive] = React.useState([false, false, false, false, false, false, false, false, false, false, false, false,])
  // const CategoryItems = CategoryItemData.map(((item, index) => {
  //   return <CategoryItem key={index} active={active[index]} index={index} setActive={setActive} imgUrl={item.imgUrl} text={item.text} allPostsUrl={item.allPostsUrl} links={item.links}/>
  // }))
  return <section className="categories">
    <div className="container">
        <div className="categories-wrapper">
          {/* {CategoryItems} */}
          <CategoryItem active={active[0]} setActive={setActive} index='0' imgUrl='https://cdn.somon.tj/media/re-sale.png' text='Недвижимость' allPostsUrl='/nedvizhimost' position='0px'
            links={[
              {title: 'Аренда комнат', url: '/nedvizhimost/arenda-komnat'},
              {title: 'Аренда квартир', url: '/nedvizhimost/arenda-kvartir'},
              {title: 'Посуточная аренда квартир, домов и дач', url: '/nedvizhimost/arenda-posutochno'},
              {title: 'Аренда домов (хавли) и дач', url: '/nedvizhimost/arenda-domov-havli-i-dach'},
              {title: 'Аренда офисов и помещений', url: '/nedvizhimost/arenda-ofisov-i-pomeschenij'},
              {title: 'Продажа квартир', url: '/nedvizhimost/prodazha-kvartir'},
              {title: 'Продажа домов (хавли) и дач', url: '/nedvizhimost/prodazha-domov-havli-i-dach'},
              {title: 'Продажа, аренда построек с земельным участком', url: '/nedvizhimost/prodazha-zemelnyih-uchastkov'},
              {title: 'Продажа, аренда гаражей и стоянок', url: '/nedvizhimost/prodazha-garazhej-i-stoyanok'},
              {title: 'Продажа офисов и помещений', url: '/nedvizhimost/prodazha-ofisov-i-pomeschenij'},
              {title: 'Продажа отдельно стоящих зданий', url: '/nedvizhimost/otdelno-stoyaschee-zdanie'},
              {title: 'Продажа, аренда вагончиков, бытовок, вагон-домов', url: '/nedvizhimost/vagonchik-bitovka'},
          ]}/>
          <CategoryItem active={active[1]} setActive={setActive} index='1' imgUrl='https://cdn.somon.tj/media/motors.png' text='Транспорт' allPostsUrl='/transport' position='-300px'
            links={[
              {title: 'Легковые автомобили', url: '/transport/legkovyie-avtomobili'},
              {title: 'Мото транспорт', url: '/transport/moto-transport'},
              {title: 'Коммерческий транспорт', url: '/transport/spetstehnika-i-kommercheskij-transport'},
              {title: 'Прицепы и контейнеры', url: '/transport/pricepi-i-konteineri'},
              {title: 'Запчасти и принадлежности', url: '/transport/avtozapchasti-i-prinadlezhnosti'},
              {title: 'Автосервис и ремонт', url: '/transport/avtoservis-i-remont'},
              {title: 'Другой транспорт', url: '/transport/drugoj-transport'},
          ]}/>
          <CategoryItem active={active[2]} setActive={setActive} index='2' imgUrl='https://cdn.somon.tj/media/jobs.png' text='Вакансии' allPostsUrl='/vakansii' position='-600px'
            links={[
              {title: 'Административный персонал', url: '/vakansii/cekretariat--aho'},
              {title: 'HR, кадры', url: '/vakansii/hr--kadryi'},
              {title: 'IT, телекомб компьютеры', url: '/vakansii/it--telekom--kompyuteryi'},
              {title: 'Банки, страхование, лизинг', url: '/vakansii/Banki-strahovanie-lizing'},
              {title: 'Бухгалтерия, финансы, юристы', url: '/vakansii/buhgalteriya--yuristyi--finansyi'},
              {title: 'Государственный службы', url: '/vakansii/gosudarstvennie-slujbi'},
              {title: 'Домашний персонал, обслуживание', url: '/vakansii/domashnij-personal--obsluzhivanie'},
              {title: 'Красота, фитнес, спорт', url: '/vakansii/krasota--fitnes--sport'},
              {title: 'Маркетинг, реклама, дизайн', url: '/vakansii/marketing--reklama--dizajn'},
              {title: 'Медицина, фармация', url: '/vakansii/meditsina--farmatsiya'},
              {title: 'Начало карьеры, студенты', url: '/vakansii/nachalo-kareryi--studentyi'},
              {title: 'Образование, культура, искусство', url: '/vakansii/obrazovanie--kultura--iskusstvo'},
              {title: 'Охрана, безопасность', url: '/vakansii/ohrana--bezopasnost'},
              {title: 'Продажи, розничная торговля', url: '/vakansii/prodazhi--roznichnaya-torgovlya'},
              {title: 'Производство, энергетика', url: '/vakansii/proizvodstvo--energetika'},
              {title: 'Рестораторы, повара, официанты', url: '/vakansii/restoratori--povara--ofitsianti'},
              {title: 'Рабочий персонал, разнорабочие', url: '/vakansii/rabochi-personal-raznorabochii'},
              {title: 'Руководители', url: '/rukovoditeli'},
              {title: 'СМИ, издательство', url: '/vakansii/smi--izdatelstvo'},
              {title: 'Строительство, недвижимость', url: '/vakansii/stroitelstvo-nedvizhimost'},
              {title: 'Транспорт, логистика, склад', url: '/vakansii/transport--logistika--sklad'},
              {title: 'Туризм, гостиницы, развлечения', url: '/vakansii/turizm--gostinitsi--razvlecheniya'},
              {title: 'Частичная занятость', url: '/vakansii/chastichnaya-zanyatost'},
              {title: 'Работа за рубежом', url: '/vakansii/rabota-za-rubezhom'},
              {title: 'Кадровые агентства', url: '/vakansii/kadrovie-agenstva'},
              {title: 'Другие сферы занятий', url: '/vakansii/drugie-sferi-zanyatij'},
          ]}/>
          <CategoryItem active={active[3]} setActive={setActive} index='3' imgUrl='https://cdn.somon.tj/media/phones.png' text='Телефоны и свазь' allPostsUrl='/telefoni-i-svyaz' position='-900px'
            links={[
              {title: 'Мобильные телефоны', url: '/telefoni-i-svyaz/mobilniye-telefoni'},
              {title: 'Аксессуары для телефонов', url: '/telefoni-i-svyaz/aksesuari-dlya-telefonov'},
              {title: 'Ремонт и сервис телефонов', url: '/telefoni-i-svyaz/remont-i-servis-telefonov'},
              {title: 'Запчасти и инструменты для телефонов', url: '/telefoni-i-svyaz/zapchasti-i-instrumenti-dluya-telefonov'},
              {title: 'Стационарные телефоны', url: '/telefoni-i-svyaz/statsionarniye-telefoni'},
              {title: 'Другая техника связи', url: '/telefoni-i-svyaz/drugaya-tehnika-svyazi'},
          ]}/>
          <CategoryItem active={active[4]} setActive={setActive} index='4' imgUrl='https://cdn.somon.tj/media/kids.png' text='Детский мир' allPostsUrl='/detskij-mir' position='0px'
            links={[
              {title: 'Детская одежда', url: '/detskij-mir/detskaya-odezhda'},
              {title: 'Детская обувь', url: '/detskij-mir/detskaya-obuv'},
              {title: 'Детская мебель', url: '/detskij-mir/detskaya-mebel'},
              {title: 'Детские коляски, качели', url: '/detskij-mir/detskie-kolyaski--kacheli'},
              {title: 'Детские автокресла', url: '/detskij-mir/detskie-avtokresla'},
              {title: 'Детский транспорт', url: '/detskij-mir/detskiy-transport'},
              {title: 'Детские часы', url: '/detskij-mir/detskie-chasi'},
              {title: 'Игрушки', url: '/detskij-mir/igrushki'},
              {title: 'Товары для мам', url: '/detskij-mir/tovari-dlya-mam'},
              {title: 'Товары для кормления', url: '/detskij-mir/tovari-dlya-kormleniya'},
              {title: 'Товары для школьников', url: '/detskij-mir/tovari-dlya-shkolnikov'},
              {title: 'Другие детские товары', url: '/detskij-mir/drugie-detskiye-tovari'},
              {title: 'Товары для детского купания', url: '/detskij-mir/tovari-dlya-detskovo-kupaniya'},
              {title: 'Постельные принадлежности', url: '/detskij-mir/postelniye-prinadlezhnosti'},
          ]}/>
          <CategoryItem active={active[5]} setActive={setActive} index='5' imgUrl='https://cdn.somon.tj/media/clothes.png' text='Одежда и личные вещи' allPostsUrl='/odezhda-i-obuv' position='-300px'
            links={[
              {title: 'Мужская одежда', url: '/odezhda-i-obuv/muzhskaya-odezhda'},
              {title: 'Женская одежда', url: '/odezhda-i-obuv/zhenskaya-odezhda'},
              {title: 'Обувь', url: '/odezhda-i-obuv/obuv'},
              {title: 'Аксессуары, шарфы, головные уборы', url: '/odezhda-i-obuv/aksessuari--sharfi--golovniye-ubori'},
              {title: 'Парфюмерия и косметика', url: '/odezhda-i-obuv/parfyumeriya-i-kosmetika'},
              {title: 'Часы и украшения', url: '/odezhda-i-obuv/chasi-i-ukrasheniya'},
              {title: 'Для свадьбы', url: '/odezhda-i-obuv/dlya-svadbi'},
              {title: 'Одежда на прокат', url: '/odezhda-i-obuv/odezhda-na-prokat'},
              {title: 'Другие товары', url: '/odezhda-i-obuv/drugie-tovari'},
              {title: 'Потери и находки', url: '/odezhda-i-obuv/poteri-i-nahodki'},
          ]}/>
          <CategoryItem active={active[6]} setActive={setActive} index='6' imgUrl='https://cdn.somon.tj/media/comps.png' text='Компютеры и оргтехника' allPostsUrl='/kompyuteri-i-orgtehnika' position='-600px'
            links={[
            {title: 'Ноутбуки', url: '/kompyuteri-i-orgtehnika/noutbuki'},
            {title: 'Персональные компьютеры', url: '/kompyuteri-i-orgtehnika/personalniye-kompyuteri'},
            {title: 'Игровые приставки', url: '/kompyuteri-i-orgtehnika/igroviye-pristavki'},
            {title: 'Программы и игры', url: '/kompyuteri-i-orgtehnika/programmi-i-igri'},
            {title: 'Планшеты и букридеры', url: '/kompyuteri-i-orgtehnika/plansheti-i-bukrideri'},
            {title: 'Принтеры и сканеры', url: '/kompyuteri-i-orgtehnika/printeri-i-skaneri'},
            {title: 'Мониторы и проекторы', url: '/kompyuteri-i-orgtehnika/monitori-i-proektori'},
            {title: 'Модемы и сетевое оборудование', url: '/kompyuteri-i-orgtehnika/modemi-i-setevoe-oboroduvanie'},
            {title: 'Комплектующие и аксессуары', url: '/kompyuteri-i-orgtehnika/komplektuyushie-i-aksessuari'},
            {title: 'Ремонт', url: '/kompyuteri-i-orgtehnika/remont'},
            {title: 'Серверы', url: '/kompyuteri-i-orgtehnika/serveri'},
            {title: 'Другая техника', url: '/kompyuteri-i-orgtehnika/drugaya-tehnika'},
          ]}/>
          <CategoryItem active={active[7]} setActive={setActive} index='7' imgUrl='https://cdn.somon.tj/media/electro.png' text='Электроника и бытовая техника' allPostsUrl='/elektronika-i-tehnika' position='-900px'
            links={[
              {title: 'Фото и видеокамеры', url: '/elektronika-i-tehnika/foto-i-videokameri'},
              {title: 'TV, DVD и видео', url: '/elektronika-i-tehnika/tv--dvd-i-video'},
              {title: 'Аудио и стерео', url: '/elektronika-i-tehnika/audio-i-stereo'},
              {title: 'Техника для дома и кухни', url: '/elektronika-i-tehnika/tehnika-dlya-doma-i-kuhni'},
              {title: 'Для личного ухода', url: '/elektronika-i-tehnika/dlya-lichnovo-uhoda'},
              {title: 'Принадлежности и аппараты для здоровья', url: '/elektronika-i-tehnika/prinadlezhnosti-i-apparati-dlya-zdorovya'},
              {title: 'Аксессуары и комплектующие', url: '/elektronika-i-tehnika/aksessuari-i-komplektuyushie'},
              {title: 'Электронные компоненты и радиодетали', url: '/elektronika-i-tehnika/elektronnie-komponenti-i-radiodetali'},
              {title: 'Системы видеонаблюдения, охраны, "Умный дом"', url: '/elektronika-i-tehnika/sistema-videonablyudeniya--ohrani--umniy-dom'},
              {title: 'Другая техника', url: '/elektronika-i-tehnika/drugaya-tehnika'},
              {title: 'Климатическая техника', url: '/elektronika-i-tehnika/klimaticheskaya-tehnika'},
          ]}/>
          <CategoryItem active={active[8]} setActive={setActive} index='8' imgUrl='https://cdn.somon.tj/media/house_.png' text='Все для дома' allPostsUrl='/vse-dlya-doma' position='0px'
            links={[
              {title: 'Мебель', url: '/vse-dlya-doma/mebel'},
              {title: 'Текстиль и интерьер', url: '/vse-dlya-doma/tekstil-i-interyer'},
              {title: 'Пищевые продукты', url: '/vse-dlya-doma/pisheviye-produkti'},
              {title: 'Посуда и кухонная утварь', url: '/vse-dlya-doma/posuda-i-kuhonnaya-utvar'},
              {title: 'Хозяйственный инвентарь и бытовая химия', url: '/vse-dlya-doma/hozyaystvenniy-inventar-i-ibitovaya-himiya'},
              {title: 'Сад и огород', url: '/vse-dlya-doma/sad-i-ogorod'},
              {title: 'Сейфы', url: '/vse-dlya-doma/seyfi'},
              {title: 'Канцтовары', url: '/vse-dlya-doma/kanstovari'},
              {title: 'Другие товары для дома', url: '/vse-dlya-doma/drugie-tovari-dlya-doma'},
              {title: 'Товары для праздников', url: '/vse-dlya-doma/tovari-dlya-prazdnikov'},
          ]}/>
          <CategoryItem active={active[9]} setActive={setActive} index='9' imgUrl='https://cdn.somon.tj/media/services.png' text='Строительство, сырье и ремонт' allPostsUrl='/stroitelstvo-syrye-i-remont' position='-300px'
            links={[
              {title: 'Электроинструмент', url: '/stroitelstvo-syrye-i-remont/elektroinstrument'},
              {title: 'Ручной инструмент', url: '/stroitelstvo-syrye-i-remont/ruchnoy-instrument'},
              {title: 'Строительные и отделочные материалы', url: '/stroitelstvo-syrye-i-remont/stroitelniye-i-otdelochniye-materiali'},
          ]}/>
          <CategoryItem active={active[10]} setActive={setActive} index='10' imgUrl='https://cdn.somon.tj/media/hobbies.png' text='Хобби, музыка и спорт' allPostsUrl='/hobbi' position='-600px'
            links={[
              {title: 'Спорт и инвентарь', url: '/hobbi/sport-i-inventar'},
              {title: 'Велосипеды и принадлежности', url: '/hobbi/velosipedi-i-prinadlezhnosti'},
              {title: 'Музыкальные инструменты', url: '/hobbi/muzikalniye-instrumenti'},
              {title: 'Книги и журналы', url: '/hobbi/knigi-i-zhurnali'},
              {title: 'CD, DVD, пластинки и кассеты', url: '/hobbi/cd--dvd--plastinki-i-kasseti'},
              {title: 'Антиквариат и коллекции', url: '/hobbi/antikvariat-i-kollektsii'},
              {title: 'Билеты', url: '/hobbi/bileti'},
          ]}/>
          <CategoryItem active={active[11]} setActive={setActive} index='11' imgUrl='https://cdn.somon.tj/media/pets.png' text='Животные и растения' allPostsUrl='/zhivotnyie-i-rasteniya' position='-900px'
            links={[
              {title: 'Собаки', url: '/zhivotnyie-i-rasteniya/sobaki'},
              {title: 'Кошки', url: '/zhivotnyie-i-rasteniya/koshki'},
              {title: 'Кролики', url: '/zhivotnyie-i-rasteniya/kroliki'},
              {title: 'Птицы', url: '/zhivotnyie-i-rasteniya/ptitsi'},
              {title: 'Вязка', url: '/zhivotnyie-i-rasteniya/vyazka'},
              {title: 'Садовые растения', url: '/zhivotnyie-i-rasteniya/sadoviye-rasteniya'},
              {title: 'Сельхоз животные', url: '/zhivotnyie-i-rasteniya/selhoz-zhivotnie'},
              {title: 'Аквариумные', url: '/zhivotnyie-i-rasteniya/akvariumnie'},
              {title: 'Комнатные растения', url: '/zhivotnyie-i-rasteniya/komnatnie-rasteniya'},
              {title: 'Товары для животных', url: '/zhivotnyie-i-rasteniya/tovari-dlya-zhivotnih'},
              {title: 'Другие животные', url: '/zhivotnyie-i-rasteniya/drugie-zhivotnie'},
              {title: 'Отдам даром', url: '/zhivotnyie-i-rasteniya/otdam-darom'},
              {title: 'Утерянные животные', url: '/zhivotnyie-i-rasteniya/uteryannie-zhivotnie'},
              {title: 'Корм для животных', url: '/zhivotnyie-i-rasteniya/korm-dlya-zhivotnih'},
          ]}/>
          <CategoryItem active={active[12]} setActive={setActive} index='12' imgUrl='https://cdn.somon.tj/media/business2.png' text='Услуги' allPostsUrl='/biznes-i-uslugi' position='0px'
            links={[
              {title: 'Дезинсекторы', url: '/biznes-i-uslugi/dezinsektori'},
              {title: 'Для праздников и мероприятий', url: '/biznes-i-uslugi/dlya-prazdnikov-i-meropriyatiy'},
              {title: 'Интернет и IT услуги', url: '/biznes-i-uslugi/internet-i-it-uslugi'},
              {title: 'Кулинария', url: '/biznes-i-uslugi/kulinariya'},
              {title: 'Красота', url: '/biznes-i-uslugi/krasota'},
              {title: 'Няни и сиделки', url: '/biznes-i-uslugi/nyani-i-sidelki'},
              {title: 'Перевозки и аренда транспорта', url: '/biznes-i-uslugi/perevozki-i-arenda-transporta'},
              {title: 'Прокат товаров', url: '/biznes-i-uslugi/prokat-tovarov'},
              {title: 'Рекламные услуги и полиграфия', url: '/biznes-i-uslugi/reklamnie-uslugi-i-poligrafiya'},
              {title: 'Ремонт и установка бытовой техники', url: '/biznes-i-uslugi/remont-i-ustanovka-bitovoy-tehniki'},
              {title: 'Риелторские услуги', url: '/biznes-i-uslugi/rieltorskiye-uslugi'},
              {title: 'Строительные и ремонтные услуги', url: '/biznes-i-uslugi/stroitelniye-i-remontnie-uslugi'},
              {title: 'Туризм и отдых', url: '/biznes-i-uslugi/turizm-i-otdih'},
              {title: 'Уборка и чистка', url: '/biznes-i-uslugi/uborka-i-chistka'},
              {title: 'Услуги переводчиков', url: '/biznes-i-uslugi/uslugi-perevodchika'},
              {title: 'Установка оборудования', url: '/biznes-i-uslugi/ustanovka-oboroduvaniya'},
              {title: 'Учебные курсы и обучение', url: '/biznes-i-uslugi/uchebnie-kursi-i-obuchenie'},
              {title: 'Финансы, кредиты', url: '/biznes-i-uslugi/finansi--krediti'},
              {title: 'Фото и видеосъёмка', url: '/biznes-i-uslugi/foto-i-videosyomka'},
              {title: 'Юридические услуги', url: '/biznes-i-uslugi/yuridicheskie-uslugi'},
              {title: 'Handmade и рукоделие', url: '/biznes-i-uslugi/handmade-i-rukodelie'},
              {title: 'Другие услуги', url: '/biznes-i-uslugi/drugie-uslugi'},
          ]}/>
          <CategoryItem active={active[13]} setActive={setActive} index='13' imgUrl='https://cdn.somon.tj/media/business.png' text='Все для бизнеса' allPostsUrl='/vsyo-dlya-biznesa' position='-300px'
            links={[
              {title: 'Бизнес на продажу', url: '/vsyo-dlya-biznesa/biznes-na-prodazhu'},
              {title: 'Оборудование', url: '/vsyo-dlya-biznesa/oboroduvanie'},
              {title: 'Сырьё и материалы для бизнеса', url: '/vsyo-dlya-biznesa/sirye-i-materiali-dlya-biznesa'},
              {title: 'Готовый бизнес в аренду', url: '/vsyo-dlya-biznesa/gotoviy-biznes-v-arendu'},
          ]}/>
          <CategoryItem active={active[14]} setActive={setActive} index='14' imgUrl='https://cdn.somon.tj/media/free.png' text='Отдам даром' allPostsUrl='/otdam-darom' position='-600px' links={[]}/> 
        </div>
    </div>
  </section>
}
