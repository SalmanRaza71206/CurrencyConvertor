import { createSlice, nanoid } from "@reduxjs/toolkit";


export const setdataLocalStorage = (data) => {
    localStorage.setItem('history', JSON.stringify(data))
}

export const getdataLocalStorage = () => {
    const allhistory = JSON.parse(localStorage.getItem('history'))

    return allhistory ? allhistory : [];
}

const initialState = {
    history: getdataLocalStorage()
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {

        addHistory: (state, action) => {
            const { from, to, convertval, currVal } = action.payload
            console.log(action.payload)
            const history = {
                id: nanoid(),
                from: from,
                to: to,
                convertval: convertval,
                currVal: currVal,
                date:new Date().toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                  })
            }
            state.history.push(history)
            setdataLocalStorage(state.history)
        },

        removeHistory: (state, action) => {
            state.history = state.history.filter((his) => his.id != action.payload)
            setdataLocalStorage(state.history)
        }

}


})

export default historySlice.reducer

export const {addHistory,removeHistory} = historySlice.actions

