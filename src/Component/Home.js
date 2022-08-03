import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import MDEditor from "@uiw/react-md-editor";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import data from "../Data";
import { FileUploader } from "react-drag-drop-files";
import saveas from "file-saver";
import PermMediaIcon from "@mui/icons-material/PermMedia";
export default function Home(props) {
  const [markdown, setMarkdown] = useState("Hello word");
  const [file, setfile] = React.useState(data);
  const [fileimport, setFileimport] = React.useState(null);
  const [state, setState] = React.useState({
    Search: false,
    Import: false,
    Export: false,
  });
  const importfile = () => {
    if (fileimport === null) {
      alert("no file import,please select file");
    }
    {
      const reader = new FileReader();
      reader.readAsText(fileimport);
      reader.onload = (e) => {
        setMarkdown(e.currentTarget.result);
      };
    }
  };
  function exportFile() {
    var blob = new Blob([markdown], { type: "text/plain;charset=utf-8" });
    saveas(blob, "ReadMe.md");
  }
  const ImportHandle = (file) => {
    setFileimport(file);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      {anchor === "Search" && (
        <Box sx={{ width: "auto" }} role="presentation">
          <TextField
            id="standard-basic"
            label="Search MD file"
            variant="standard"
            style={{ width: "100%" }}
            onChange={(e) => {
              setfile(
                data.filter((word) => {
                  if (word.includes(e.target.value)) {
                    return word;
                  }
                })
              );
            }}
          />
          <List>
            {file.map((text, index) => (
              <>
                {index < 10 && (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={(e) => {
                        import(`../Source/${text}.md`).then((res) => {
                          fetch(res.default)
                            .then((res) => res.text())
                            .then((res) => setMarkdown(res));
                        });
                      }}
                    >
                      <ListItemIcon>
                        <PermMediaIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )}
              </>
            ))}
          </List>
        </Box>
      )}
      {anchor === "Import" && (
        <Box
          display="flex"
          justifyContent="center"
          sx={{ width: "auto", height: "5rem", flexDirection: "row" }}
          role="presentation"
        >
          {" "}
          <Box
            display="flex"
            justifyContent="center"
            sx={{ width: "auto", height: "5rem" }}
            role="presentation"
          >
            {" "}
            <FileUploader
              handleChange={ImportHandle}
              name="file"
              types={["MD"]}
            ></FileUploader>
            <p>
              {fileimport
                ? `File name: ${fileimport.name}`
                : "no files uploaded yet"}
            </p>
          </Box>
          <Button variant="contained" onClick={importfile}>
            Import
          </Button>
        </Box>
      )}
      {anchor === "Export" && (
        <Box sx={{ width: "auto" }} role="presentation">
          <Button variant="contained" onClick={() => exportFile()}>
            Contained
          </Button>
        </Box>
      )}
    </>
  );

  return (
    <div>
      {["Search", "Import", "Export"].map((e) => (
        <React.Fragment>
          <Button onClick={toggleDrawer(e, true)}>{e}</Button>
          <Drawer
            anchor={"top"}
            open={state[e]}
            onClose={toggleDrawer(e, false)}
          >
            {list(e)}
          </Drawer>
        </React.Fragment>
      ))}

      <MarkdownEditor
        height="600px"
        visible
        value={markdown}
        onChange={(value, viewUpdate) => setMarkdown(value)}
      />
      <MDEditor.Markdown
        source={markdown}
        style={{ whiteSpace: "pre-wrap", width: 100, height: 500 }}
      />
    </div>
  );
}
