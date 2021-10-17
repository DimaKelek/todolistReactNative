import React from 'react';
import {AppNavigation} from "./src/components/Navigation/Navigation";
import {Provider} from "react-redux";
import { store } from './src/Store/store';

export const App: React.FC = () => {
    return <Provider store={store}><AppNavigation /></Provider>
};