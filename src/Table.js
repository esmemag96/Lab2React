import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, p1, p2, final) {
  return { name, p1, p2, final };
}

const rows = [
  createData('Desarrollo Web', 80, 80, 80),
  createData('Ciudadanía', 90, 90, 90),
  createData('Bases de datos', 70, 85, 84),
  createData('Ética', 95, 95, 95),
  createData('Ingeniería de Software', 90, 80, 95),
  createData('Lenguajes de programación', 85, 82, 80),
  createData('Sistemas Inteligentes', 90, 85, 91),
];

var total=0;
var cont=0;
for (var i = 0; i < rows.length; i++) {
   total += rows[i].p1 + rows[i].p2 +rows[i].final;
   cont +=3;
}
var promedio = Math.round(total/cont *10)/10;

class Cell extends React.Component {  
    render() {
      var rowStyle = {
            height: 150,
            backgroundColor:this.props.color
      };
      return(
        <div style={rowStyle}>
            <TableCell align="right">{this.props.data}</TableCell>
        </div>
      );
    }
}
class Row extends React.Component {  
    render() {
      var rowStyle = {
            height: 150,
            backgroundColor:this.props.color
      };
      return(
        <TableRow>
            <Cell data="Hola Argi"/>
        </TableRow>
      );
    }
}
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Entidad</TableCell>
            <TableCell align="right">2010</TableCell>
            <TableCell align="right">2011</TableCell>
            <TableCell align="right">2012</TableCell>
            <TableCell align="right">2013</TableCell>
            <TableCell align="right">2014</TableCell>
            <TableCell align="right">2015</TableCell>
            <TableCell align="right">2016</TableCell>
            <TableCell align="right">2017</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.p1}</TableCell>
              <TableCell align="right">{row.p2}</TableCell>
              <TableCell align="right">{row.final}</TableCell>
            </TableRow>
          ))} */}
          <Row/>
        </TableBody>
      </Table>
    </Paper>
  );
}