import PageLayout from '../layouts/PageLayout';
import Hero from '../presentational/Hero';
import { lottieOptions3, lottieOptions4, registerLottie, completeprofileLottie, handshakeLottie } from '../../constants/lottieOptions';
import SubBody from '../presentational/SubBody';

export default function NannyHome(){
    return(
        <PageLayout>
            <Hero 
                callToActionLink="/nanny-auth"
                carouselData={[
                    {
                        head: "Can you clean a house?",
                        text: "We give you the opportunity to do that and get paid handsomely.",
                        lottieOptions: lottieOptions3
                    },
                    {
                        head: "Are you a good baby sitter?",
                        text: "You don't have to be to get a job as one. Connect with us, get trained and get employed.",
                        lottieOptions: lottieOptions4
                    }
                ]}
            />
            <SubBody 
                workflow = {[
                    {
                        head: "Create account",
                        text: "Create an account with us through our website or mobile app. Ensure you enter correct information.",
                        lottie: registerLottie
                    },{
                        head: "Complete profile",
                        text: "Tell us the kind of nanny you are. That would help us in deciding the kind of employer to pair you with.",
                        lottie: completeprofileLottie
                    },{
                        head: "Get paired",
                        text: "Get paired with an employer and do a great job. We believe in you, don't let us down.",
                        lottie: handshakeLottie
                    }
                ]}
            />
        </PageLayout>
    )
}