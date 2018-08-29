import React from 'react';

export default function SearchForm(props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>Search</label>
      <input 
        type="search" 
        placeholder="Search for a task!"
        onChange={e => props.onChange(e.target.value)}/>
    </form>
  )

}