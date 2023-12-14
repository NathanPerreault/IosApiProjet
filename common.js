
import { sequelize } from '../config/config.js';

const genererCodeId = async (prefixe) => {
  const result = await sequelize.query('SELECT nombre FROM nombreLivre', { type: sequelize.QueryTypes.SELECT });
  const nombre = result[0].nombre + 1;

  let code;
  if (nombre < 10) code = `${prefixe}-0000${nombre}`;
  else if (nombre < 100) code = `${prefixe}-000${nombre}`;
  else if (nombre < 1000) code = `${prefixe}-00${nombre}`;
  else if (nombre < 10000) code = `${prefixe}-0${nombre}`;
  else code = `${prefixe}-${nombre}`;

  return code;
};

export { genererCodeId };
