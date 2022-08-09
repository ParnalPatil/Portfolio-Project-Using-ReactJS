import Segmentation from '../assets/Segmentation.png';    
import analytics from '../assets/analytics.png';
import homeautomation from '../assets/homeaut.jpg';
import camping from '../assets/camping.jpg';
import color_game from '../assets/color_game.png';
import todo from '../assets/todo.jpg';
import ipl from '../assets/ipl.jpg';
import elec from '../assets/elec.jpg';
import engagement from '../assets/Digital_Engagement_Tool.jpg';
import distillation from '../assets/distillation.jpg';
import weather from '../assets/weather.jpg';
import vehicles from '../assets/vehicles.jpg';





const PROJECTS = [
    {
        id: 1,
        title:'Professional - Digital Engagement Tool',
        description:'Worked on a software development project where we designed, built and tested a POC version of an online tool right from scratch',
        // link:'https://github.com/ParnalPatil?tab=repositories',
        image: engagement
    },
    {
        id: 2,
        title:'Professional - GITA Distillation',
        description:'Modified existing multiple dynamic and browser compatible web pages and added new visual elements of web applications by translating UI/UX design into code, producing high quality markup',
        // link:'https://github.com/ParnalPatil?tab=repositories',
        image: distillation
    },
    {
        id: 3,
        title:'Professional - IO Tracking',
        description:'Tracked various medical products in different cancer tumors and analyzed MDs perceptions and impact of new launches on current products in the market',
        // link:'https://github.com/ParnalPatil?tab=repositories',
        image: analytics
    },
    {
        id: 4,
        title:'Personal - Weather App',
        description:'Designed and developed a scalable, fault-tolerant cloud-native distributed system weather forecasting app which was used to plot NEXRAD and NASA weather data employing the Micro-Services Architecture pattern',
        // link:'https://github.com/ParnalPatil/YelpCamp-Website-Project',
        image: weather
    },
    {
        id: 5,
        title:'Personal - USD Vehicles',
        description:'Based on an idea, developed a fictional commercial website showcasing used vehicles information which a user can use to search for and compare different vehicles according to its region and category with the help of creative and easy to understand graphs',
        link:'https://github.com/ParnalPatil/VehiclesManagement',
        image: vehicles
    },
    {
        id: 6,
        title:'Personal - Camping Website',
        description:'Developed a functioning camping website where users can upload images and add description and cost of camps that they have visited. Used a combination of HTML, CSS, Bootstrap, Semantic UI and Node JS.',
        link:'https://github.com/ParnalPatil/YelpCamp-Website-Project',
        image: camping
    },
    {
        id: 7,
        title:'Personal - IPL EDA',
        description:'Exploratory data analysis on the Indian Premier League data which was dated from 2008-2019.',
        link:'https://github.com/ParnalPatil/Kaggle-Projects/tree/master/IPL',
        image: ipl
    },
    {
        id: 8,
        title:'Personal - Indian Election EDA',
        description:'Exploratory data analysis on the 2019 Indian Elections.',
        link:'https://github.com/ParnalPatil/Kaggle-Projects/tree/master/Indian%20Election%202019',
        image: elec
    }
];

export default PROJECTS;