import { createFileRoute } from "@tanstack/react-router";

import { ClockFoxPage } from "@/pages/clock-fox/clock-fox.page.tsx";

export const Route = createFileRoute("/clock/fox/")({
	component: ClockFoxPage,
});
