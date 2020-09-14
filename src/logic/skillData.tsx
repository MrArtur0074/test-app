import svgImageJquery from '../img/jquery-icon.svg';
import svgImageGit from '../img/git_icon.svg';
import svgImageJs from '../img/js.webp';
import svgImagePhp from '../img/php.svg';
import svgImageMySql from '../img/mysql.svg';
import svgImageCss from '../img/css.svg';
import svgImageReact from '../img/react.svg';

export interface Istates {
    skills: Iskill[];
}

export interface Iskill {
    id: number;
    src: string;
    name: string;
    title?: string;
}

export let states: Istates = {
    skills : [
        {
            id: 1,
            src: svgImageJquery,
            name: "Jquery",
            title: ""
        },
        {
            id: 2,
            src: svgImageGit,
            name: "Git",
            title: ""
        },
        {
            id: 3,
            src: svgImageJs,
            name: "JavaScript",
            title: ""
        },
        {
            id: 4,
            src: svgImagePhp,
            name: "Php",
            title: ""
        },
        {
            id: 5,
            src: svgImageMySql,
            name: "MySql",
            title: ""
        },
        {
            id: 6,
            src: svgImageCss,
            name: "Css",
            title: ""
        },
        {
            id: 7,
            src: svgImageReact,
            name: "React",
            title: ""
        }
    ]
}