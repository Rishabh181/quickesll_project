import React, { Fragment } from "react";
import './avatar.css'

const Avatar = ({ name="", imageUrl,available=false }) => {
  return (
    <Fragment>
      <div className='container'>
        {imageUrl && (
          <img className='avatarImage' alt="avatar" src={imageUrl} />
        )}
        {imageUrl === undefined && name !== "" && (
          <div className='avatatext'>{name.substring(0, 2)}</div>
        )}
        <div className={`online-status ${available && 'online-status-green' }`}></div>
      </div>
    </Fragment>
  );
};

export default Avatar;
