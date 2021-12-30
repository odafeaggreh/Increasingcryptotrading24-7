console.log(44444444444444444);
auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log("user is signed in");
    // User is signed in.
    setUpDashboard(user);
    userUpdate(user);
    userAddress(user);
  } else {
    // User is signed out.
    console.log("User is signed out");
    window.location.replace("/signin.html");
  }
});
