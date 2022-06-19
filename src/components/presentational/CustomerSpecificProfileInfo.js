import ProfileInfo from '../presentational/ProfileInfo';

export default function CustomerSpecificProfileInfo({user}){
    return(
        <>
            <ProfileInfo label = "Occupation" >Teacher</ProfileInfo>
            <ProfileInfo label = "Number of kids" >4</ProfileInfo>
            <ProfileInfo label = "Age of kids" >4, 9, 15, 21</ProfileInfo>
            <ProfileInfo label = "Class of kids" >Primary 2, Primary 5, SS 1, 100 Level</ProfileInfo>
        </>
    )
}