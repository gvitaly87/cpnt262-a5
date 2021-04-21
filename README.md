# Fruit Gallery - JSON Routes with Heroku and MongoDB Atlas

## General Information

- Course: CPNT-262 - Web Client & Server Prog.
- Author: [Vitaly Gins](https://github.com/gvitaly87) - Repository owner and maintainer.
- GET Endpoints:
  - [GET /api/v0/images](https://vit-cpnt-262-a5.herokuapp.com/api/v0/images)
  - [GET /images/:id](https://vit-cpnt-262-a5.herokuapp.com/images/3)
- Github Links:
  - [GH repo](https://github.com/gvitaly87/cpnt262-a5)
  - [Deployed Heroku URL](https://vit-cpnt-262-a5.herokuapp.com/)

### Context

A three page fruit website, now fully working with MongoDB. The image api, as well as the individual image pages are generated using MongoDB, and the mongoose MongoDB object.

### Notes

- Error messages are fully displayed on the server console while providing the client with a generic code/message.
- The views use a template which then fills in the page content
- PathURL is replaced with imgName and imgExt.
- Can click images to stretch them to a full screen
- Decided against passing my routes function the Image model instead of requiring it. Not sure which is the better practice.

---

### Dependencies

- [Express](https://www.npmjs.com/package/express) Framework to handle the server side routing
- [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables
- [ejs](https://www.npmjs.com/package/ejs) In order to work with javascript templates to generate dynamic pages
- [dayJS](https://www.npmjs.com/package/dayjs) is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.
- [mongoose](https://www.npmjs.com/package/mongoose) Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

---

### Images

- peaches image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/bunch-of-peach-2363356/)
- watermelons image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/watermelons-2288692/)
- melons image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/4136869/)
- apples-red image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/4136829/)
- limes image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/4136712/)
- pears image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/2288697/)
- oranges image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/oranges-2288683/)
- plums image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/2288686/)
- pomelos image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/yello-fruits-lot-2286781/)
- bananas image by [Marco Antonio](https://www.pexels.com/@victorino) from [Pexels](https://www.pexels.com/photo/2286775/)
- header2.jpg image by [Andrea Piacquadio](https://www.pexels.com/@olly) from [Pexels](https://www.pexels.com/photo/photo-of-women-eating-watermelon-3760053/)

  - [Pexels License](https://www.pexels.com/license/)

### Content/text

- The descriptions for the images are from [Wikipedia](https://en.wikipedia.org/)
  - [Wikipedia Copyrights](https://en.wikipedia.org/wiki/Wikipedia:Copyrights)
