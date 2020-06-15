import React from "react";
import { Grid as G } from "@material-ui/core";

export const Grid = (props) => <G container {...props} />;
export const Item = (props) => <G xs={6} item {...props} />;
