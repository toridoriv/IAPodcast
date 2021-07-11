

import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = state => ({
    selected: state.posts.selected,
}) 

export default connect(mapStateToProps)(Component)
