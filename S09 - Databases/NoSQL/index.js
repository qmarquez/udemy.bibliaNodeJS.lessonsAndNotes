const { DBPSW, DBUSR } = require('./config');
const mongoose = require('mongoose');
const connString = `mongodb+srv://${DBUSR}:${DBPSW}@asistente-empresarial-c0-mvt1t.gcp.mongodb.net/udemy_biblianodejs?retryWrites=true&w=majority`;
const cron = require('node-cron');

(async () => {
  try {
    await mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })

    cron.schedule("* * * * * *", async () => {
      console.log('cron executed');

      const axios = require('axios').default;
      const cheerio = require('cheerio');
      const { BreakingNew } = require('./models');

      const { data } = await axios.get("https://cnnespanol.cnn.com/");
      const $ = cheerio.load(data);

      const breakingNews = [];

      $(".news__title").each(([, elem]) => {
        const breakingNew = new BreakingNew({
          title: $(elem).text().replace(/\t|\n/g, ''),
          link: $(elem.children).attr('href')
        });

        breakingNews.push(breakingNew);
      });

      BreakingNew.create(breakingNews);
    });
  } catch (error) {
    console.log(error);
  }
})()