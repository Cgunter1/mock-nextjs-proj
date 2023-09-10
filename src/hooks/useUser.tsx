import React, {
    FunctionComponent,
    PropsWithChildren,
    useContext,
    useReducer,
    useState,
} from "react";

const UserContext = React.createContext<{
    user: UserType;
    userDispatch: React.Dispatch<ActionType>;
}>({ user: {}, userDispatch: (action: ActionType): void => {} });

export enum USER_STATES {
    SIGN_IN = "SIGN_IN",
    SIGN_OUT = "SIGN_OUT",
}

interface UserType {
    [x: string]: any;
}

interface ActionType {
    type: USER_STATES;
    user: UserType;
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

function userReducer(state: UserType, action: ActionType) {
    switch (action.type) {
        case USER_STATES.SIGN_IN:
            return {
                ...action.user,
            };
        case USER_STATES.SIGN_OUT:
            return {};
        default:
            throw new Error();
    }
}

const UserProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [user, userDispatch] = useReducer(userReducer, {});

    return (
        <UserContext.Provider value={{ user, userDispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, useUserContext };
