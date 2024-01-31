import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Layout from "../Pages/LayoutPages";
import CustomizeButton from "../Components/CustomizeButton";
import creativityOneImage from "../assets/creativity.png";
import creativityTwoImage from "../assets/creativity2.png";
import creativityThreeImage from "../assets/creativity3.png";
import lineDecor1 from "../assets/lineDecor1.svg";
import lineDecor2 from "../assets/lineDecor2.svg";
import rock from "../assets/rock.png";
import CreateTaleSection from "../Components/LandingPage Components/CreateTaleSection";
import bgImage from "../assets/bgImage.png";
import headerbg from "../assets/headerbg.png";
import mountainRocks from "../assets/mountainRocks.png";
import ExperienceSection from "../Components/LandingPage Components/ExperienceSection";
import section4bg from "../assets/section4bg.png";
import section4bgUp from "../assets/section4Upbg.png";
import FrequentlyQuestions from "../Components/LandingPage Components/FrequentlyQuestions";
import NavBar from "../Components/NavBar";
import designLine from "../assets/designLine.png"

const LandingPage= () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <NavBar>
        <Box
          sx={{
            p: "10px 5%",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: isMobile ? "40px" : "56px",
              fontWeight: 400,
              lineHeight: isMobile ? "50px" : "94px",
            }}
          >
            VISUALSTORY.AI
          </Typography>
          <Typography
            sx={{
              color: "#F1EFEF",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontSize: isMobile ? "25px" : "48px",
              fontWeight: 400,
              lineHeight: isMobile ? "40px" : "58px",
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
              fontSize: isMobile ? "12px" : "16px",
              fontWeight: 400,
              lineHeight: "32px",
              width: isMobile ? "100%" : "40%",
              mt: 2,
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
            m: isMobile ? "10px 5%" : "30px 70px",
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
                width:"100%",
                alignItems: "center",
                gap: isMobile ? "0px" : "25px",
                p: isMobile ? "0" : "20px 10px",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <Grid
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#78573F",
                    textAlign: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: isMobile ? "24px" : "28px",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  Unleash Creativity
                </Typography>
                <Typography
                  sx={{
                    color: "#78573F",
                    textAlign: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "25px",
                    width: isMobile ? "90%" : "341px",
                  }}
                >
                  Craft enchanting tales with our intuitive text-based story
                  generation powered by OpenAI's GPT.
                </Typography>
                <img src={creativityOneImage} width="100%" />
              </Grid>
              {isMobile ? (
                <></>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7px"
                  height="238"
                  viewBox="0 0 2 238"
                  fill="none"
                >
                  <path d="M1 0V237.328" stroke="#80521A" stroke-width="0.5" />
                </svg>
              )}
              <Grid
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#78573F",
                    textAlign: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: isMobile ? "24px" : "28px",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  Magical Conversations
                </Typography>
                <Typography
                  sx={{
                    color: "#78573F",
                    textAlign: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "25px",
                    width: isMobile ? "90%" : "341px",
                  }}
                >
                  {" "}
                  Immerse yourself seamlessly in the storytelling experience
                  with our user-friendly voice and text input options.
                </Typography>
                <img src={creativityTwoImage} width="100%" />
              </Grid>
              {isMobile ? (
                <></>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7px"
                  height="238"
                  viewBox="0 0 2 238"
                  fill="none"
                >
                  <path d="M1 0V237.328" stroke="#80521A" stroke-width="0.5" />
                </svg>
              )}
              <Grid
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#78573F",
                    textAlign: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: isMobile ? "24px" : "28px",
                    fontWeight: 400,
                    lineHeight: "40px",
                  }}
                >
                  Timeless Memories
                </Typography>
                <Typography
                  sx={{
                    color: "#78573F",
                    textAlign: "center",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "25px",
                    width: isMobile ? "90%" : "341px",
                  }}
                >
                  Preserve your magical creations by saving and revisiting your
                  favorite stories and characters.
                </Typography>
                <img src={creativityThreeImage} width="100%" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {/* <hr
            style={{ width: "99%", height: "4px", margin: 0 }}
            color="#ECBC95"
          />
          <img
            src={lineDecor1}
            width={isMobile ? "22px" : "32px"}
            style={{
              marginTop: isMobile ? "-10px" : "-20px",
              marginLeft: "8%",
            }}
          />
          <img
            src={lineDecor1}
            width={isMobile ? "22px" : "32px"}
            style={{
              marginTop: isMobile ? "-25px" : "-35px",
              marginLeft: "25%",
            }}
          />
          <img
            src={lineDecor2}
            width={isMobile ? "40px" : "64px"}
            style={{
              marginTop: isMobile ? "-27px" : "-37px",
              marginLeft: "40%",
            }}
          />
          <img
            src={lineDecor2}
            width={isMobile ? "55px" : "75px"}
            style={{
              marginTop: isMobile ? "-25px" : "-30px",
              marginLeft: isMobile ? "49%" : "44%",
            }}
          />
          <img
            src={lineDecor2}
            width={isMobile ? "40px" : "64px"}
            style={{
              marginTop: isMobile ? "-27px" : "-48px",
              marginLeft: isMobile ? "60%" : "48%",
            }}
          />
          <img
            src={lineDecor1}
            width={isMobile ? "22px" : "32px"}
            style={{
              marginTop: isMobile ? "-18px" : "-23px",
              marginLeft: "74%",
            }}
          />
          <img
            src={rock}
            width={isMobile ? "90px" : "200px"}
            style={{
              marginTop: isMobile ? "-100px" : "-240px",
              marginLeft: isMobile ? "76%" : "85.2%",
            }}
          /> */}
        </Box>
      
     
      </NavBar>
      <Layout>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mt: "-22.5%"
          }}>
      <img src={designLine}
      width="100%" />
      </Box>
      <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            mt: "-3.5%" ,
            pt: "10vh",
            pb: 6,
          }}
        >
          <CreateTaleSection />
        </Box>

        <Box
          sx={{
            background: `linear-gradient(0deg, rgba(48, 48, 48, 0.20) 0%, rgba(48, 48, 48, 0.20) 100%), url(${headerbg})`,
            pt: "10vh",
            height: "100vh",
            display: "flex",
            backgroundSize: "cover",
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
            pt: "15vh",
            pb: 8,
          }}
        >
          <ExperienceSection />
        </Box>
        <Box
          sx={{
            background: `url(${section4bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            p: isMobile ? "0px" : "15vh",
            height: isMobile ? "50vh" : "100vh",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              mb: isMobile ? 0 : 2,
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "20px" : "30px",
              color: `var(--Text, #F8F1E4)`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="3"
              viewBox="0 0 203 3"
              fill="none"
              style={{ margin: isMobile ? "0px 10px" : "0px 25px" }}
            >
              <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
            </svg>
            Visual StoryBoarding at a click
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="3"
              viewBox="0 0 203 3"
              fill="none"
              style={{ margin: isMobile ? "0px 10px" : "0px 25px" }}
            >
              <path d="M0 1.5L203 1.50002" stroke="#F8F1E4" stroke-width="2" />
            </svg>
          </Typography>
          <Box
            sx={{
              background: `url(${section4bgUp})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: isMobile ? "50%" : "100%",
            }}
          >
            <CustomizeButton buttontext="EXPLORE NOW" />
          </Box>
        </Box>
        <Box
          sx={{
            background: "rgba(42, 77, 76, 0.91)",
            backgroundImage: `linear-gradient(0deg, rgba(92, 71, 40, 0.14) 0%, rgba(92, 71, 40, 0.14) 100%), url(${bgImage})`,
            pt: "10vh",
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
