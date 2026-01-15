import Typography from 'typography'
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Open Sans',
    'Helvetica',
    'Helvetica Neue',
    'Segoe UI',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['OpenSans', 'serif'],
});

export default typography;
export const rhythm = typography.rhythm;