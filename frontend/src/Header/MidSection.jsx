import { Box, makeStyles } from '@material-ui/core';
import { imageURL, imageURL1, imageURL2 } from '../constants/data';

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: "8rem",
        marginLeft: "1rem",
        justifyContent: "space-between"
    },
    rapper: {
        display: 'flex',
        marginBottom: "30px",
        justifyContent: 'space-between',
        cursor: "pointer"
    },
    apper: {
        display: 'flex',
        marginTop: "5rem",
        marginRight: "1rem",

    }


}));

const MidSection = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <img src={image} style={{ width: '40%', borderRadius: "15px", height: "50vh", width: "40vw" }} />
                    ))
                }
                <p style={{ margin: "10vh",fontFamily: " Brush Script MT, cursive",fontWeight:"200",fontSize:"36px" }}> “You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose. You’re on your own. And you know what you know. You are the guy who’ll decide where to go.”</p>
            </Box>


            <Box className={classes.apper}>
                <p style={{ margin: "5vh" }}>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link. </p>
                {
                    imageURL2.map(image => (
                        <img src={image} style={{ width: '40%', borderRadius: "15px", height: "50vh", width: "40vw" }} />
                    ))
                }
            </Box>


            <h1 style={{
                textAlign: "center",
                fontSize: "24px",
                fontFamily: "lato-bold", margin: "30px 0 30px"
            }}>SHOP BY BRANDS</h1>

            <Box className={classes.rapper}>
                {
                    imageURL1.map(image => (
                        <img src={image} style={{ width: '5%' }} />
                    ))
                }

            </Box>

        </>
    )
}

export default MidSection;