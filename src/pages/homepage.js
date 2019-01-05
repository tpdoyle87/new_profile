import React from 'react'

import Banner from './components/banner'
import Projects from './components/projects'
import projectsReact from '../data/projectsReact'
import projectsRails from '../data/projectsRails'
import SectionIntro from './components/SectionIntro'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectsReact: [],
      projectsRails: []
    }
  }

  componentWillMount = () => {
    this.setState({
      projectsReact: projectsReact,
      projectsRails: projectsRails
    })
  }

  render() {
    return(
      <div >
        <Banner />
        <SectionIntro text="React Projects" />
        <Projects
          projects={this.state.projectsReact}
        />
        <SectionIntro text="Rails Projects" />
        <Projects
          projects={this.state.projectsRails}
        />

      </div>
    );
  }
}
