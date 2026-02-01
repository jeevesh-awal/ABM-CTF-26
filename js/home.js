document.addEventListener('DOMContentLoaded', () => {
    const lines = [
        "Initializing core services...",
        "Loading kernel modules...",
    ];
    const terminalLines = document.getElementById('terminal-lines');
    const enterBtnContainer = document.getElementById('enter-btn-container');
    const mainTitle = document.getElementById('main-title');
    const subtitle = document.getElementById('subtitle');

    // Animate title and subtitle
    setTimeout(() => {
        if (mainTitle) {
            mainTitle.classList.remove('opacity-0', '-translate-y-5');
            mainTitle.classList.add('opacity-100', 'translate-y-0');
        }
    }, 100);

    setTimeout(() => {
        if (subtitle) {
            subtitle.classList.remove('opacity-0');
            subtitle.classList.add('opacity-100');
        }
    }, 600);

    // Terminal typing effect
    let lineIndex = 0;

    function addLine(text) {
        const div = document.createElement('div');
        div.className = "mb-1";
        div.innerHTML = `<span class="text-gray-500 mr-2">[${new Date().toLocaleTimeString()}]</span> ${text}`;
        terminalLines.appendChild(div);
    }

    // Initial lines
    lines.forEach(line => addLine(line));

    setTimeout(() => {
        addLine("System integrity check: PASSED");
    }, 800);

    setTimeout(() => {
        addLine("Connecting to secure server...");
    }, 1600);

    setTimeout(() => {
        addLine("Access Granted. Welcome, User.");
        if (enterBtnContainer) {
            enterBtnContainer.classList.remove('opacity-0');
            enterBtnContainer.classList.add('opacity-100');
        }
    }, 2400);
});
