export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#E8EAED",
            hovarColor:"#303134",
            light:'#fffff'
          },
          background: {
            default: "#202124",
          },
        }
      : {
          primary: {
            main: "#202124",
          },
          background: {
            default: "#FFFFFF",
          },
        }),
  },
});
