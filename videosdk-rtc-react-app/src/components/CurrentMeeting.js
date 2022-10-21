import React from "react";
import fetch from 'node-fetch';

// const options = {
// 	method: "GET",
// 	headers: {
// 		"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiOGJkNDFjNS1mMWMzLTQ3MDctOWMxMy00YjNjOTA5OTliMmMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NjA4MTc1NSwiZXhwIjoxNjY2Njg2NTU1fQ.KE3vJZRF8Poa2tHoZo8144Ai-DhEama8Br89cxnZ8bk",
// 		"Content-Type": "application/json",
// 	},
// };
// const url= `https://api.videosdk.live/v2/rooms`;
// const response = await fetch(url, options);
// const data = await response.json();
// console.log(data);

const CurrentMeeting = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary text-gradient rounded-[10px] outline-none ${styles}`}>
    Reload
  </button>
);

export default CurrentMeeting;
