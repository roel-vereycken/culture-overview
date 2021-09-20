import {
  makeStyles,
  Card,
  Chip,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import string_to_slug from "../--helpers/slugify";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { data } from "../data/data";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  root: {
    width: 345,
    marginLeft: theme.spacing(2),
    position: "relative",
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 170,
  },
  chipdiv: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  chip: {
    marginLeft: theme.spacing(1),
  },
  cardContent: {
    paddingBottom: 0,
  },
  info: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

function Feed() {
  const classes = useStyles();

  const categorie = useSelector((state) => state.filter.filter1);
  const stad = useSelector((state) => state.filter.filter2);

  const output =
    categorie || stad
      ? data
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter(
            (c) =>
              (c.category.length > 1
                ? c.category[0].includes(categorie) ||
                  c.category[1].includes(categorie)
                : c.category[0].includes(categorie)) && c.city.includes(stad)
          )
      : data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="info" className={classes.info}>
        {categorie && (
          <Typography variant="h6">Categorie = {categorie}</Typography>
        )}
        {stad && <Typography variant="h6">Stad = {stad}</Typography>}
      </div>

      <div className={classes.container}>
        {output == 0 && <Typography variant="h2">Geen resultaat</Typography>}
        {output.map((o) => (
          <Link to={string_to_slug(o.name)} className={classes.link}>
            <Card className={classes.root} key={o.name}>
              <CardActionArea>
                <div className={classes.chipdiv}>
                  {o.category
                    .sort((a, b) => a.localeCompare(b))

                    .map((c) => (
                      <Chip
                        size="small"
                        label={c}
                        color="primary"
                        className={classes.chip}
                      />
                    ))}
                </div>
                <CardMedia
                  className={classes.media}
                  image={o.image}
                  title={`Foto van ${o.name}`}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {o.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {o.adress}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {o.city}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button color="primary">Toon Meer</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Feed;
