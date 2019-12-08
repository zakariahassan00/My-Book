export const profileStyles = theme => ({
  profile: {
    width: "100%",
    maxWidth: 1400,
    minHeight: 600,
    padding: 20,
    marginTop: 70,
    display: "flex",
    flexWrap: "wrap"
  },
  user_info: {
    width: 300,
    height: 400,
    margin: "10px auto",
    backgroundColor: "#fff",
    borderRadius: 8,
    textAlign: "center"
  },
  user_books: {
    width: "65%",
    minHeight: 500,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    flexGrow: 1
  },
  avatar: {
    margin: "20px auto",
    width: 160,
    height: 160,
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      width: 120,
      height: 120,
      fontSize: "2rem"
    }
  },
  tabs: {
    justifyContent: "center"
  }
});
