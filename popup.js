window.addEventListener("load", function () {
    setTimeout(function () {
        const popup = document.createElement("div");
        popup.id = "applepay-popup";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.padding = "20px";
        popup.style.backgroundColor = "#f9f9f9";
        popup.style.border = "1px solid #ccc";
        popup.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
        popup.style.zIndex = "9999";
        popup.style.textAlign = "center";
        popup.style.borderRadius = "10px";
        popup.style.maxWidth = "300px";

        popup.innerHTML = `
            <h3>Apple Pay Support</h3>
            <p><strong>888-717-9003</strong><br>This is the toll-free number of Apple Pay customer service.</p>
            <button onclick="document.getElementById('applepay-popup').remove()" style="margin-top: 10px; padding: 8px 16px;">Close</button>
        `;

        document.body.appendChild(popup);
    }, 3000);
});
