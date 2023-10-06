import { Theme, createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const myBody2FontSize = "30px";

class HomePageThemes {
  static titleTextFieldTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode,
        text: {
          primary: "#e0492a"
        },
        background: {
          default: "#384054" // Set the default background color of the theme
        }
      },
      components: {
        MuiTextField: {
          defaultProps: {
            inputProps: {
              maxLength: 60
            }
          },
          styleOverrides: {
            root: {
              backgroundColor: "#384054", // Set the TextField background color
              "--TextField-brandBorderColor": "#384054",
              "--TextField-brandBorderHoverColor": "#ffff",
              "--TextField-brandBorderFocusedColor": "#ffff",
              "& .MuiInputBase-input": {
                fontSize: myBody2FontSize,
                lineHeight: "30px"
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
              backgroundColor: "#384054", // Set the OutlinedInput background color
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              backgroundColor: "#384054", // Set the FilledInput background color
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
              backgroundColor: "#384054", // Set the Input background color
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
              backgroundColor: "#384054",

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
              backgroundColor: "#384054",
              [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderFocusedColor)"
              }
            }
          }
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              backgroundColor: "#384054",
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
              backgroundColor: "#384054",
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
