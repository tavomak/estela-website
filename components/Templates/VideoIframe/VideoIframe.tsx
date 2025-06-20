import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  videoId: string;
  controls?: boolean;
  muted?: boolean;
};

const isNumber = (value: string) => !Number.isNaN(Number(value));

const VideoIframe: FC<Props> = ({
  videoId,
  controls = false,
  muted = false,
}) => (
  <figure className="object-contain overflow-hidden relative w-full h-full aspect-video">
    <div className={styles.videoBackground}>
      <div className={styles.videoForeground}>
        {isNumber(videoId) ? (
          <iframe
            title="vimeo-player"
            src={`https://player.vimeo.com/video/${videoId}?${controls ? 'autoplay=1&loop=1&badge=1&autopause=1' : 'autoplay=1&loop=1&autopause=0&background=1&controls=0'} ${muted ? '&muted=1' : ''}`}
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            className="object-contain absolute top-0 left-0 w-full h-full"
          />
        ) : (
          <iframe
            title="youtube-player"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1${muted ? '&mute=1' : '&mute=0'}&enablejsapi=1&loop=1${controls ? '&controls=1' : '&controls=0'}&playlist=${videoId}`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="object-contain absolute top-0 left-0 w-full h-full pointer-events-none"
          />
        )}
      </div>
    </div>
  </figure>
);

export default VideoIframe;
