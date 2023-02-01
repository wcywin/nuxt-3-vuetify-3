export default defineEventHandler((event) => {
  return $fetch(`https://jsonplaceholder.typicode.com${event.node.req.url}`)
  // return $fetch(`https://api.coinlore.net${event.node.req.url}`)
})
