import compose from "compose-function";
import { WithAuth } from "./with-auth";
import { withRouter } from "./with-router";

export const withProviders = compose(WithAuth, withRouter);