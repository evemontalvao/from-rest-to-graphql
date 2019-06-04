const axios = require('axios')
const url = 'http://localhost:4000/graphql'

const query = `{
  users {
    id
    name
    username
  }
}`

const options = {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({ query }),
  url
}

axios(options)
  .then(({ data: { data } }) => {
    console.log(data.users)
  })
  .catch(err => {
    console.log(err)
  })
