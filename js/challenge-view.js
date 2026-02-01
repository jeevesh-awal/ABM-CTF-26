
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const container = document.getElementById('challenge-content');
    const titleId = document.getElementById('challenge-id');

    if (titleId) titleId.textContent = id;
    if (!container) return;

    if (!id) {
        container.innerHTML = '<div class="text-red-500">Error: No challenge ID specified.</div>';
        return;
    }

    // Render Challenge Content
    switch (id) {
        case '0x01': renderChallenge1(container); break;
        case '0x02': renderChallenge2(container); break;
        case '0x03': renderChallenge3(container); break;
        case '0x04': renderChallenge4(container); break;
        case '0x05': renderChallenge5(container); break;
        case '0x06': renderChallenge6(container); break;
        case '0x07': renderChallenge7(container); break;
        case '0x08': renderChallenge8(container); break;
        case '0x09': renderChallenge9(container); break;
        case '0x10': renderChallenge10(container); break;
        default: container.innerHTML = '<div class="text-red-500">Error: Module not found.</div>';
    }

    if (window.lucide) window.lucide.createIcons();
});



// Challenge 1: Hidden Comments

function renderChallenge1(container) {
    // Puzzle String from script: DHWAr2tkMTDmoy8koy9wZT1gZ250p30=
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Hidden Comments</h3>
                <p class="mb-4 text-gray-400">
                    The void speaks in silence.
                    What is written but never shown?
                </p>
                <!-- HIDDEN FLAG: DHWAr2tkMTDmoy8koy9wZT1gZ250p30= -->
                <div class="p-4 bg-black border border-gray-800 rounded text-center text-gray-600">
                    (Nothing to see here directly. Use DevTools.)
                </div>
            </div>
        </div>
    `;

}

// Challenge 2: Data Miner

function renderChallenge2(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Data Miner</h3>
                    Attributes of the unseen define the reality.
                    Look beyond the tag.
                
                <div id="artifact-container" data-secret="41424q7o6q3374345s643474345s7333637233747q" class="p-8 bg-black border border-gray-800 rounded text-center">
                    <i data-lucide="search" class="w-12 h-12 text-gray-700 mx-auto mb-2"></i>
                    <div class="text-gray-600 text-sm">Target Element</div>
                </div>
            </div>
        </div>
    `;

}

// Challenge 3: Rotated Hash

function renderChallenge3(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Rotated Hash</h3>
                    A standard digest, yet it spins 13 times before resting.
                    Crack the shell.
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-cyan-500 text-center break-all select-all">
                    482p811qn5q5o4op6q497ssn98491r38
                </div>
            </div>
        </div>
    `;

}

// Challenge 4: Twisted Base

function renderChallenge4(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Twisted Base</h3>
                <p class="mb-4 text-gray-400">
                    The foundation is familiar, but the alphabet has migrated.
                    Perspective is key.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-purple-400 text-center break-all select-all">
                    DHWAr2V0pmZ2AS9lZUD0qQAxsD==
                </div>
            </div>
        </div>
    `;

}

// Challenge 5: Onion Layer

function renderChallenge5(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Onion Layer</h3>
                <p class="mb-4 text-gray-400">
                    Peel the layers. The rot is deep within the heart.
                    Three steps to the core.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-yellow-500 text-center break-all select-all">
                    Gx9nr3x0oQAyMy8jp18jLGRjLK0=
                </div>
            </div>
        </div>
    `;

}

// Challenge 6: Reverse Hex

function renderChallenge6(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Reverse Hex</h3>
                <p class="mb-4 text-gray-400">
                    Mirrors and rotations.
                    The hex speaks in reverse.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-blue-400 text-center break-all select-all">
                    7q7833685s7430725s337372337633727o4q4241
                </div>
            </div>
        </div>
    `;

}

// Challenge 7: Binary Shift

function renderChallenge7(container) {
    const bin = "01001110 01001111 01011010 01111011 01101111 00110001 01100001 00110100 01100101 01101100 01011111 01100101 00110000 01100111 00110001 00110011 01111101";
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Binary Shift</h3>
                <p class="mb-4 text-gray-400">
                    The language of machines, displaced by a baker's dozen.
                    0 and 1 know no alphabet, yet they shift.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-green-500 text-xs md:text-sm text-center break-all select-all leading-loose">
                    ${bin}
                </div>
            </div>
        </div>
    `;

}

// Challenge 8: Rotated SHA

function renderChallenge8(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Rotated SHA</h3>
                <p class="mb-4 text-gray-400">
                    256 bits of security, compromised by a simple rotation.
                    Unspin the digest.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-red-400 text-center break-all select-all text-sm">
                    6n934o45144r3758911rsn29rq68so2q420sn7oq568739pqpqn9251sn9609o1r
                </div>
            </div>
        </div>
    `;

}

// Challenge 9: Chain Reaction

function renderChallenge9(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">Chain Reaction</h3>
                <p class="mb-4 text-gray-400">
                    A chain of events.
                    Decode the base, shift the cipher, decode the hex.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-purple-500 text-center break-all select-all">
                    NDE0MjRxN282MzY4MzQzMTZyNXM3MjMzMzQ2Mzc0MzEzMDZyN3E=
                </div>
            </div>
        </div>
    `;

}

// Challenge 10: The Ultimate

function renderChallenge10(container) {
    container.innerHTML = `
        <div class="space-y-6 text-cyan-400">
            <div class="bg-gray-900 p-6 rounded border border-cyan-500/30">
                <h3 class="font-bold text-lg mb-2 text-white">The Ultimate</h3>
                <p class="mb-4 text-gray-400">
                    The Ouroboros.
                    A serpent of encoding eating its own tail in reverse.
                    Five steps back to reality.
                </p>
                <div class="bg-black p-4 rounded border border-gray-700 font-mono text-orange-500 text-center break-all select-all text-sm">
                    OTNuNDMzcTRvNjI0bjc5NW43MTUyMzg1bjcxNTg0cjQ0NzY0NDQ0NjM3NjUzMzU2cjRuNDU1MTU=
                </div>
            </div>
        </div>
    `;

}
