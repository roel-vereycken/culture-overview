import { Link, useParams } from "react-router-dom";
import { makeStyles, Typography, Card, CardContent } from "@material-ui/core";
import string_to_slug from "../--helpers/slugify";
import { data } from "../data/data";

const useStyles = makeStyles((theme) => ({
  back: {
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  container: {
    display: "flex",
    marginTop: theme.spacing(2),
  },
  photo: {
    width: "45vw",
    height: "75vh",
    objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      width: 0,
      height: 0,
    },
  },
  info: {},
}));

function Detail() {
  let { slug } = useParams();
  const classes = useStyles();

  const organisatie = data.filter((o) => string_to_slug(o.name) === slug)[0];

  return (
    <>
      <div className={classes.back}>
        <Link to="/" className={classes.link}>
          <Typography variant="h6">Terug naar overzicht</Typography>
        </Link>
      </div>
      <div className={classes.container}>
        <img src={organisatie.image} alt="" className={classes.photo} />
        <div className={classes.info}>
          <Card>
            <CardContent>
              <Typography variant="h2">{organisatie.name}</Typography>

              <hr />
              {organisatie.desc.map((d) => (
                <>
                  <Typography variant="body2">{d}</Typography>
                  <br />
                </>
              ))}
              <hr />
              <Typography variant="h6">
                adres: {organisatie.adress}, {organisatie.city}
              </Typography>

              <Typography variant="h6">
                website:{" "}
                <a href={organisatie.website} target="_blank" rel="noreferrer">
                  {organisatie.website}{" "}
                </a>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Detail;
