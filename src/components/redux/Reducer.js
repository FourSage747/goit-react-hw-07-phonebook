// export const reducer = (state, action) => {
//     switch (action.type) {
//         case 'createContact':
//           return {
//             ...state,
//             contacts: [{...action.payload}, ...state.contacts],
//           }
//         case 'setFilter':
//           return {
//             ...state,
//             filter: action.payload,
//           }
//         case 'deleteContacts':
//           return {
//             ...state,
//             contacts: [...state.contacts.filter((el) => el.id !== action.payload)],
//           }
//         default:
//           return state
//     }
// }

import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./InitialState";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: InitialState,
    reducers: {
        creatContacts: (state, action) => {
            // state.contacts.push(action.payload)
            state.contacts = [action.payload, ...state.contacts]
        },
        deleteContacts: (state, action) => {
            state.contacts = state.contacts.filter((el) => el.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})

export const contactsReducer = contactsSlice.reducer

export const {creatContacts, deleteContacts, setFilter} = contactsSlice.actions