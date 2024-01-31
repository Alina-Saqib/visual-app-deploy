import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

const ExperienceSection = () => {
    const experiences = [
        {
          content:
            "As a working mom, bedtime stories became more of a routine than an adventure. That changed when I discovered the VisualStory.AI Platform. Crafting characters and weaving stories became a magical bonding experience with my kids. Now, every night is a journey into fantastical worlds, making bedtime the highlight of our day!",
          author: "Sarah M.",
        },
        {
          content:
            "VisualStory.AI brought a new dimension to our family time. My wife and I, both working professionals, struggled to find quality moments with our kids. The Virtual Storybook platform turned storytelling into an interactive adventure. The ease of using voice input made it accessible for our young ones, and the generated stories never cease to amaze us.",
          author: "Mark H.",
        },
        {
          content:
            "As a tech-savvy mom, I was skeptical about yet another platform for storytelling. VisualStory.AI, however, exceeded all expectations. The fusion of advanced technology and classic storytelling is pure genius. The subscription model is worth every penny, unlocking features that deepen the storytelling experience. Now, screen time isn't just passive; it's an active engagement in creating magical stories with my kids.",
          author: "Sarah M.",
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
        Enchanted Experiences Shared by Our Community
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
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#F8F1E4",
            width: isMobile ? "100%":"45%",
            textAlign: "center",
            fontSize: isMobile ? "16px":"18px",
            fontWeight: 400,
            lineHeight: "30px",
            mt:5
          }}
        >
          Read firsthand accounts of parents who found joy, creativity, and
          bonding through the magical journey of crafting and sharing stories on
          our platform.
        </Typography>
      </Box>
      <Grid
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: "5%",
          p: "0px 70px",
          mt: 5,
        }}
      >
        
        {experiences.map((experience, index) => (
          <Grid key={index}>
            <Typography
              sx={{
                color: "#F8F1E4",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "147%",
              }}
            >
              {experience.content}
              <Typography sx={{ mt: 5, mb: 2 }}>{experience.author}</Typography>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
