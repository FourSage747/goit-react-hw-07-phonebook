import { nanoid } from '@reduxjs/toolkit';
import { creatContacts } from 'components/redux/Reducer';
import { useDispatch, useSelector } from 'react-redux';


export const Form = () => {
  
  const { contacts } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const {name, number} = e.target.elements;
    if (!name.value.trim() || !number.value.trim()) {
      return form.reset();
    }

    const isAlredyContacts = contacts.find(el => el.name === name.value);
    if (isAlredyContacts) return alert(`${name.value} is alredy in contacts.`);

    const newContacts = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    }
    dispatch(creatContacts(newContacts))
    form.reset();
  };

    return (
      <form onSubmit={onClick}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Number
          </label>
          <input
            name="number"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add contact
        </button>
      </form>
      
    );
}
