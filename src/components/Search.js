import React from 'react'

export default function Search() {
  return (
    <div className="search-wrapper">
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search..."
        />
      </label>
    </div>
  )
}
