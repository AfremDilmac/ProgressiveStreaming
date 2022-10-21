import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { authToken, createMeeting, fetchHlsDownstreamUrl} from "../API";
import ReactPlayer from "react-player";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const onClick = async () => {
    await getMeetingAndToken(meetingId);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button onClick={onClick}>Join</button>
      {" or "}
      <button onClick={onClick} type="button" class="text-white bg-gradient-to-r w-max from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create Meeting</button>
    </div>
  );
}
function HLSJoinScreen({ onDownstreamUrl }) {
  
  const [meetingId, setMeetingId] = useState(null);
  const handleOnClick = async (meetingId) => {
    const downstreamUrl = await fetchHlsDownstreamUrl({ meetingId });

    onDownstreamUrl(downstreamUrl);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Meeting Id"
        onChange={(e) => {
          setMeetingId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleOnClick(meetingId);
        }}
      >
        Join
      </button>
    </div>
  );
}

function VideoComponent(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
    props.participantId
  );

  const videoStream = useMemo(() => {
    if (webcamOn) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div key={props.participantId}>
      {micOn && micRef && <audio ref={micRef} autoPlay />}
      {webcamOn && (
        <ReactPlayer
          //
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={true}
          muted={true}
          playing={true}
          //
          url={videoStream}
          //
          height={"180px"}
          width={"320px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div>
      <button onClick={leave}>Leave</button>
      <button onClick={toggleMic}>toggleMic</button>
      <button onClick={toggleWebcam}>toggleWebcam</button>
    </div>
  );
}

function Container(props) {
  const [joined, setJoined] = useState(false);
  const { join, startHls } = useMeeting({
    onMeetingJoined : () => {
      startHls();
    },
    onHlsStarted : downstreamUrl => {
      console.log(downstreamUrl)
    }
  });

  const { participants } = useMeeting();
  const joinMeeting = () => {
    setJoined(true);
    join();
  };

  return (
    <div className="container">
      <h3>Meeting Id: {props.meetingId}</h3>
      {joined ? (
        <div>
          <Controls />
          {[...participants.keys()].map((participantId) => (
            <VideoComponent participantId={participantId} />
          ))}
        </div>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
}

function MeetingContainer () {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: false,
        webcamEnabled: false,
        name: "Afrem",
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => <Container meetingId={meetingId} />}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

function HLSPlayer({url, handleOnLeave}) {
  return( 
  <>
  <button onClick={handleOnLeave}>
    Leave
  </button>
  <ReactPlayer
   playing={true}
   playsinline
   height={"70%"}
   width={"60%"}
   url={url}
  />
  </>
  );
}

function HLSContainer() {
  const [downstreamUrl, setDownstreamUrl] = useState("");

  const isJoined = useMemo(() => !!downstreamUrl, [downstreamUrl]);

  return isJoined ? (
    <HLSPlayer
      url={downstreamUrl}
      handleOnLeave={() => {
        setDownstreamUrl("");
      }}
    />
  ) : (
    <HLSJoinScreen
      onDownstreamUrl={(_downstreamUrl) => {
        setDownstreamUrl(_downstreamUrl);
      }}
    />
  );
}

const CreateMeeting = () => {
  const [mode, setMode] = useState("host")
const isHost = useMemo(() => mode ==='host', [mode])
  return (
      <> 
  <button onClick={() => {
    setMode(s => {
      return s === "host" ? "viewer" : "host";
    });
  }}
  >
    {isHost ? "Join as Viewer" : "Join as Host"}
  </button>
  {isHost ? <MeetingContainer /> : <HLSContainer />}
  </>
  )
}

export default CreateMeeting