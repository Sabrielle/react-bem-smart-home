import React, { Component } from 'react';
import './Video.css';
import initVideo from './Init'
import { cn } from '@bem-react/classname';

const cnVideo = cn('Video');

class Video extends Component {
    componentDidMount() {
        const video = document.getElementById(`video-${this.props.id}`);
        initVideo(video, this.props.id);
    }
    render() {
        return (
            <video 
                className={cnVideo()}
                id={`video-${this.props.id}`}
                controls 
                muted 
                autoPlay
                onClick={this.props.onClick}
                >
            </video>
        );
  }
}

export default Video;
