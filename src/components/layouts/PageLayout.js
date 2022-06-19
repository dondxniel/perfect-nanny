export default function PageLayout({ children }) {
	return (
		<div className="page animate__animated animate__slideInLeft animate__faster">
			{children}
		</div>
	);
}
