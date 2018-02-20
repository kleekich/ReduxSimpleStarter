import React from 'react';



const videoDetail = ({video}) => {
	const videoId = video.id.videoId;
	const url = `https://ww.youtube.com/embed/${videoId}`;
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div clasName="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			
			</div>
		</div>


	);

};

export default VideoDetail;