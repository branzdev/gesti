"use client";

import { Context } from "@/app/types/types";
import { createContext, useMemo, useState } from "react";

type Props = {
	children: React.ReactNode;
};

export const appContext = createContext<Context>({ isNavOpen: false });

export default function AppContext({ children }: Props) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const value = useMemo(() => ({ isNavOpen, setIsNavOpen }), [isNavOpen]);

	return <appContext.Provider value={value}>{children}</appContext.Provider>;
}
