import svgImageJquery from '../img/jquery-icon.svg';
import svgImageGit from '../img/git_icon.svg';
import svgImageJs from '../img/js.webp';
import svgImagePhp from '../img/php.svg';
import svgImageMySql from '../img/mysql.svg';
import svgImageCss from '../img/css.svg';
import svgImageReact from '../img/react.svg';

export interface Istates {
    skills: Iskill[];
    works: Iwork[];
}

export interface Iskill {
    id: number;
    src: string;
    name: string;
    title?: string;
}

export interface Iwork {
    id:number;
    name: string;
    title: string;
    startDate: Date;
    endDate: Date;
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
    ],
    works: [
        {
            id: 1,
            name: "Республиканский экономический лицей интернат(РЭЛИ)",
            title: "Обучение с 7 по 11 класс.",
            startDate: new Date("2011-09-01"),
            endDate: new Date("2015-05-30")
        },
        {
            id: 2,
            name: "Уфимский Государственный Авиационный Технический Университет(УГАТУ)",
            title: "Факультет Информатики и Робототехники, специальность «Прикладная информатика» (бакалавриат). Общий средний балл: 4,77.",
            startDate: new Date("2015-09-01"),
            endDate: new Date("2019-06-30")
        },
        {
            id: 3,
            name: "Уфимский Государственный Авиационный Технический Университет(УГАТУ)",
            title: "Факультет Информатики и Робототехники, специальность «Прикладная информатика» (магистратура)",
            startDate: new Date("2019-09-01"),
            endDate: new Date("2021-06-30")
        },
        {
            id: 4,
            name: "Фриланс",
            title: "Frontend разработка для приложения HeyGo",
            startDate: new Date("2019-05-16"),
            endDate: new Date("2019-08-16")
        }
    ]
}