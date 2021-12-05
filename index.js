const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs").promises;

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.get("/homepage", (req, res) => {
  res.render("homepage");
});

app.post("/myForm", (req, res) => {
  const user = req.body;
  user.id = Math.floor(Math.random() * 1000) + 1;
  // maybe add a line // for stability // user has received id
  const {
    fullName,
    aboutMe,
    knownTechnologies,
    githubUrl,
    twitterUrl,
    favoriteBooks,
    favoriteArtists,
    id,
  } = user;
  fs.readFile("database.json", "utf-8")
    .then((content) => JSON.parse(content))
    .then((jsonObj) => {
      jsonObj.users.push({
        fullName,
        aboutMe,
        knownTechnologies,
        githubUrl,
        twitterUrl,
        favoriteBooks,
        favoriteArtists,
        id,
      });
      return jsonObj;
    })
    // .then((jsonObj) => {
    //   return jsonObj.users;
    // })

    .then((jsonObj) => {
      fs.writeFile("database.json", JSON.stringify(jsonObj, null, "\t")).then(
        // the null and "\t" is to break up how the information is being pushed
        // () => res.redirect(`/people/${user.id}`)
        () => res.redirect(`/people/${user.id}`)
      );
    })
    .catch((err) => err);
});

//   // if user exists - do not write
//   console.log(formData);
//   // we have to add the id somewhere
//   const {fullName, aboutMe, knownTechnologies, githubUrl, twitterUrl, favoriteBooks, favoriteArtists } = formData;
//   if (database.includes(fullName, aboutMe, knownTechnologies, githubUrl, twitterUrl, favoriteBooks, favoriteArtists)) {
//     res.render("/homepage", { result: MYMAN});
//   }
//     res.redirect("/homepage", { result: WHATSHAPPENING});
// })

app.get("/people/:id", (req, res) => {
  const id = req.params.id;
  const mapping = {
    HTML: "fa-html5",
    CSS: "fab fa-css3-alt",
    JS: "fab fa-js",
    Git: "fab fa-git-alt",
    NodeJS: "fab fa-node-js",
    React: "fab fa-react",
  };
  // we have to get the id from teh url
  // look in the db and find out in the fs.readfile
  fs.readFile("database.json", "utf-8")
    .then((content) => JSON.parse(content).users)
    .then((listOfUsers) => listOfUsers.find((user) => user.id == id))
    .then((user) => {
      console.log(user);
      res.render("homepage", { user, mapping });
    })
    .catch((err) => err);
});

// app.get('/:id', function(req, res) {
//   res.send('id: ' + req.params.id);
// });

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
