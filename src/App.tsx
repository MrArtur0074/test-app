import React from 'react';
import './App.css';
import Header from './components/Header'
import AppBody from './components/AppBody'
import AppBodySkills from './components/AppBodySkills'
import AppBodyWork from './components/AppBodyWork'
import {states} from './logic/skillData'

export interface AppComponentState {
  name: string;
}

class App extends React.Component<{}, AppComponentState> {
  constructor(props:any) {
    super(props);
    this.state = {name: 'main'}
    this.changeToSkills = this.changeToSkills.bind(this);
    this.changeToMain = this.changeToMain.bind(this);
    this.changeToWork = this.changeToWork.bind(this);
  }

  render() {
      let bodyApp; 
      switch(this.state.name) {
        case 'main':
          bodyApp = <AppBody />;
        break;
        case 'skills':
          bodyApp = <AppBodySkills {...[states]}/>;
        break;
        case 'work':
          bodyApp = <AppBodyWork {...[states]}/>;
        break;
      }
      return (
        <div className="App-body">
        <Header {...[this.changeToMain, this.changeToSkills, this.changeToWork, this.state.name]}/>
        {bodyApp}
      </div>
      )
  }
  // Переключение между вкладками
  private changeToSkills = (): void => {
    this.setState({ name: 'skills' })
  }

  private changeToMain = (): void => {
    this.setState({ name: 'main' })
  }

  private changeToWork = (): void => {
    this.setState({ name: 'work' })
  }
}

export default App;
