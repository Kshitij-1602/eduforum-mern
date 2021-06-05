import React from 'react'
import { Paper, IconButton } from '@material-ui/core'
import { Block, KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'
import { deleteComment } from '../../actions/post'
// make addCommentLike and removeCommentLike
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function CommentItem({
    postId,
    deleteComment,
    comment: { _id, text, name, avatar, user, likes, date }
}) {
    return (
        <div style={previewStyle}>
            <Paper elevation={3}>
                <p style={textStyle}>{ text }</p>
                <div style={buttonStyle}>
                    {/* <IconButton size='small' onClick={e => addLike(_id)}> */}
                    <IconButton size='small' >
                        <KeyboardArrowUp fontSize='default' />
                    </IconButton>
                    <h5>{likes.length}</h5>
                    {/* <IconButton size='small' onClick={e => removeLike(_id)}> */}
                    <IconButton size='small' >
                        <KeyboardArrowDown fontSize='default' />
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

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired
}
export default connect(null, { deleteComment })( CommentItem )
