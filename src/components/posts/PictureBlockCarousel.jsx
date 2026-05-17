import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import colours from "../Colours";

// images: array of strings or { path, subtitle? } objects
const PictureBlockCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const raw = images[index];
  const path = typeof raw === 'string' ? raw : raw.path;
  const subtitle = typeof raw === 'string' ? undefined : raw.subtitle;
  const hasMany = images.length > 1;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const arrowButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.65)' },
  };

  const subtitleStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colours.darkBackground,
    color: colours.lightBackground,
    borderRadius: '0 0 0 10px',
    padding: '5px',
    fontSize: '12pt',
  };

  const dotStyle = (active) => ({
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: active ? colours.darkBackground : colours.lightBackground,
    border: `1px solid ${colours.darkBackground}`,
    margin: '0 3px',
    cursor: 'pointer',
  });

  return (
    <Grid xs={12} sx={{ padding: '0', marginBottom: '1em' }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <img
          src={path}
          loading="lazy"
          style={{ width: '100%', borderRadius: '10px', display: 'block' }}
        />
        {hasMany && (
          <>
            <IconButton onClick={prev} sx={{ ...arrowButtonStyle, left: 0, borderRadius: '0 4px 4px 0' }}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={next} sx={{ ...arrowButtonStyle, right: 0, borderRadius: '4px 0 0 4px' }}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}
        {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
      </div>
      {hasMany && (
        <div style={{ width: '100%', textAlign: 'center', marginTop: '0.35em' }}>
          {images.map((_, i) => (
            <span key={i} style={dotStyle(i === index)} onClick={() => setIndex(i)} />
          ))}
        </div>
      )}
    </Grid>
  );
};

export default PictureBlockCarousel;
