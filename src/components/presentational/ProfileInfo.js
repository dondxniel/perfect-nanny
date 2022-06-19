export default function ProfileInfo({children, label}){
    return (
        <div className = "border p-3 m-3">
            <b>{label}</b>
            <div className = "mx-5 mt-3">
                {children}
            </div>
        </div>
    )
}