import app from './src/app';
import { sequelize } from './src/models';

const PORT = process.env.PORT || 5000;

import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV ;

app.listen(PORT, () => {
  sequelize.sync()
        .then(() => {
            console.log('Modelo sincronizado com o DB');
            console.log(`Servidor pronto na porta ${PORT}`);
        })
        .catch((err) => {
            console.error('Erro ao sincronizar o modelo com o DB: ', env);
        });

});
