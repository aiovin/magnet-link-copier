document.querySelectorAll('a[href^="magnet:"]').forEach(link => {
    const button = document.createElement("button");
    button.textContent = "Копировать";

    button.style.marginLeft = "10px";
    button.style.padding = "4px 8px";
    button.style.fontSize = "0.9em";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.backgroundColor = "#1975a3";
    button.style.color = "#FFFFFF";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";

    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#006699";
    });

    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#1975a3";
    });

    button.addEventListener("click", () => {
        navigator.clipboard.writeText(link.href).then(() => {
            const originalText = button.textContent;
            button.textContent = "Скопировано!";
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }).catch(err => {
            console.error("Ошибка копирования: ", err);
        });
    });

    link.parentNode.insertBefore(button, link.nextSibling);
});