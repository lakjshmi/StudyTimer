# Study Session Planner
A simple and interactive web application designed to help students manage their study sessions effectively. Built with HTML, CSS, and JavaScript, this app allows users to customize their study schedule, reorder sessions, and stay on track with audio alerts and automated break periods.

## Features
* Custom Session Planning:

  Choose between 20-minute and 40-minute study sessions. Use the input fields to select the desired number of sessions.

* Drag-and-Drop Reordering:

  Rearrange the sequence of sessions by simply dragging and dropping them in the list.

* Audio Alerts:

  Receive audio cues when a session begins or ends to stay focused without constantly checking the timer.

* Break Periods:

  Automatically scheduled breaks after each session:

  * 10-minute breaks after 40-minute sessions.
  * 5-minute breaks after 20-minute sessions.
* Real-Time Timer Display:

  A countdown timer tracks the remaining time for each session, helping you stay on schedule.

## How to use

1. Add Sessions:

    * Input the number of 20-minute and 40-minute sessions using the up/down arrows.
    * Click Add Sessions to populate the session list.

2. Rearrange Sessions:

    * Drag and drop sessions in the list to reorder them as per your preference.

3. Start Study Plan:

    * Click the Start Study Sessions button.
    * A timer will start for the first session, followed by a break, and will automatically move to the next session.

4. Audio Feedback:

    * Listen for distinct audio cues signaling the start of study or break periods.

5. Completion:

    * Once all sessions are completed, the timer will display a congratulatory message.

## Project Structure

Study Session Planner  
├── index.html        # The main HTML file  
├── styles.css        # For styling  
├── script.js         # The JavaScript file handling app logic  
├── break-sound.mp3   # Audio file for break start   
├── study-sound.mp3   # Audio file for session start

## Technologies Used
* HTML: For the app's structure and layout.
* CSS: For styling and visual enhancements.
* JavaScript: For dynamic functionality, including session handling, drag-and-drop, and timers.

## User Testing
To ensure usability, the app was tested by friends over a one-week period. Key feedback included:

* Drag-and-drop functionality being intuitive and helpful for reordering sessions.
* Audio alerts improving focus during study sessions.
* Suggestions to refine the timer display and improve UI aesthetics.

These insights were incorporated into the current version, enhancing user engagement and satisfaction.

## Future Features
* Add a polished UI with CSS for a better user experience.
* Enable session progress tracking or logging.
* Include an option to save and load session plans for recurring study schedules.


