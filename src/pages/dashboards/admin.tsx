import { FunctionComponent, useEffect } from "react";
import { useUserContext } from "../../hooks/useUser";
import { useRouter } from "next/router";

const AdminDashboard: FunctionComponent = () => {
    // TODO: Add this as getStaticProps instead, so we can redirect the user to the login page before this screen.
    const { user } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            router.push("/");
        }
    }, [user, router]);

    return (
        <>
            <h1>AdminDashboard</h1>
        </>
    );
};

export default AdminDashboard;
