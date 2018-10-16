const data = {

  "id": "WavvLdfdP6g8aZTtbBQHTw",
  "alias": "gary-danko-san-francisco",
  "name": "Gary Danko",
  "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/--8oiPVp0AsjoWHqaY1rDQ/o.jpg",
  "is_claimed": false,
  "is_closed": false,
  "url": "https://www.yelp.com/biz/gary-danko-san-francisco",
  "price": "$$$$",
  "rating": 4.5,
  "review_count": 4521,
  "phone": "+14152520800",
  "photos": [
    "http://s3-media3.fl.yelpcdn.com/bphoto/--8oiPVp0AsjoWHqaY1rDQ/o.jpg",
    "http://s3-media2.fl.yelpcdn.com/bphoto/ybXbObsm7QGw3SGPA1_WXA/o.jpg",
    "http://s3-media3.fl.yelpcdn.com/bphoto/7rZ061Wm4tRZ-iwAhkRSFA/o.jpg"
  ],
  "hours": [
    {
      "hours_type": "REGULAR",
      "open": [
        {
          "is_overnight": false,
          "end": "2200",
          "day": 0,
          "start": "1730"
        },
        {
          "is_overnight": false,
          "end": "2200",
          "day": 1,
          "start": "1730"
        },
        {
          "is_overnight": false,
          "end": "2200",
          "day": 2,
          "start": "1730"
        },
        {
          "is_overnight": false,
          "end": "2200",
          "day": 3,
          "start": "1730"
        },
        {
          "is_overnight": false,
          "end": "2200",
          "day": 4,
          "start": "1730"
        },
        {
          "is_overnight": false,
          "end": "2200",
          "day": 5,
          "start": "1730"
        },
        {
          "is_overnight": false,
          "end": "2200",
          "day": 6,
          "start": "1730"
        }
      ],
      "is_open_now": false
    }
  ],
  "categories": [
    {
      "alias": "newamerican",
      "title": "American (New)"
    }
  ],
  "coordinates": {
    "latitude": 37.80587,
    "longitude": -122.42058
  },

  "location": {
    "address1": "800 N Point St",
    "address2": "",
    "address3": "",
    "city": "San Francisco",
    "state": "CA",
    "zip_code": "94109",
    "country": "US",
    "display_address": [
      "800 N Point St",
      "San Francisco, CA 94109"
    ],
    "cross_streets": "Hyde St & Larkin St"
  },
  "transactions": ["restaurant_reservation"]
}

export function getListYelpData (id) {
  if (id) {
    return fetch(`https://api.yelp.com/v3/businesses/${id}`, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer bTCZl3M-_amKqI93FmeRYEroM3KDSbpoBde6J87SYf4ndyUzrpbZYR6ZuOXQZw5YVk5eb8OHjeWXZVlzu32mnxkw8YH-8uDnUPiUtB1aCoaNHrIYp-YdVFhnLUvFW3Yx"
      }
    });    
  } else {
    return data;
  }
}