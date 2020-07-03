import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefaList = () => {
  const classes = useStyles();

  const [tarefas] = useState(mockData);

  return (
    <div className={classes.root}>
      <TarefasToolbar />
      <div className={classes.content}>
        <TarefasTable tarefas={tarefas} />
      </div>
    </div>
  );
};

export default TarefaList;
