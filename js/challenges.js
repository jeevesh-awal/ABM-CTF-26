document.addEventListener('DOMContentLoaded', () => {
    const challenges = [
        { id: "0x01", title: "Hidden Comments", description: "Inspect the source. The truth is hidden in the remarks.", difficulty: "Medium", solved: false },
        { id: "0x02", title: "Data Miner", description: "Attributes hold secrets. Dig deep into the DOM.", difficulty: "Medium", solved: false },
        { id: "0x03", title: "Rotated Hash", description: "Standard MD5, but with a twist (literally).", difficulty: "Hard", solved: false },
        { id: "0x04", title: "Twisted Base", description: "Base64 encoding, dragged through the cipher.", difficulty: "Hard", solved: false },
        { id: "0x05", title: "Onion Layer", description: "Peel back the layers: ROT13 -> Base64 -> ROT13.", difficulty: "Hard", solved: false },
        { id: "0x06", title: "Reverse Hex", description: "Backwards and shifted. Hex -> Reverse -> ROT13.", difficulty: "Hard", solved: false },
        { id: "0x07", title: "Binary Shift", description: "The language of machines, encoded in cipher.", difficulty: "Hard", solved: false },
        { id: "0x08", title: "Rotated SHA", description: "A secure hash, rotated by 13 positions. Crack it.", difficulty: "Extreme", solved: false },
        { id: "0x09", title: "Chain Reaction", description: "Base64 -> ROT13 -> Hex. Follow the chain.", difficulty: "Extreme", solved: false },
        { id: "0x10", title: "The Ultimate", description: "The final test. A complex encoding pipeline.", difficulty: "Insane", solved: false },
    ];

    const grid = document.getElementById('challenges-grid');
    if (!grid) return;

    challenges.forEach(c => {
        const card = document.createElement('a');
        card.href = `challenge.html?id=${c.id}`;
        card.className = "block border border-cyan-500/20 bg-gray-900/50 p-6 rounded cursor-pointer relative overflow-hidden group hover:border-cyan-500/50 transition-colors";

        const lockIcon = c.solved
            ? `<i data-lucide="unlock" class="text-cyan-500"></i>`
            : `<i data-lucide="lock" class="text-red-500"></i>`;

        card.innerHTML = `
            <div class="absolute top-0 right-0 p-4">
                ${lockIcon}
            </div>

            <div class="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-2 font-mono uppercase tracking-widest">
                <i data-lucide="hash" class="w-3 h-3"></i> ID: ${c.id} • ${c.difficulty}
            </div>

            <h3 class="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300">${c.title}</h3>
            <p class="text-gray-400 text-sm">${c.description}</p>

            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/50 transition-all"></div>
        `;

        grid.appendChild(card);
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
