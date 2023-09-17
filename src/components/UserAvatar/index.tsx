import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { USER_STATES, useUserContext } from "../../hooks/useUser";

interface UserAvatarProps {
    username: string;
    url?: string;
}

const UserAvatar: FunctionComponent<UserAvatarProps> = ({ username, url }) => {
    const { userDispatch } = useUserContext();
    return (
        <Flex alignItems="center">
            {url ? (
                <Image
                    src={url}
                    boxSize={40}
                    rounded={"100%"}
                    alt={`${username} avatar picture`}
                />
            ) : (
                <BiSolidUserCircle size={40} />
            )}
            <Menu>
                <MenuButton
                    ml={2}
                    p={2}
                    as={Button}
                    bgColor="lightBlue.200"
                    rightIcon={<ChevronDownIcon />}
                >
                    <Text color="lightBlue.700" fontWeight="500">
                        {username}
                    </Text>
                </MenuButton>
                <MenuList>
                    <MenuItem
                        color="red.500"
                        onClick={() =>
                            userDispatch({ type: USER_STATES.SIGN_OUT })
                        }
                    >
                        Sign Out
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default UserAvatar;
