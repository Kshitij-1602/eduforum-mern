import React from 'react'
import { Paper, IconButton, Avatar } from '@material-ui/core'
import { Comment, Block, KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'
import { addLike, addDislike, removeLike, deletePost } from '../../actions/post'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PostItem({
    addLike,
    addDislike,
    removeLike,
    deletePost,
    post: { _id, title, text, name, avatar, user, likes, dislikes, comments, date }
}) {
    return (
        <div style={previewStyle}>
            <Paper elevation={3}>
                <Link to={`/profile/${user}`} style={linkStyle}>
                    <Avatar src={avatar} style={avatarStyle}/>
                    <span style={nameStyle}>{name}</span>
                </Link>
                <h3 style={textStyle}>{title}</h3>
                <p style={textStyle}>{text}</p>

                <div style={buttonStyle}>
                    <IconButton size='small' onClick={e => addLike(_id)}>
                        <KeyboardArrowUp fontSize='default' />
                    </IconButton>
                    <h5>{likes.length - dislikes.length}</h5>
                    <IconButton size='small' onClick={e => addDislike(_id)}>
                        <KeyboardArrowDown fontSize='default' />
                    </IconButton>
                    <IconButton size='small' component={Link} to={`/posts/${_id}`}>
                        <Comment fontSize='inherit' />
                        <h5>{comments.length}</h5>
                        <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>
                            Comment
                        </span>
                    </IconButton>
                    <IconButton size='small' href="mailto:devankrf@gmail.com?subject=Reporting content from EduForum">
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

const linkStyle = { 
    padding: '8px 8px',
    display: 'table',
    textDecoration: 'none' 
}
const avatarStyle = { 
    display: 'table-cell' 
}
const nameStyle = { 
    display: 'table-cell', 
    verticalAlign: 'middle', 
    padding: '5px', 
    color: 'black' 
}

PostItem.propTypes = {
    addLike: PropTypes.func.isRequired,
    addDislike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
export default connect(null, { addLike, addDislike, removeLike, deletePost })( PostItem )
