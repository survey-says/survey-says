import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IState } from '../../../../reducers';


/* Should only show if on some survey page */
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
