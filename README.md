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
├── styles.css        # Placeholder for CSS (Add styling if required)  
├── script.js         # The JavaScript file handling app logic  
├── break-sound.mp3   # Audio file for break start (add your file here)  
├── study-sound.mp3   # Audio file for study start (add your file here)  
