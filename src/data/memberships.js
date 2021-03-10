export default {
  membership1: {
    ID: 'membership1',
    destinationID: 'room1',
    destinationType: 'room',
    members: [
      {personID: 'user1', isInMeeting: true},
      {personID: 'user2', isInMeeting: false},
      {personID: 'user3', isInMeeting: true},
      {personID: 'user4', isInMeeting: true},
    ],
  },
  membership2: {
    ID: 'membership2',
    destinationID: 'room2',
    destinationType: 'room',
    members: [
      {personID: 'user1', isInMeeting: false},
      {personID: 'user5', isInMeeting: false},
      {personID: 'user6', isInMeeting: true},
    ],
  },
  membership3: {
    ID: 'membership3',
    destinationID: 'meeting1',
    destinationType: 'meeting',
    members: [
      {personID: 'user1', isInMeeting: false},
      {personID: 'user2', isInMeeting: true},
      {personID: 'user3', isInMeeting: true},
    ],
  },
  membership4: {
    ID: 'membership4',
    destinationID: 'meeting2',
    destinationType: 'meeting',
    members: [
      {personID: 'user1'},
      {personID: 'user2'},
      {personID: 'user3'},
      {personID: 'user4'},
      {personID: 'user5'},
      {personID: 'user6'},
    ],
  },
  membership5: {
    ID: 'membership5',
    destinationID: 'meeting4',
    destinationType: 'meeting',
    members: [
      {personID: 'user1'},
    ],
  },
  membership6: {
    ID: 'membership6',
    destinationID: 'meeting5',
    destinationType: 'meeting',
    members: [
      {personID: 'user1'},
      {personID: 'user2'},
    ],
  },
  membership7: {
    ID: 'membership7',
    destinationID: 'meeting6',
    destinationType: 'meeting',
    members: [
      {personID: 'user1'},
      {personID: 'user2'},
    ],
  },
};
