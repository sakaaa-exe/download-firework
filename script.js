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

function goBack() {
    window.location.href = "index.html"; 
}

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const reaction = document.getElementById("reaction").value;

    const message = `Feedback Baru dari Website Tutorial!\n\nReaksi user : ${reaction}`;

    const telegramBotToken = "7345370079:AAHv8hvUMgu4-s_Rqq_93FFWSV5EKvHrH9Q";
    const chatId = "981879069"; 

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
            alert("Feedback berhasil dikirim!");
            document.getElementById("feedbackForm").reset();
        })
        .catch((error) => {
            alert("Terjadi kesalahan saat mengirim feedback.");
            console.error("Error:", error);
        });
});

