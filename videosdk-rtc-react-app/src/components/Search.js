import React from 'react'
import Anthony from "../assets/people01.png"

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
        />
      </div>
        <div className="userChat">
          <img src={Anthony} alt="" />
          <div className="userChatInfo">
            <span>Anthonio bandera</span>
          </div>
        </div>
    </div>
  )
}

export default Search