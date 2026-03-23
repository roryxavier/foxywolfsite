import AppPage from "@/components/AppPage.tsx";

export function HomePage() {
	return (
		<AppPage>
			<title>Foxes Are Sleeping</title>

			<div
				className="
 					flex            
					items-center    
					justify-center  
					p-4             
				"
			>
				<p
					className="
						text-4xl       
						font-bold      
						text-gray-800  
						text-center   
					"
				>
					<span className="text-white">Foxes Are Sleeping</span>
					<span>💛🧡</span>
				</p>
			</div>
		</AppPage>
	);
}
