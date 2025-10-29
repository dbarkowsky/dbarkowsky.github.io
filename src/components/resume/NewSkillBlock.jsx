import { Box, Typography, LinearProgress, Tooltip } from "@mui/material";
import colours from "../Colours";

const NewSkillBlock = ({ text, logo, logoColour, link, rating = 0 }) => {
  const maxRating = 10;

  return (
    <Tooltip title={link}>
      <a href={link} target="_blank" style={{
        textDecoration: 'none'
      }}>
      <Box
        sx={{
          gap: 3,
          px: 1.5,
          py: 0.5,
          borderRadius: "4px",
          backgroundColor: "#323330",
          color: "white",
          fontSize: "0.85rem",
          width: 'fit-content',
          minWidth: 50,
        }}
      >

        {/* Skill name and rating */}
        <Box sx={{ flexGrow: 1 }}>
          <Box gap={1} display={'flex'} flexDirection={'row'} justifyContent={'start'}>{
            <>
              {logo && <Box
                sx={{
                  width: 15,
                  height: 15,
                  ...(logoColour
      ? {
          backgroundColor: logoColour,
          WebkitMask: `url(/resume/icons/${logo}.svg) no-repeat center`,
          WebkitMaskSize: 'contain',
          mask: `url(/resume/icons/${logo}.svg) no-repeat center`,
          maskSize: 'contain',
        }
      : {
          backgroundImage: `url(/resume/icons/${logo}.svg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }),
                }}
              />}
              <Typography fontSize={'0.8em'}>{text}</Typography>
            </>
          }</Box>

          {/* Rating bar */}
          <LinearProgress
            variant="determinate"
            value={(rating / maxRating) * 100}
            sx={{
              height: 5,
              borderRadius: 2,
              mt: 0.3,
              backgroundColor: "rgba(255,255,255,0.2)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: colours.progressBarForeground,
              },
            }}
          />
        </Box>
      </Box>
      </a>
    </Tooltip>
  );
};

export default NewSkillBlock;
