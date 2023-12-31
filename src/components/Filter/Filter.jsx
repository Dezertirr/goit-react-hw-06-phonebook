import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../Redux/slice/filterSlice';
import { getFilter } from '../../Redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
         value={filterValue}
        onChange={event => dispatch(updateFilter(event.target.value))}
      />
    </div>
  );
}
