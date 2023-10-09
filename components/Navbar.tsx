"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { appContext } from "@/context/AppContext";

export default function Navbar() {
	const { isNavOpen, setIsNavOpen } = React.useContext(appContext);

	return (
		<div className="relative w-full">
			<NavigationMenu
				className={`justify-center items-center flex w-full max-w-none ${
					isNavOpen ? "h-screen" : "h-28"
				} lg:h-28 flex-none`}
			>
				<div className="lg:hidden h-full">
					<button
						onClick={() => setIsNavOpen(!isNavOpen)}
						type="button"
						className="z-30 hover:scale-105 absolute top-[3.5rem] -translate-y-1/2 transition-all left-[2rem] w-10 h-10 flex justify-center items-center"
					>
						| | |
					</button>
					<div className="absolute top-[3.5rem] -translate-y-1/2 transition-all right-[2rem] w-10 h-10 flex justify-center items-center">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Avatar className="mx-4">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>Usuario</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="cursor-pointer">
									Perfil
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									Seguridad
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									Información
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<Link href="/">
									<DropdownMenuItem className="text-red-500 cursor-pointer">
										Cerrar Sesión
									</DropdownMenuItem>
								</Link>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
				<NavigationMenuList
					className={`${
						isNavOpen ? "flex" : "hidden"
					} lg:flex flex-col lg:flex-row`}
				>
					<NavigationMenuItem>
						<Link href="/dashboard" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Tablero
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/patients" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Pacientes
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/calendar" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Calendario
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/appointments" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Citas
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className={`${isNavOpen ? "hidden" : "flex"}`}>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Avatar className="mx-4">
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>Usuario</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="cursor-pointer">
									Perfil
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									Seguridad
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									Información
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<Link href="/">
									<DropdownMenuItem className="text-red-500 cursor-pointer">
										Cerrar Sesión
									</DropdownMenuItem>
								</Link>
							</DropdownMenuContent>
						</DropdownMenu>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
