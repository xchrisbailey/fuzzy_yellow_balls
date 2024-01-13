import { f as fail, r as redirect } from "../../chunks/index.js";
import { a as auth } from "../../chunks/auth.js";
const actions = {
  logout: async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session)
      return fail(401);
    await auth.invalidateSession(session.sessionId);
    locals.auth.setSession(null);
    throw redirect(302, "/login");
  }
};
export {
  actions
};
