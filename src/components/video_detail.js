import React from 'react';

const VideoDetail = ({ video }) => {      // Notice we could have written (props) inside the functions argument, but passing the video object cleans up our code so we dont have to write this.props.video

    if (!video) {
        return <div>Loading ...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;     // This allows us to embed any youtube video as long as we know the videoId



    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;