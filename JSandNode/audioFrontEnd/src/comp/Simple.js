import { ReactMic } from 'react-mic';
import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import './simple.css';

export default class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }


  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

//   onData(recordedBlob) {
//     console.log('chunk of real-time data is: ', recordedBlob);
//   }
  onStop = (blobObject) => {
    const { setAudioPath } = this.props; // eslint-disable-line
    // console.info("onStop blobObject: ", blobObject);
    this.setState({
      blobURL: blobObject.blobURL
    });
    blobObject.blobURL = new Date();
    // console.info("blobObject: ", blobObject);
  };
  Player = () => (
    <AudioPlayer
      autoPlay
      src={this.state.blobURL}
      onPlay={e => console.log("onPlay")}
      // other props here
    />

  )

  render() {

    const {
        setAudioPath
      } = this.props;
    const summarize = (setAudioPath) => {
        console.log("setAudioPath: ", this.state.blobURL); 
        
    }
    return (
      <div className='audio'>
        <h1>Audio Input</h1>
        <div className='audio__container'>
          
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="blue"
            backgroundColor="white" 
            setAudioPath={setAudioPath}
            mimeType="audio/flac"
          />
          <br/>
          <br />
          <audio
            className='player'
            ref="audioSource"
            controls="controls"
            src={this.state.blobURL}
          />
          <br/>
          <br/>
          <button className='btn' onClick={this.startRecording} type="button">Start</button>
          <button className='btn' onClick={this.stopRecording} type="button">Stop</button>
          <button className='btn' onClick={summarize} type="button">Summarize</button>
        </div>
        <h1>Audio File</h1>
        <div className='audio__container'>
        <form>
            <label for="img">Select Audio</label>
            <input type="file" id="img" name="img" accept="image/*" required />
            <input className="btn" type="submit" value="Transcript"/>
        </form>

        </div>  
      </div>

    );
  }
}
