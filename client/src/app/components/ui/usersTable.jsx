import React from 'react'
import PropTypes from 'prop-types'

import BookMark from '../common/bookmark'
import Qualities from './qualities'
import Table from '../common/table'
import { Link } from 'react-router-dom'
import Profession from './profession'

const UserTable = ({
    users,
    onSort,
    selectedSort,
    onToggleBookMark,
    ...rest
}) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Name',
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: 'Qualities',
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: {
            name: 'Profession',
            component: (user) => <Profession id={user.profession} />
        },
        completedMeetings: {
            path: 'completedMeetings',
            name: 'Times met'
        },
        rate: { path: 'rate', name: 'Rate' },
        bookmark: {
            path: 'bookmark',
            name: 'Book mark',
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() => onToggleBookMark(user._id)}
                />
            )
        }
    }
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        />
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
}

export default UserTable
