function animateInputToMemory(sourceInputId, sourceInputValue, targetInputId) {
    const sourceInput = document.getElementById(sourceInputId);
    const targetInput = document.getElementById(targetInputId);

    const sourceRect = sourceInput.getBoundingClientRect();
    const targetRect = targetInput.getBoundingClientRect();

    const animDiv = document.createElement("div");
    animDiv.textContent = sourceInputValue;
    animDiv.style.position = "absolute";
    animDiv.style.left = `${sourceRect.left}px`;
    animDiv.style.top = `${sourceRect.top}px`;

    animDiv.style.width = `167px`;
    animDiv.style.height = `17px`;
    animDiv.style.padding = `1px 2px`;

    animDiv.style.fontFamily = "Courier New";
    animDiv.style.backgroundColor = "#000000";
    animDiv.style.color = "#00bceb"
    animDiv.style.border = "1px solid #00bceb";

    animDiv.style.display = "flex";
    animDiv.style.justifyContent = "left";
    animDiv.style.alignItems = "center";
    animDiv.style.transition = "all 0.8s ease-in-out";
    animDiv.style.zIndex = 999;

    document.body.appendChild(animDiv);

    requestAnimationFrame(() => {
        animDiv.style.left = `${targetRect.left}px`;
        animDiv.style.top = `${targetRect.top}px`;
    });

    setTimeout(() => {
        targetInput.value = sourceInputValue;
        document.body.removeChild(animDiv);
    }, 1800);
}