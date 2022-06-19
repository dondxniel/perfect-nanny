import PageLayout from '../layouts/PageLayout'
import Hero from '../presentational/Hero';
import SubBody from '../presentational/SubBody';
import { lottieOptions1, lottieOptions2, registerLottie, completeprofileLottie, handshakeLottie } from '../../constants/lottieOptions';

export default function NannyHome(){
    return(
        <PageLayout>
            <Hero
                callToActionLink="/customer-auth"
                carouselData={[
                    {
                        head: "Welcome to Perfect Nanny!",
                        text: "Where all the trustworthy home cleaners in your vicinity can be found.",
                        lottieOptions: lottieOptions1
                    },
                    {
                        head: "Too busy to stay with your kids all day?",
                        text: "Your job doesn't have to interfere with you raising your Child.",
                        lottieOptions: lottieOptions2
                    }
                ]}
            />
            <div className = "d-flex justify-content-center">
                <SubBody 
                    workflow = {[
                        {
                            head: "Create account",
                            text: "Create an account with us through our website or mobile app. Ensure you enter correct information.",
                            lottie: registerLottie
                        },{
                            head: "Complete profile",
                            text: "Tell us the kind of nanny that would suit your needs and schedule, we'll do the heavy lifting.",
                            lottie: completeprofileLottie
                        },{
                            head: "Get paired",
                            text: "Get paired with a nanny and introduce him/her to your family as your new saviour.",
                            lottie: handshakeLottie
                        }
                    ]}
                />
            </div>
            
        </PageLayout>
    )
}