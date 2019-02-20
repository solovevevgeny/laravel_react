import React from 'react';
import { render } from 'react-dom';

import Main from           './components/MainMenu';
import MainCategories from './components/MainCategories.js';

render( <Main />, document.getElementById('root'));

render( <MainCategories />, document.getElementById('maincat'));