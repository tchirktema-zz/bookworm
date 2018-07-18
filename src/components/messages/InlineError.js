import React  from 'react'
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react'

const InlineError = ({text}) => (
 <Message color="red">
    <p>{text}</p>
  </Message>
)

InlineError.prototypes= {
    text:PropTypes.string.isRequired
};

export default InlineError;