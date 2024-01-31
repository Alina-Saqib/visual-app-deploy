import { Box, Typography ,useMediaQuery} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FrequentlyQuestions = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
  const questions = [
  { ques: "How does VisualStory.AI work?" ,ans:"ans1"},
    {ques: "Are there any limitations on story creation or image generation?", ans:"ans2"},
   { ques:"What subscription options are available, and what do they include?",ans:"ans3"},
    {ques:"Can I save and share the stories I create?",ans:"ans4"},
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "62px",
        pb:'30px'
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "var(--Text, #F8F1E4)",

          fontSize: isMobile ? "20px" :"30px",
          fontWeight: 400,
          lineHeight: isMobile ?"40px" :"80px",
        }}
      >
        Frequently asked Questions
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ?"60" :"508"}
          height="2"
          viewBox="0 0 848 2"
          fill="none"
          style={{ marginLeft: isMobile ?"20px" :"120px" }}
        >
          <path d="M0.5 1H847.5" stroke="#F8F1E4" />
        </svg>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "74%",
          gap: isMobile ? "2vh" :"8vh",
        }}
      >
        {questions.map((question,index) => (
          <Accordion key={index} sx={{ background: "transparent", boxShadow: "none",  '&:before': {
            display: 'none',
        } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  sx={{  color: "var(--Text, #F8F1E4)",}}/>}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                m: 0,
                color: "var(--Text, #F8F1E4)",
                fontSize: isMobile ?"16px" :"22px",
                fontWeight: 400,
                lineHeight:  "20px",
              }}
            >
              {question?.ques}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                m: 0,
                color: "var(--Text, #F8F1E4)",
                fontSize: isMobile ?"16px" :"22px",
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              {question.ans}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FrequentlyQuestions;
