"use client";

import Navbar from "@/components/Navbar";
import { appContext } from "@/context/AppContext";
import { useContext } from "react";

type Props = {
	children: React.ReactNode;
};

export default function layout({ children }: Props) {
	const { isNavOpen } = useContext(appContext);

	return (
		<>
			<Navbar />

			{!isNavOpen && children}
		</>
	);
}
