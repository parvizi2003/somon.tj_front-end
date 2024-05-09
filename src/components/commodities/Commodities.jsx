import React from 'react'
import './commodities.css'
import image from '../../images/car.webp'

function Commodities() {
    
    const cardsContent = [
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
        {
            id: '123456789',
            imgUrl: [image, ''][0],
            price: '201 000',
            desc: 'Neta U, 2023',
            photos_count: '1'
        },
    ];
    
    const cards = cardsContent.map(card => {
        return <a href={`/adv/?id=${card.id}`} className='card' key={card.id}>
            <div className='card_img_wrapper'>
                <div className='icon_wrapper'>
                    <div className='camera_icon'>
                        <p>{card.photos_count}</p>
                    </div>
                </div>
                <img src={card.imgUrl} className='card_img' />
            </div>
            <h3 className='card_price'>{card.price + ' c.'}</h3>
            <p className='card_desc'>{card.desc}</p>
        </a>
    })

    return <section className="commodities">
        <div className="container">
            <h2 className="title">Новые объявления</h2>
            <div className="commodities_cards">
                {cards}
            </div>
            <a href="/search" className='all-announcement'>Все объявления</a>
        </div>
        <div className="single-border"></div>
    </section>
}

export default Commodities;