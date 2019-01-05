import React from 'react'
import Project from './project'
import uuid from 'uuid'

const Projects = (props) => <div>{props.projects.map((project) => <Project project={project} key={uuid()} />)}</div>

export default Projects
