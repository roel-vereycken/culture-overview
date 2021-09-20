import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { update, update2 } from "../redux/filterSlice";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formControl: {
    marginLeft: theme.spacing(10),
    width: 90,
    height: 70,
  },
  label: {
    color: "white",
    paddingTop: "35%",
  },
}));

function NavBar() {
  const classes = useStyles();
  const categorie = useSelector((state) => state.filter.filter1);
  const stad = useSelector((state) => state.filter.filter2);

  const [filter, setFilter] = useState(categorie);
  const [filter2, setFilter2] = useState(stad);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleChange2 = (e) => {
    e.preventDefault();
    setFilter2(e.target.value);
  };

  useEffect(() => {
    dispatch(update(filter));
    dispatch(update2(filter2));
  }, [filter, filter2, dispatch]);

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Cultuur Lijst</Typography>
          <div className="menu">
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.label}
              >
                Categorie
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Categorie"
                onChange={handleChange}
              >
                <MenuItem value={""}>Alle</MenuItem>
                <MenuItem value={"Cinema"}>Cinema</MenuItem>
                <MenuItem value={"Muziek"}>Muziek</MenuItem>
                <MenuItem value={"Theater"}>Theater</MenuItem>
                <MenuItem value={"Dans"}>Dans</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-label"
                className={classes.label}
              >
                Stad
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Categorie"
                onChange={handleChange2}
              >
                <MenuItem value={""}>Alle</MenuItem>
                <MenuItem value={"Antwerpen"}>Antwerpen</MenuItem>
                <MenuItem value={"Brussel"}>Brussel</MenuItem>
                <MenuItem value={"Gent"}>Gent</MenuItem>
                <MenuItem value={"Mechelen"}>Mechelen</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
