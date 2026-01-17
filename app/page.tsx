import Image from "next/image";
import { redirect } from "next/navigation";

export default async function TempoDashboard() {
  redirect("/about-tempo");

  return <main></main>;
}
