import Segmentation from '../assets/Segmentation.png';    
import analytics from '../assets/analytics.png';
import homeautomation from '../assets/homeaut.jpg';
import camping from '../assets/camping.jpg';
import color_game from '../assets/color_game.png';
import todo from '../assets/todo.jpg';
import ipl from '../assets/ipl.jpg';
import elec from '../assets/elec.jpg';


const PROJECTS = [
    {
        id: 1,
        title:'Professional - RCC Segmentation',
        description:'Based on MD attitudes, perceptions and usage, segmented MDs into different groups using clustering for the client so that it will be easier for sales reps to identify MDs while detailing them.',
        // link:'https://github.com/ParnalPatil?tab=repositories',
        image: Segmentation
    },
    {
        id: 2,
        title:'Professional - IO Tracking',
        description:'Tracked various medical products in different cancer tumors and analyse MDs perceptions and impact of new launches on current products in the market',
        // link:'https://github.com/ParnalPatil?tab=repositories',
        image: analytics
    },
    {
        id: 3,
        title:'Academic - Home Automation using Android App',
        description:'Created an effective and easy to use Android app that could be used to control electric loads such as light and fan within the Bluetooth range',
        // link:'https://github.com/ParnalPatil?tab=repositories',
        image: homeautomation
    },
    {
        id: 4,
        title:'Personal - Camping Website',
        description:'Developed a functioning camping website where users can upload images and add description and cost of camps that they have visited. Used a combination of HTML, CSS, Bootstrap, Semantic UI and Node JS.',
        link:'https://github.com/ParnalPatil/YelpCamp-Website-Project',
        image: camping
    },
    {
        id: 5,
        title:'Personal - RGB Color-Game',
        description:'Developed an RGB color game using HTML, CSS, Bootstrap and JavaScript where the user has to guess the color among the 6 color options (hard mode) based on the RGB code. Also, added an easy mode where user has to guess the color from 3 options.',
        link:'https://github.com/ParnalPatil/Projects/tree/master/JavaScript',
        image: color_game
    },
    {
        id: 6,
        title:'Personal - To-Do List App',
        description:'Developed a to-do list application using HTML, CSS, Bootstrap and JavaScript where the user has the option of adding his own to-do items for the day as well as deleting the items that have already been attended to.',
        link:'https://github.com/ParnalPatil/Projects/tree/master/JavaScript',
        image: todo
    },
    {
        id: 7,
        title:'Personal - IPL EDA',
        description:'Did some exploratory data analysis on the Indian Premier League data which was dated from 2008-2019.',
        link:'https://github.com/ParnalPatil/Kaggle-Projects/tree/master/IPL',
        image: ipl
    },
    {
        id: 8,
        title:'Personal - Indian Election EDA',
        description:'Did some exploratory data analysis on the 2019 Indian Elections.',
        link:'https://github.com/ParnalPatil/Kaggle-Projects/tree/master/Indian%20Election%202019',
        image: elec
    }
];

export default PROJECTS;