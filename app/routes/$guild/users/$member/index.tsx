import type { LoaderFunction } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";

export const loader: LoaderFunction = async ({ params }) => {
  return redirect(
    "/" + params.guild! + "/users/" + params.member + "/overview"
  );
};
