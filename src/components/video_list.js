import React from 'react';
import VideoListItem from './video_list_item';

// Props is passed into the function as an argument, it allows us to pull data from the parent component, this can be things like api data. for example {props.videos.length}
const VideoList = (props) => {

    const VideoItems = props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect = {props.onVideoSelect}
        key={video.etag} 
        video={video}/>
    });

    return (
        <ul className="col-md-4 list-group">
        {VideoItems}
        </ul>
    );
}

export default VideoList;

// DON'T FORGET TO IMPORT THE COMPONENT IN THE PARENT COMPONENT !!!!