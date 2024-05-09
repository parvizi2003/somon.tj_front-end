import React from 'react'
import Search from "../search/Search";
import Categories from "../categories/Categories";
import CategoryGallery from "../category-gallery/CategoryGallery";
import Commodities from '../commodities/Commodities';
import Stories from '../stories/Stories';
import IndexText from '../popular/IndexText';

function Home() {
  return <>
    <Search />
    <Categories />
    <CategoryGallery category={'Электромобили'} href={'/transport/?vid-topliva=electric'}/>
    <CategoryGallery category={'Автомобили с коробкой-автомат'} href={'/transport/?korobka-peredach=avtomat'}/>
    <CategoryGallery category={'2х-комнатные квартиры в аренду до 1 500 с'} href={'/nedvizhimost/arenda-kvartir/2-komnatnie/?price-max=1500'}/>
    <CategoryGallery category={'Новые 2х-комнатные квартиры с ремонтом'} href={'/nedvizhimost/prodazha-kvartir/2-komnatnie/?remont=new'}/>
    <CategoryGallery category={'Двухкомнатные квартиры до 200 000 с.'} href={'/nedvizhimost/prodazha-kvartir/2-komnatnie/?price-max=200000'}/>
    <Commodities />
    <Stories />
    <IndexText />
  </>
}

export default Home;