import * as agendash from 'agendash';
import { Router } from 'express';
import * as basicAuth from 'express-basic-auth';
import { Container } from 'typedi';
import { config } from '../../config';

export default (app: Router) => {

  const agendaInstance = Container.get('agendaInstance');

  app.use('/dash',
    basicAuth({
      users: {
        [config.agendash.user]: config.agendash.password,
      },
      challenge: true,
    }),
    agendash(agendaInstance)
  )
}
