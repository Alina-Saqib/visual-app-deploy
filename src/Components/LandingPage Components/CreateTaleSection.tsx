import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import CustomizeButton from "../CustomizeButton";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const CreateTaleSection = () => {
  const mediumScreen = useMediaQuery(
    "(min-width:1201px) and (max-width:1512px)"
  );
  const gridItems = [
    {
      image: image1,
      title: "Character Creation",
      description:
        "Start by defining the stories hero (age, hair type, eye color etc.), EnchantedPages.AI then brings them to life.",
    },
    {
      image: image2,
      title: "Story Prompt",
      description:
        "Provide a spark of inspiration with your story prompt. A shorter prompt lets our AI surprise you with its creativity, while a detailed one gives you greater control over the narrative's direction. From epic adventures to educational journeys, the possibilities are endless. Example: Harry loves space, he becomes the world’s youngest astronaut ",
    },
    {
      image: image3,
      title: "Visual Magic",
      description:
        "Watch as our AI crafts a unique, beautifully illustrated tale around your child, ready to be explored together.",
    },
  ];
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? "20px" : mediumScreen ? "32px" : "48px",
          lineHeight: isMobile ? "30px" : "45px",
          pt:5,
          color: `var(--Text, #F8F1E4)`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile ? "0px 10px" : "0px 42px 0px 0px" }}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
        Create a one-of-a-kind tale for your child
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile ? "0px 10px" : "0px 0px 0px 42px" }}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
      </Typography>

      <Grid
        container
        justifyContent="center"
        spacing={isMobile ? 1 : 4}
        sx={{
          mt: 5,
          mb: isMobile ? 1 : 6,
        }}
      >
        {gridItems.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3.5}
            lg={3}
            sx={{
              mb: isMobile ? 2 : 0,
              p: isMobile ? "0px 16px" : 0,
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              width={isMobile ? "220px" : mediumScreen ? "250px" : "289px"}
              alt={`Image ${index + 1}`}
            />
            <Typography
              sx={{
                pt: 4,
                color: "#DDCAA6",
                textAlign: "center",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: isMobile ? "25px" : mediumScreen ? "28px" : "36px",
                fontWeight: 400,
                lineHeight: "45px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: `var(--Text, #F8F1E4)`,
                textAlign: "center",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: isMobile ? "18px" : mediumScreen ? "20px" : "24px",
                fontWeight: 400,
                lineHeight: isMobile ? "30px" : "35px",
                p: 3,
                //width: isMobile ? "100%" : "50%",
              }}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <CustomizeButton buttontext="Begin Your Magical Storytelling Adventure!" />
    </Box>
  );
};

export default CreateTaleSection;
