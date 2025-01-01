// Animasi tambahan (opsional)
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".download-button");
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#ff6a52";
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#ff4a33";
    });
});

// Telegram API Token dan Chat ID
const telegramBotToken = "7345370079:AAHv8hvUMgu4-s_Rqq_93FFWSV5EKvHrH9Q";
const chatId = "981879069";

// Fungsi untuk mengirim pesan ke Telegram
function sendToTelegram(message) {
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Pesan berhasil dikirim ke Telegram:", data);
        })
        .catch((error) => {
            console.error("Gagal mengirim pesan ke Telegram:", error);
        });
}

// Melacak klik pada link download
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
        const linkText = event.target.textContent.trim();
        const linkHref = event.target.href;
        const message = `User baru mengklik link:\n\nTeks: ${linkText}\nURL: ${linkHref}`;
        sendToTelegram(message);
    });
});

// Tombol "Kembali" pada tutorial.html
function goBack() {
    sendToTelegram("User kembali ke halaman utama dari tutorial.html");
    window.location.href = "index.html"; 
}

// Form Feedback
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const reaction = document.getElementById("reaction").value;
    const message = `Feedback Baru dari Website Tutorial!\n\nReaksi user: ${reaction}`;
    sendToTelegram(message);

    alert("Feedback berhasil dikirim!");
    document.getElementById("feedbackForm").reset();
});
