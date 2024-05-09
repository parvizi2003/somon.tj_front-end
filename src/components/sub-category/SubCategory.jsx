import React from 'react'
import './SubCategory.css'

const postsAmount = '12 456';

export default function SubCategory({ allPostsUrl, links, position, setMarginBottom}) {
    const subCategoryLinks = links.map(link => {
        return <li className="subCategory-links-item" key={link.title}>
            <a href={link.url} className="subCategory-links-link">{link.title}</a>
        </li>
    })
    React.useEffect(() => {
        const height = document.querySelector('.subCategory').clientHeight;
        setMarginBottom(height)
    })
    return (
        <div className="subCategory" style={{left: position}}>
            <a href={allPostsUrl} className="subCategory-all-posts">Показать все объявления в рубрике<span className='subCategory-all-posts-count'>({postsAmount})</span></a>
            <hr className='subCategory-hr'/>
            <ul className="subCategory-links-list">
                {subCategoryLinks}
            </ul>
        </div>
    )
};