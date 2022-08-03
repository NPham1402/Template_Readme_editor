import * as React from "react";
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
import PermMediaIcon from "@mui/icons-material/PermMedia";
export default function TemporaryDrawer(props) {
  const [file, setfile] = React.useState(data);
  const [state, setState] = React.useState({
    Search: false,
    Import: false,
    Export: false,
  });

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
                            .then((res) => res.text)
                            .then((res) => props.data(res));
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
      {anchor === "Export" && (
        <Box sx={{ width: "auto", height: "3rem" }} role="presentation">
          <input type="file" accept=".md" style={{ width: "50%" }} />
        </Box>
      )}
      {anchor === "Import" && (
        <Box sx={{ width: "auto" }} role="presentation">
          <TextField
            id="standard-basic"
            label="Search MD file"
            variant="standard"
            type="file"
            style={{ width: "100%" }}
          />
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
    </div>
  );
}
