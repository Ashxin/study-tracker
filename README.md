# 📚 Study Tracker

A web-based study timer application that helps students track their study sessions across different subjects with real-time timer functionality and session history.

![Study Tracker Demo]
<img width="1424" height="915" alt="image" src="https://github.com/user-attachments/assets/f1173250-ab71-4a60-9808-864a00424d32" />


## 🌟 Features

- ⏱️ **Real-time Timer** - Start, pause, and stop study sessions with accurate time tracking
- 📊 **Session Tracking** - Automatically saves completed study sessions
- 📈 **Daily Statistics** - View total study time for the current day
- 🎯 **Subject Selection** - Organize sessions by different subjects
- 💾 **Persistent Storage** - All data saved locally using localStorage
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6)** - Core functionality and timer logic
- **localStorage API** - Client-side data persistence
- **Git** - Version control
- **GitHub** - Code hosting and portfolio

## 🚀 How to Use

1. **Clone or download this repository**
```bash
   git clone https://github.com/Ashxin/study-tracker.git
```

2. **Open `index.html` in your browser**
   - No installation or build process required!
   - Works completely offline

3. **Start tracking your study sessions:**
   - Select a subject from the dropdown
   - Click "Start" to begin timing
   - Click "Pause" to take breaks
   - Click "Stop" to save the session

## 📂 Project Structure
```
study-tracker/
├── index.html       # Main HTML structure
├── style.css        # Styling and layout
├── app.js           # Timer logic and functionality
└── README.md        # Project documentation
```

## 💡 What I Learned

This project helped me understand and practice:

- **setInterval() & clearInterval()** - Managing timers in JavaScript
- **State Management** - Tracking timer state (running, paused, stopped)
- **Time Calculations** - Converting seconds to hours:minutes:seconds format
- **Array Methods** - Using filter(), reduce(), forEach() for data processing
- **localStorage** - Persisting data across browser sessions
- **Git Workflow** - Version control with meaningful commits
- **DOM Manipulation** - Dynamically creating and updating elements
- **Event Handling** - Managing button clicks and user interactions

## 🎯 Key Concepts Demonstrated

### Timer Implementation
```javascript
let timerInterval = setInterval(function() {
    seconds++;
    updateTimerDisplay();
}, 1000);  // Runs every 1 second
```

### Time Formatting
```javascript
let hours = Math.floor(seconds / 3600);
let minutes = Math.floor((seconds % 3600) / 60);
let secs = seconds % 60;
```

### Data Persistence
```javascript
localStorage.setItem("studySessions", JSON.stringify(sessions));
```

## 🔮 Future Enhancements

Ideas for future versions:

- [ ] Weekly/monthly study statistics
- [ ] Visual charts and graphs (Chart.js integration)
- [ ] Study goals and targets
- [ ] Pomodoro timer mode (25 min work, 5 min break)
- [ ] Export data to CSV
- [ ] Subject-wise time breakdown
- [ ] Study streak tracking
- [ ] Dark mode toggle
- [ ] Sound notifications
- [ ] Custom subject categories

## 📊 Session Data Structure
```javascript
{
    id: 1707498600000,           // Unique timestamp
    subject: "Mathematics",       // Selected subject
    duration: 2700,              // Duration in seconds (45 minutes)
    date: "2026-02-16T18:30:00.000Z"  // ISO timestamp
}
```

## 🧪 Testing

To test the application:

1. Start a timer and verify it counts up correctly
2. Pause the timer and verify it stops
3. Resume the timer and verify it continues from where it stopped
4. Stop the timer and verify the session saves
5. Refresh the page and verify sessions persist
6. Check that "Today's Study Time" updates correctly

## 📝 Development Notes

- Built as part of a learning journey to master JavaScript fundamentals
- Each feature was committed separately to maintain clean Git history
- Focus on vanilla JavaScript - no frameworks or libraries
- Emphasis on code readability and documentation

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome! Feel free to:

- Open an issue for bugs or feature requests
- Fork the repository and experiment
- Share your improvements

## 👨‍💻 About the Developer

Built by Aswin Kumar B as part of a comprehensive JavaScript learning path, covering:
- Daily Focus App (state management, localStorage)
- Mood Tracker (arrays, data grouping)
- Money Tracker (calculations, data aggregation)
- Study Tracker (timers, real-time updates)
   
**GitHub:** https://github.com/Ashxin

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**⭐ If you find this project helpful, please give it a star on GitHub!**

*Last updated: February 2026*
