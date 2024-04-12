import { legacy_createStore } from '@reduxjs/toolkit'
import productsReducer from '../reducers/productsReducer.js'

const store = legacy_createStore(productsReducer)

export default store