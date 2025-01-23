const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const featureFlag = process.env.FEATURE_FLAG || 'true';

app.get('/', (req, res) => {
  if (featureFlag === 'true') {
    res.send('Feature is enabled!');
  } else {
    res.send('Feature is disabled.');
  }
});

app.listen(port, () => {
  console.log(`App is running`);
});
