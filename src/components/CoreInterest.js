import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showAbout } from '../actions/actions'


class CoreInterest extends Component {

  state = {
    defaultInt: {}
  }

  componentDidMount = () => {
    this.updateInt(this.props.interests[2])
  }

  updateInt = int => {
    this.setState({
      defaultInt: int
    })
  }

  mappedInterests = () => {
    let index = this.props.interests.indexOf(this.state.defaultInt)
    let interests;
    index === -1 ? interests = this.props.interests.slice(0,4) : interests = [...this.props.interests.slice(index), ...this.props.interests.slice(0,index)].slice(0,4)
    return interests.map(int => {
      return (
        <div key={ int.interest } className='interest' onClick={() => this.updateInt(int)}>
          <img className="interest-icon" src={int.source} alt={int.interest} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="about-page">
        <div className="left-nav" data-name='about' onClick={this.props.showAbout}>About Me</div>
        <div className="core-interests">
          <h1>{this.state.defaultInt.interest}</h1>
          <div className="mapped-interests">
            {this.mappedInterests()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    interests: state.about.coreInterests
  }
}

export default connect(mapStateToProps, { showAbout })(CoreInterest)