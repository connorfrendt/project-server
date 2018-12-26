const router = require('express').Router();
// const request = require('superagent');

const RESTAURANT_API = 'http://api.civicapps.org';

router
  .get('/', (req, res) => {

    // make the request to the api (async)
    request.get(`${RESTAURANT_API}/restaurant-inspections/`)
      // then... send the response via res.json
      .then(response => {
        // superagent makes the response body available as "result.body"
        // we can transform/reshape the data as we want
        const restaurants = response.body.results.map(rest => {
          return {
            address: rest.address,
            name: rest.name,
            inspectionNumber: rest.inspection_number
          };
        });

        res.json(restaurants);
      });

  });

module.exports = router;