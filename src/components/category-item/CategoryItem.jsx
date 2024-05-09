import React from 'react'
import './categoryItem.css'
import SubCategory from '../sub-category/SubCategory'

export default function CategoryItem({ active, setActive, index, imgUrl, text, allPostsUrl, links, position }) {
  const [marginBottom, setMarginBottom] = React.useState();
  function handleClick(event) {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(false);
    }
    if (!active) {
      arr[index] = true
    }
    setActive(arr);  
  }
  return <>
    {(links.length === 0) ? 
      (<a href={allPostsUrl} className="category-item">
        <div className="category-item-img-wrapper">
          <img src={imgUrl} alt={String(imgUrl)} className='category-item-img'/>
        </div>
        <p className='category-item-text'>{text}</p>
      </a>) : 
      (<div className={"category-item " + (active ? 'active' : '')} style={active ? {marginBottom: marginBottom} : {marginBottom: '0px'} } onClick={(event) => handleClick(event)}>
        <div className="category-item-img-wrapper">
          <img src={imgUrl} alt={String(imgUrl)} className='category-item-img'/>
        </div>
        <p className='category-item-text'>{text}</p>
        {active ? <SubCategory allPostsUrl={allPostsUrl} links={links} index={index} position={position} setMarginBottom={setMarginBottom}/> : ''}
      </div>)
    }
    
  </>
}
