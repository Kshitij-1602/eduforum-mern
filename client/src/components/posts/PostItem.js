import React from 'react'
import { Paper, IconButton } from '@material-ui/core'
import { Comment, Block, KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'
import { addLike, removeLike, deletePost } from '../../actions/post'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function PostItem({
    addLike,
    removeLike,
    deletePost,
    post: { _id, title, text, name, avatar, user, likes, comments, date }
}) {
    return (
        <div style={previewStyle}>
            <Paper elevation={3}>
                <h3 style={textStyle}>{ title }</h3>
                <p style={textStyle}>{ text }</p>
                <div style={buttonStyle}>
                    <IconButton size='small' onClick={e => addLike(_id)}>
                        <KeyboardArrowUp fontSize='default' />
                    </IconButton>
                    <h5>{likes.length}</h5>
                    <IconButton size='small' onClick={e => removeLike(_id)}>
                        <KeyboardArrowDown fontSize='default' />
                    </IconButton>
                    <IconButton size='small'>
                        <Comment fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Comment</span>
                    </IconButton>
                    <IconButton size='small'>
                        <Block fontSize='inherit' />
                        <span style={{ fontSize: '0.7em' }}>Report</span>
                    </IconButton>
                </div>
            </Paper>
        </div>
    )
}
const previewStyle = {
    margin: '15px'
}

const textStyle = {
    margin: '14px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
}

const buttonStyle = {
    margin: '5px',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '5px'
}

PostItem.propTypes = {
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}
export default connect(null, { addLike, removeLike, deletePost })( PostItem )
