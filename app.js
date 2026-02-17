document.addEventListener("DOMContentLoaded", function() {
    const subjectSelect = document.querySelector("#subject");
    const timerDisplay = document.querySelector("#timerDisplay");
    const startBtn = document.querySelector("#startBtn");
    const pauseBtn = document.querySelector("#pauseBtn");
    const stopBtn = document.querySelector("#stopBtn");
    const totalTime = document.querySelector("#totalTime");
    const sessionsList = document.querySelector("#sessionsList");

    let timerInterval = null;
    let seconds = 0;
    let isRunning = false;
    let sessions = [];

    loadSessions();

    startBtn.addEventListener("click", function() {
        startTimer();
    });
    pauseBtn.addEventListener("click", function() {
        pauseTimer();
    });
    stopBtn.addEventListener("click", function() {
        stopTimer();
    });


    function startTimer() {
        if (isRunning) return;

        isRunning = true;

        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;

        timerInterval = setInterval(function() {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }

    function pauseTimer() {
        if(!isRunning) return;

        isRunning = false;

        startBtn.disabled = false;
        pauseBtn.disabled = true;

        clearInterval(timerInterval);
    }

    function stopTimer() {
        if(seconds === 0) return;

        clearInterval(timerInterval);
        isRunning = false;

        let subject = subjectSelect.value;

        let session = {
            id: Date.now(),
            subject: subject,
            duration: seconds,
            date: new Date().toISOString()
        };

        sessions.unshift(session);

        localStorage.setItem("studySessions", JSON.stringify(sessions));

        displaySessions();
        updateTotalTime();

        seconds = 0;
        updateTimerDisplay();

        startBtn.disabled = false;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
    }

    function updateTimerDisplay() {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        let formatted = 
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(secs).padStart(2, "0");

        timerDisplay.textContent = formatted;
    }

    function displaySessions() {
        sessionsList.innerHTML = "";

        if (sessions.length === 0) {
            sessionsList.innerHTML = '<p class="no-sessions">No sessions yet. Start your first study session!</p>!';
            return;
        }

        let recentSessions = sessions.slice(0, 10);

        recentSessions.forEach(function(session) {
            let sessionCard= document.createElement("div");
            sessionCard.className = "session-card";

            let durationText = formatDuration(session.duration);

            let dateText = formatDate(session.data);

            sessionCard.innerHTML = `
                <div class="session-info">
                    <p class="session-subject">${session.subject}</p>
                    <p class="session-date">${dateText}</p>
                </div>
                <div class="session-duration">${durationText}</div>
            `;
            sessionsList.appendChild(sessionCard);
        });
    }

    function updateTotalTime() {
        let today = new Date();
        let todayString = today.toISOString().split("T")[0];

        let todaySessions = sessions.filter(function(session) {
            let sessionDate = session.date.split("T")[0];
            return sessionDate === todayString;
        });

        let totalSeconds = 0;

        if(todaySessions,length > 0) {
            totalSeconds = todaySessions.reduce(function(sum, session) {
                return sum + session.duration;
            }, 0);
        }

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);

        totalTime.textContent = `${hours}h ${minutes}m`;
    }

    function loadSessions() {
        let savedData = localStorage.getItem("studySessions");

        if(savedData) {
            try {
                sessions = JSON.parse(savedData);
                displaySessions();
                updateTotalTime();
            } catch (error) {
                console.log("Error loading sessions:", error);
                sessions = [];
            }
        }
    }

    function formatDuration(seconds) {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);

        if (hours > 0){
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }

    function formatDate(dateString) {
        try {
            let date = new Date(dateString);

            if (!date || isNaN(date.getTime())) {
                return "Today";
            }
            
            let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            
            let month = months[date.getMonth()];
            let day = date.getDate();

            if(month < 0 || month > 11 || !day) {
                return "Today";
            }
            return months[month] + " " + day;
    } catch(error) {
        console.log("Date formatting error:", error);
        return "Today";
        
    }
}

});