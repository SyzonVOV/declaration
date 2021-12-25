import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createPersonObject as createMemberObject, IMember, removeExtraSpaces } from '../../helpers/helpers'

// Define a type for the slice state
/* interface IMember {
  surname: string
  name: string
  fathername: string
} */

interface IMembersState {
  membersAll: Array<IMember>
}


// Define the initial state using that type
const initialState: IMembersState = {
  membersAll: [],
}

export const membersSlice = createSlice({
  name: 'members',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMembers: (state, action: PayloadAction<Array<string>>) => {
      const members = action.payload.map((elem) => {
        return createMemberObject(removeExtraSpaces(elem))
      });
      state.membersAll.push(...members)
    }
  },
})

export const { addMembers } = membersSlice.actions;

export default membersSlice.reducer;