module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: "#FFFCFC",
        pink: "#ED4A71",
        black: "#878F9B",
        yellow: "#FED06E",
        yellowSecondary: '#FFF4E1',
        blue: "#31406B",
        blue2:"#2B478B",
        green: '#066A71',
        green2: '#05494D',
        blueLight: '#C0FFFF'

      },
      textColor: {
        primary: "#fffff",
        secondary: "#c7d0d8"
      },
      container: {
        center: true
      },
      fontFamily: {
        // Shown in the SocialBar component as font-open-sans
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
      },
    },
  
  },
  variants: {},
  plugins: []
};
