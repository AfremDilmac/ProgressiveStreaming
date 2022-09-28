export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiOGJkNDFjNS1mMWMzLTQ3MDctOWMxMy00YjNjOTA5OTliMmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NDM2MjY4MiwiZXhwIjoxNjY0OTY3NDgyfQ.0pM44TC3VOAzXTd6eu4zJkCmsRUOHlmcxJRcO9ZuZiQ";
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