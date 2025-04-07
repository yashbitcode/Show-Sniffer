import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full my-[1rem]">
            <div className="text-center">
                <SignIn path="/sign-in" routing="path" />
            </div>
        </div>
    );
};

export default SignInPage;