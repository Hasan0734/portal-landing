
import { Activity, Calendar, Dashboard, Home, Settings, Stamping, Users, } from './../../assets/svg/svg';

export const sidebars = [
    {
        title: 'Team Manager',
        items: [
            { name: 'Dashboard', url: '/dashboard', icon: <Dashboard/>},
            { name: 'Timbrature', url: '/timbrature', icon: <Stamping/>},
            { name: 'Pianificazione turni', url: '/pianificazione-turni', icon: <Calendar/> },
            { name: 'Dipendenti', url: '/dependenti', icon: <Users/>},
            { name: 'Attività', url: '/attività', icon: <Activity/>},
        ]
    },
    {
        title: 'Sedi Operative',
        items: [
            { name: 'Sedi', url: '/sedi', icon: <Home/>},

        ]
    },
    {
        title: 'Account',
        items: [
            { name: 'Impostazioni', url: '/impostazioni', icon: <Settings/>},

        ]
    },
]