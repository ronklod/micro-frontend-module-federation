import { configureStore } from '@reduxjs/toolkit';
import  counterSlice, {add, subtract,reset} from './reducers/counterSlice';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});


export function useStore(){
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    

    return{
        count,
        increment: (num)=> dispatch(add(num)),
        subtract: (num) => dispatch(subtract(num)),
        reset: () => dispatch(reset())
    }

}

export function StoreProvider({children}) {
    return <Provider store={store}>{children}</Provider>;
}