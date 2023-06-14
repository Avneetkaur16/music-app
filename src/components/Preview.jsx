import React, { useEffect, useRef, useState } from 'react';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'
import { FaBackward, FaForward } from 'react-icons/fa';
import '../App.css'


const Preview = ({ preview }) => {
    // states
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(50)
    
    // references
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animation = useRef();
    const volumeBar = useRef();


    // useEffect to calculate the duration
    useEffect(() => {

        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);

        volumeBar.current.max = 100;

        progressBar.current.max = seconds;  // max of the range acc to the length of the song

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);



    const playingButton = () => {
        const prevValue = isPlaying;

        setIsPlaying(!prevValue);
        
        if(!prevValue) {
            audioPlayer.current.play();
            animation.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animation);
        }
    }

    const calculateTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const secs = Math.floor(seconds % 60);
        const returnedSeconds = secs < 10 ? `0${secs}` : secs;
        
        return `${returnedMinutes}:${returnedSeconds}`
    }

    const changeRange = () => {
        // get current time from audio player (built in) and set it equal to the current time(value) of the range(progressbar)
        audioPlayer.current.currentTime = progressBar.current.value;
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);

    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
        setCurrentTime(progressBar.current.value);
        animation.current = requestAnimationFrame(whilePlaying)
    }

    const backTen = () => {
        progressBar.current.value = progressBar.current.value - 10;
        changeRange();
    }

    const forwardTen = () => {
        progressBar.current.value = progressBar.current.value + 10;
        changeRange();
    }

    const changeVolume = () => {
        audioPlayer.current.volume = volumeBar.current.value / 100;
        setVolume(volumeBar.current.value)
    }

  return (
    <div className='flex flex-col absolute w-full h-[20vh] bottom-0 z-50 border-t border-neutral-500 py-5 bg-gradient-to-br from-neutral-800 to-gray400'>
        <audio src={preview} ref={audioPlayer} preload='metadata'/>

        <div className='mx-auto text-white text-4xl space-x-5'>
            <button onClick={backTen}><FaBackward /></button>
            <button onClick={playingButton}>{!isPlaying ? <BsPlayCircle /> : <BsPauseCircle />} </button>
            <button onClick={forwardTen}><FaForward /></button>
        </div>

        <div className='flex flex-col'>

            <div className='mx-auto w-[70%]'>
                <input className='progressBar' ref={progressBar} type="range" defaultValue={0} onChange={changeRange} />
            </div>

            <div className='flex w-[70%] mx-auto space-x-[51rem] justify-center text-white'>
                <div>{calculateTime(currentTime)}</div>
                <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>

            <div className='flex justify-start mx-[15%] mt-2 text-white items-center'>
                <span>Vol</span>
                <input className='mx-2 h-[4px]' type="range" ref={volumeBar} defaultValue={50} onChange={changeVolume} />
            </div>

        </div>

    </div>
  )
}

export default Preview