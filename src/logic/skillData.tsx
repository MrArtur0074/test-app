import svgImageJquery from '../img/jquery-icon.svg';
import svgImageGit from '../img/git_icon.svg';
import svgImageJs from '../img/js.webp';
import svgImagePhp from '../img/php.svg';
import svgImageMySql from '../img/mysql.svg';
import svgImageCss from '../img/css.svg';
import svgImageReact from '../img/react.svg';
import {IInfoCard} from '../components/ModalEdit';

export interface Istates {
    skills: Iskill[];
}

export interface Iskill {
    id: number | string;
    src: string;
    name: string;
    title?: string;
}

export interface Iwork {
    id:number | string;
    name: string;
    title: string;
    startDate: string;
    endDate: string;
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

export interface inputErrors {
    name: boolean;
    title: boolean;
    startDate: boolean;
    endDate: boolean;
}

export function validate(content:IInfoCard):inputErrors {
    let errors:inputErrors = {
        name: false,
        title: false,
        startDate: false,
        endDate: false
    }

    // Валидация полей
    errors.name = (!content.name)? true: false;
    errors.title = (!content.title)? true: false;
    errors.startDate = (!content.startDate)? true: false;
    errors.endDate = (!content.endDate)? true: false;

    return errors;
}

// Дата в строку
export function pickerData(data:IInfoCard):IInfoCard {
    let finishData:IInfoCard = {
        id: data.id,
        title: data.title,
        name: data.name,
        startDate: formateDateString(data.startDate, '-'),
        endDate: formateDateString(data.endDate, '-')
    };
    return finishData;
}

// Конвертор
export function formateDateString(dateString:string, sym:string):string {
    if (!dateString) return '';
    let finishDate:string = "";
    let arr = dateString.split(sym);
    finishDate = (sym === '.')? arr[2] + '-' + arr[1] + '-' + arr[0]: arr[2] + '.' + arr[1] + '.' + arr[0];
    return finishDate;
}