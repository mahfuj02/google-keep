export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    typography:'roboto',
    ...(mode === "dark"
      ? {
          primary: {
            main: "#E8EAED",
            hovarColor:"#303134",
            searchBoxColor:'#F1F3F4',
            whiteColor:'#fffff'
            
          },
          secondary: {
            light: '#FFFFFF',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
          },
          custom: {
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          typography: {
            allVariants: {
              color: "#fffff"
            },
          },
          background: {
            default: "#202124",
          },
        }
      : {
          primary: {
            main: "#202124",
            searchBoxColor: '#F1F3F4',
          },
          background: {
            default: "#FFFFFF",
          },
        }),
  },
});
