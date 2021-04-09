const mysql = require("mysql");

const con = mysql.createConnection({
    host: 'mysql743.umbler.com',
    port: 41890,
    user: 'smarkioteste',
    password: 'SsoP|2mo-]2',
    database: 'smarkoteste'
});

con.connect((err) => {
    if (err) {
        console.log("Erro na conexão com Banco de Dados " + err);
        return;
    }
    console.log("Conexão estabelecida");
});


con.query('SELECT * FROM comentarios', (err, rows) => {
    if (err) throw err
    console.log('Comentário:', rows, '\n');
})