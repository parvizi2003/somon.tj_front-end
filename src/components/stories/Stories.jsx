import React from 'react'
import './stories.css'

function Stories() {
  const storiesContent = [{
    id: '123456789',
    name: 'Qurbon',
    text: 'Спасибо за то, что вы передумали такой сайт и мы можем так легко продавать свои вещи.'
  },
  {
    id: '123456789',
    name: 'Qurbon',
    text: 'Спасибо за то, что вы передумали такой сайт и мы можем так легко продавать свои вещи.'
  },
  {
    id: '123456789',
    name: 'Qurbon',
    text: 'Моламро дар муддати кутох бо ёрии ин сайт, яъне Somon.tj фурухтам. Хазорон бор ба ташкилкунандагони хамин сайт ташаккур!!!'
  }];

  const stories = storiesContent.map(story => {
    return <li className="stories__list-item" key={story.id}>
        <div className="stories__list-user">
            {story.name}
        </div>
        <div className="stories__list-text">
            {story.text + ''}
        </div>
    </li>
  })

  return <section className="stories">
    <div className="container">
        <h2 className="stories__title">Отзывы наших пользователей</h2>
        <ul className="stories__list">
            {stories}
        </ul>
    </div>
  </section>
}

export default Stories;