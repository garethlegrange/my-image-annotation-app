import { permanentRedirect } from "next/navigation";

export default function Home() {
  // Redirect to the dashboard page for demonstration purposes
  //  This could be a login page etc.
  return permanentRedirect("/images");
}
