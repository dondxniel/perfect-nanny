import ProfileInfo from '../presentational/ProfileInfo';
import NannySpecificProfileInfo from './NannySpecificProfileInfo';

export default function DisplayProfile({user}){
    return(
        <div>
            <ProfileInfo label = "Full name"> John Doe</ProfileInfo>
            <ProfileInfo label = "Age">31</ProfileInfo>
            <ProfileInfo label = "Marital Status">Married</ProfileInfo>
            <ProfileInfo label = "Phone Number">+234 90 2383 0860</ProfileInfo>
            <ProfileInfo label = "Email">john.doe@greysoft.com</ProfileInfo>
            <ProfileInfo label = "State">Kaduna</ProfileInfo>
            <ProfileInfo label = "Local Govt.">Kaduna</ProfileInfo>
            <ProfileInfo label = "Area">U/Boro</ProfileInfo>
            <ProfileInfo label = "Address">No 31 Ferorro Street, U/Boro</ProfileInfo>
            <ProfileInfo label = "State">Kaduna</ProfileInfo>
            <ProfileInfo label = "Nanny Type">Cleaner and baby sitter</ProfileInfo>

            <NannySpecificProfileInfo />
        </div>
    )
}