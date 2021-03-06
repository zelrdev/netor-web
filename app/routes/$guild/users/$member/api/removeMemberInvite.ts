import type { ActionFunction } from "@remix-run/node";
import { validateSessionURI } from "~/models/dbGuild.server";
import { removeDBGuildMemberInvite } from "~/models/dbGuildMember.server";
import { getSession } from "~/modules/auth/sessions.server";
import i18n from "~/i18next.server";
import { error } from "~/lib/error";

export const action: ActionFunction = async ({ request, params }) => {
  let t = await i18n.getFixedT(request);

  const session = await getSession(request.headers.get("Cookie"));
  const uri = session.get("uuid");

  error(params.guild, `params.guild is required`, 400, true);
  error(uri, `session is required`, 400, true);

  const data = await request.formData();

  const validate = await validateSessionURI(params.guild, uri, true);
  error(validate, t("errors.validateDBGuildFail"), 401, true);

  const id = data.get("invite_id")?.toString();

  error(id, "invite_id is required", 400, true);

  await removeDBGuildMemberInvite(id, true);
  return null;
};
