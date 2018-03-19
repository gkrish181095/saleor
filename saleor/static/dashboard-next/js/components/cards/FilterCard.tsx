import Button from "material-ui/Button";
import Card, { CardContent, CardActions, CardHeader } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Cancel from "material-ui-icons/Cancel";
import { withStyles } from "material-ui/styles";
import * as React from "react";

import i18n from "../../i18n";

const decorate = withStyles(theme => ({
  filterCardActions: {
    flexDirection: "row-reverse" as "row-reverse"
  }
}));

export interface FilterCardProps {
  handleClear();
}

const FilterCard = decorate<FilterCardProps>(props => {
  const { children, classes, handleClear } = props;
  return (
    <Card>
      <form>
        <CardHeader
          action={
            <Button onClick={handleClear}>
              {i18n.t("Clear", { context: "label" })}
            </Button>
          }
          title={i18n.t("Filters")}
        />
        <CardContent>{children}</CardContent>
      </form>
    </Card>
  );
});

export default FilterCard;
