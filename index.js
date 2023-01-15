const toogleLogin = () => {
  document.getElementById("login").className = "none";
  console.log("block");
};
let mode = "dark";
document.querySelector(".theme").innerHTML ="dark";

let toogleMode = () => {
  if (mode === "dark") {
    mode = "light";
    document.querySelector(".theme").innerHTML ="dark";
    document.body.className ="light"

  } else {
    mode = "dark";
    document.querySelector(".theme").innerHTML ="light";
    document.body.className ="dark"

  }
};

