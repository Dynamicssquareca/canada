import { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src, poster }) => {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [firstPlay, setFirstPlay] = useState(true);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setPlaying(true);
      setUserPaused(false);
    } else {
      video.pause();
      setPlaying(false);
      setUserPaused(true);
    }
  };

  const handleScroll = () => {
    const video = videoRef.current;

    if (video) {
      const videoRect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (videoRect.bottom <= 0 || videoRect.top >= windowHeight) {
        // Video is outside the window, pause it
        video.pause();
        setPlaying(false);
      } else if (videoRect.top >= 0 && videoRect.bottom <= windowHeight) {
        // Video is fully visible, play it
        if (!userPaused && firstPlay) {
          setTimeout(() => {
            video.play();
            setPlaying(true);
            setFirstPlay(false);
          }, 1000); // 2-second delay for the first play
        } else if (!userPaused) {
          video.play();
          setPlaying(true);
        }
      } else {
        // Video is partially visible, mute it
        video.muted = true;
        setMuted(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userPaused, firstPlay]);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        controls={false}
        width="100%"
        height="100%"
        playsInline
      ></video>
      <div className="back-dd">
        <div
          className={`play-button ${playing ? "hidden" : ""}`}
          onClick={handlePlayClick}
        >
          <div className="cent">
            <div className="left">
              <h3>
                We Relentlessly Seek
                <span>Change & Growth for Reshaping</span>
              </h3>
            </div>
            <div className="icon">
              <i className="bi bi-play-circle"></i>
              <span className="wave wave1"></span>
              <span className="wave wave2"></span>
              <span className="wave wave3"></span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .video-player {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 1;
        }

        .play-button.hidden {
          display: none;
        }

        .icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon .bi-play-circle {
          font-size: 3rem;
          color: #fff;
        }

        .wave {
          position: absolute;
          width: 120px;
          height: 120px;
        background: rgb(45 6 9 / 21%);
          border-radius: 50%;
          animation: wave 2.5s infinite;
        }

        .wave1 {
          animation-delay: 0s;
        }

        .wave2 {
          animation-delay: 0.5s;
        }

        .wave3 {
          animation-delay: 1s;
        }

        @keyframes wave {
         0% {
    -webkit-transform: scale(0.2, 0.2);
    transform: scale(0.2, 0.2);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
  50% {
    opacity: 0.9;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)";
  }
  100% {
    -webkit-transform: scale(0.9, 0.9);
    transform: scale(0.9, 0.9);
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  }
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
