export function NotFoundComponent() {
	return (
    <>
      <title>404 - Page Not Found</title>
		<div style={{ padding: "2rem", textAlign: "center" }}>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			{/* You can add a link back to home here */}
			<a href="/">Go to Home</a>
		</div>
    </>
	);
}
