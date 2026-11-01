async function fetchData() {
    try {
        console.log("start fetching data");

        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!postsResponse.ok) {
            throw new Error(`HTTP ERROR: ${postsResponse.status}`);
        }
        const posts = await postsResponse.json();
        console.log("posts:", posts);

        const localResponse = await fetch('./main.json');
        if (!localResponse.ok) {
            throw new Error(`HTTP ERROR: ${localResponse.status}`);
        }
        const local = await localResponse.json();
        console.log("local:", local);
    } catch (error) {
        console.error("Fetch failed:", error.message);
    }
}

fetchData();