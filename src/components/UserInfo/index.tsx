import { FunctionComponent } from "react";
import { User } from "../../types/userType";
import UserAvatar from "../UserAvatar";

interface UserTypeProps {
    user: User;
}

const UserInfo: FunctionComponent<UserTypeProps> = ({ user }) => {
    return (
        <>
            <UserAvatar username={user.username ?? ""} />
        </>
    );
};

export default UserInfo;
