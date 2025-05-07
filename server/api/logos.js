export default defineEventHandler(async () => {
  const res = await fetch('https://www.florencecrittenton.org/wp-json/api/logos')
  const data = await res.json()
  return data
})