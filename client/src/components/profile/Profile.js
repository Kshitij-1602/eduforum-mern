// TODO: add Reditrect when no profile
// TODO: bug when click social link in same tab
import React, { useEffect } from "react";
import { Paper, Avatar, Chip, IconButton, Button } from "@material-ui/core";
import Sidebar from '../layout/Sidebar'
import { getCurrentProfile } from '../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { 
  Done, 
  Twitter, 
  YouTube, 
  Instagram, 
  Facebook, 
  LinkedIn, 
  GitHub } from '@material-ui/icons'
import { Link } from 'react-router-dom'


function Profile({ profile, getCurrentProfile }) {
  useEffect(() => {
    getCurrentProfile()
  }, [getCurrentProfile])

  console.log(profile)
  const { profile: {
        university,
        degree,
        location,
        status,
        skills,
        social,
        user: { name, avatar }
  } } = profile
  return (
    <React.Fragment>
      <Sidebar />
      <Paper className="content profile-style"> 
        <div style={profileHeader}>
          <Avatar alt="user image" style={avatarStyle} src={avatar} />
          <div style={{ margin: "25px" }}>
            <h2>{name}</h2>
            <fieldset style={{ width: "700px",height: "200px",border: "1px solid black", padding: "8px" }}>
              <legend style={{ width: "auto", fontSize: "18px", margin: "8px" }}>
                Status
              </legend>
              { status ? (status) : ("Edit Profile to add Status") }
            </fieldset>
          </div>
        </div>
        <div style={profileMain}>
          {skills && skills.length > 0 && (
            <div style = {{ display: 'block', marginTop: '5px' }}>
              <h4>Skills:</h4>
              {skills.map((skill, index) => (
              <Chip 
                key={index} 
                label={skill} 
                color="primary" 
                onDelete={() => {}} 
                style = {{ margin: '10px' }}
                deleteIcon={<Done />} 
              />
              ))}
            </div>
          )}
          <h4>University:</h4>
          <p style={profileText}>{university}</p>
          <h4>Degree:</h4>
          <p style={profileText}>{degree}</p>
          <h4>Location:</h4>
          <p style={profileText}>{location}</p>
          {social && (
            <div style = {{ display: 'block', marginTop: '5px' }}>
              <h4>Social Links:</h4>
              {social.twitter && (
                <IconButton href={social.twitter}>
                  <Twitter />
                </IconButton>
              )}
              {social.youtube && (
                <IconButton href={social.youtube}>
                  <YouTube />
                </IconButton>
              )}
              {social.instagram && (
                <IconButton href={social.instagram}>
                  <Instagram />
                </IconButton>
              )}
              {social.facebook && (
                <IconButton href={social.facebook}>
                  <Facebook />
                </IconButton>
              )}
              {social.linkedin && (
                <IconButton href={social.linkedin}>
                  <LinkedIn />
                </IconButton>
              )}
              {social.github && (
                <IconButton href={social.github}>
                  <GitHub />
                </IconButton>
              )}
            </div>
          )}
          <Button 
            variant='contained'
            color='secondary' 
            component={Link} 
            to='/edit-profile'>Edit Profile</Button>
        </div>
      </Paper>
    </React.Fragment>
  );
}

const profileHeader = {
  display: "flex",
};

const avatarStyle = {
  margin: "15px",
  alignSelf: "center",
  backgroundColor: "orange",
  height: "150px",
  width: "150px",
};

const profileMain = {
  margin: "18px",
  marginLeft: "100px",
};

const profileText = {
  display: "inline-block",
  border: "1px solid black",
  padding: "8px",
  width: "600px",
  borderRadius: "5px",
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
