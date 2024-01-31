import { useDispatch, useSelector } from "react-redux";
import { Contacts } from "./Contacts"
import { deleteContacts } from "components/redux/Reducer";

export const ContactsList = () => {
    
    const {contacts, filter} = useSelector((state)=>state)
    const dispatch = useDispatch();

    const getFilterContacts = () => {
        return contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
    };

    const handDelete = (id) => {
        dispatch(deleteContacts(id));
    };

    return (
        <ul>
            {(getFilterContacts()).map((el) =>
                <Contacts 
                    key={el.id} 
                    id={el.id} 
                    name={el.name} 
                    number={el.number} 
                    handDelete={handDelete}
                />
            )}
        </ul>
    )
}