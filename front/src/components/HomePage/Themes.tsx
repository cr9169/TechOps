import { Theme, createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

class HomePageThemes {
  static textFieldTheme = (outerTheme: Theme) =>
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
              [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: "var(--TextField-brandBorderHoverColor)"
              },
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
