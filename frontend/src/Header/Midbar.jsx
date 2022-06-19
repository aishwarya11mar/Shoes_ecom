import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
/* import FeaturedProducts from '../MidSection/FeaturedProducts.jsx';
import Discountbar from '../MidSection/Discountbar.jsx'; */

import Marquee from '../Header/Marquee.jsx';
import Slider from '../Header/Slider.jsx';
import Home from '../Home/Home.jsx';
import MidSection from './MidSection.jsx';
import Deal from '../Header/Deal.jsx';
import Categories from './Categories.jsx';
import ProductCard from '../Home/ProductCard.jsx';


const MidBar = () => {
    
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <div >
            { /* <Marquee /> */}
            <Slider />

            <Box style={{ display: 'flex' }}>
                <Box style={{ width: '100vw' }}>
                    <Deal
                        timer={true}
                        title="Deal of the Day"
                    />
                </Box>
            </Box>

            <Categories />

            <Home/>
          {/*   <MidSection /> */}

            {/* <FeaturedProducts /> */}
            {/*  <Discountbar /> */}
            {/* <Deal /> */}
        </div>
    );
};

export default MidBar;





