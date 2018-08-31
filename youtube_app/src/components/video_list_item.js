import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // ES6 magic: const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;

    const onClick = function() {
        console.log('click');
        console.log(video);
        console.log(onVideoSelect);
        // () => onVideoSelect(video)
        onVideoSelect(video);
    };

    return (
        <li onClick={onClick} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        { title }
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;