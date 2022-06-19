import ProfileInfo from '../presentational/ProfileInfo';

export default function NannySpecificProfileInfo({user}){
    return(
        <>
            <ProfileInfo label = "Educational Background" >Secondary</ProfileInfo>
            <ProfileInfo label = "Years Of Experience" >4 years</ProfileInfo>
        </>
    )
}