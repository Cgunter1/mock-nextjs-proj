import React, {
    FunctionComponent,
    PropsWithChildren,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { User } from "../types/userType";

const USER_INFO_KEY = "userInfo";

const UserContext = React.createContext<{
    user: User;
    userDispatch: React.Dispatch<ActionType>;
}>({ user: {}, userDispatch: (action: ActionType): void => {} });

export enum USER_STATES {
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
}

interface ActionType {
    type: USER_STATES;
    user?: User;
    [x: string]: any;
}

const useUserContext = () => {
    const userContext = useContext(UserContext);

    if (userContext === undefined) {
        throw new Error(
            "User Context must be used within a UserProvider Provider"
        );
    }

    return userContext;
};

function userReducer(state: User, action: ActionType) {
    switch (action.type) {
        case USER_STATES.SIGN_IN:
            if (!action.user) {
                throw new Error("No User Found to sign in!!!");
            }
            sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(action.user));
            return {
                ...action.user,
            };
        case USER_STATES.SIGN_OUT:
            sessionStorage.removeItem(USER_INFO_KEY);
            return {};
        default:
            throw new Error();
    }
}

const UserProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [user, userDispatch] = useReducer(userReducer, {});

    useEffect(() => {
        if (sessionStorage.getItem(USER_INFO_KEY)) {
            userDispatch({
                type: USER_STATES.SIGN_IN,
                user: JSON.parse(
                    sessionStorage.getItem(USER_INFO_KEY) ?? ""
                ) as User,
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, useUserContext };
