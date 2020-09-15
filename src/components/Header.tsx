import React from 'react';
import './Header.css'

interface HeaderProps {
    0(): void;
    1(): void;
    2(): void;
    3: string;
};

class Header extends React.Component<{}>{
    public props: HeaderProps = this.props;

    render() {
        return (
            <div className='header-app'>
                <ul className='header-ul unselectable'>
                    <li className={this.props[3]==='main'?'active':''} onClick = {this.props[0]}> О себе  </li>
                    <li className={this.props[3]==='skills'?'active':''} onClick = {this.props[1]}> Навыки  </li>
                    <li className={this.props[3]==='work'?'active':''} onClick = {this.props[2]}> Место работы (Учебы)  </li>
                </ul>
            </div>
        )
    }

}

export default Header