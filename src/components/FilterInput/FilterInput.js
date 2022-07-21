import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filterActions';
import { filterSelector } from 'redux/filter/filterSelector';
import s from './FilterInput.module.css';
import { useGetContactsQuery } from 'redux/contacts';

export default function FilterInput() {
  const { data } = useGetContactsQuery('', {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onInputFind = evt => {
    const stringForFilter = evt.target.value;
    dispatch(updateFilter(stringForFilter));
  };

  return (
    <>
      {data?.length ? (
        <label className={s.inputLabel}>
          Find contact by name
          <input
            className={s.filterInput}
            type="text"
            name="filter"
            value={filter}
            onChange={onInputFind}
          />
        </label>
      ) : (
        <p className={s.notification}>You haven't added any contact yet...</p>
      )}
    </>
  );
}
