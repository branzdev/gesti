import { Metadata } from "next";
import Image from "next/image";

import UserAuthForm from "@/components/UserAuthForm";

export const metadata: Metadata = {
	title: "Authentication",
	description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
	return (
		<div className="container relative h-[calc(100vh-56px)] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<div className="relative hidden h-full flex-col p-10 dark:border-r lg:flex justify-center items-center gap-y-20">
				<Image
					src="/undraw-medicine.svg"
					width={1000}
					height={1000}
					alt="Mac"
					className="object-cover object-center w-2/3 h-auto"
				/>
			</div>
			<div className="lg:p-8 bg-muted h-full flex flex-col justify-center">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<p className="text-2xl font-semibold tracking-tight">
							Iniciar sesión
						</p>
						<p className="text-sm text-muted-foreground">
							Ingrese su correo y contraseña
						</p>
					</div>
					<UserAuthForm />
					<p className="px-8 text-center text-sm text-muted-foreground">
						El acceso a la plataforma es restringido y cualquier acceso no
						permitido podría tener consecuencias legales.
					</p>
				</div>
			</div>
		</div>
	);
}
