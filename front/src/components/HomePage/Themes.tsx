import { Theme, createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const myBody2FontSize = "35px";

class HomePageThemes {
  static titleTextFieldTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
        text: {
          primary: "#e0492a"
        }
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              "--TextField-brandBorderColor": "#384054",
              "--TextField-brandBorderHoverColor": "#ffff",
              "--TextField-brandBorderFocusedColor": "#ffff",
              "& .MuiInputBase-input": {
                fontSize: myBody2FontSize, // this is the default mui body2 font-size
                lineHeight: "25px" // and any other styles you want...
              },
              "& label.Mui-focused": {
                color: "var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: "var(--TextField-brandBorderColor)"
            },
            root: {
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              "&:before, &:after": {
                borderBottom: "2px solid var(--TextField-brandBorderColor)"
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "2px solid var(--TextField-brandBorderHoverColor)"
              },
              "&.Mui-focused:after": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiInput: {
          styleOverrides: {
            root: {
              "&:before": {
                borderBottom: "2px solid var(--TextField-brandBorderColor)"
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "2px solid var(--TextField-brandBorderHoverColor)"
              },
              "&.Mui-focused:after": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        }
      }
    });

  static contentTextFieldTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
        text: {
          primary: "#e0492a"
        }
      },
      components: {
        MuiTextField: {
          styleOverrides: {
            root: {
              "--TextField-brandBorderColor": "#384054",
              "--TextField-brandBorderHoverColor": "#ffff",
              "--TextField-brandBorderFocusedColor": "#ffff",

              "& label.Mui-focused": {
                color: "var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: "var(--TextField-brandBorderColor)"
            },
            root: {
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              "&:before, &:after": {
                borderBottom: "2px solid var(--TextField-brandBorderColor)"
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "2px solid var(--TextField-brandBorderHoverColor)"
              },
              "&.Mui-focused:after": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiInput: {
          styleOverrides: {
            root: {
              "&:before": {
                borderBottom: "2px solid var(--TextField-brandBorderColor)"
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderBottom: "2px solid var(--TextField-brandBorderHoverColor)"
              },
              "&.Mui-focused:after": {
                borderBottom:
                  "2px solid var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        }
      }
    });

  // static customTheme = createTheme(HomePageThemes.textFieldTheme, {
  //   components: {
  //     MuiInputBase: {
  //       styleOverrides: {
  //         input: {
  //           fontSize: '16px',    // Set the desired font size
  //           fontWeight: 'bold',  // Set font-weight to bold
  //         },
  //       },
  //     },
  //   },
  // });
}

export default HomePageThemes;
