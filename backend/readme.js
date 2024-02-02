// если нужно положить данные в БД
const createProduct = async ({ title, img, description }) => {
  const { rows } = await pool.query(`
    INSERT INTO buildateam.products (title, img, description)
    VALUES ($1, $2, $3)
  `, [title, img, description]);
  return rows;
}

// если считать
const readProducts = async () => {
  const { rows } = await pool.query(`
    SELECT * FROM buildateam.products
    LIMIT 20
  `);
  return rows;
}

// создать схему
// CREATE SCHEMA buildateam AUTHORIZATION postgres;

// создать таблицу
// CREATE TABLE buildateam.products (
//   id SERIAL PRIMARY KEY,
//   title varchar(25),
//   img varchar(25),
//   description varchar(255),
// );

// создать пользователя
// DO $$
// DECLARE
//   username text:= 'buildateam';
//   password text:= 'buildateam';
//   database_name text:= 'buildateam';
//   schema_name text:= 'buildateam';
// BEGIN
// --Создание пользователя
//   EXECUTE format('CREATE USER %I WITH PASSWORD %L', username, password);
// --Назначение привилегий на базу данных
//   EXECUTE format('GRANT CONNECT ON DATABASE %I TO %I', database_name, username);
// --Назначение привилегий на схему
//   EXECUTE format('GRANT USAGE ON SCHEMA %I TO %I', schema_name, username);
// --Назначение привилегий на все таблицы в схеме
//   EXECUTE format('GRANT SELECT, INSERT, DELETE, UPDATE ON ALL TABLES IN SCHEMA %I TO %I', schema_name, username);
// --Даём возмонжость использовать SEQUENCES
//   EXECUTE format('GRANT USAGE ON ALL SEQUENCES IN SCHEMA %I TO %I', schema_name, username);
// END;
// $$;

// выдать права на таблицу
// GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE buildateam.products TO buildateam;
