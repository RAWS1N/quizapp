
async function fetchData() {
    // const res = await fetch("https://opentdb.com/api.php?amount=10")
    const res = await fetch('https://the-trivia-api.com/api/questions')
    const data = await res.json()
    return data
}


export default fetchData

