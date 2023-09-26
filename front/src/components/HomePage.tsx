import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import "./HomePage.scss";
import TextField from "@mui/material/TextField";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Theme, createTheme, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

const HomePage = ({}: {}) => {
  const [articleContent, setArticleContent] = useState<string>("");
  const outerTheme = useTheme();

  const handleArticleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleContent(event.target.value);
  };

  const hanleSubmitArticle = () => {
    // save in DB;
  };

  const customTheme = (outerTheme: Theme) =>
    createTheme({
      palette: {
        mode: outerTheme.palette.mode
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

  return (
    <div className="home-page-main">
      <Box className="box-main">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            className="box-main-orientation"
            multiline
            value={articleContent}
            onChange={handleArticleTextChange}
          ></TextField>
        </ThemeProvider>
        <div className="box-secondary-orientation">
          <Button
            className="article-submit-button"
            onClick={hanleSubmitArticle}
            variant="outlined"
            color="warning"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default HomePage;
