
async function sendToAI(prompt) {
    const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    return data.reply;
}

async function fetchQuote() {
    try {
        const res = await fetch('/api/quote');
        const data = await res.json();
        return data.quote;
    } catch(e) {
        return "Tidak dapat mengambil quote sekarang.";
    }
}
