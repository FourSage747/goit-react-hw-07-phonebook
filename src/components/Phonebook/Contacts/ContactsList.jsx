import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from './Contacts';
// import { deleteContacts } from "components/redux/Reducer";
import { deleteContactsThunk, getContactsThunk } from 'components/redux/thunk';
import { useEffect } from 'react';
import { filterSelector } from 'components/redux/selector';

export const ContactsList = () => {
//   const { filter } = useSelector(state => state.contacts);
//   const { items } = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(filterSelector);

  const dispatch = useDispatch();

//   const getFilterContacts = () => {
//     return items.filter(el =>
//       el.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

  const handDelete = id => {
    dispatch(deleteContactsThunk(id));
  };

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul>
      {filterContacts.map(el => (
        <Contacts
          key={el.id}
          id={el.id}
          name={el.name}
          phone={el.phone}
          handDelete={handDelete}
        />
      ))}
    </ul>
  );
};
