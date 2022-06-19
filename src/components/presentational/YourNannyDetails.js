import ProfileInfo from './ProfileInfo';

export default function DisplayProfile(){
    return(
        <div>
            <ProfileInfo label = "Full name"> Mary Ann</ProfileInfo>
            <ProfileInfo label = "Phone Number">+234 90 2383 0860</ProfileInfo>
            <ProfileInfo label = "Email">mary.ann@greysoft.com</ProfileInfo>
            <ProfileInfo label = "Location">Kaduna</ProfileInfo>
            <ProfileInfo label = "Nanny Type">Cleaner and baby sitter</ProfileInfo>
        </div>
    )
}