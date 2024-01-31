import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import CustomizeButton from "../CustomizeButton";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const CreateTaleSection = () => {
  const gridItems = [
    {
      image: image1,
      title: "Describe your Character",
      description:
        "Unleash Your Imagination as you define their quirks, strength, and even their favorite creatures.",
    },
    {
      image: image2,
      title: "Craft Your Character's Tale",
      description:
        "Interact Effortlessly through voice or text input, answering whimsical questions that guide your narrative.",
    },
    {
      image: image3,
      title: "Generate Your Story!",
      description:
        "Hit the generate button and witness as your story comes to life.",
    },
  ];
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? "20px" :"30px",
          color: `var(--Text, #F8F1E4)`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="203"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile? "0px 10px" :"0px 42px" }}
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
          style={{ margin: isMobile? "0px 10px" :"0px 42px"}}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
      </Typography>

      
      <Grid
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          textAlign: "center",
          gap: "8%",
          mt: 5,
          mb: 2,
        }}
      >
        {gridItems.map((item, index) => (
          <Grid
            key={index}
            sx={{
              mb: isMobile ? 2 : 0,
              p: isMobile ? "0px 16px" : 0,
            }}
          >
            <img src={item.image} width="200px" alt={`Image ${index + 1}`} />
            <Typography
              sx={{
                color: "#DDCAA6",
                textAlign: "center",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "40px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: `var(--Text, #F8F1E4)`,
                textAlign: "center",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "25px",
                width: isMobile ? "100%" : "240px",
              }}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <CustomizeButton buttontext="MAKE YOUR OWN" />
    </Box>
  );
};

export default CreateTaleSection;
