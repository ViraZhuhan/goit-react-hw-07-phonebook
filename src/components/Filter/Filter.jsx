import { filterContacts } from 'redux/filter/sliceFilter';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
  };

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="text" onChange={changeFilter} value={filter} name="filter" />
    </>
  );
};

export default Filter;
