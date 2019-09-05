import React from "react";
import TableCell from '@material-ui/core/TableCell';

class TableCellComponent extends React.Component {
  render() {

    var colourStrength = this.props.data.replace(/\,/g,'')
    colourStrength = Number(colourStrength)
    colourStrength = 255 - (colourStrength/100000)*255;   //Divide the data value by 100,000 then multiply by 255 to get an 8 bit value for the red
        console.log(colourStrength);
    if(colourStrength > 255) {colourStrength = 255}   //100,000 is the cap value.  Anything above is pure red
    if(colourStrength > 0){   //Poor man's NaN
      var colour = {backgroundColor: "rgb(255, " + colourStrength + "," + colourStrength+ ")"};
    }
    return (
      <TableCell style={colour}> {this.props.data} </TableCell>
    );
  }
}

export default TableCellComponent;
