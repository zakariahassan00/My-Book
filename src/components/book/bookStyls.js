export const bookStyles = theme => ({
  book: {
    width: "100%",
    height: "100%",
    minHeight: 400,
    maxWidth: 1000,
    margin: "80px auto",
    padding: 15,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff"
  },
  book_img: {
    width: 250,
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      margin: "auto",
      width: 200
    }
  },
  media: {
    height: 375,
    [theme.breakpoints.only("xs")]: {
      height: 300
    }
  },
  book_info: {
    padding: "30px 20px",
    width: "55%",
    flexGrow: 1,
    "& p": {
      margin: "20px auto"
    },
    "& h6 span": {
      color: "red",
      fontSize: 18
    }
  },
  favIcon: {
    position: "absolute",
    top: 15,
    right: 15
  }
});
