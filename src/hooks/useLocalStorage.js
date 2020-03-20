import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {

        if (window.localStorage.getItem(key)) {
            console.log(1111)
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};

// set up state property
// capture the values
// if local data use that, else use initial data
// update localStorage when needed
// Don't forget to parse data from localStorage, and stringify new data getting stored




// import { useState } from 'react';

// const useLocalStorage = (key, initialState) => {
//     const [value, setValue] = useState(() => {
//         if(JSON.parse(window.localStorage.getItem(key))) {
//             return JSON.parse(window.localStorage.getItem(key));
//         } else {
//             window.localStorage.setItem(key, JSON.stringify(initialState));
//             return initialState;
//         }
//     })


// };

// export default useLocalStorage;