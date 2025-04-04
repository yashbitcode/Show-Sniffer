import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-screen ">
            <div className="text-center">
                <SignUp path="/sign-up" routing="path" />
            </div>
        </div>
    );
}

export default SignUpPage;
