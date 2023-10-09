import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { MdPlayArrow } from "react-icons/md";

export default function Dashboard() {
	return (
		<main className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-full gap-10 pb-10">
			<Card className="col-span-2 sm:col-span-1 md:col-span-2 h-72 min-h-fit hover:shadow-lg">
				<CardHeader>
					<CardTitle className="text-md md:text-xl lg:text-2xl">
						Pacientes Activos
					</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Acceder</p>
					<MdPlayArrow />
				</CardFooter>
			</Card>
			<Card className="col-span-2 sm:col-span-1 md:col-span-2 h-72 min-h-fit hover:shadow-lg">
				<CardHeader>
					<CardTitle className="text-md md:text-xl lg:text-2xl">
						Total de citas del mes
					</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Acceder</p>
					<MdPlayArrow />
				</CardFooter>
			</Card>
			<Card className="col-span-2 sm:col-span-1 md:col-span-2 h-72 min-h-fit hover:shadow-lg">
				<CardHeader>
					<CardTitle className="text-md md:text-xl lg:text-2xl">
						Trabajadores actuales
					</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Acceder</p>
					<MdPlayArrow />
				</CardFooter>
			</Card>
			<Card className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-3 h-72 min-h-fit hover:shadow-lg">
				<CardHeader>
					<CardTitle className="text-md md:text-xl lg:text-2xl">
						Citas próximas
					</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Acceder</p>
					<MdPlayArrow />
				</CardFooter>
			</Card>
			<Card className="col-span-2 md:col-span-4 lg:col-span-3 h-72 min-h-fit hover:shadow-lg">
				<CardHeader>
					<CardTitle className="text-md md:text-xl lg:text-2xl">
						Ingresos del mes
					</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter>
					<p>Acceder</p>
					<MdPlayArrow />
				</CardFooter>
			</Card>
		</main>
	);
}
