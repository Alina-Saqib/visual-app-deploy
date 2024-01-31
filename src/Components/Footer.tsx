import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import footerImg from "../assets/footerImage.png";
import bgImage from "../assets/bgImage.png";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const listItems = [
    "FAQs",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <Box
      sx={{
        background: "#E2B7483D",
        display: "flex",
        p: isMobile ? "2vh" : "6vh",
        backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
      }}
    >
      <Grid
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: "24%",
          width: isMobile ?"60%" :"100%",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            mt: isMobile ? 0 : 6,
          }}
        >
          <Typography
            sx={{
              color: "#754B17",
              textAlign: "center",
              fontFamily: "Times New Roman",
              fontsize: "36px",
              fontweight: 700,
              lineheight: "24px",
            }}
          >
            VISUALSTORY.AI
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <List>
            {listItems.map((item) => (
              <ListItem
                sx={{
                  color: "#754B17",
                  textAlign: "center",
                  fontFamily: "Times New Roman",
                  fontSize: isMobile ? "16px":"22px",
                  fontWeight: 400,
                  lineheight: "45px",
                  p:"8px 0"
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
        {isMobile ? null : (
          <Grid>
            {isMobile ? <></> : <img src={footerImg} width="250px" />}
          </Grid>
        )}
      </Grid>

      {isMobile ? <img src={footerImg} width="150px" /> : <></>}
    </Box>
  );
};

export default Footer;
