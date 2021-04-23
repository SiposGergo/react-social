import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import users from "./users.json"
import posts from "./posts.json"

const mock = new MockAdapter(axios);

mock.onGet("https://jsonplaceholder.typicode.com/posts")
  .reply(200, posts);

mock.onGet("https://jsonplaceholder.typicode.com/users")
  .reply(200, users);

mock.onGet(/https:\/\/jsonplaceholder.typicode.com\/posts\/\d+\/comments/)
  .reply(config => [200, [{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "Teszt Teszt Teszt Teszt Teszt Teszt Teszt Teszt "
  }]])

mock.onGet(/https:\/\/jsonplaceholder.typicode.com\/posts\/\d+/)
  .reply(config => [
    200,
    posts.find(p => p.id == config.url.split('/').reverse()[0])
  ])

mock.onGet(/https:\/\/jsonplaceholder.typicode.com\/users\/\d+/)
  .reply(config => [
    200,
    users.find(p => p.id == config.url.split('/').reverse()[0])
  ])
