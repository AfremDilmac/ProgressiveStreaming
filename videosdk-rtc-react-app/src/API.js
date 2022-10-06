export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiOGJkNDFjNS1mMWMzLTQ3MDctOWMxMy00YjNjOTA5OTliMmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NTA1NzY1OCwiZXhwIjoxNjY1NjYyNDU4fQ.FSGhQOHd6eoZf9G1bKQxkFxmw_kBoDYyJsBVUn4ZmWc";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};

// API call to fetch latest downstream url for a meeting session
export const fetchHlsDownstreamUrl = async ({ meetingId }) => {
    const res = await fetch(
      `https://api.videosdk.live/v2/hls/?roomId=${meetingId}`,
      {
        method: "GET",
        headers: {
          authorization: `${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  
    const json = await res.json();
  
    const { downstreamUrl } = json?.data[0];
  
    return downstreamUrl;
  };