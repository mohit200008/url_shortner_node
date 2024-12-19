const express = require("express");
const urlRoute = require("./routes/url");
const { connectMongodb } = require("./connection");
const URL = require("./model/url");

const app = express();
const PORT = 8002;

connectMongodb(
  "mongodb+srv://mohit:admin@url.sywvn.mongodb.net/?retryWrites=true&w=majority&appName=url"
)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;
    console.log("Received shortId:", shortId);

    const entry = await URL.findOne({ shortId });
    console.log("Database entry:", entry);

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error in /:shortId route:", error);
    res.status(500).send("Internal Server Error");
  }
});


  

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
