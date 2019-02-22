import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IState } from '../../../../reducers';

export class SurveyNavBar extends Component<any, any> {

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyNavBar)
