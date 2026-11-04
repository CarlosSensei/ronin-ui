import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Buttons } from './pages/buttons/buttons';
import { Inputs } from './pages/inputs/inputs';
import { Cards } from './pages/cards/cards';
import { Heroes } from './pages/heroes/heroes';
import { Forms } from './pages/forms/forms';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'buttons',
    component: Buttons
  },
  {
    path: 'inputs',
    component: Inputs
  },
  {
    path: 'cards',
    component: Cards
  },
  {
    path: 'heroes',
    component: Heroes
  },
  {
    path: 'forms',
    component: Forms
  }
];