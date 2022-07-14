import React from 'react';

const Wonhead = () => {
    const dispatch = useDispatch();
    const [color,setColor]=useState('black')
    
    return (
    <>
    <nav>
        <div class="logo">
            <img src="img/header_logo.svg" alt=""/>
        </div>
        <div class="list-item">
            <p><a href="/" id="nick">HOME</a></p>
            <p onClick={() => dispatch(push("/wonders"))}><a >WONDERS IN USA</a></p>
            <p onClick={() => dispatch(push("/attractions"))}><a id='attr'>TOURIST ATTRACTION</a></p>
            <p onClick={() => dispatch(push("/favourites"))}><a >FAVOURITE</a></p>
        </div>
    </nav>
      
    </>
  );
}