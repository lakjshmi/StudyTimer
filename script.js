document.addEventListener('DOMContentLoaded', () => {
    const fortyMinSessionsInput = document.getElementById('fortyMinSessions');
    const twentyMinSessionsInput = document.getElementById('twentyMinSessions');
    const addSessionsButton = document.getElementById('addSessionsButton');
    const sessionList = document.getElementById('sessionList');
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timerDisplay');
    const breakSound = document.getElementById('breakSound');
    const studySound = document.getElementById('studySound');

    let sessions = [];
    let currentSessionIndex = 0;
    let timer;

    addSessionsButton.addEventListener('click', () => {
        const fortyMinSessions = parseInt(fortyMinSessionsInput.value);
        const twentyMinSessions = parseInt(twentyMinSessionsInput.value);

        sessions = [];
        for (let i = 0; i < fortyMinSessions; i++) {
            sessions.push({ type: 'study', duration: 40 });
        }
        for (let i = 0; i < twentyMinSessions; i++) {
            sessions.push({ type: 'study', duration: 20 });
        }

        renderSessionList();
        startButton.disabled = sessions.length === 0;
    });

    function renderSessionList() {
        sessionList.innerHTML = '';
        sessions.forEach((session, index) => {
            const li = document.createElement('li');
            li.textContent = `${session.duration} min ${session.type}`;
            li.draggable = true;
            li.addEventListener('dragstart', (e) => dragStart(e, index));
            li.addEventListener('dragover', (e) => dragOver(e));
            li.addEventListener('drop', (e) => drop(e, index));
            sessionList.appendChild(li);
        });
    }

    let draggedIndex;

    function dragStart(e, index) {
        draggedIndex = index;
        e.dataTransfer.effectAllowed = 'move';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e, index) {
        e.preventDefault();
        const draggedSession = sessions[draggedIndex];
        sessions.splice(draggedIndex, 1);
        sessions.splice(index, 0, draggedSession);
        renderSessionList();
    }

    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        startNextSession();
    });

    function startNextSession() {
        if (currentSessionIndex >= sessions.length) {
            timerDisplay.textContent = 'All sessions completed!';
            return;
        }

        const currentSession = sessions[currentSessionIndex];
        if (currentSession.type === 'study') {
            studySound.play();
        } else {
            breakSound.play();
        }

        let duration = currentSession.duration * 60;
        timerDisplay.textContent = formatTime(duration);
        timer = setInterval(() => {
            duration--;
            timerDisplay.textContent = formatTime(duration);
            if (duration <= 0) {
                clearInterval(timer);
                if (currentSession.type === 'study') {
                    const breakDuration = currentSession.duration === 40 ? 10 : 5;
                    sessions.splice(currentSessionIndex + 1, 0, { type: 'break', duration: breakDuration });
                }
                currentSessionIndex++;
                startNextSession();
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
});
