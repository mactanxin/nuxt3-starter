export default defineEventHandler(async (event) => {
  console.log('event: ', event)
  const { name } = getQuery(event)

  const { age } = await readBody(event)
  console.log('name: ', name, ' age: ', age)
  return {
    message: `ninja:  ${name} + ${age}`
  }
})
