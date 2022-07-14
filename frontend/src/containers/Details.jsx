import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import {fetchPlaces} from '../reducks/places/operations'
import {getPlaces} from '../reducks/places/selectors'
import queryString from 'query-string'
import Search from '../components/common/Search';
import main from '../assets/img/main-image.png';
import glass from '../assets/img/magnifying-glass.png';
import moustache from '../assets/img/curly.svg';
import {fetchFromLocalStorage} from '../reducks/favorites/operations'
import Categorycard from '../components/common/Categorycard';


function Details() {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);
    console.log(places);
    useEffect(() => {
      dispatch(fetchFromLocalStorage());
   
      if (parsed.search !== undefined) {
        setSearch(parsed.search);
      }
      if (parsed.category !== undefined) {
        setCategory(parsed.category);
      }
    }, []);
    useEffect(() => {
      if (search != null || category != null) {
        dispatch(fetchPlaces(search, category));
      }
    }, [search, category]);
  return (
    <>
    <Header/>
   
            <h2 class="Wonder">Natural Wonders in USA</h2>
            <img src={moustache} class="moustachee" alt="" />
            <br />
            {places.map((place)=> (
              <Categorycard place = {place}/>
            ))}
    <Footer/>
      
    </>
  );
}

export default Details;
