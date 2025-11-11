import { createFileRoute } from "@tanstack/react-router";
import AnimatedBg from "@/components/AnimatedBg.tsx";
import { Countup } from "@/components/Countup.tsx";
import { TextEffect } from "@/components/TextEffect.tsx";

export const Route = createFileRoute("/count/fox")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<AnimatedBg>
				<div
					className="
            w-full
            flex
            flex-row
            flex-auto
            pt-8
            min-h-screen
        "
				>
					<div className={"flex-3"} />
					<div className={"flex-5 text-white"}>
						<div className="flex flex-col flex-auto gap-4">
							<h1 className={"text-4xl font-bold text-center"}>
								My Important Foxes Clock
							</h1>

							<div>
								<TextEffect
									text={"Time I meet with Yellow Fox"}
									delay={50}
									className={"text-2xl font-bold text-yellow-200 text-center"}
								/>

								<TextEffect
									text={"2021-03-05 01:19"}
									delay={100}
									className={"text-sm text-black text-center"}
								/>
							</div>
							<div>
								<Countup
									year={2021}
									month={3}
									day={5}
									minute={1}
									hour={19}
								></Countup>
							</div>
							<hr className="border-t-2 border-gray-700 opacity-40" />
							<div>
								<TextEffect
									text={"Time I meet with Orange Fox"}
									delay={50}
									className={"text-2xl font-bold text-[#FF8C00] text-center"}
								/>
								<TextEffect
									text={"2025-03-02 10:20"}
									delay={100}
									className={"text-sm text-black text-center"}
								/>
							</div>
							<div>
								<Countup
									year={2025}
									month={3}
									day={2}
									hour={10}
									minute={20}
								></Countup>
							</div>
							<hr className="border-t-2 border-gray-700 opacity-40" />
						</div>
					</div>
					<div className={"flex-3"} />
				</div>
			</AnimatedBg>
		</>
	);
}
