/**
 * @file Declares API for membership related data access object methods
 */
import {Membership} from "../../models/Membership";

export interface MembershipDaoI {
    /**
     * Adds User with the given UID to the group with the passed in GID
     * @param uid {string} - the UID of the user
     * @param gid {string} - the GID of the group
     * @return {Promise<Membership>} - promise containing the created membership object
     */
    addUserToGroupById(uid: string, gid: string): Promise<Membership>;

    /**
     * Adds User with the given username to the group with the passed in group name
     * @param uname {string} - the username of the user
     * @param gname {string} - the group name of the group
     * @return {Promise<Membership>} - promise containing the created membership object
     */
    addUserToGroup(uname: string, gname: string): Promise<Membership>;

    /**
     * Adds User with the given UID to the group with the passed in GID
     * @param uid {string} - the UID of the user
     * @param gid {string} - the GID of the group
     * @return {Promise<Membership>} - promise containing the created membership object
     */
    removeUserFromGroupById(uid: string, gid: string): Promise<object>;

    /**
     * Adds User with the given username to the group with the passed in group name
     * @param uname {string} - the username of the user
     * @param gname {string} - the group name of the group
     * @return {Promise<Membership>} - promise containing the created membership object
     */
    removeUserFromGroup(uname: string, gname: string): Promise<object>;

    /**
     * Deletes all the Memberships in the DB
     * @return {Promise<Membership>} - promise containing the created membership object
     */
    resetMemberships(): Promise<object>;
}
