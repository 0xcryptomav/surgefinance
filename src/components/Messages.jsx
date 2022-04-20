import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Last swaps</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>User: {message.sender}</strong>:<br/>
          Exhanged: {message.text} NEAR
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
