import React from 'react';

export default function Index(state = 5, action) {
  switch (action.type) {
    case 'GET_VIDEO':
      return action.payload;
    default:
      return [];
  }
}
