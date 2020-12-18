import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-bulma-components/full";
import mp3_file from './music/sounds_of_city.mp3';
import { Line, Circle } from 'rc-progress';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faPlay,
  faPause,
);

const placeholders = ["Study time", "Break time"];

const defaultTask = "Studying";

const headerTaskTimer = "Work time."
const headerBreakTimer = "Break time."

const defaultTaskTime = 25;
const defaultBreakTime = 5;

class App extends Component {
  constructor(props) {
    super(props)

    this.taskInputRef = React.createRef();
    this.countdownEvent = this.countdownEvent.bind(this);
    this.timer = 0;

    this.state = 
    {
      taskEdit: false,
      taskValue: defaultTask,
      timerTypeValue: headerTaskTimer,
      timeToPercent: '',

      playAlarm: false,
      alarm: new Audio(mp3_file),

      taskTime: defaultTaskTime,
      breakTime: defaultBreakTime,
      countdownTime: defaultTaskTime * 60,
      timerSwitch: false,
      timerRun: false,
      timeFirstRun: true,
    };
  }

  converTime(time) {
    //Minutes to seconds in this case.
    let value = time * 60;
    this.setState({ countdownTime: value });
  }

  //Setters
  setTaskTime(e) {
    this.setState({ taskTime: e.target.value });
    if (!this.state.timerSwitch) {
      this.converTime(e.target.value);
    }
      
  }

  setBreakTime(e) {
    this.setState({ breakTime: e.target.value });
    if (this.state.timerSwitch) {
      this.converTime(e.target.value);
    }
  }

  setTaskValue(e) {
    this.setState({ taskEdit: false });
    if (e.target.value !== "") {
      this.setState({ taskValue: e.target.value });
    }
  }

  ///Events

  //Enables the editing of the task when clicking the written word.
  onClickTask() { this.setState({ taskEdit: true }); }

  //The button that toggles the timer.
  onClickTimer() {
    //When the Start button is clicked, it runs the timer.
    if (this.state.timerRun === false) {
      this.setState({ timerRun: true });
      this.timer = setInterval(this.countdownEvent, 1000);
    }
    //When the Stop button is clicked, it stops the sound.
    else {
      this.setState({ timerRun: false });
      clearInterval(this.timer);

      if (this.state.playAlarm) {
        this.state.alarm.pause();
        this.setState({ alarm: new Audio(mp3_file) });
      }
    }

    //If the timer is switched (when you switch from work to break or opposite),
    //the new timer is asigned with the new header.
    if (this.state.timerSwitch) {
      this.setState({ timerTypeValue: headerBreakTimer });     
      if (this.state.countdownTime === 0)
        this.converTime(this.state.breakTime);
    }
    else {
      this.setState({ timerTypeValue: headerTaskTimer });     
      if (this.state.countdownTime === 0)
        this.converTime(this.state.taskTime);
    } 
  }  

  countdownEvent() {
    //All negative values forces the countdown to 0.
    if (this.state.countdownTime > 0) 
      this.setState({ countdownTime : this.state.countdownTime - 1 });
    else
      this.setState({ countdownTime : 0 });

    //When the timer is over, switches to the other one and triggers the sound.
    if (this.state.countdownTime === 0) { 
      clearInterval(this.timer);     
      this.setState({ playAlarm: true });
      this.state.alarm.play();

      if (this.state.timerSwitch) {
        this.setState({ timerSwitch: false });
      }
      else {
        this.setState({ timerSwitch: true });
      }

      this.setState({ timerTypeValue: "It's over!" });
    }
  }

  //App render
  render() {
    let styleInput = {
      width: 100
    }

    return (
      <div className="App">
		    <header className="App-header">

          <h1 class="title has-text-white">
            Pomodoro with React and Cordava
          </h1>

          <div class="task">
            {
              (!this.state.taskEdit) 
              ? 
                <p 
                  id="taskName" 
                  onClick={ this.onClickTask.bind(this) } 
                  class="taskName">{ this.state.taskValue } 
                </p>
              :
                <input 
                  class="input" 
                  type="text" 
                  ref={ this.taskInputRef } 
                  placeholder={ this.state.taskValue } 
                  onBlur={this.setTaskValue.bind(this)}
                />
            }
            <p class="popup help">Click in to change the task and click out to save.</p>
          </div>


          <div class="container">
            <div class="columns is-mobile">
              <div class="field column">
                <div class="control">
                  <p>{ this.state.taskValue }</p>
                  <input
                    style={ styleInput }
                    class="input" 
                    type="number" 
                    pattern="[0-9]*" 
                    value={ this.state.taskTime }
                    placeholder={ placeholders[0] } 
                    onInput={this.setTaskTime.bind(this)}
                  />
                  <p class="popup help">Enter { this.state.taskValue } time in minutes.</p>
                </div>
              </div> 

              <div class="field column">
                <div class="control">
                  <p>Break</p>
                  <input
                    style={ styleInput }
                    class="input" 
                    type="number" 
                    pattern="[0-9]*"  
                    value={ this.state.breakTime }
                    placeholder={ placeholders[1] }
                    onInput={this.setBreakTime.bind(this)}
                  />
                  <p class="popup help">Enter break time in minutes.</p>
                </div>               
              </div>
            </div>
          </div>
          
          <div class="container">
            <p>{ this.state.timerTypeValue }</p>
            <p id="timer">{ this.state.countdownTime }</p>
            
            <div id="circleWrapper">
              <Circle 
                text={ "test" }
                class="circle" 
                percent={ 
                  (this.state.timerSwitch) 
                  ?
                  ((this.state.countdownTime / (this.state.breakTime * 60)) * 100)
                  :
                  ((this.state.countdownTime / (this.state.taskTime * 60)) * 100)
                } 
                trailWidth="2"
                strokeWidth="2"
                strokeLinecap="square" 
                trailColor="#b21c1f"
                strokeColor="#fff" 
                style={{
                  text: { fill: '#f88', fontSize: '16px' },
                }}
              />
            </div>

            {/* The user can't leave a timer empty. */}
            {
            (this.state.taskTime !== "" && this.state.breakTime !== "") 
            ?
              <div id="buttonWrapper">
                <button 
                  id="timerRun" 
                  onClick={ this.onClickTimer.bind(this) }  
                  class="timerToggler">
                  <FontAwesomeIcon color="#ed4338" icon={!this.state.timerRun ? faPlay : faPause} />
                </button>   
              </div>
            :
              <div id="buttonWrapper"></div>
            }
            <p class="popup help">Don't forget to enter a task and break time above, in minutes.</p>
          </div>

        </header>
      </div>
    );
  }
  
  //Components
  componentDidMount () {

  }

  componentDidUpdate() {
    //Focus the mouse directly in the task input.
    if (this.state.taskEdit && this.taskInputRef.current != null) 
      this.taskInputRef.current.focus();
  }
}

export default App;
