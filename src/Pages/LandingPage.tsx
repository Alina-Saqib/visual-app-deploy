import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Layout from "../Pages/LayoutPages";
import CustomizeButton from "../Components/CustomizeButton";
import creativityOneImage from "../assets/creativity.png";
import creativityTwoImage from "../assets/creativity2.png";
import creativityThreeImage from "../assets/creativity3.png";
import CreateTaleSection from "../Components/LandingPage Components/CreateTaleSection";
import bgImage from "../assets/bgImage.png";
import headerbg from "../assets/headerbg.png";
import mountainRocks from "../assets/mountainRocks.png";
import ExperienceSection from "../Components/LandingPage Components/ExperienceSection";
import section4bg from "../assets/section4bg.png";
import section4bgUp from "../assets/section4Upbg.png";
import FrequentlyQuestions from "../Components/LandingPage Components/FrequentlyQuestions";
import NavBar from "../Components/NavBar";
import designLine from "../assets/designLine2.png";

const LandingPage = () => {
  const isMobile = useMediaQuery("(max-width:1200px)");
  const mediumScreen = useMediaQuery('(min-width:1201px) and (max-width:1512px)');

  const gridsItemsContents = [
    {
      title: "Unleash Creativity",
      description:
        "Craft enchanting tales with our intuitive text-based story generation powered by OpenAI's GPT.",
      image: creativityOneImage,
    },
    {
      title: "Magical Conversations",
      description:
        "Immerse yourself seamlessly in the storytelling experience with our user-friendly voice and text input options.",
      image: creativityTwoImage,
    },
    {
      title: "Timeless Memories",
      description:
        "Preserve your magical creations by saving and revisiting your favorite stories and characters.",
      image: creativityThreeImage,
    },
  ];
  return (
    <>
      <NavBar>
        <Box
          sx={{
            p: isMobile ? "2px 5%" :mediumScreen ? "2px 5%":"5% 8% 0px 8%",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: isMobile ? "40px" : (mediumScreen ? "75px" :"96px"),
              fontWeight: 400,
              lineHeight: isMobile ? "50px" : "94px",
            }}
          >
            VISUALSTORY.AI
          </Typography>
          <Typography
            sx={{
              pt: isMobile ? 1 : mediumScreen ? 2:7,
              color: "#F1EFEF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: isMobile ? "25px" : (mediumScreen ? "40px" :"48px"),
              fontWeight: 400,
              lineHeight: isMobile ? "40px" : (mediumScreen ? "40px" :"58px"),
            }}
          >
            Your Stories, Our Unique Visuals
          </Typography>
          <Typography
            sx={{
              color: "#F1EFEF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              "-webkit-text-stroke-width": "0.25",
              "-webkit-text-stroke-color": "#FFF",
              fontSize: isMobile ? "12px" : (mediumScreen?"16px":"24px"),
              fontWeight: 400,
              lineHeight: mediumScreen ? "30px" :"32px",
              width: isMobile ? "100%" : (mediumScreen ? "50%" :"42.5%") ,
              mt: 3,
              mb: 5,
            }}
          >
            Immerse yourself in the realm of fantastical narratives as you
            embark on a captivating journey of storytelling with our Virtual
            Storybook App. This platform is tailor-made for parents like you who
            are seeking to weave extraordinary stories for their little ones.
          </Typography>

          <CustomizeButton buttontext="START NOW" />
        </Box>
        <Box
          sx={{
            m: isMobile ? "10px 5%" : mediumScreen ?   "50px 5%":"140px 8%",
            border: "1px solid #000",
            background:
              "linear-gradient(180deg, rgba(249, 217, 153, 0.96) 0%, rgba(238, 200, 126, 0.96) 49%, rgba(239, 200, 122, 0.96) 52%, rgba(232, 195, 120, 0.96) 96%, rgba(237, 215, 171, 0.96) 99.99%, rgba(234, 184, 85, 0.00) 100%)",
          }}
        >
          <Box
            sx={{
              border: "1px solid #A8834D",
              m: "13px 15px",
            }}
          >
            <Grid
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                width: "100%",
                alignItems: isMobile ? "center" :"none",
                gap: isMobile ? "0px" : "20px",
                p: isMobile ? "0" : "30px 10px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              {gridsItemsContents.map((item, index) => (
                <>
                  <Grid
                    key={index}
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      width: isMobile ?"100%":"50%",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#78573F",
                        textAlign: "center",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: isMobile ? "30px" : "32px",
                        fontWeight: 400,
                        lineHeight: "45px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#78573F",
                        textAlign: "center",
                        fontFeatureSettings: "'clig' off, 'liga' off",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "30px",
                        width: isMobile ? "90%" : "75%",
                        mt: 2,
                      }}
                    >
                      {item.description}
                    </Typography>
                    <img src={item.image} width="80%" />
                  </Grid>
                  {isMobile
                    ? null
                    : index < gridsItemsContents.length - 1 && (
                        <Grid>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2"
                            height="238"
                            viewBox="0 0 2 238"
                            fill="none"
                          >
                            <path
                              d="M1 0V237.328"
                              stroke="#80521A"
                              strokeWidth="0.5"
                            />
                          </svg>
                        </Grid>
                      )}
                </>
              ))}
            </Grid>
          </Box>
        </Box>
      </NavBar>
      <Layout>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mt: "-21.5%",
          }}
        >
          <img src={designLine} width="100%" />
        </Box>
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            mt: "-3.4%",
            pt: "10vh",
            pb: isMobile ?5:12,
          }}
        >
          <CreateTaleSection />
        </Box>

        <Box
          sx={{
            background: `linear-gradient(0deg, rgba(48, 48, 48, 0.20) 0%, rgba(48, 48, 48, 0.20) 100%), url(${headerbg})`,
           height: isMobile ?"350px":"909px",
           //height: "65vh", // Set the height to cover the entire viewport height
           display: "flex",
           backgroundSize: "cover", // Use 'cover' to make sure the image covers the entire space
           backgroundRepeat: "no-repeat",
           backgroundPosition:"50% 50%",
           justifyContent: "center",
           alignItems: "center",
          }}
        >
          <CustomizeButton buttontext="MAKE NOW" />
        </Box>
        <img
          src={mountainRocks}
          width={isMobile ? "300px" : "500px"}
          style={{ marginTop: isMobile ? "-80px" : "-130px" }}
        />
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            mt: isMobile ? "-65px" : "-104.5px",
            pt: "6vh",
            pb: 10,
          }}
        >
          <ExperienceSection />
        </Box>
        <Box
          sx={{
            background: `url(${section4bg})`,
            backgroundRepeat: "no-repeat",
            // display:"flex",
            // alignItems:"center",
            // flexDirection:"column",
            backgroundSize: "cover",
            Opacity:"83%",
            p: isMobile ? "6vh" : (mediumScreen ?"12vh":"10vh"),
            height: isMobile ? "380px" : (mediumScreen ? "800px":"1086px"),
            position: "relative",
          }}
        >
          <Typography
             sx={{
              textAlign: "center",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "20px" :mediumScreen ? "30px" :"48px",
              lineHeight: isMobile ?"30px":"45px",
              color: `var(--Text, #F8F1E4)`,
            }}
          >
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="325"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile? "0px 10px" :"0px 42px" }}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
            Visual StoryBoarding at a click
            <svg
          xmlns="http://www.w3.org/2000/svg"
          width="325"
          height="3"
          viewBox="0 0 203 3"
          fill="none"
          style={{ margin: isMobile? "0px 10px" :"0px 42px" }}
        >
          <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
        </svg>
          </Typography>
          <Box
            sx={{
              background: `url(${section4bgUp})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: isMobile?"80%":"100%",
              mt:isMobile ?2:8,
              position: "relative",
            }}
          >
            <Box
            sx={{
              position: "absolute",
              bottom: "55%", // Adjust the position as needed
              left: "50%", // Center horizontally
              transform: "translateX(-50%)", // Center horizontally
            }}
            >
               <CustomizeButton buttontext="EXPLORE NOW" />
            </Box>
           
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            pt: "5vh",
            pb: 6,
          }}
        >
          <FrequentlyQuestions />
        </Box>
      </Layout>
    </>
  );
};

export default LandingPage;
