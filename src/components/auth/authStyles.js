const danger = "#ff0011";

export const authStyles = {
  modLogin: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    backgroundColor: "#f3f3f3",
    fontFamily: "Fira Sans, 'sans-serif'",
    color: "#000",
    "& a": {
      color: "#808080"
    }
  },
  paper: {
    maxWidth: 450,
    minHeight: 400,
    position: "absolute",
    padding: "10px 10px 20px",
    top: "55%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    boxShadow: "5px 4px 22px -1px rgba(125,125,125,0.5)",
    backgroundColor: "#fff",
    borderRadius: 0,
    textAlign: "center"
  },
  typography: {
    fontFamily: "inherit",
    margin: "20px auto"
  },
  button: {
    margin: 20,
    width: 300,
    color: "#fff",
    textTransform: "capitalize"
  },
  logedin: {
    width: "110vw",
    height: "110vh",
    marginTop: 200,
    color: "#fff"
  },
  divider: {
    width: 100,
    margin: "20px auto",
    border: "1px solid #808080"
  },
  error: {
    color: danger
  }
};
