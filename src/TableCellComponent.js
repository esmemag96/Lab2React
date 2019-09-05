import React from "react";
import TableCell from '@material-ui/core/TableCell';

class TableCellComponent extends React.Component {
  render() {
    return (
        <TableCell> {this.props.data} </TableCell>
    );
  }
}

export default TableCellComponent;
