import { Box, Button, Typography } from "@mui/material"
import ButtonRing from '../assets/ButtonRing.svg'


const CustomizeButton = ({buttontext} : any) => {
  return (
    <Box
    sx={{
        display:"inline-flex",
        flexDirection:"column",
    }}>
    <Button
      sx={{
        borderRadius: "9px",
        border: "3px solid #A67334",
        background: "#CB9A64",
        p: "2px 2px",
      }}
    >
      <Box
        sx={{
          p: "5px 30px",
          borderRadius: "9px",
          border: "3px solid #A67334",
          background:
            "var(--button-gold, linear-gradient(179deg, #E0B65D 25.23%, #F0D191 95.58%, rgba(255, 255, 255, 0.00) 183.3%))",
        }}
      >
        <Typography
          sx={{
            color: "#47371F",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
          }}
        >
          {buttontext}
        </Typography>
      </Box>
    
    </Button>
    <img src={ButtonRing} width="100px" style={{alignSelf:"center",marginTop:"-8px",zIndex:"1"}}/>
    </Box>
  )
}

export default CustomizeButton
