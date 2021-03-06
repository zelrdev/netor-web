import { useParams, useNavigate, useLocation } from "@remix-run/react";
import { safeRedirect } from "~/lib/safeRedirect";
import { useAPI } from "~/shared-hooks/use-api";

export const useSwitchUser = (switchUser: boolean) => {
  const params = useParams();
  const navigate = useNavigate();
  const request = useAPI(params);
  const { search } = useLocation();

  const urlParams = new URLSearchParams(search);
  let formData = new FormData();
  formData.append("switch", switchUser ? "yes" : "no");
  request("switchUser", formData);
  navigate(safeRedirect(urlParams.get("url") || `/${params.guild}/apps`));
};
