import React from 'react'
import './categoryGallery.css'
import image from '../../images/car.webp';

function CategoryGallery({category}) {
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
    ];
  const cards = cardsContent.map(card => {
    return <a href={`/adv/?id=${card.id}`} className='card' key={card.id}>
        <div className='card_img_wrapper'>
            <div className='icon_wrapper'>
                <div className='camera_icon'>
                    <p>{card.photos_count}</p>
                </div>
            </div>
            <img src={card.imgUrl} className='card_img' alt={String(card.imgUrl)} />
        </div>
        <h3 className='card_price'>{card.price + ' c.'}</h3>
        <p className='card_desc'>{card.desc}</p>
    </a>
  })

  return <section className='gallery'>
    <div className="container">
        <a href='/' className='title'>{category}</a>
        <div className='gallery-cards'>
            {cards}
        </div>
    </div>
  </section>
}

export default CategoryGallery;