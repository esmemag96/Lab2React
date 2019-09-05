import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCellComponent from "./TableCellComponent.js";

class TableRowComponent extends React.Component {
  render() {
    let cellsRow = [];
    this.props.data.forEach(element => {
        cellsRow.push(<TableCellComponent data={element} />);
    });

    console.log('cellsRow = ' , cellsRow);

    return <TableRow>{cellsRow}</TableRow>;
  }
}

export default TableRowComponent;
