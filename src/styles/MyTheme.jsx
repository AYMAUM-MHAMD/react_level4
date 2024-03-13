const { red, grey, deepPurple, cyan, teal } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ali: {
            main: red[500],
            hover: red[700],
          },

          greyr: grey[300],

          favColor: {
            main: deepPurple[700],
          },
        }
      : {
          // palette values for dark mode
          ali: {
            main: teal[500],
            hover: teal[700],
          },

          greyr: grey[800],

          favColor: {
            main: cyan[700],
          },
        }),
  },
});

export default getDesignTokens;
