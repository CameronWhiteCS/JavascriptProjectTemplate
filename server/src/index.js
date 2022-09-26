// @ts-nocheck

import config from '~/config';
import express from 'express';
import userRouter from '~/routers/v1/userRouter';
import sequelize from '~/models/sequelizeInstance';

(async () => {

    await sequelize.sync({force: true});

    const PORT = config.expressPort;
    
    const app = express();
    
    app.use('/users', userRouter);
    
    app.listen(PORT, () => console.log(`ExpressJS application is listening on ${PORT} and now accepting requests.`));

})();


