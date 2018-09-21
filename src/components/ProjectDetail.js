import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from './Carousel'

class ProjectDetail extends Component {

  state = {
    selectedProject: this.props.projects.find(project => project.slug === this.props.match.params.name),
  }

  render(){

    const { name, images, github, slug, description, demo } = this.state.selectedProject

    return (
      <div className="project-detail">
        <Carousel images={images} name={name} />

        <div className="project-info">
          <h1>{name}</h1>
          <h4>{description}</h4>
          <a href={github} target="_blank" rel="noopener noreferrer" >GITHUB</a>
          { demo ? <a href={demo} target="_blank" rel="noopener noreferrer" >DEMO</a> : null }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  }
}


export default withRouter(connect(mapStateToProps)(ProjectDetail))
