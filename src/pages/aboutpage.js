import React, { Component } from 'react'
import SectionIntro from './components/SectionIntro';


export default class AboutPage extends Component {
  render() {
    return (
      <div className="content">
        <SectionIntro text="Professional" />
        <SectionIntro text="Personal" />
        <SectionIntro text="Experience" />
      </div>
    )
  }
}
