import StaticSection from '../components/login/StaticSection';
import AuthContainer from '../components/login/AuthContainer';

export default function AuthPage(){
    return(
        <div className="flex h-screen">
            <StaticSection/>
            <AuthContainer/>
        </div>
    );
}