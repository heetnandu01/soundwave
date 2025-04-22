console.log("Lets write javascript")

async function main() {
    let a = await fetch("http://127.0.0.1:3000/soundwave/songs/")
    let response = await a.text()
    console.log(response)
}

main();