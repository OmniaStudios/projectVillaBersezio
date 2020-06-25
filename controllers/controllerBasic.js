/* Definizione delle funzioni disponibili per il lato user dell'applicazione */
exports.get_home = (req, res) => {
    /* Impostazione dello stato HTTP success e rendering della pagina home (home.ejs) */
    res.status(200).render('index');
  };

exports.get_AdminLogin = (req, res) =>{
    res.status(200).render('adminLogin');
};

exports.post_AdminLogin = (req, res) =>{

  console.log(req.body.login);
  //console.log(req.body.password);
  //  bcrypt.compare(req.body.login)
  if(req.body.login[0] == 'admin' && req.body.login[1] == 'admin'){
    console.log('loggato');
  }else{
    console.log('errato');
  }
};
