import { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import HomePageThemes from "./Themes";
import "./HomePage.scss";

const HomePage = ({}: {}) => {
  const [articleContent, setArticleContent] = useState<string>("");
  const [articleTitle, setArticleTitle] = useState<string>("");

  const outerTheme = useTheme();

  const handleArticleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleContent(event.target.value);
  };

  const handleArticleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleTitle(event.target.value);
  };

  const hanleSubmitArticle = () => {
    // save in DB;
  };

  return (
    <div className="home-page-main">
      <Box className="box-main">
        <div className="box-main-orientation">
          <ThemeProvider theme={HomePageThemes.textFieldTheme(outerTheme)}>
            <TextField
              focused
              className="title-box-main-orientation"
              label="Title"
              multiline
              value={articleTitle}
              onChange={handleArticleTitleChange}
            ></TextField>
            <TextField
              focused
              className="content-box-main-orientation"
              label="Write your content here!"
              multiline
              value={articleContent}
              onChange={handleArticleTextChange}
            ></TextField>
          </ThemeProvider>
        </div>
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
