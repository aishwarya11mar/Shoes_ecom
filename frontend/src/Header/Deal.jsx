import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { products } from '../constants/data';
import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Countdown from 'react-countdown';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 720},
        items: 2,
    },
    mobile: {
        breakpoint: { max: 720, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: "4rem",
        background: '#f8f8f8',
        padding:".6rem",
        position:'static'
    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        height: "150px",
        position:'static'
    },
    text: {
        fontSize: "14px",
        marginTop: "5px"
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: "22px",
        fontWeight: "500",
        lineHeight: '32px',
        marginRight: "25px"
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: "px",
        fontSize: "13px"
    },
    wrapper: {
        padding: '35px 15px',
        
    }

}));


const Deal = ({timer,title}) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };

    return (
        <Box className={classes.component} style={{position:"static"}}>
            <Box className={classes.deal} style={{position:"static"}}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer && <Box className={classes.timer}>
                        <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Box>
                }
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            </Box>
            <Divider  />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                
            >
                {
                    products.map(product => (
                        <Box textAlign="center" className={classes.wrapper} style={{position:"static"}}>
                            <img src={product.url} className={classes.image} />
                            <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121',position:"static" }}>{product.title.shortTitle}</Typography>
                            <Typography className={classes.text} style={{ color: 'green' ,position:"static"}}>{product.discount}</Typography>
                            <Typography className={classes.text} style={{ color: '#212121', opacity: '.6',position:"static" }}>{product.tagline}</Typography>
                        </Box>
                    ))
                }

            </Carousel>
        </Box>
    )
}

export default Deal;