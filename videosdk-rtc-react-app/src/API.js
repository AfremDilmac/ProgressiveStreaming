export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiOGJkNDFjNS1mMWMzLTQ3MDctOWMxMy00YjNjOTA5OTliMmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NjA4MTc1NSwiZXhwIjoxNjY2Njg2NTU1fQ.KE3vJZRF8Poa2tHoZo8144Ai-DhEama8Br89cxnZ8bk";
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