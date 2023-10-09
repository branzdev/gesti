"use client";

import { appContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Footer() {
	const { isNavOpen } = useContext(appContext);

	return (
		<footer
			className={`${
				isNavOpen ? "hidden" : "flex"
			} h-footer-height bg-slate-200 w-full justify-center items-center mt-auto`}
		>
			<span>Gesti 2023</span>
		</footer>
	);
}
