import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/prisma";

import ConsumpionMethodOption from "./consumpion-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div>
        <div className="space-y-2 pt-24 text-center">
          <h3 className="text-2xl font-semibold">Seja bem vindo!</h3>
          <p className="opacity-55">
            Opte pela forma que mais lhe agrada para desfrutar da sua refeição.
            Estamos aqui para proporcionar praticidade e sabor em cada aspecto!
          </p>
        </div>
        <div className="grid grid-cols-2 pt-14">
          <ConsumpionMethodOption
            buttonText="Para comer aqui"
            imageAlt="comer aqui"
            imageUrl="/dine-in.svg"
          />
          <ConsumpionMethodOption
            buttonText="Para levar"
            imageAlt="para levar"
            imageUrl="/takeaway.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
