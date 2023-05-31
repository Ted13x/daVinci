import React from 'react';

const VideoFields = ({ videos, handleAddVideo, handleVideoChange, handleRemoveVideo }) => {
    return (
        <>
            {videos.map((video, index) => (
                <div key={index}>
                    <br/>
                    <h4>Video #{index + 1}</h4>
                    <label>
                        URL:
                        <br/>
                        <input type="text" name="url" value={video.url} onChange={(e) => handleVideoChange(index, e)} required />
                    </label>
                    <label>
                        Size:
                        <br/>
                        <input type="text" name="size" value={video.size} onChange={(e) => handleVideoChange(index, e)} required />
                    </label>
                    <label>
                        Type:
                        <br/>
                        <input type="text" name="type" value={video.type} onChange={(e) => handleVideoChange(index, e)} required />
                    </label>
                    <br/>
                    <button type="button" onClick={() => handleRemoveVideo(index)}>Remove Video</button>
                    <br/>
                    <button type="button" onClick={() => handleAddVideo(index)}>Add Video</button>
                </div>
            ))}
        </>
    );
}

export default VideoFields;