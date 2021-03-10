import React from 'react';
import PropTypes from 'prop-types';

import {WEBEX_COMPONENTS_CLASS_PREFIX} from '../../constants';

import WebexMember from '../WebexMember/WebexMember';
import useMemberships from '../hooks/useMemberships';

// TODO: Figure out how to import JS Doc definitions and remove duplication.
/**
 * Enum for types of destinations.
 *
 * @external DestinationType
 * @see {@link https://github.com/webex/component-adapter-interfaces/blob/master/src/MembershipsAdapter.js#L21}
 */

/**
 * Displays the roster of Webex meeting or room members.
 *
 * @param {string} props.destinationID  ID of the destination for which to get members
 * @param {string} props.destinationType Type of destination of the membership roster
 *
 * @returns {object} JSX of the component
 */
export default function WebexMemberRoster({destinationID, destinationType}) {
  const memberships = useMemberships(destinationID, destinationType);

  const getMembersNode = (data) => (data || []).map(
    (member) => <WebexMember key={member.personID} personID={member.personID} />,
  );

  if (destinationType !== 'meeting') {
    return <div className={`${WEBEX_COMPONENTS_CLASS_PREFIX}-roster`}>{getMembersNode(memberships)}</div>;
  }

  const groupBy = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }),
    {},
  );

  const groupedMembers = groupBy(memberships, 'isInMeeting');

  return (
    <div className={`${WEBEX_COMPONENTS_CLASS_PREFIX}-roster-container`}>
      <div className={`${WEBEX_COMPONENTS_CLASS_PREFIX}-roster-separator`}>In Meeting</div>
      <div className={`${WEBEX_COMPONENTS_CLASS_PREFIX}-roster`}>{getMembersNode(groupedMembers.true)}</div>

      <div className={`${WEBEX_COMPONENTS_CLASS_PREFIX}-roster-separator`}>Not in Meeting</div>
      <div className={`${WEBEX_COMPONENTS_CLASS_PREFIX}-roster`}>{getMembersNode(groupedMembers.false)}</div>
    </div>
  );
}

WebexMemberRoster.propTypes = {
  destinationID: PropTypes.string.isRequired,
  destinationType: PropTypes.string.isRequired,
};
